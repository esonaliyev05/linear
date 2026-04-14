import { usePathname } from "next/navigation";
import { Container } from "components/Container";
import { Footer } from "components/Footer";
import { Header } from "components/Header";

import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = typeof window !== "undefined" ? window.location.pathname : "";

  const hideLayout = pathname === "/auth";

  return (
    <html lang="en">
      <body>
        <div>
          {!hideLayout && (
            <header>
              <Container>
                <Header />
              </Container>
            </header>
          )}

          <main className="pt-navigation-height bg-page-gradient">
            {children}
          </main>

          {!hideLayout && <Footer />}
        </div>
      </body>
    </html>
  );
}