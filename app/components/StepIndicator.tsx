import { FormStep } from "../types/form";

interface StepIndicatorProps {
  currentStep: FormStep;
}

export default function StepIndicator({ currentStep }: StepIndicatorProps) {
  return (
    <div className="flex items-center justify-center gap-2 mb-8">
      <div
        className={`flex items-center ${
          currentStep === 1 ? "text-blue-600" : "text-gray-400"
        }`}
      >
        <div
          className={`w-8 h-8 rounded-full border-2 flex items-center justify-center
          ${
            currentStep === 1 ? "border-blue-600 bg-blue-50" : "border-gray-300"
          }`}
        >
          1
        </div>
      </div>
      <div className="w-16 h-0.5 bg-gray-300" />
      <div
        className={`flex items-center ${
          currentStep === 2 ? "text-blue-600" : "text-gray-400"
        }`}
      >
        <div
          className={`w-8 h-8 rounded-full border-2 flex items-center justify-center
          ${
            currentStep === 2 ? "border-blue-600 bg-blue-50" : "border-gray-300"
          }`}
        >
          2
        </div>
      </div>
    </div>
  );
}
