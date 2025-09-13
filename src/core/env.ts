export const apiURL = process.env.NEXT_PUBLIC_API_URL;

if (!apiURL) {
  throw new Error("NEXT_PUBLIC_API_URL env not found");
}
