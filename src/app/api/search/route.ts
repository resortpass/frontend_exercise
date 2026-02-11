import { NextRequest, NextResponse } from "next/server";
import { hotels } from "@/lib/data";
import { Category, SearchResponse } from "@/lib/types";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const location = searchParams.get("location") || "";
  const category = (searchParams.get("category") || "all") as Category;
  const starRatings = searchParams.getAll("starRating").map(Number);

  let filtered = [...hotels];

  // Filter by location (substring match, case-insensitive)
  if (location) {
    filtered = filtered.filter((hotel) =>
      hotel.location.toLowerCase().includes(location.toLowerCase())
    );
  }

  // Filter by category
  if (category && category !== "all") {
    filtered = filtered.filter((hotel) =>
      hotel.categories.includes(category)
    );
  }

  // Filter by star rating
  if (starRatings.length > 0) {
    filtered = filtered.filter((hotel) =>
      starRatings.includes(hotel.starRating)
    );
  }

  const response: SearchResponse = {
    hotels: filtered,
    total: filtered.length,
  };

  return NextResponse.json(response);
}
