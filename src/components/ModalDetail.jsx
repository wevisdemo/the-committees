import { useEffect } from "react";

export default function ModalDetail({ open, onClose, children }) {
  useEffect(() => {
    if (open) {
      // Lock scroll when modal is open
      document.body.style.overflow = "hidden";
    } else {
      // Restore scroll when modal is closed
      document.body.style.overflow = "unset";
    }

    // Cleanup when component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className=" sticky mt-[-67px] inset-0 z-50 flex items-center justify-center">
      {/* BG */}
      <div
        className="absolute inset-0 min-h-screen bg-black/40 z-10"
        onClick={onClose}
        aria-label="close modal"
      />
      {/* เนื้อหา modal (scrollable) */}
      <div className=" sticky  z-50 w-full h-full flex items-center justify-center pointer-events-none">
        <div className="relative w-full  mx-auto bg-transparent flex flex-col items-center pointer-events-auto max-h-screen overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
