import './Table.css';
import { rowsData } from '../data/rows.js';

export function Table() {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Role</th>
          <th>Devices</th>
        </tr>
      </thead>
      <tbody>
        {rowsData.map((row) => (
          <tr key={row.id}>
            <td>{row.id}</td>
            <td>{row.name}</td>
            <td>{row.role}</td>
            <td>{row.devices}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
