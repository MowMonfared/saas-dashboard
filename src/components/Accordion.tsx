import { useState } from 'react';
import { Plus, ChevronDown, ChevronUp } from 'lucide-react';
import './Accordion.css';

export function Accordion({ selectedDep, setSelectedDep }) {
  const [isOpen, setIsOpen] = useState(false);
  const departments = [
    { name: 'All Departments', number: 14 },
    { name: 'Engineering', number: 5 },
    { name: 'Design', number: 2 },
    { name: 'Finance', number: 2 },
    { name: 'HR', number: 2 },
  ];

  return (
    <>
      <div
        className={isOpen ? 'dep-selected' : 'dep'}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="dep-name">Departments</div>
        {isOpen ? (
          <ChevronUp className="dep-icon" />
        ) : (
          <ChevronDown className="dep-icon" />
        )}
      </div>
      {isOpen && (
        <>
          {departments.map((dept) => (
            <div
              key={dept}
              onClick={() => setSelectedDep(dept.name)}
              className={selectedDep === dept.name ? 'dep-selected' : 'dep'}
            >
              <div className="dep-name">{dept.name}</div>
              <div className="dep-number">{dept.number}</div>
            </div>
          ))}
          <button className="add-dep">
            <Plus className="dep-icon" />
            Add
          </button>
        </>
      )}
    </>
  );
}
