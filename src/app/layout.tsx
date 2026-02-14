import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

export const metadata: Metadata = {
  title: "For Annu🍒 💕 | A Valentine Week Celebration",
  description: "A special celebration of love dedicated to Annu - Rose Day to Valentine's Day",
  keywords: ["Valentine", "Love", "Romance", "Valentine Week", "Annu", "Special"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
