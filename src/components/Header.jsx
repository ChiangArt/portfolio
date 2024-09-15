import { Link } from "react-scroll";
import { NavBar } from "./index";
import { Introduccion } from "./Introduccion";
import { ChevronDoubleDownIcon } from "@heroicons/react/24/outline";

export const Header = () => {
  return (
    <div className="/inicio">
      <div className="relative h-[90vh] overflow-hidden flex flex-col justify-center">
        <div className="banner absolute top-0 left-0 w-full h-full bg-cover bg-center bg-fixed"></div>
        <div className="relative z-10 p-6">
          <NavBar />
          <Introduccion />
          <div className="flex justify-center">
            <Link
              to="/about"
              spy={true}
              smooth={true}
              offset={50}
              duration={1300}
              className="mt-32 cursor-pointer"
            >
              <ChevronDoubleDownIcon className="w-10 h-10 text-white hover:text-cyan-300 transition-colors duration-300 animate-bounce" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
