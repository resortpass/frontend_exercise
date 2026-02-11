// TODO: Accept an array of Hotel objects and render a HotelCard for each
// - Display a count header: "Hotel Day Passes in and near {location}"
// - Handle the empty state (no results found)
// - Map over hotels and pass each to HotelCard

import { HotelCard } from "./HotelCard";

export function SearchResults() {
  return (
    <div className="flex-1 min-w-0">
      <h2 className="text-xl font-bold text-gray-900 mb-6">
        Hotel Day Passes in and near Phoenix, Arizona
      </h2>

      {/* TODO: Replace with dynamic hotel list */}
      <HotelCard />
      <HotelCard />

      <p className="text-gray-500 text-sm mt-4">
        Showing 2 results
      </p>
    </div>
  );
}
