// TODO: Accept a Hotel object as a prop and render its data dynamically
// - Currently renders hardcoded placeholder content
// - Replace hardcoded text/values with props from the Hotel object
// - Render the passes list dynamically using PassRow
// - Render amenities dynamically
// - Show the guest experience count if available

import { StarRating } from "./StarRating";
import { FavoriteButton } from "./FavoriteButton";

export function HotelCard() {
  return (
    <div className="flex gap-5 border-b border-gray-200 pb-6 mb-6">
      {/* Hotel Image */}
      <div className="relative w-72 h-48 shrink-0">
        <img
          src="https://picsum.photos/seed/hotel1/800/600"
          alt="Hotel"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Hotel Details */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-lg font-bold text-gray-900">
              Hotel Name Placeholder
            </h2>
            <div className="flex items-center gap-2 mt-1">
              <StarRating rating={5} />
              <span className="text-sm text-gray-500">
                4.5 (711 reviews)
              </span>
            </div>
          </div>
          <FavoriteButton />
        </div>

        {/* Passes */}
        <div className="mt-3 space-y-1">
          <div className="flex items-center justify-between py-1 text-sm">
            <span className="text-gray-700">Day Pass</span>
            <span className="font-semibold text-gray-900">$69</span>
          </div>
          <div className="flex items-center justify-between py-1 text-sm">
            <span className="text-gray-700">Spa Pass</span>
            <div className="flex items-center gap-2">
              <span className="text-gray-400 line-through">$175</span>
              <span className="font-semibold text-gray-900">$150</span>
            </div>
          </div>
          <div className="flex items-center justify-between py-1 text-sm">
            <span className="text-gray-700">Cabana</span>
            <span className="font-semibold text-gray-900">$175</span>
          </div>
        </div>

        {/* Guest Experiences */}
        <p className="text-xs text-gray-400 mt-2">14 guest experiences</p>

        {/* View All Button */}
        <div className="mt-3 flex justify-end">
          <button className="bg-blue-900 text-white text-sm font-medium px-4 py-2 rounded hover:bg-blue-800 transition-colors">
            View All
          </button>
        </div>
      </div>
    </div>
  );
}
