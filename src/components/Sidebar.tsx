import { Plus, ChevronDown } from 'lucide-react';
import './Sidebar.css';

export function Sidebar() {
  return (
    <div className="sidebar">
      <div className="dep">
        <div className="dep-name"> Departments</div>
        <ChevronDown className="dep-icon" />
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
        <Plus className="dep-icon" />
        Add Department
      </button>
      <div className="dep inventory">
        <div className="dep-name">Inventory</div>
        <div className="dep-number">5</div>
      </div>
    </div>
  );
}
