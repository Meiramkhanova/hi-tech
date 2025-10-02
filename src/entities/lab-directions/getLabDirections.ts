import { LabDirectionsResponse } from "./LabDirections.t";

export default async function getLabDirections(): Promise<LabDirectionsResponse | null> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/lab-directions?populate=*`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      throw new Error(`Fetch error: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error("Ошибка при получении данных:", error);
    return null;
  }
}
