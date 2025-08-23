import { useEffect, useRef } from "react";

export default function ModalDetail({ open, onClose, children }) {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };
    if (open) {
      // Prevent scrolling on body when modal is open
      document.body.style.overflow = "hidden";
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      // Restore scrolling when modal is closed
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className=" sticky  mt-[-67px] inset-0 z-99 flex items-center justify-center">
      {/* BG */}
      <div
        className="absolute inset-0 min-h-screen bg-black/40 z-10"
        onClick={() => onClose()}
        aria-label="close modal"
      />
      {/* เนื้อหา modal (scrollable) */}
      <div className=" sticky  z-50 w-full h-full flex items-center justify-center pointer-events-none">
        <div
          ref={modalRef}
          className="relative  w-fit h-fit  mx-auto bg-transparent flex flex-col items-center pointer-events-auto max-h-screen overflow-y-auto"
        >
          {children}
        </div>
      </div>
    </div>
  );
}
