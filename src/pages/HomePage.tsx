import './HomePage.css';
import { Table } from '../components/Table';
import { Sidebar } from '../components/Sidebar';
import { Header } from '../components/Header';
import { Stats } from '../components/Stats';
import { Search, Plus } from 'lucide-react';

export function HomePage() {
  return (
    <div className="homepage">
      <Header />
      <div className="content">
        <Sidebar />
        <div className="maincontent">
          <Stats />
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
