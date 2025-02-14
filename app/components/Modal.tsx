import { useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
}: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50  bg-[#F6FAFE]  overflow-y-auto">
      <div className="max-w-md mx-auto px-4 pt-[59px] pb-6">
        <div className="flex items-center justify-end mb-6">
          <button
            onClick={onClose}
            className="text-[#021626] p-2"
            aria-label="Close"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {title && (
          <h2 className="text-[20px] leading-7 font-semibold text-gray-900 mb-6">
            {title}
          </h2>
        )}

        <div className="space-y-4 text-sm text-[#6B5F5F] leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}
