import { useState } from 'react';
import { Plus, ChevronDown, ChevronUp } from 'lucide-react';
import './Sidebar.css';

export default function Accordion() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="dep">
        <div className="dep-name" onClick={() => setIsOpen(!isOpen)}>
          {' '}
          Departments
        </div>
        {isOpen ? (
          <ChevronDown className="dep-icon" />
        ) : (
          <ChevronUp className="dep-icon" />
        )}
      </div>
      {isOpen && (
        <>
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
            Add
          </button>
        </>
      )}
    </>
  );
}
