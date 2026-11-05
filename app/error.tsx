"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main>
      <h2>Something went wrong!</h2>
      <p>Sorry, something went wrong while loading NextBites.</p>
      <button onClick={() => reset()}>Try again</button>
    </main>
  );
}