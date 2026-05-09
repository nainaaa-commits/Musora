import { genres } from "../../data/genres";

export default function GenreStep({ selections, setSelections }) {
  const toggleGenre = (id) => {
    const currentGenres = selections.genres;
    if (currentGenres.includes(id)) {
      // Remove if already there
      setSelections((prev) => ({
        ...prev,
        genres: currentGenres.filter((g) => g !== id),
      }));
    } else {
      // Add if not there
      setSelections((prev) => ({
        ...prev,
        genres: [...currentGenres, id],
      }));
    }
  };

  return (
    <div className="w-full max-w-2xl text-center animate-in slide-in-from-right duration-500">
      <div className="grid grid-cols-3 gap-3 mb-12">
        {genres.map((genre) => (
          <button
            key={genre.id}
            onClick={() => toggleGenre(genre.id)}
            className={`
              py-4 flex flex-col items-center justify-center rounded-xl border-2 transition-all
              ${
                selections.genres.includes(genre.id)
                  ? "border-musora-primary bg-musora-primary/5 ring-1 ring-musora-primary"
                  : "border-gray-100 hover:border-gray-300"
              }
            `}
          >
            <span className="tracking-tighter text-md">{genre.name}</span>
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-6 items-center"></div>
    </div>
  );
}
