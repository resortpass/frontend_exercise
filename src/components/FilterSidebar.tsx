// TODO: Make checkboxes functional
// - Track which star ratings are selected (array of numbers)
// - Communicate selected ratings to parent/URL so results are filtered
// - Decide: should this component own its state or receive it from props?

const starOptions = [5, 4, 3];

export function FilterSidebar() {
  return (
    <aside className="w-64 shrink-0">
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center justify-between">
          Hotel Class
          <svg
            className="w-4 h-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </h3>
        {starOptions.map((stars) => (
          <label
            key={stars}
            className="flex items-center gap-2 py-1.5 cursor-pointer"
          >
            <input
              type="checkbox"
              className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span className="text-sm text-gray-700">{stars} star</span>
          </label>
        ))}
      </div>

      <div className="mb-6">
        <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center justify-between">
          Pool Features
          <svg
            className="w-4 h-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </h3>
        {["Hot Tub", "Outdoor Pool", "Rooftop Pool", "Infinity Pool", "Kiddie Pool", "Indoor Pool"].map((feature) => (
          <label
            key={feature}
            className="flex items-center gap-2 py-1.5 cursor-pointer"
          >
            <input
              type="checkbox"
              className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span className="text-sm text-gray-700">{feature}</span>
          </label>
        ))}
      </div>

      <div className="mb-6">
        <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center justify-between">
          Amenities
          <svg
            className="w-4 h-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </h3>
        {["Cabana", "Daybed", "Umbrella", "Lazy River", "Waterslide"].map((amenity) => (
          <label
            key={amenity}
            className="flex items-center gap-2 py-1.5 cursor-pointer"
          >
            <input
              type="checkbox"
              className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span className="text-sm text-gray-700">{amenity}</span>
          </label>
        ))}
      </div>
    </aside>
  );
}
