import './HomePage.css';
import { logo, plus, chevronDown } from '../assets';
import {
  Archive,
  Box,
  CircleCheckBig,
  Search,
  Wrench,
  Plus,
} from 'lucide-react';

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
          <div className="tables">
            <div className="top-table">
              <div className="filters">
                <div className="search-bar">
                  <input
                    type="text"
                    placeholder="Search"
                    className="search-bar-inside"
                  />
                  <Search className="search-icon" />
                </div>
                <div className="dropdown">
                  <label for="status">Status</label>
                  <select id="status" name="status">
                    <option value="" disabled selected>
                      Select an Status
                    </option>
                    <option value="show-all">Show All</option>
                    <option value="active">Active</option>
                    <option value="in-repair">In Repair</option>
                    <option value="retired">Retired</option>
                  </select>
                </div>
                <div className="dropdown">
                  <label for="status">Type</label>
                  <select id="status" name="status">
                    <option value="" disabled selected>
                      Select a Type
                    </option>
                    <option value="show-all">Show All</option>
                    <option value="active">Lap Top</option>
                    <option value="in-repair">Mobile</option>
                    <option value="retired">Tablet</option>
                  </select>
                </div>
              </div>
              <button className="add-device">
                <Plus className="add-icon" />
                Add Device
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
