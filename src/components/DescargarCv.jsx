export const DescargarCv = () => {
  return (
    <div className="mt-9 relative h-[30vh] overflow-hidden flex flex-col justify-center z-0 text-white">
      <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-[5px] z-10"></div>
      <div className="banner2 absolute top-0 left-0 w-full h-full bg-cover bg-center bg-fixed"></div>
      <div className="relative mx-auto items-center gap-7 flex flex-col z-20">
        <p className="uppercase font-light text-2xl">¡Mira mi currículum!</p>
        <a href="/CV2025.pdf" target="_blank" download="MiCV.pdf" className=" border-white text-lg border-2 w-42 p-2 font-extralight hover:border-teal-600 hover:text-teal-600">
          Consigue una copia
        </a>
      </div>
    </div>
  );
};
