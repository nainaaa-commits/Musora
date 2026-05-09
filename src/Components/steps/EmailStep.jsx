export default function EmailStep({ selections, setSelections, showError }) {
  const handleToggle = () => {
    setSelections({
      ...selections,
      marketingConsent: !selections.marketingConsent,
    });
  };

  return (
    <div className="w-full flex flex-col gap-6 animate-in fade-in duration-500">
      {/* Email Input Group */}
      <div className="w-full flex flex-col items-start gap-2 relative">
        {" "}
        <label
          htmlFor="email-input"
          className="text-gray-500 text-[11px] font-sans font-bold uppercase tracking-wider ml-1"
        >
          Email
        </label>
        <input
          id="email-input"
          type="email"
          placeholder="Enter your email..."
          value={selections.email}
          onChange={(e) =>
            setSelections({ ...selections, email: e.target.value })
          }
          className={`w-full p-4 rounded-xl border-2 transition-all outline-none ${
            showError
              ? "border-red-500 focus:border-red-500"
              : "border-gray-200 focus:border-musora-dark"
          }`}
        />
        {showError && (
          <p className="text-red-500 text-sm font-bold tracking-tight ml-1 mt-1 w-full text-left">
            Please enter a valid email address
          </p>
        )}
      </div>

      {/* Optional Marketing Consent */}
      <div
        className="flex items-center gap-3 text-left cursor-pointer group select-none"
        onClick={handleToggle}
      >
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

        <p className="text-gray-500 text-xs font-sans tracking-wider leading-none">
          Send me tips, free lessons and special offers by email
        </p>
      </div>
    </div>
  );
}
