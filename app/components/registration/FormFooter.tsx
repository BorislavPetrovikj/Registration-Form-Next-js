import React from "react";

interface FormFooterProps {
  step: number;
  isSubmitting: boolean;
  showTerms: boolean;
  showPrivacy: boolean;
  setShowTerms: (show: boolean) => void;
  setShowPrivacy: (show: boolean) => void;
  handleContinue: () => void;
}

export default function FormFooter({
  step,
  isSubmitting,
  showTerms,
  showPrivacy,
  setShowTerms,
  setShowPrivacy,
  handleContinue,
}: FormFooterProps) {
  return (
    <>
      {step === 2 && (
        <p className="text-sm text-[#6B5F5F] mb-6">
          By clicking 'Continue' you confirm that you agree to our{" "}
          <button
            onClick={() => setShowTerms(true)}
            className="text-[#2563EB] hover:underline"
          >
            terms and conditions
          </button>{" "}
          and{" "}
          <button
            onClick={() => setShowPrivacy(true)}
            className="text-[#2563EB] hover:underline"
          >
            privacy policy
          </button>
        </p>
      )}

      <button
        type="button"
        onClick={handleContinue}
        disabled={isSubmitting}
        className={`w-full bg-primary text-white rounded-full py-4 px-4 
          ${
            isSubmitting
              ? "opacity-70 cursor-not-allowed"
              : "hover:bg-primary/80"
          } 
          transition-colors mt-6 font-medium`}
      >
        {isSubmitting ? "Processing..." : "Continue"}
      </button>

      {step === 1 && (
        <>
          <div className="text-center mt-6">
            <a href="#" className="text-[#2563EB] text-sm hover:underline">
              Already have an account?
            </a>
          </div>

          <div className="text-center mt-8 text-[#9CA3AF] text-sm">
            Version 0.1
          </div>
        </>
      )}
    </>
  );
}
