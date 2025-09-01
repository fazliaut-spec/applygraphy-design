"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isFA = pathname?.startsWith("/en") ? false : true;

  return (
    <header className="border-b border-gray-200 dark:border-slate-800">
      <div className="container h-16 flex items-center justify-between">
        <Link href={isFA ? "/" : "/en"} className="font-bold">
          ApplyGraphy
        </Link>
        <nav className="flex items-center gap-4 text-sm">
          <Link href={isFA ? "/fa/tools" : "/en/tools"}>Tools</Link>
          <Link href={isFA ? "/fa/consult" : "/en/consult"} className="btn-primary">{isFA ? "مشاوره رایگان" : "Free Consultation"}</Link>
          <Link href={isFA ? "/en" : "/"} className="btn-outline">{isFA ? "EN" : "FA"}</Link>
        </nav>
      </div>
    </header>
  );
}
