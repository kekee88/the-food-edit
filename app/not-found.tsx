import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h1>Recipe Not Found!</h1>
      <p>Sorry, we couldn't find the recipe you're looking for.</p>
      <Link href="/">Go back home</Link>
    </div>
  );
}