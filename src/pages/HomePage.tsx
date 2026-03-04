import { useState } from 'react';
import './HomePage.css';

export function HomePage() {
  const [count, setCount] = useState(0);
  return (
    <div className="header">
      <h1>IT Dashboard</h1>
      <p className="read-the-docs">
        Here are summary of the IT dashboard, including system status,
        performance metrics, and recent alerts. You can also navigate to
        different sections to view detailed information and manage your IT
        infrastructure.
      </p>
    </div>
  );
}
