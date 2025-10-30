import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { db } from '../firebaseConfig';
import { collection, addDoc, doc, updateDoc, query, where, getDocs } from 'firebase/firestore';
import Alert from '../components/Alert';
import './ProfilePage.css';

const ProfilePage = () => {
  const { currentUser, logout } = useAuth();
  const [showForm, setShowForm] = useState(true);
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    email: '',
    phoneNumber: '',
    gender: 'male',
    imageUrl: '', // Added for profile image URL
    momoNumber: '', // New field
    creditCardNumber: '' // New field
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [editingField, setEditingField] = useState(null);
  const [tempValue, setTempValue] = useState('');
  const [profileDocId, setProfileDocId] = useState(null);
  
  // Image upload states
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // Cloudinary configuration (use Vite env variables)
  const CLOUD_NAME = import.meta.env.VITE_CLOUD_NAME || "dlrxomdfh";
  const UPLOAD_PRESET = import.meta.env.VITE_UPLOAD_PRESET || "Shop-preset";

  // Fetch user profile data if it exists
  useEffect(() => {
    const fetchUserProfile = async () => {
      if (!currentUser) return;
      
      try {
        const q = query(collection(db, 'users'), where('uid', '==', currentUser.uid));
        const querySnapshot = await getDocs(q);
        
        if (!querySnapshot.empty) {
          const doc = querySnapshot.docs[0];
          const data = doc.data();
          setFormData({
            fullName: data.fullName || '',
            age: data.age || '',
            email: data.email || '',
            phoneNumber: data.phoneNumber || '',
            gender: data.gender || 'male',
            imageUrl: data.imageUrl || '', // Get existing image URL
            momoNumber: data.momoNumber || '', // Get existing MoMo number
            creditCardNumber: data.creditCardNumber || '' // Get existing credit card number
          });
          setProfileDocId(doc.id);
          setShowForm(false);
        }
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchUserProfile();
  }, [currentUser]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // For numeric fields, ensure only numbers are entered
    if (name === 'momoNumber' || name === 'creditCardNumber') {
      // Only allow numbers
      const numericValue = value.replace(/[^0-9]/g, '');
      setFormData(prev => ({
        ...prev,
        [name]: numericValue
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (!["image/jpeg", "image/png", "image/webp"].includes(file.type)) {
      setError("Only JPG/PNG/WebP images are allowed");
      return;
    }
    setImage(file);
    setPreview(URL.createObjectURL(file));
    setError("");
  };

  const uploadImageToCloudinary = async () => {
    if (!image) return null;
    
    try {
      const fd = new FormData();
      fd.append("file", image);
      fd.append("upload_preset", UPLOAD_PRESET);

      const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, {
        method: "POST",
        body: fd,
      });
      
      const data = await res.json();
      if (!data.secure_url) throw new Error("Image upload failed");
      
      return data.secure_url;
    } catch (err) {
      console.error(err);
      setError(err.message || "Failed to upload image");
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate all required fields including the new ones
    if (!formData.fullName || !formData.age || !formData.email || !formData.phoneNumber || 
        !formData.momoNumber || !formData.creditCardNumber) {
      setError("Please fill all required fields");
      return;
    }
    
    // Validate that MoMo and Credit Card numbers are numeric
    if (!/^\d+$/.test(formData.momoNumber)) {
      setError("MoMo Number must contain only numbers");
      return;
    }
    
    if (!/^\d+$/.test(formData.creditCardNumber)) {
      setError("Credit Card Number must contain only numbers");
      return;
    }

    setLoading(true);
    setError("");
    setSuccess("");
    
    try {
      // Upload image if selected
      let imageUrl = formData.imageUrl; // Keep existing URL if no new image
      if (image) {
        const uploadedUrl = await uploadImageToCloudinary();
        if (!uploadedUrl) {
          setLoading(false);
          return;
        }
        imageUrl = uploadedUrl;
      }
      
      // Prepare data with image URL
      const profileData = {
        ...formData,
        imageUrl,
        updatedAt: new Date()
      };
      
      if (profileDocId) {
        // Update existing document
        await updateDoc(doc(db, 'users', profileDocId), profileData);
      } else {
        // Add new document
        const docRef = await addDoc(collection(db, 'users'), {
          ...profileData,
          uid: currentUser.uid,
          createdAt: new Date()
        });
        setProfileDocId(docRef.id);
      }
      
      // Update local form data with new image URL
      setFormData(prev => ({ ...prev, imageUrl }));
      
      // Reset image states
      setImage(null);
      setPreview(null);
      
      setSuccess("Profile updated successfully!");
      
      // Show profile page after successful submission
      setShowForm(false);
    } catch (error) {
      console.error('Error saving profile data:', error);
      setError('Failed to save profile. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const startEditing = (field, currentValue) => {
    setEditingField(field);
    setTempValue(currentValue);
  };

  const saveEdit = async () => {
    if (!editingField || !profileDocId) return;
    
    // Validate numeric fields
    if ((editingField === 'momoNumber' || editingField === 'creditCardNumber') && 
        tempValue && !/^\d+$/.test(tempValue)) {
      setError(`${editingField === 'momoNumber' ? 'MoMo Number' : 'Credit Card Number'} must contain only numbers`);
      return;
    }
    
    try {
      await updateDoc(doc(db, 'users', profileDocId), {
        [editingField]: tempValue,
        updatedAt: new Date()
      });
      
      setFormData(prev => ({
        ...prev,
        [editingField]: tempValue
      }));
      
      setEditingField(null);
      setTempValue('');
      setSuccess("Field updated successfully!");
    } catch (error) {
      console.error('Error updating field:', error);
      setError('Failed to update. Please try again.');
    }
  };

  const cancelEdit = () => {
    setEditingField(null);
    setTempValue('');
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Failed to logout', error);
    }
  };

  // Function to handle profile image update directly from the profile view
  const handleProfileImageUpdate = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    if (!["image/jpeg", "image/png", "image/webp"].includes(file.type)) {
      setError("Only JPG/PNG/WebP images are allowed");
      return;
    }
    
    setLoading(true);
    setError("");
    
    try {
      const fd = new FormData();
      fd.append("file", file);
      fd.append("upload_preset", UPLOAD_PRESET);

      const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, {
        method: "POST",
        body: fd,
      });
      
      const data = await res.json();
      if (!data.secure_url) throw new Error("Image upload failed");
      
      // Update Firestore
      await updateDoc(doc(db, 'users', profileDocId), {
        imageUrl: data.secure_url,
        updatedAt: new Date()
      });
      
      // Update local state
      setFormData(prev => ({ ...prev, imageUrl: data.secure_url }));
      setSuccess("Profile image updated successfully!");
    } catch (err) {
      console.error(err);
      setError(err.message || "Failed to upload image");
    } finally {
      setLoading(false);
      e.target.value = '';
    }
  };

  if (showForm) {
    return (
      <div className="whatsapp-container ">
        
        <div className="main-content">
          <div className="card">
            <div className="card-header">
              <h1 className="card-title">Complete Your Profile</h1>
            </div>
            
            <div className="card-body">
              {error && (
                <div className="alert alert-error">
                  {error}
                </div>
              )}
              {success && (
                <div className="alert alert-success">
                  <span>{success}</span>
                  <span className="alert-success-icon">✓✓</span>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="profile-form">
                {/* Profile Image Upload */}
                <div className="profile-image-container">
                  <div className="profile-image">
                    {preview ? (
                      <img src={preview} alt="Preview" className="profile-image-img" />
                    ) : formData.imageUrl ? (
                      <img src={formData.imageUrl} alt="Profile" className="profile-image-img" />
                    ) : (
                      <span className="profile-image-initial">
                        {formData.fullName?.charAt(0).toUpperCase() || 'U'}
                      </span>
                    )}
                  </div>
                  <label className="image-upload-button">
                    <span className="image-upload-icon">📷</span>
                    <span>{image ? "Change Photo" : "Upload Photo"}</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                  </label>
                </div>
                
                <div className="form-group">
                  <label className="form-label" htmlFor="fullName">
                    Full Name
                  </label>
                  <input
                    className="form-input"
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label" htmlFor="age">
                    Age
                  </label>
                  <input
                    className="form-input"
                    id="age"
                    name="age"
                    type="number"
                    placeholder="Enter your age"
                    value={formData.age}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="form-input"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label" htmlFor="phoneNumber">
                    Phone Number
                  </label>
                  <input
                    className="form-input"
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                {/* New MoMo Number field */}
                <div className="form-group">
                  <label className="form-label" htmlFor="momoNumber">
                    MoMo Number
                  </label>
                  <input
                    className="form-input"
                    id="momoNumber"
                    name="momoNumber"
                    type="text"
                    placeholder="Enter your MoMo number"
                    value={formData.momoNumber}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                {/* New Credit Card Number field */}
                <div className="form-group">
                  <label className="form-label" htmlFor="creditCardNumber">
                    Credit Card Number
                  </label>
                  <input
                    className="form-input"
                    id="creditCardNumber"
                    name="creditCardNumber"
                    type="text"
                    placeholder="Enter your credit card number"
                    value={formData.creditCardNumber}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label">
                    Gender
                  </label>
                  <div className="radio-group">
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={formData.gender === 'male'}
                        onChange={handleInputChange}
                        className="radio-input"
                      />
                      <span className="radio-label-text">Male</span>
                    </label>
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={formData.gender === 'female'}
                        onChange={handleInputChange}
                        className="radio-input"
                      />
                      <span className="radio-label-text">Female</span>
                    </label>
                  </div>
                </div>
                
                <div className="form-actions">
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn btn-primary"
                  >
                    {loading ? (
                      <>
                        <div className="loading-spinner">
                          <div className="loading-spinner-inner"></div>
                          <div className="loading-spinner-outer"></div>
                        </div>
                        Saving...
                      </>
                    ) : (
                      <>
                        <span className="button-icon">✓</span>
                        Save Profile
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="whatsapp-container">
      {/* <Header /> */}
      
      <div className="main-content">
        <div className="card">
          <div className="card-header">
            <h1 className="card-title">Your Profile</h1>
          </div>
          
          <div className="card-body">
            {error && <Alert type="error" message={error} />}
            {success && <Alert type="success" message={success} />}
            
            {/* Tailwind CSS Test - Added here to verify Tailwind is working */}
            <div className="bg-blue-500 text-white p-4 rounded-lg mb-4">
              <h3 className="font-bold text-lg">Tailwind CSS Test</h3>
              <p>If you see this blue box with white text, Tailwind CSS is working!</p>
              <div className="mt-2 flex gap-2">
                <span className="bg-white text-blue-500 px-2 py-1 rounded text-sm">Button 1</span>
                <span className="bg-green-500 px-2 py-1 rounded text-sm">Button 2</span>
              </div>
            </div>
            
            <div className="profile-header">
              <div className="profile-avatar">
                {formData.imageUrl ? (
                  <img src={formData.imageUrl} alt="Profile" className="profile-avatar-img" />
                ) : (
                  formData.fullName?.charAt(0).toUpperCase() || 'U'
                )}
                <button
                  onClick={() => document.getElementById('profile-image-input').click()}
                  className="edit-avatar-button"
                  disabled={loading}
                >
                  {loading ? (
                    <div className="loading-spinner">
                      <div className="loading-spinner-inner"></div>
                      <div className="loading-spinner-outer"></div>
                    </div>
                  ) : (
                    <span>✏️</span>
                  )}
                </button>
                <input
                  id="profile-image-input"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleProfileImageUpdate}
                />
              </div>
              <h2 className="profile-name">{formData.fullName || 'User'}</h2>
              <p className="profile-id">User ID: {currentUser?.uid}</p>
            </div>

            <div className="info-section">
              <h3 className="info-title">Account Information</h3>
              <div className="info-list">
                <div className="info-item">
                  <div className="info-row">
                    <span className="info-label ">Full Name:</span>
                    <div className="info-value-container">
                      {editingField === 'fullName' ? (
                        <div className="edit-form">
                          <input
                            type="text"
                            value={tempValue}
                            onChange={(e) => setTempValue(e.target.value)}
                            className="edit-input"
                          />
                          <button onClick={saveEdit} className="edit-save-button">✓</button>
                          <button onClick={cancelEdit} className="edit-cancel-button">✕</button>
                        </div>
                      ) : (
                        <>
                          <span className="info-value">{formData.fullName}</span>
                          <button 
                            onClick={() => startEditing('fullName', formData.fullName)}
                            className="edit-button"
                          >
                            ✏️
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                  
                </div>
                
                <div className="info-item">
                  <div className="info-row">
                    <span className="info-label">Age:</span>
                    <div className="info-value-container">
                      {editingField === 'age' ? (
                        <div className="edit-form">
                          <input
                            type="number"
                            value={tempValue}
                            onChange={(e) => setTempValue(e.target.value)}
                            className="edit-input"
                          />
                          <button onClick={saveEdit} className="edit-save-button">✓</button>
                          <button onClick={cancelEdit} className="edit-cancel-button">✕</button>
                        </div>
                      ) : (
                        <>
                          <span className="info-value">{formData.age}</span>
                          <button 
                            onClick={() => startEditing('age', formData.age)}
                            className="edit-button"
                          >
                            ✏️
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-row">
                    <span className="info-label">Email:</span>
                    <div className="info-value-container">
                      {editingField === 'email' ? (
                        <div className="edit-form">
                          <input
                            type="email"
                            value={tempValue}
                            onChange={(e) => setTempValue(e.target.value)}
                            className="edit-input"
                          />
                          <button onClick={saveEdit} className="edit-save-button">✓</button>
                          <button onClick={cancelEdit} className="edit-cancel-button">✕</button>
                        </div>
                      ) : (
                        <>
                          <span className="info-value">{formData.email}</span>
                          <button 
                            onClick={() => startEditing('email', formData.email)}
                            className="edit-button"
                          >
                            ✏️
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-row">
                    <span className="info-label">Phone Number:</span>
                    <div className="info-value-container">
                      {editingField === 'phoneNumber' ? (
                        <div className="edit-form">
                          <input
                            type="tel"
                            value={tempValue}
                            onChange={(e) => setTempValue(e.target.value)}
                            className="edit-input"
                          />
                          <button onClick={saveEdit} className="edit-save-button">✓</button>
                          <button onClick={cancelEdit} className="edit-cancel-button">✕</button>
                        </div>
                      ) : (
                        <>
                          <span className="info-value">{formData.phoneNumber}</span>
                          <button 
                            onClick={() => startEditing('phoneNumber', formData.phoneNumber)}
                            className="edit-button"
                          >
                            ✏️
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* New MoMo Number field in profile view */}
                <div className="info-item">
                  <div className="info-row">
                    <span className="info-label">MoMo Number:</span>
                    <div className="info-value-container">
                      {editingField === 'momoNumber' ? (
                        <div className="edit-form">
                          <input
                            type="text"
                            value={tempValue}
                            onChange={(e) => {
                              // Only allow numbers
                              const numericValue = e.target.value.replace(/[^0-9]/g, '');
                              setTempValue(numericValue);
                            }}
                            className="edit-input"
                          />
                          <button onClick={saveEdit} className="edit-save-button">✓</button>
                          <button onClick={cancelEdit} className="edit-cancel-button">✕</button>
                        </div>
                      ) : (
                        <>
                          <span className="info-value">{formData.momoNumber || 'N/A'}</span>
                          <button 
                            onClick={() => startEditing('momoNumber', formData.momoNumber)}
                            className="edit-button"
                          >
                            ✏️
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* New Credit Card Number field in profile view */}
                <div className="info-item">
                  <div className="info-row">
                    <span className="info-label">Credit Card Number:</span>
                    <div className="info-value-container">
                      {editingField === 'creditCardNumber' ? (
                        <div className="edit-form">
                          <input
                            type="text"
                            value={tempValue}
                            onChange={(e) => {
                              // Only allow numbers
                              const numericValue = e.target.value.replace(/[^0-9]/g, '');
                              setTempValue(numericValue);
                            }}
                            className="edit-input"
                          />
                          <button onClick={saveEdit} className="edit-save-button">✓</button>
                          <button onClick={cancelEdit} className="edit-cancel-button">✕</button>
                        </div>
                      ) : (
                        <>
                          <span className="info-value">
                            {formData.creditCardNumber 
                              ? '•••• •••• •••• ' + formData.creditCardNumber.slice(-4)
                              : 'N/A'
                            }
                          </span>
                          <button 
                            onClick={() => startEditing('creditCardNumber', formData.creditCardNumber)}
                            className="edit-button"
                          >
                            ✏️
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-row">
                    <span className="info-label">Gender:</span>
                    <div className="info-value-container">
                      {editingField === 'gender' ? (
                        <div className="edit-form">
                          <select
                            value={tempValue}
                            onChange={(e) => setTempValue(e.target.value)}
                            className="edit-input"
                          >
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                          </select>
                          <button onClick={saveEdit} className="edit-save-button">✓</button>
                          <button onClick={cancelEdit} className="edit-cancel-button">✕</button>
                        </div>
                      ) : (
                        <>
                          <span className="info-value capitalize">{formData.gender}</span>
                          <button 
                            onClick={() => startEditing('gender', formData.gender)}
                            className="edit-button"
                          >
                            ✏️
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="action-buttons">
              <button 
                onClick={() => setShowForm(true)}
                className="btn btn-secondary"
              >
                <span className="button-icon">✏️</span>
                Edit Full Profile
              </button>
              <button 
                onClick={handleLogout}
                className="btn btn-danger"
              >
                <span className="button-icon">🚪</span>
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;