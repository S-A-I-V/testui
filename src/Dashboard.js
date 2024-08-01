import React from 'react';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="card devices">
        <h3>Devices</h3>
        <div className="device">Shuttle</div>
        <div className="device">Tunnel</div>
        <div className="device">Zippy</div>
      </div>
      <div className="card large unique-visitors">
        <h3>Server Analytics</h3>
        <p>Total Analytics</p>
      </div>
      <div className="card traffic-channels">
        <h3>Traffic Channels</h3>
        <p>IP responses</p>
        <p>Alerts</p>
        <p>Reboots Initiated</p>
      </div>
      <div className="card live-visitors">
        <h3>Live Servers</h3>
        <p>XYZ</p>
      </div>
      <div className="card bounce-rate">
        <h3>Error Rate</h3>
        <p></p>
      </div>
      <div className="card avg-visit-duration">
        <h3>Avg Active Duration</h3>
        <p>seconds</p>
      </div>
    </div>
  );
}

export default Dashboard;
