import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-scroll";

const menu = [
  { text: "Sobre mi", path: "/about" },
  { text: "Pasión", path: "/pasion" },
  { text: "Experiencia", path: "/experiencia" },
  { text: "Proyectos", path: "/projectos" },
  { text: "Resume", path: "/resume" },
  { text: "Contacto", path: "/contacto" },
];

export const NavBar = () => {
  const menuRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = ({ target }) => {
      if (menuRef.current && !menuRef.current.contains(target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" fixed top-0 left-0 right-0 bg-opacity-50 z-[99] uppercase">
      <nav>
        {/* Este menu es para pantallas mas grandes */}
        <div className="navbar flex flex-row justify-between sm:justify-between p-1 font-light">
          <Link
            to="/inicio" 
            spy={true}
            smooth={true}
            offset={0}
            duration={900}
            className="ml-2 font-Qwitcher text-2xl font-bold hover:text-cyan-300 transition-colors duration-500 normal-case cursor-pointer"
          >
            Bryan Chiang
          </Link>
          <div
            className={
              "hidden sm:flex sm:gap-3 mr-4 md:gap-6 text-sm lg:mr-8"
            }
          >
            {menu.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                spy={true}
                smooth={true}
                offset={-70}
                duration={900}
                activeClass="active"
                className={`menu-item content-center cursor-pointer hover:bg-cyan-300 hover:text-cyan-300 hover:bg-transparent rounded-none `}
              >
                {item.text}
              </Link>
            ))}
          </div>

          <button
            className={`mr-2 sm:hidden transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
            onClick={toggleMenu}
          >
            {!isOpen ? (
              <Bars3Icon className="w-8" />
            ) : (
              <XMarkIcon className="w-8" />
            )}
          </button>
        </div>
        {/* Este menu es para pantallas mas pequenas */}
        <div
          ref={menuRef}
          className={` w-3/5 ml-auto sm:hidden m-1 rounded-xl flex flex-col bg-cyan-900 bg-opacity-40 duration-300 ease-in-out transition-all transform ${
            !isOpen
              ? "max-h-0 overflow-hidden"
              : "max-h-[500px] opacity-100 overflow-hidden"
          }`}
        >
          {menu.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className="flex p-8 justify-center sm:hidden font-light  hover:bg-cyan-300 hover:text-slate-950 rounded-md"
            >
              {item.text}
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  );
};
