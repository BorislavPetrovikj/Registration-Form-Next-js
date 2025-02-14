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
        <p className="font-body font-light text-body-xs leading-body-xs tracking-[0%] text-[#021626] mt-2 mb-6">
          By clicking 'Continue' you confirm that you agree to our{" "}
          <button
            onClick={() => setShowTerms(true)}
            className="text-[#0D71C9] font-bold"
          >
            terms and conditions
          </button>{" "}
          and{" "}
          <button
            onClick={() => setShowPrivacy(true)}
            className="text-[#0D71C9] font-bold"
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
          transition-colors font-medium`}
      >
        {isSubmitting ? "Processing..." : "Continue"}
      </button>

      {step === 1 && (
        <>
          <div className="text-center mt-6">
            <a
              href="#"
              className="font-body font-bold text-body-reg text-[#0D71C9] hover:underline"
            >
              Already have an account?
            </a>
          </div>

          <div className="text-center mt-8">
            <span className="font-body font-light text-body-xs text-[#02162680]">
              Version 0.1
            </span>
          </div>
        </>
      )}
    </>
  );
}
