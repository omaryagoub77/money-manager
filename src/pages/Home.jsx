import React, { useState, useEffect, useRef } from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faWallet, faHandHoldingUsd, 
  faComments, faChartLine, faUserShield, faHeadset, 
  faArrowRight, faMapMarkerAlt, faPhone, faEnvelope,
  faStar
} from '@fortawesome/free-solid-svg-icons';
import { 
  faFacebookF, faTwitter, faInstagram, faLinkedinIn
} from '@fortawesome/free-brands-svg-icons';

const Hero = () => {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      // Removed header reference since we're not using a header
      const targetPosition = element.offsetTop;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="heroContent">
        <h1>Money Box — Fast, Secure & Effortless</h1>
        <p>Handle deposits, manage cashouts, and stay connected with your community — all in one intuitive dashboard.</p>
        <button className="ctaButton" onClick={scrollToServices}>
          Try Now
        </button>
      </div>
    </section>
  );
};

const Services = () => {
  const serviceCardsRef = useRef([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    serviceCardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });
    
    return () => {
      serviceCardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  const services = [
    {
      icon: faWallet,
      title: "Secure Deposits",
      description: "Submit and track your deposits with our secure, encrypted system. Get instant confirmations and detailed transaction history."
    },
    {
      icon: faHandHoldingUsd,
      title: "Quick Cashouts",
      description: "Request and receive cashouts quickly with our streamlined process. Track your requests in real-time and get notified on approval."
    },
    {
      icon: faComments,
      title: "Community Chat",
      description: "Stay connected with your community through our modern chat interface. Share updates, ask questions, and get support instantly."
    },
    {
      icon: faChartLine,
      title: "Analytics Dashboard",
      description: "Visualize your financial data with our intuitive analytics dashboard. Track trends, monitor performance, and make informed decisions."
    },
    {
      icon: faUserShield,
      title: "Advanced Security",
      description: "Your data is protected with industry-leading security measures. We use encryption, multi-factor authentication, and regular security audits."
    },
    {
      icon: faHeadset,
      title: "24/7 Support",
      description: "Get help whenever you need it with our round-the-clock customer support. Our team is always ready to assist you with any questions."
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="sectionTitle">
          <h2>Our Services</h2>
          <p>Discover powerful features that make Money Box perfect financial platform for you</p>
        </div>
        <div className="servicesGrid">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="serviceCard" 
              ref={el => serviceCardsRef.current[index] = el}
            >
              <div className="serviceIcon">
                <FontAwesomeIcon icon={service.icon} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
          
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const stepsRef = useRef([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    stepsRef.current.forEach((step) => {
      if (step) observer.observe(step);
    });
    
    return () => {
      stepsRef.current.forEach((step) => {
        if (step) observer.unobserve(step);
      });
    };
  }, []);

  const steps = [
    {
      title: "Create Account",
      description: "Sign up for a free account in minutes. Just provide your basic information and verify your email to get started."
    },
    {
      title: "Set Up Profile",
      description: "Complete your profile with additional details to unlock all features. Customize your dashboard and notification preferences."
    },
    {
      title: "Make Transactions",
      description: "Start making deposits, requesting cashouts, and interacting with community. All transactions are secure and instant."
    },
    {
      title: "Track & Manage",
      description: "Monitor your financial activity with our analytics dashboard. Get insights, track trends, and make informed decisions."
    }
  ];

  return (
    <section id="how-it-works" className="howItWorks">
      <div className="container">
        <div className="sectionTitle">
          <h2>How It Works</h2>
          <p>Get started with Money Box in just a few simple steps</p>
        </div>
        <div className="stepsContainer">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="step" 
              ref={el => stepsRef.current[index] = el}
            >
              <div className="stepNumber">{index + 1}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonialsRef = useRef([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    testimonialsRef.current.forEach((testimonial) => {
      if (testimonial) observer.observe(testimonial);
    });
    
    return () => {
      testimonialsRef.current.forEach((testimonial) => {
        if (testimonial) observer.unobserve(testimonial);
      });
    };
  }, []);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Small Business Owner",
      avatar: "https://picsum.photos/seed/person1/100/100.jpg",
      content: "Money Box has completely transformed how I manage my finances. The interface is intuitive, and the cashout process is incredibly fast. I couldn't be happier with this platform!"
    },
    {
      name: "Michael Chen",
      role: "Freelance Developer",
      avatar: "https://picsum.photos/seed/person2/100/100.jpg",
      content: "I've tried several financial platforms, but Money Box stands out with its security features and excellent customer support. It's become an essential tool for my daily transactions."
    },
    {
      name: "Emily Rodriguez",
      role: "Digital Marketer",
      avatar: "https://picsum.photos/seed/person3/100/100.jpg",
      content: "The community feature is what sets Money Box apart. I love being able to connect with others, share insights, and get advice. It's more than just a financial platform; it's a community."
    }
  ];

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="sectionTitle">
          <h2>What Our Users Say</h2>
          <p>Join thousands of satisfied users who trust Money Box with their financial needs</p>
        </div>
        <div className="testimonialsContainer">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="testimonial" 
              ref={el => testimonialsRef.current[index] = el}
            >
              <div className="testimonialContent">
                <p>{testimonial.content}</p>
              </div>
              <div className="testimonialAuthor">
                <img src={testimonial.avatar} alt={testimonial.name} className="authorAvatar" />
                <div className="authorInfo">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
              <div className="testimonialRating">
                {[...Array(5)].map((_, i) => (
                  <FontAwesomeIcon key={i} icon={faStar} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footerContent">
          <div className="footerSection">
            <h3>About Money Box</h3>
            <p>Money Box is a modern financial platform designed to make managing your money simple, secure, and efficient. Join thousands of users who trust us with their financial needs.</p>
            <div className="socialLinks">
              <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            </div>
          </div>
          <div className="footerSection">
            <h3>Quick Links</h3>
            <ul className="footerLinks">
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
          <div className="footerSection">
            <h3>Services</h3>
            <ul className="footerLinks">
              <li><a href="#">Secure Deposits</a></li>
              <li><a href="#">Quick Cashouts</a></li>
              <li><a href="#">Community Chat</a></li>
              <li><a href="#">Analytics Dashboard</a></li>
              <li><a href="#">Advanced Security</a></li>
              <li><a href="#">24/7 Support</a></li>
            </ul>
          </div>
          <div className="footerSection">
            <h3>Contact Us</h3>
            <ul className="footerLinks">
              <li><FontAwesomeIcon icon={faMapMarkerAlt} /> rwanda kirihe mahama V13 - C15</li>
              <li><FontAwesomeIcon icon={faPhone} /> +250795774877</li>
              <li><FontAwesomeIcon icon={faEnvelope} /> omaryagoub77@gmail.com</li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; 2023 Money Box. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Services />
      <HowItWorks />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;