export default function EmailStep({ selections, setSelections }) {
  const handleToggle = () => {
    setSelections({
      ...selections,
      marketingConsent: !selections.marketingConsent,
    });
  };

  return (
    <div className="w-full flex flex-col gap-6 animate-in fade-in duration-500">
      {/* Email Input */}
      <div className="w-full">
        <input
          type="email"
          placeholder="email@musora.com"
          value={selections.email}
          onChange={(e) =>
            setSelections({ ...selections, email: e.target.value })
          }
          className="w-full px-6 py-4 rounded-xl border-2 border-musora-gray focus:border-musora-orange outline-none font-sans font-bold text-lg transition-all placeholder:text-gray-300"
        />
      </div>

      {/* Optional Marketing Consent Section */}
      <div
        className="flex items-center gap-3 text-left cursor-pointer group select-none"
        onClick={handleToggle}
      >
        {/* Checkbox Container */}
        <div
          className={`min-w-[20px] h-5 w-5 rounded border-2 flex items-center justify-center transition-all duration-200 ${
            selections.marketingConsent
              ? "bg-musora-orange border-musora-orange"
              : "border-musora-gray group-hover:border-gray-400"
          }`}
        >
          {selections.marketingConsent && (
            <svg
              className="w-3.5 h-3.5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          )}
        </div>

        {/* Marketing Text */}
        <p className="text-gray-500 text-[11px] font-sans font-bold uppercase tracking-[0.05em] leading-none">
          Send me tips, free lessons and special offers by email
        </p>
      </div>
    </div>
  );
}
