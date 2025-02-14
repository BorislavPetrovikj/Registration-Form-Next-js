import React from "react";
import Image from "next/image";

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
    <div className="mb-5">
      {label && (
        <label className="block font-body font-light text-body-xs text-[#021626] mb-1">
          {label}
        </label>
      )}
      <div>
        <input
          {...props}
          className={`w-full px-4 py-4 rounded-[28px] 
            ${!props.value && "bg-[#F6FAFE]"}
            ${
              error
                ? "border-2 border-[#F23148]"
                : "border-2 border-[#0216261F]"
            } 
            outline-none transition-all duration-200 
            font-body font-light text-body-reg text-[#021626]
            placeholder:text-[#02162680] placeholder:font-light
            focus:outline-none focus:border-[#0D71C9] focus:border-2 focus:ring-0
            ${props.className || ""}`}
          aria-invalid={!!error}
        />
        {error && (
          <div className="font-body font-light text-body-xs text-[#F23148] mt-2">
            {showBullet ? (
              <div className="flex items-baseline gap-1">
                <Image
                  src="/Vector.svg"
                  alt=""
                  width={14}
                  height={14}
                  className="shrink-0 translate-y-[1px]"
                  priority
                />
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
