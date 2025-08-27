import React from "react";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <header className="header">
        <h1>My Dashboard</h1>
        <p>Welcome! Here’s an overview of your app.</p>
      </header>

      <div className="grid">
        <div className="card">
          <h2>Card 1</h2>
          <p>Some content goes here.</p>
        </div>
        <div className="card">
          <h2>Card 2</h2>
          <p>Another piece of content.</p>
        </div>
        <div className="card">
          <h2>Card 3</h2>
          <p>And one more for good measure.</p>
        </div>
      </div>
    </div>
  );
}
