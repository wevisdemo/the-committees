export default function ModalDetail({ open, onClose, children }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* BG */}
      <div
        className="absolute inset-0 bg-black/40 z-10"
        onClick={onClose}
        aria-label="close modal"
      />
      {/* เนื้อหา modal (scrollable) */}
      <div className="relative z-20 w-full h-full flex items-center justify-center pointer-events-none">
        <div className="relative w-full  mx-auto bg-transparent flex flex-col items-center pointer-events-auto max-h-screen overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
