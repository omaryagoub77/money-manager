import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-hero">
        <h1 className="home-title">Welcome to Money Box</h1>
        <p className="home-sub">Select a page from the navigation above.</p>
      </div>

      <div className="cards-grid">
        <div className="card">
          <h2>Deposit Money</h2>
          <p>Submit your deposits and track your financial history.</p>
          <a href="/deposit">Deposit</a>
        </div>

        <div className="card">
          <h2>Cashout Requests</h2>
          <p>Request cashouts and track their status.</p>
          <a href="/cashout">Cashout</a>
        </div>

        <div className="card">
          <h2>Chat</h2>
          <p>Communicate with other users in real-time.</p>
          <a href="/chat">Chat</a>
        </div>

        <div className="card">
          <h2>Profile</h2>
          <p>Manage your account information and settings.</p>
          <a href="/profile">Profile</a>

        </div>
      </div>
    </div>
  )
}

export default Home