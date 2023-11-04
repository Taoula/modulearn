import { Inter } from "next/font/google";
import "./globals.css";
import { FirebaseProvider } from "./hooks/useFirebase";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ModuLearn by Ryan, Paul, Manu, & Adi",
  description: "Learn literally anything",
};

export default function RootLayout({ children }) {
  return (
    <FirebaseProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </FirebaseProvider>
  );
}
