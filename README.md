# Hotel Search Results — Frontend Interview Exercise

A pre-built Next.js 15 (App Router) project with only the  visual components.

## Getting Started

```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) — redirects to `/search?location=Phoenix,+Arizona&date=2025-02-08`.

---

## API Reference

### `GET /api/search`

Returns a filtered list of hotels. All parameters are optional — omitting all parameters returns every hotel in the dataset (6 total).

#### Query Parameters

| Parameter    | Type     | Required | Default | Description                                                                 |
|-------------|----------|----------|---------|-----------------------------------------------------------------------------|
| `location`  | `string` | No       | `""`    | Substring match against hotel location (case-insensitive).                  |
| `date`      | `string` | No       | —       | Accepted but **not used for filtering**. All hotels are available all dates. |
| `category`  | `string` | No       | `"all"` | One of `"all"`, `"pool"`, `"spa"`, `"sun"`. Filters to hotels that include this category. `"all"` disables category filtering. |
| `starRating`| `number` | No       | —       | Repeatable. Only returns hotels matching **any** of the provided ratings. Omit entirely to return all ratings. |

#### Example Requests

```bash
# All hotels (no filters)
curl "http://localhost:3000/api/search"

# Hotels in Phoenix
curl "http://localhost:3000/api/search?location=Phoenix,+Arizona"

# Pool hotels in Phoenix
curl "http://localhost:3000/api/search?location=Phoenix&category=pool"

# 5-star and 4-star hotels only
curl "http://localhost:3000/api/search?starRating=5&starRating=4"

# Combined: pool hotels in Phoenix that are 5-star
curl "http://localhost:3000/api/search?location=Phoenix&category=pool&starRating=5"
```

#### Response

**Content-Type:** `application/json`

```jsonc
{
  "hotels": [
    {
      "id": "1",
      "name": "Grand Hyatt Scottsdale Resort",
      "image": "https://picsum.photos/seed/hotel1/800/600",
      "starRating": 5,
      "reviewCount": 711,
      "reviewScore": 4.5,
      "categories": ["all", "pool", "spa"],
      "passes": [
        { "type": "Day Pass", "price": 69 },
        { "type": "Spa Pass", "price": 150, "originalPrice": 175 },
        { "type": "Cabana", "price": 175 }
      ],
      "amenities": ["Pool", "Hot Tub", "Spa", "Gym"],
      "location": "Phoenix, Arizona",
      "guestExperienceCount": 14
    }
    // ...more hotels
  ],
  "total": 1
}
```

#### Response Types (from `src/lib/types.ts`)

```ts
type Category = "all" | "pool" | "spa" | "sun";

interface Pass {
  type: string;            // "Day Pass", "Spa Pass", "Cabana"
  price: number;
  originalPrice?: number;  // Present when a discount exists
}

interface Hotel {
  id: string;
  name: string;
  image: string;
  starRating: number;             // 3, 4, or 5
  reviewCount: number;
  reviewScore: number;            // e.g. 4.2
  categories: Category[];
  passes: Pass[];
  amenities: string[];            // "Pool", "Hot Tub", "Spa", etc.
  location: string;               // "Phoenix, Arizona"
  guestExperienceCount?: number;  // e.g. 14
}

interface SearchResponse {
  hotels: Hotel[];
  total: number;
}
```

#### Filter Behavior

| Scenario                          | Result                                              |
|-----------------------------------|-----------------------------------------------------|
| No params                         | All 6 hotels                                        |
| `location=Phoenix`                | 5 hotels (excludes Scottsdale)                      |
| `location=Arizona`                | All 6 (substring matches both Phoenix and Scottsdale)|
| `category=spa`                    | Hotels whose `categories` array includes `"spa"`    |
| `category=all`                    | Same as omitting — no category filtering            |
| `starRating=5`                    | Only 5-star hotels                                  |
| `starRating=5&starRating=4`       | 5-star **or** 4-star hotels                         |
| All filters combined              | Intersection — all conditions must pass             |

#### Dataset Summary

| Hotel                          | Stars | Location             | Categories         |
|-------------------------------|-------|----------------------|--------------------|
| Grand Hyatt Scottsdale Resort | 5     | Phoenix, Arizona     | pool, spa          |
| Arizona Grand Resort & Spa    | 4     | Phoenix, Arizona     | pool, sun          |
| The Phoenician Resort         | 5     | Scottsdale, Arizona  | pool, spa, sun     |
| Royal Palms Resort and Spa    | 4     | Phoenix, Arizona     | pool, spa          |
| Pointe Hilton Squaw Peak      | 3     | Phoenix, Arizona     | pool, sun          |
| JW Marriott Desert Ridge      | 4     | Phoenix, Arizona     | pool, spa, sun     |
