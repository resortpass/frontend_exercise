// TODO: This page currently renders all components with hardcoded/placeholder data.
// Your task: Wire up data fetching, state management, and interactivity.
//
// Consider:
// - Which components need to be client components vs. server components?
// - How should search parameters flow through the app? (hint: URL search params)
// - How should filter changes trigger new data fetching?
// - What is the right data fetching pattern here? (server-side vs client-side)

import { Banner } from "@/components/Banner";
import { Header } from "@/components/Header";
import { SearchBar } from "@/components/SearchBar";
import { CategoryTabs } from "@/components/CategoryTabs";
import { FilterSidebar } from "@/components/FilterSidebar";
import { SearchResults } from "@/components/SearchResults";

export default function SearchPage() {
  // TODO: Fetch hotel data from /api/search using the current search parameters
  // TODO: Read search parameters (location, date, category, starRating) from the URL
  // TODO: Determine the right way to pass data and callbacks to child components

  return (
    <div className="min-h-screen bg-white">
      <Banner />
      <Header />
      <SearchBar />
      <CategoryTabs />
      <div className="max-w-7xl mx-auto px-4 flex gap-8 mt-6">
        <FilterSidebar />
        <SearchResults />
      </div>
    </div>
  );
}
