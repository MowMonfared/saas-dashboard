import { Plus, ChevronDown } from 'lucide-react';
import './Sidebar.css';
import Accordion from './Accordion';

export function Sidebar() {
  return (
    <div className="sidebar">
      <Accordion />
      <div className="dep inventory">
        <div className="dep-name">Inventory</div>
        <div className="dep-number">5</div>
      </div>
    </div>
  );
}
