import Link from "next/link";

export default function Navigation() {
  return (
    <nav>
      <div className="container py-6">
        <ul className="flex flex-row gap-6">
          <li>
            <Link href="/">Simple Flashcards</Link>
          </li>
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
