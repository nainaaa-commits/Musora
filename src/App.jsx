import { useState } from "react";
import StepLayout from "./Components/StepLayout";
import InstrumentStep from "./Components/steps/InstrumentStep";
import GenreStep from "./Components/steps/GenreStep";
import EmailStep from "./Components/steps/EmailStep";
import ProfileSummary from "./Components/steps/ProfileSummary";

// Assets
import instrumentBg from "./assets/instrument-bg.png";
import genreBg from "./assets/genre-bg.png";

function App() {
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  const [selections, setSelections] = useState({
    instrument: "",
    genres: [],
    email: "",
    marketingConsent: false,
  });

  const nextStep = () => setStep((s) => s + 1);

  // Validation Logic for the shared button
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };
  const isInstrumentDisabled = !selections.instrument;
  const isGenreDisabled = selections.genres.length === 0;
  const isEmailDisabled = !validateEmail(selections.email);

  return (
    <main className="flex-1 font-sans">
      {/* STEP 1: INSTRUMENT */}
      {step === 1 && (
        <StepLayout
          sideImage={instrumentBg}
          step={step}
          totalSteps={totalSteps}
          title="Choose Your Instrument"
          description="Your Musora membership includes unlimited access to ALL of these instruments."
          onNext={nextStep}
          isButtonDisabled={isInstrumentDisabled}
        >
          <InstrumentStep
            selections={selections}
            setSelections={setSelections}
          />
        </StepLayout>
      )}

      {/* STEP 2: GENRE */}
      {step === 2 && (
        <StepLayout
          sideImage={genreBg}
          step={step}
          totalSteps={totalSteps}
          title="What genres are you into?"
          description="Choose your favorites so we can help you learn them! Pick as many styles as you like."
          onNext={nextStep}
          isButtonDisabled={isGenreDisabled}
        >
          <GenreStep selections={selections} setSelections={setSelections} />
        </StepLayout>
      )}

      {/* STEP 3: EMAIL */}
      {step === 3 && (
        <StepLayout
          step={step}
          totalSteps={totalSteps}
          title="Let's get playing!"
          description="Enter your email to create your account. You'll login with this email to access your lessons."
          onNext={nextStep}
          isButtonDisabled={isEmailDisabled}
          buttonText="GET STARTED"
          footer={
            <p className="text-xs text-musora-primary font-medium  tracking-widest">
              By continuing, you agree with Musora's
              <span className="text-musora-yellow font-bold  cursor-pointer mx-1">
                Terms of Use
              </span>{" "}
              and{" "}
              <span className="text-musora-yellow font-bold  cursor-pointer">
                Privacy Policy
              </span>
              .
            </p>
          }
        >
          <EmailStep
            selections={selections}
            setSelections={setSelections}
            showError={selections.email.length > 0 && isEmailDisabled}
          />
        </StepLayout>
      )}

      {step > totalSteps && (
        <StepLayout
          step={4}
          totalSteps={3}
          title="Welcome to Musora!"
          description="Here is your profile:"
        >
          <ProfileSummary selections={selections} />
        </StepLayout>
      )}
    </main>
  );
}

export default App;
