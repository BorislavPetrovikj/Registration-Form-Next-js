export default function SuccessScreen({
  onBackToStart,
}: {
  onBackToStart: () => void;
}) {
  return (
    <main className="min-h-screen bg-[#F9FAFB] flex items-center justify-center">
      <div className="max-w-[393px] w-full px-4 -mt-[120px]">
        <div className="flex flex-col items-center">
          <div className="w-[72px] h-[72px] rounded-full border-4 border-[#2563EB] flex items-center justify-center mb-6">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
              <path
                d="M20 6L9 17L4 12"
                stroke="#2563EB"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <h1 className="text-[24px] leading-7 font-semibold text-gray-900 mb-2">
            Congratulations
          </h1>

          <p className="text-base text-[#6B5F5F] mb-2">
            Welcome to your very own 25
          </p>

          <button
            onClick={onBackToStart}
            className="text-[#0D71C9] text-base hover:underline bg-[#0D71C9] bg-opacity-0 hover:bg-opacity-5 px-2 py-1 rounded transition-all"
          >
            Back to start
          </button>
        </div>
      </div>
    </main>
  );
}
