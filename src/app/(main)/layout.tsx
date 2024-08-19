import type { Metadata } from "next";
import Filters from "@/components/Filters";

import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: {
    default: "Movie App",
    template: "%s | Movie App",
  },
  description: "Explore latest movies and TV shows",
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Navbar />
      <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
        {/* Sidebar */}
        <aside>
          <Filters />
        </aside>

        {/* Movies */}
        <div className="lg:col-span-3 sm:px-6">{children}</div>
      </div>
    </main>
  );
}
