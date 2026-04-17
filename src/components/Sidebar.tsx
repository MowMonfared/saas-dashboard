import './Sidebar.css';
import { Accordion } from './Accordion';

export function Sidebar({ selectedDep, setSelectedDep }) {
  
  return (
    <div className="sidebar">
      <Accordion selectedDep={selectedDep} setSelectedDep={setSelectedDep} />
      <div className="dep inventory">
        <div className="dep-name">Inventory</div>
        <div className="dep-number">5</div>
      </div>
    </div>
  );
}
