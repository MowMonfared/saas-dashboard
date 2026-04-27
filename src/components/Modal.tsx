import { useState } from 'react';
import { createPortal } from 'react-dom';
import { equipmentData } from '../data/equipmentData';

export function Modal({ setShowModal }) {
  const [isSelected, setIsSelected] = useState('laptop');
  const [status, setStatus] = useState('active');
  const departments = [...new Set(equipmentData.map((e) => e.department))];
  return createPortal(
    // Backdrop
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center"
      onClick={() => setShowModal(false)} // click outside closes
    >
      {/* Modal box */}
      <div
        className="flex flex-col bg-white rounded-lg p-4"
        onClick={(e) => e.stopPropagation()} // IMPORTANT: prevents closing
      >
        <div className="flex flex-col flex-1 pb-4">
          <label htmlFor="employee" className="mb-1">
            Device
          </label>
          <div className="flex gap-3 pb-4">
            <div
              onClick={
                isSelected !== 'laptop' && (() => setIsSelected('laptop'))
              }
              className={`flex flex-col p-4 border-1 ${isSelected === 'laptop' ? 'border-blue-600 rounded-md bg-blue-100' : 'border-gray-500 rounded-md hover:bg-gray-100'}`}
            >
              Laptop
            </div>
            <div
              onClick={
                isSelected !== 'tablet' && (() => setIsSelected('tablet'))
              }
              className={`flex flex-col p-4 border-1 ${isSelected === 'tablet' ? 'border-blue-600 rounded-md bg-blue-100' : 'border-gray-500 rounded-md hover:bg-gray-100'}`}
            >
              Tablet
            </div>
            <div
              onClick={isSelected !== 'phone' && (() => setIsSelected('phone'))}
              className={`flex flex-col p-4 border-1 ${isSelected === 'phone' ? 'border-blue-600 rounded-md bg-blue-100' : 'border-gray-500 rounded-md hover:bg-gray-100'}`}
            >
              Phone
            </div>
            <div
              onClick={
                isSelected !== 'keyboard' && (() => setIsSelected('keyboard'))
              }
              className={`flex flex-col p-4 border-1 ${isSelected === 'keyboard' ? 'border-blue-600 rounded-md bg-blue-100' : 'border-gray-500 rounded-md hover:bg-gray-100'}`}
            >
              Keyboard
            </div>
            <div
              onClick={
                isSelected !== 'monitor' && (() => setIsSelected('monitor'))
              }
              className={`flex flex-col p-4 border-1 ${isSelected === 'monitor' ? 'border-blue-600 rounded-md bg-blue-100' : 'border-gray-500 rounded-md hover:bg-gray-100'}`}
            >
              Monitor
            </div>
          </div>
          <div className="m-2 flex flex-col">
            <label htmlFor="employee" className="mb-1">
              Model
            </label>
            <div>
              <input
                type="text"
                id="model"
                name="model"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>
          <div className="m-2 flex flex-col">
            <label htmlFor="employee" className="mb-1">
              Employee
            </label>
            <div>
              <input
                type="text"
                id="name"
                name="name"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>
          <div className="m-2 flex flex-col">
            <label htmlFor="employee" className="mb-1">
              Date
            </label>
            <div>
              <input
                type="date"
                id="date"
                name="first-name"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>
          <div className="m-2 flex flex-col">
            <label htmlFor="employee" className="mb-1">
              Department
            </label>
            <div>
              <select>
                {departments.map((department) => (
                  <option key={department} value={department}>
                    {department}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="m-2 flex flex-col">
            <label htmlFor="employee" className="mb-1">
              Status
            </label>
            <div className="flex gap-3 pb-4">
              <div
                onClick={status !== 'active' && (() => setStatus('active'))}
                className={`flex flex-col p-4 border-1 ${status === 'active' ? 'border-blue-600 rounded-md bg-blue-100' : 'border-gray-500 rounded-md hover:bg-gray-100'}`}
              >
                Active
              </div>
              <div
                onClick={status !== 'repair' && (() => setStatus('repair'))}
                className={`flex flex-col p-4 border-1 ${status === 'repair' ? 'border-blue-600 rounded-md bg-blue-100' : 'border-gray-500 rounded-md hover:bg-gray-100'}`}
              >
                In Repair
              </div>
              <div
                onClick={status !== 'overdue' && (() => setStatus('overdue'))}
                className={`flex flex-col p-4 border-1 ${status === 'overdue' ? 'border-blue-600 rounded-md bg-blue-100' : 'border-gray-500 rounded-md hover:bg-gray-100'}`}
              >
                Return Overdue
              </div>
              <div
                onClick={
                  status !== 'return-soon' && (() => setStatus('return-soon'))
                }
                className={`flex flex-col p-4 border-1 ${status === 'return-soon' ? 'border-blue-600 rounded-md bg-blue-100' : 'border-gray-500 rounded-md hover:bg-gray-100'}`}
              >
                To be Returned soon
              </div>
              <div
                onClick={status !== 'retired' && (() => setStatus('retired'))}
                className={`flex flex-col p-4 border-1 ${status === 'retired' ? 'border-blue-600 rounded-md bg-blue-100' : 'border-gray-500 rounded-md hover:bg-gray-100'}`}
              >
                Retired
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end gap-4">
          <button
            onClick={() => setShowModal(false)}
            className="bg-white hover:bg-gray-200 text-black px-4 py-2 rounded hover"
          >
            Close
          </button>
          <button
            onClick={() => setShowModal(false)}
            className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded hover"
          >
            Save
          </button>
        </div>
      </div>
    </div>,
    document.getElementById('overlay-root'),
  );
}
