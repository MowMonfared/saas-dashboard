import './Sidebar.css';
import { Accordion } from './Accordion';

export function Sidebar({ selectedDep, setSelectedDep }) {
  return (
    <div className="sidebar">
      <div className="dep inventory">
        <div className="dep-name">Employees</div>
        <div className="dep-number">25</div>
      </div>
      <div className="dep inventory">
        <div className="dep-name">Inventory</div>
        <div className="dep-number">5</div>
      </div>
      <Accordion selectedDep={selectedDep} setSelectedDep={setSelectedDep} />
    </div>
  );
}
