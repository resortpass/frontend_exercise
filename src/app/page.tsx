import { redirect } from "next/navigation";

export default function Home() {
  redirect("/search?location=Phoenix,+Arizona&date=2025-02-08");
}
