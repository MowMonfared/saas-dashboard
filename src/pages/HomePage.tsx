import './HomePage.css';
import { logo, plus, chevronDown } from '../assets';
import { Archive, Box, CircleCheckBig, Wrench } from 'lucide-react';

function MyComponent() {
  return (
    <div>
      <Plus />
      <ChevronDown />
    </div>
  );
}
//import { rowsData } from '../data/rows.js';
//import { PageContent } from '../components/PageContent.js';

export function HomePage() {
  return (
    <div className="homepage">
      {/* <Sidebar />
      <PageContent />
      */}
      <div className="header">
        <a href="" className="logo-link">
          <img src={logo} alt="Company Logo" className="logo" />
        </a>
        <div className="divider" />
        <p className="header-name">All Departments</p>
        <div className="avatar">MM</div>
      </div>
      <div className="content">
        <div className="sidebar">
          <div className="dep">
            <div className="dep-name"> Departments</div>
            <img src={chevronDown} className="dep-icon" />
          </div>
          <div className="dep-selected">
            <div className="dep-name">All Departments</div>
            <div className="dep-number">14</div>
          </div>
          <div className="dep">
            <div className="dep-name">Engineering</div>
            <div className="dep-number">5</div>
          </div>
          <div className="dep">
            <div className="dep-name">Design</div>
            <div className="dep-number">2</div>
          </div>
          <div className="dep">
            <div className="dep-name">Finance</div>
            <div className="dep-number">2</div>
          </div>
          <div className="dep">
            <div className="dep-name">HR</div>
            <div className="dep-number">2</div>
          </div>
          <button className="add-dep">
            <img src={plus} className="dep-icon" />
            Add Department
          </button>
          <div className="dep inventory">
            <div className="dep-name">Inventory</div>
            <div className="dep-number">5</div>
          </div>
        </div>
        <div className="maincontent">
          <div className="stats">
            <div className="card">
              <div className="card-header">
                <div className="card-label">Total Assets</div>
                <Box className="card-icon" />
              </div>
              <div className="card-value">16</div>
            </div>
            <div className="card">
              <div className="card-header">
                <div className="card-label">Active</div>
                <CircleCheckBig className="card-icon" />
              </div>
              <div className="card-value">12</div>
            </div>
            <div className="card">
              <div className="card-header">
                <div className="card-label">In Repair</div>
                <Wrench className="card-icon" />
              </div>
              <div className="card-value">3</div>
            </div>
            <div className="card">
              <div className="card-header">
                <div className="card-label">Retired</div>
                <Archive className="card-icon" />
              </div>
              <div className="card-value">1</div>
            </div>
          </div>
          <div className="tables">Filters & Table</div>
        </div>
      </div>
    </div>
  );
}
