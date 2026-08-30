import { Outlet, ScrollRestoration, useMatches } from "react-router"
import Header from "../common/Header"
import Footer from "../common/Footer"
import BackgroundUi from "../common/BackgroundUi"
import ScrollToTop from "../ScrollToTop/scrollToTop"



const RootLayout = () => {

  const maches = useMatches()
  const hideHeaderFooter = maches.some(mach => mach.handle?.hideHeaderFooter)

  return (
    <section className="relative min-h-screen">
        <ScrollToTop/>
      <BackgroundUi />

      <div className="relative z-10">
        {!hideHeaderFooter && <Header/>}
        <main>
          <Outlet />
        </main>

        {!hideHeaderFooter && <Footer />}
      </div>
    </section>
  );
};

export default RootLayout