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
        className="flex flex-col w-96 h-96 bg-white rounded-lg p-4"
        onClick={(e) => e.stopPropagation()} // IMPORTANT: prevents closing
      >
        <div className="flex flex-col flex-1">Modal Content</div>

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
