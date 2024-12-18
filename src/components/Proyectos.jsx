import { MagnifyingGlassPlusIcon } from "@heroicons/react/24/solid";

export const Proyectos = () => {
  return (
    <div id="/proyectos" className="p-8">
      <div className="text-center flex flex-col text-black p-5 gap-2">
        <p className="text-4xl">LO QUE HE HECHO</p>
        <p>(pronto habrá mas)</p>
      </div>
      <div className="grid grid-cols-1 z-1 md:grid-cols-2 xl:grid-cols-3 place-items-center gap-10 ">
        <a
          href="https://bryan-vite-app.netlify.app/"
          target="_blank"
          className=" proyecto cursor-pointer"
        >
          <img
            src="./blackJack.jpg"
            alt="Juego Black Jack"
            className="proyecto-img object-cover"
          />
          <div className="proyecto-content">
            <MagnifyingGlassPlusIcon className="w-7 h-7" />
          </div>
          <div className="proyecto-content-name">
            <p>Juego BlackJack</p>
          </div>
        </a>
        <a
          href="https://gifs-expert-bry.netlify.app/"
          target="_blank"
          className="proyecto cursor-pointer"
        >
          <img
            src="./GifExpert.png"
            alt="Buscador Gift Expert"
            className="proyecto-img object-cover"
          />
          <div className="proyecto-content">
            <MagnifyingGlassPlusIcon className="w-7 h-7" />
          </div>
          <div className="proyecto-content-name">
            <p>Buscador de Gifts</p>
          </div>
        </a>
        <a
          href="https://todo-app-vite-v01.netlify.app/"
          target="_blank"
          className="proyecto cursor-pointer"
        >
          <img
            src="/todo.png"
            alt="html imagen"
            className="proyecto-img object-cover"
          />
          <div className="proyecto-content">
            <MagnifyingGlassPlusIcon className="w-7 h-7" />
          </div>
          <div className="proyecto-content-name">
            <p>TODO List</p>
          </div>
        </a>
        <a
          href="https://chiangart.github.io/page_web_basic/#"
          target="_blank"
          className="proyecto  cursor-pointer"
        >
          <img
            src="./ecomerce.png"
            alt="html imagen"
            className="proyecto-img object-cover"
          />
          <div className="proyecto-content">
            <MagnifyingGlassPlusIcon className="w-7 h-7" />
          </div>
          <div className="proyecto-content-name">
            <p>Ecommerce Basica</p>
          </div>
        </a>
      </div>
    </div>
  );
};
