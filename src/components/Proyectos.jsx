import { MagnifyingGlassPlusIcon } from "@heroicons/react/24/solid";

export const Proyectos = () => {
  return (
    <div className="grid grid-cols-1 z-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-5 mt-8">
      <div className="proyecto w-[20em] h-[12em] relative cursor-pointer">
        <img
          src="blackJack.jpg"
          alt="html imagen"
          className="proyecto-img object-cover w-full h-full"
        />
        <div className="proyecto-content">
          <MagnifyingGlassPlusIcon className="w-7 h-7" />
          
        </div>
        <div className="proyecto-content-name">
        <p>BlackJack</p>
        </div>
        
      </div>
      <div className="proyecto w-[20em] h-[12em] relative cursor-pointer">
        <div className="relative w-full h-full">
          <img
            src="blackJack.jpg"
            alt="html imagen"
            className="proyecto-img object-cover w-full h-full cursor-pointer"
          />
        </div>
      </div>
      <div className="proyecto w-[20em] h-[12em] relative cursor-pointer">
        <div className="relative w-full h-full">
          <img
            src="blackJack.jpg"
            alt="html imagen"
            className="proyecto-img object-cover w-full h-full cursor-pointer"
          />
        </div>
      </div>
      <div className="proyecto w-[20em] h-[12em] relative cursor-pointer">
        <div className="relative w-full h-full">
          <img
            src="blackJack.jpg"
            alt="html imagen"
            className="proyecto-img object-cover w-full h-full cursor-pointer"
          />
        </div>
      </div>
      <div className="proyecto w-[20em] h-[12em] relative cursor-pointer">
        <div className="relative w-full h-full">
          <img
            src="blackJack.jpg"
            alt="html imagen"
            className="proyecto-img object-cover w-full h-full cursor-pointer"
          />
        </div>
      </div>
      <div className="proyecto w-[20em] h-[12em] relative cursor-pointer">
        <div className="relative w-full h-full">
          <img
            src="blackJack.jpg"
            alt="html imagen"
            className="proyecto-img object-cover w-full h-full cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};
