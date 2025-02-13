import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
  showBullet?: boolean;
}

export function Input({
  error,
  label,
  showBullet = true,
  ...props
}: InputProps) {
  return (
    <div className="mb-6">
      {label && (
        <label className="block text-sm font-normal text-[#6B5F5F] mb-2">
          {label}
        </label>
      )}
      <div>
        <input
          {...props}
          className={`w-full px-4 py-4 rounded-[28px] bg-[#F9FAFB] 
            ${error ? "border-2 border-[#FF0000]" : "border border-[#E5E7EB]"} 
            outline-none transition-all duration-200 
            placeholder:text-[#9CA3AF]
            focus:outline-none focus:border-[#2563EB] focus:border-2 focus:ring-0`}
          aria-invalid={!!error}
        />
        {error && (
          <div className="text-[#FF0000] text-sm mt-1 ">
            {showBullet ? (
              <div className="flex items-center gap-1">
                <span className="inline-block w-1 h-1 rounded-full bg-[#FF0000] mr-1" />
                {error}
              </div>
            ) : (
              error
            )}
          </div>
        )}
      </div>
    </div>
  );
}
