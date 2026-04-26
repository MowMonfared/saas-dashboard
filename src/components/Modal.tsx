import { createPortal } from 'react-dom';

export function Modal({ setShowModal }) {
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
            Type
          </label>
          <div className="flex gap-3 pb-4">
            <div className="flex flex-col p-4 border-1 border-amber-700 rounded-md bg-amber-100 hover:bg-amber-700 hover:text-amber-100">
              Laptop
            </div>
            <div className="flex flex-col p-4 border-1 border-gray-500 rounded-md hover:bg-gray-100">
              Tablet
            </div>
            <div className="flex flex-col p-4 border-1 border-gray-500 rounded-md hover:bg-gray-100">
              Phone
            </div>
            <div className="flex flex-col p-4 border-1 border-gray-500 rounded-md hover:bg-gray-100">
              Keyboard
            </div>
            <div className="flex flex-col p-4 border-1 border-gray-500 rounded-md hover:bg-gray-100">
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
                id="first-name"
                name="first-name"
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
                id="first-name"
                name="first-name"
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
                type="text"
                id="first-name"
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
              <input
                type="text"
                id="first-name"
                name="first-name"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>
          <div className="m-2 flex flex-col">
            <label htmlFor="employee" className="mb-1">
              Status
            </label>
            <div className="flex gap-3 pb-4">
              <div className="flex flex-col p-4 border-1 border-amber-700 rounded-md bg-amber-100 hover:bg-amber-700 hover:text-amber-100">
                Active
              </div>
              <div className="flex flex-col p-4 border-1 border-gray-500 rounded-md hover:bg-gray-100">
                In Repair
              </div>
              <div className="flex flex-col p-4 border-1 border-gray-500 rounded-md hover:bg-gray-100">
                Return Overdue
              </div>
              <div className="flex flex-col p-4 border-1 border-gray-500 rounded-md hover:bg-gray-100">
                Retired
              </div>
              <div className="flex flex-col p-4 border-1 border-gray-500 rounded-md hover:bg-gray-100">
                To be Returned soon
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
            Add
          </button>
        </div>
      </div>
    </div>,
    document.getElementById('overlay-root'),
  );
}
