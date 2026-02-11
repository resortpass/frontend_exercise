export type Category = "all" | "pool" | "spa" | "sun";

export interface Pass {
  type: string;
  price: number;
  originalPrice?: number;
}

export interface Hotel {
  id: string;
  name: string;
  image: string;
  starRating: number;
  reviewCount: number;
  reviewScore: number;
  categories: Category[];
  passes: Pass[];
  amenities: string[];
  location: string;
  guestExperienceCount?: number;
}

export interface SearchResponse {
  hotels: Hotel[];
  total: number;
}
