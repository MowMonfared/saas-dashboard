import './Table.css';
import { equipmentData } from '../data/equipmentData';
import { useState } from 'react';
import { Search, Plus } from 'lucide-react';

export function Table({ selectedDep, setSelectedDep }) {
  const [status, setStatus] = useState('');
  const [type, setType] = useState('');
  const [search, setSearch] = useState('');

  const filteredDevices = equipmentData.filter((equipment) => {
    // 1. Department filter
    const matchesDept =
      selectedDep === 'All Departments' || equipment.department === selectedDep;

    // 2. Status filter
    const matchesStatus = !status || equipment.status === status;

    // 3. Type filter
    const matchesType =
      !type || equipment.device.toLowerCase() === type.toLowerCase();

    // 4. Search filter (case-insensitive, across fields)
    const matchesSearch =
      equipment.device.toLowerCase().includes(search.toLowerCase()) ||
      equipment.model.toLowerCase().includes(search.toLowerCase()) ||
      equipment.assignee.toLowerCase().includes(search.toLowerCase());

    return matchesDept && matchesStatus && matchesType && matchesSearch;
  });

  return (
    <div className="tables">
      <div className="top-table">
        <div className="filters">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search..."
              className="search-bar-inside"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Search className="search-icon" />
          </div>
          <div className="dropdown">
            <label>Status</label>
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="">Show All</option>
              <option value="Active">Active</option>
              <option value="In Repair">In Repair</option>
              <option value="Retired">Retired</option>
              <option value="Return Overdue">Return Overdue</option>
              <option value="To be Returned soon">To be Returned soon</option>
            </select>
          </div>
          <div className="dropdown">
            <label>Type</label>
            <select value={type} onChange={(e) => setType(e.target.value)}>
              <option value="">Show All</option>
              <option value="Laptop">Laptop</option>
              <option value="Mobile">Mobile</option>
              <option value="Tablet">Tablet</option>
            </select>
          </div>
        </div>
        <button className="primaryBtn">
          <Plus className="add-icon" />
          Add Device
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Device</th>
            <th>Model</th>
            <th>Employee</th>
            <th>Status</th>
            <th>Return Date</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {filteredDevices.map((filteredDevice) => (
            <tr key={filteredDevice.id}>
              <td>{filteredDevice.device}</td>
              <td>{filteredDevice.model}</td>
              <td>{filteredDevice.assignee}</td>
              <td>{filteredDevice.status}</td>
              <td>{filteredDevice.dueDate}</td>
              <td>{filteredDevice.department}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
