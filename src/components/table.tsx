import './Table.css';
import { equipmentData } from '../data/equipmentData';
import { useState } from 'react';
import { Search, Plus } from 'lucide-react';
import { Modal } from './Modal';
import { createPortal } from 'react-dom';

export function Table({ selectedDep, setSelectedDep }) {
  const [status, setStatus] = useState('');
  const [type, setType] = useState('');
  const [search, setSearch] = useState('');
  const [showModal, setShowModal] = useState(false);

  const filteredDevices = equipmentData.filter((equipment) => {
    const matchesDept =
      selectedDep === 'All Departments' || equipment.department === selectedDep;

    const matchesStatus = !status || equipment.status === status;

    const matchesType =
      !type || equipment.device.toLowerCase() === type.toLowerCase();

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

        <button className="primaryBtn" onClick={() => setShowModal(true)}>
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
          {filteredDevices.map((device) => (
            <tr key={device.id}>
              <td>{device.device}</td>
              <td>{device.model}</td>
              <td>{device.assignee}</td>
              <td>{device.status}</td>
              <td>{device.dueDate}</td>
              <td>{device.department}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal &&
        createPortal(
          <Modal setShowModal={setShowModal} />,
          document.getElementById('overlay-root'),
        )}
    </div>
  );
}
