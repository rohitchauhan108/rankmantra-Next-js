'use client'

import { Menus } from "./utils";
import DesktopMenu from "./DesktopMenu";
import MobMenu from "./MobMenu";
import Link from "next/link";
import Image from "next/image";

function NavBar() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  
  return (
    <div>
      <header className="h-16 text-[15px] fixed inset-0 flex-center bg-[#ffffff]"
      style={{zIndex:"9999"}}
      >
        <nav className="px-3.5 flex-center-between w-full max-w-7xl mx-auto">
          <div className="flex-center gap-x-3 z-[999] relative">
            <Link href="/">
              <Image 
                src="/images/logo.png" 
                alt="Rankmantra Logo" 
                width={192} 
                height={48} 
                style={{ width: "192px", height: "auto" }}
                priority
              />
            </Link>
          </div>

          <ul className="gap-x-1 lg:flex-center hidden" onClick={scrollToTop}>
            {Menus.map((menu) => (
              <DesktopMenu menu={menu} key={menu.name} />
            ))}
          </ul>
          <div className="hidden flex-center gap-x-5">
            <Link href="/contact-us">
            <button
              aria-label="contact-us"
              suppressHydrationWarning
              className="bg-red-600 text-sm text-white z-[999] relative lg:px-5 lg:py-3 py-2 px-1 lg:left-0 left-2 shadow rounded-xl flex-center"
            >
              Contact Us
            </button>
            </Link>
           
            <div className="lg:hidden" onClick={scrollToTop}>
              <MobMenu Menus={Menus} />
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default NavBar;
