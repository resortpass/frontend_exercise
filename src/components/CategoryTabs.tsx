// TODO: Track which tab is currently active
// - Accept the active category and an onChange callback (or read/write URL params directly)
// - Apply active styling to the selected tab
// - Communicate selection to parent/URL so results update

import { Category } from "@/lib/types";

const tabs: { label: string; value: Category }[] = [
  { label: "All", value: "all" },
  { label: "Pool", value: "pool" },
  { label: "Spa", value: "spa" },
  { label: "Sun", value: "sun" },
];

export function CategoryTabs() {
  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex gap-6">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              className="py-3 text-sm font-medium text-gray-500 hover:text-gray-900 border-b-2 border-transparent hover:border-gray-300 transition-colors"
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
