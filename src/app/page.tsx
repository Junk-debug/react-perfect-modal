import Link from "next/link";

const links = [
  { href: "/01-approach", title: "01 Approach" },
  { href: "/02-approach", title: "02 Approach" },
  { href: "/03-approach", title: "03 Approach" },
  { href: "/04-approach", title: "04 Approach" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <h1 className="text-4xl font-bold">The Perfect Modal</h1>
      <p className="text-lg">
        Learn to implement the perfect modal in react.js @pixel.developer
      </p>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="bg-zinc-50 border border-black/10 px-10 py-2 rounded-md hover:bg-white cursor-pointer group"
        >
          <span className="text-muted-foreground group-hover:text-black">
            {link.title}
          </span>
        </Link>
      ))}
    </div>
  );
}
