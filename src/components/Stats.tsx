import './Stats.css';
import {
  Archive,
  Box,
  CircleCheckBig,
  Wrench,
  TriangleAlert,
} from 'lucide-react';

export function Stats() {
  return (
    <div className="stats">
      <div className="card">
        <div className="card-header">
          <div className="card-label">Total Assets</div>
          <Box className="card-icon" />
        </div>
        <div className="card-value">4</div>
      </div>
      <div className="card">
        <div className="card-header">
          <div className="card-label">Overdue</div>
          <TriangleAlert className="card-icon" />
        </div>
        <div className="card-value">1</div>
      </div>
      <div className="card">
        <div className="card-header">
          <div className="card-label">Active</div>
          <CircleCheckBig className="card-icon" />
        </div>
        <div className="card-value">2</div>
      </div>
      <div className="card">
        <div className="card-header">
          <div className="card-label">In Repair</div>
          <Wrench className="card-icon" />
        </div>
        <div className="card-value">1</div>
      </div>
      <div className="card">
        <div className="card-header">
          <div className="card-label">Retired</div>
          <Archive className="card-icon" />
        </div>
        <div className="card-value">0</div>
      </div>
    </div>
  );
}
