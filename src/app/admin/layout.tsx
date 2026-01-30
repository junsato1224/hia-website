import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "管理画面 | HUMAN INFINITY ACADEMY",
  robots: { index: false, follow: false },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-soft-beige">
      {children}
    </div>
  );
}
