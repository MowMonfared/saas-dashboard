import './Table.css';
import { equipmentData } from '../data/equipmentData';

export function Table() {
  return (
    <table>
      <thead>
        <tr>
          <th>Device</th>
          <th>Model</th>
          <th>Employee</th>
          <th>Status</th>
          <th>Return Date</th>
        </tr>
      </thead>
      <tbody>
        {equipmentData.map((equipment) => (
          <tr key={equipment.id}>
            <td>{equipment.device}</td>
            <td>{equipment.model}</td>
            <td>{equipment.assignee}</td>
            <td>{equipment.status}</td>
            <td>{equipment.dueDate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
