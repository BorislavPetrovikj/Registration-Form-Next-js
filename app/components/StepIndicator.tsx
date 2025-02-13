import { FormStep } from "../types/form";

interface StepIndicatorProps {
  currentStep: number;
}

export default function StepIndicator({ currentStep }: StepIndicatorProps) {
  return (
    <div className="flex items-center justify-center gap-[6px]">
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center ${
          currentStep === 1 ? "bg-primary" : "bg-[#0216260A]"
        }`}
      >
        <span
          className={`font-heading font-bold text-heading-xs leading-heading-xs tracking-[0%] text-center ${
            currentStep === 1 ? "text-white" : "text-[#021626]/[0.08]"
          }`}
        >
          1
        </span>
      </div>
      <div className="w-1 h-1 bg-[#0216261F] rounded-full"></div>
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center ${
          currentStep === 2 ? "bg-primary" : "bg-[#0216260A]"
        }`}
      >
        <span
          className={`font-heading font-bold text-heading-xs leading-heading-xs tracking-[0%] text-center ${
            currentStep === 2 ? "text-white" : "text-[#021626]/[0.08]"
          }`}
        >
          2
        </span>
      </div>
    </div>
  );
}
