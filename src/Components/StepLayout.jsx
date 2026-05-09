import logo from "../assets/logo.png";

export default function StepLayout({
  children,
  footer,
  sideImage,
  step,
  totalSteps,
  title,
  description,
  onNext,
  buttonText = "NEXT",
  isButtonDisabled = false,
}) {
  const hasImage = Boolean(sideImage);
  const progress = (step / totalSteps) * 100;
  const showProgressBar = step <= totalSteps;

  return (
    <div className="flex min-h-screen w-full bg-white">
      {/* Left Image Sidebar */}
      {hasImage && (
        <div className="hidden lg:block w-1/4 h-screen sticky top-0">
          <img
            src={sideImage}
            className="w-full h-full object-cover"
            alt="Musora"
          />
        </div>
      )}

      {/* Right Content Column */}
      <div
        className={`flex flex-col min-h-screen relative ${
          hasImage ? "w-full lg:w-3/4" : "w-full"
        }`}
      >
        {/* Main Content Area */}
        <div className="flex-1 flex flex-col items-center justify-start pt-12 pb-24 lg:justify-center p-8 lg:p-20 overflow-y-auto">
          <div
            className={`w-full flex flex-col items-center text-center ${
              hasImage ? "max-w-[580px]" : "max-w-[640px]"
            }`}
          >
            {/* Logo & Progress */}
            <div className="mb-4">
              <img src={logo} alt="logo" className="w-10 h-10" />
            </div>

            {showProgressBar && (
              <div className="w-1/2 bg-musora-gray h-2 rounded-full mb-12 overflow-hidden">
                <div
                  className="bg-musora-orange h-full transition-all duration-700"
                  style={{ width: `${progress}%` }}
                />
              </div>
            )}

            {/* Header */}
            <h2 className="text-3xl font-black uppercase tracking-wide mb-2 font-heading">
              {title}
            </h2>
            <p className="text-gray-500 text-sm mb-10">{description}</p>

            {/* Step Content */}
            <div className="w-full mb-8">{children}</div>

            {/* Main Action Button */}
            {onNext && (
              <button
                onClick={onNext}
                disabled={isButtonDisabled}
                className={`w-full py-4 rounded-full font-bold text-white transition-all transform active:scale-95 ${
                  !isButtonDisabled
                    ? "bg-musora-dark hover:opacity-90"
                    : "bg-musora-gray cursor-not-allowed"
                }`}
              >
                {buttonText}
              </button>
            )}
          </div>
        </div>

        {/* FOOTER - Stays at bottom */}
        {footer && (
          <footer className="w-full pb-8 px-8 text-center">{footer}</footer>
        )}
      </div>
    </div>
  );
}
