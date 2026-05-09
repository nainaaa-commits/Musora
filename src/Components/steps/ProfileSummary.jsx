export default function ProfileSummary({ selections }) {
  return (
    <div className="w-full bg-musora-gray/30 rounded-2xl p-8 text-left">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full px-4">
        {/* Instrument */}
        <div>
          <p className="text-gray-400 text-xs  tracking-tight mb-1">
            Instrument
          </p>
          <p className="text-musora-dark font-black text-lg capitalize">
            {selections.instrument || "None"}
          </p>
        </div>

        {/* Genres */}
        <div>
          <p className="text-gray-400 text-xs   tracking-tight mb-1">Genres</p>
          <p className="text-musora-dark font-black text-md capitalize">
            {selections.genres.length > 0
              ? selections.genres.join(", ")
              : "None"}
          </p>
        </div>

        {/* Email */}
        <div>
          <p className="text-gray-400 text-xs  tracking-tight mb-1">Email</p>
          <p className="text-musora-dark font-black text-lg break-all">
            {selections.email}
          </p>
        </div>

        {/* Placeholder for Tips */}
        <div>
          <p className="text-gray-400 text-xs   tracking-tight mb-1">
            Free tips & lessons
          </p>
          <p className="text-musora-dark font-black text-lg">
            {selections.marketingConsent ? "Yes" : "No"}
          </p>
        </div>
      </div>
    </div>
  );
}
