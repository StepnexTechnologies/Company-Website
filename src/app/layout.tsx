import { type Metadata } from "next";
import { Inter, Lexend } from "next/font/google";
import clsx from "clsx";

import "@/styles/tailwind.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.stepnex.tech"),
  title: {
    template: "%s - StepNex",
    default: "StepNex Technologies",
  },
  openGraph: {
    title: "StepNex Technologies",
    description: "Step into the Future with StepNex Your Trusted Tech Partner.",
    url: "https://www.stepnex.tech",
    siteName: "StenNex Technologies",
    type: "website",
    images: [
      {
        url: "/StepNex_Card.jpg",
        width: 1000,
        height: 4,
        alt: "Preview image for StepNex Website",
      },
    ],
  },
  // description:
  //   'Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited.',
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const lexend = Lexend({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lexend",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={clsx(
        "h-full scroll-smooth bg-white antialiased",
        inter.variable,
        lexend.variable,
      )}
    >
    <head>
      <title>StepNex Technologies</title>
    </head>
    <body className="flex h-full flex-col">{children}</body>
    </html>
  );
}
