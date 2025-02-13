import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
}

export function Input({ error, label, ...props }: InputProps) {
  return (
    <div className="mb-6">
      {label && (
        <label className="block text-sm font-normal text-[#6B5F5F] mb-2">
          {label}
        </label>
      )}
      <input
        {...props}
        className={`w-full px-4 py-4 rounded-[28px] bg-[#F9FAFB] 
          ${error ? "border-2 border-red-500" : "border border-[#E5E7EB]"} 
          outline-none transition-all duration-200 
          placeholder:text-[#9CA3AF]
          focus:outline-none focus:border-[#2563EB] focus:border-2 focus:ring-0`}
        aria-invalid={!!error}
      />
      {error && <div className="mt-2 text-[#FF0000] text-sm">{error}</div>}
    </div>
  );
}
