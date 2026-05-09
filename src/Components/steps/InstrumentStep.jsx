import { instruments } from "../../data/instruments";

export default function InstrumentStep({ selections, setSelections }) {
  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10 w-full">
        {instruments.map((inst) => (
          <button
            key={inst.id}
            onClick={() =>
              setSelections({ ...selections, instrument: inst.id })
            }
            className={`
        flex flex-col items-center justify-center py-6 rounded-xl border-2 transition-all
        ${
          selections.instrument === inst.id
            ? "border-musora-primary bg-musora-primary/5 ring-1 ring-musora-primary"
            : "border-musora-gray hover:border-gray-300"
        }
      `}
          >
            <div className="h-12 w-12 mb-3 flex items-center justify-center">
              <img
                src={inst.icon}
                alt={inst.name}
                className="w-full h-full object-contain"
              />
            </div>

            <span className="font-black tracking-tighter text-[10px] uppercase">
              {inst.name}
            </span>
          </button>
        ))}
      </div>
    </>
  );
}
