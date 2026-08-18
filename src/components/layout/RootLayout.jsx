import { Outlet } from "react-router"
import Header from "../common/Header"
import Footer from "../common/Footer"
import BackgroundUi from "../common/BackgroundUi"



const RootLayout = () => {
  return (
    <section className="relative min-h-screen">
      <BackgroundUi />

      <div className="relative z-10">
        <Header />

        <main>
          <Outlet />
        </main>

        <Footer />
      </div>
    </section>
  );
};

export default RootLayout