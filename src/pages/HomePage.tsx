import './HomePage.css';
import { Table } from '../components/Table';
import { Sidebar } from '../components/Sidebar';
import { logo } from '../assets';
import {
  Archive,
  Box,
  CircleCheckBig,
  Search,
  Wrench,
  Plus,
  TriangleAlert,
  ChevronDown,
} from 'lucide-react';

export function HomePage() {
  return (
    <div className="homepage">
      <div className="header">
        <a href="" className="logo-link">
          <img src={logo} alt="Company Logo" className="logo" />
        </a>
        <div className="divider" />
        <p className="header-name">All Departments</p>
        <div className="avatar">MM</div>
      </div>
      <div className="content">
        <Sidebar />
        <div className="maincontent">
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
                    <option value="overdue">Return Overdue</option>
                    <option value="overdue">To be Returned soon</option>
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
              <button className="primaryBtn">
                <Plus className="add-icon" />
                Add Device
              </button>
            </div>
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
}
