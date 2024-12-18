export const Experience = () => {
  return (
    <div id="/experiencia" className="text-black">
      <div className="flex flex-col text-center w-9/12 mx-auto gap-4">
        <h2 className="text-4xl uppercase mt-12">Experiencia</h2>
        <p>
          He estado haciendo desarrollo web durante aproximadamente 2 años y
          siempre estoy ansioso por aprender más en esta industria de rápido
          movimiento.
        </p>
      </div>
      <div className="flex-col flex text-center gap-20 justify-center items-center w-9/12 mx-auto mt-16 uppercase sm:gap-40 sm:flex-row sm:justify-normal sm:items-start">
        
        <div className="flex flex-col justify-between">
          <p>Algunas tecnologías con las que he trabajado:</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9 mt-4">
            <img
              src="./html-5.png"
              alt="html imagen"
              className="filter lg:grayscale object-contain w-[6em] h-[6em] mx-auto hover:grayscale-0 transition duration-500"
            />
            <img
              src="./css-3.png"
              alt="css imagen"
              className="filter lg:grayscale object-contain w-[6em] h-[6em] mx-auto hover:grayscale-0 transition duration-500"
            />
            <img
              src="./tailwind.png"
              alt="tailwind imagen"
              className="filter lg:grayscale object-contain w-[6em] h-[6em] mx-auto hover:grayscale-0 transition duration-500"
            />
            <img
              src="./bootstrap.png"
              alt="boostrap imagen"
              className="filter lg:grayscale object-contain w-[6em] h-[6em] mx-auto hover:grayscale-0 transition duration-500"
            />
            <img
              src="./js.png"
              alt="javascript imagen"
              className="filter lg:grayscale object-contain w-[6em] h-[6em] mx-auto hover:grayscale-0 transition duration-500"
            />
            <img
              src="./physics.png"
              alt="physics imagen"
              className="filter lg:grayscale object-contain w-[6em] h-[6em] mx-auto hover:grayscale-0 transition duration-500"
            />
            <img
              src="./java.png"
              alt="java imagen"
              className="filter lg:grayscale object-contain w-[6em] h-[6em] mx-auto hover:grayscale-0 transition duration-500"
            />
            <img
              src="./sql-server.png"
              alt="sql-server imagen"
              className="filter lg:grayscale object-contain w-[6em] h-[6em] mx-auto hover:grayscale-0 transition duration-500"
            />
            <img
              src="./mysql.png"
              alt="mysql imagen"
              className="filter lg:grayscale object-contain w-[6em] h-[6em] mx-auto hover:grayscale-0 transition duration-500"
            />
            <img
              src="./nodejs.png"
              alt="nodejs imagen"
              className="filter lg:grayscale object-contain w-[6em] h-[6em] mx-auto hover:grayscale-0 transition duration-500"
            />
            <img
              src="./git.png"
              alt="git imagen"
              className="filter lg:grayscale object-contain w-[6em] h-[6em] mx-auto hover:grayscale-0 transition duration-500"
            />
            <img
              src="./github.png"
              alt="github imagen"
              className="filter lg:grayscale object-contain w-[6em] h-[6em] mx-auto hover:grayscale-0 transition duration-500"
            />
            <img
              src="./typescript.png"
              alt="github imagen"
              className="filter lg:grayscale object-contain w-[6em] h-[6em] mx-auto hover:grayscale-0 transition duration-500"
            />
          </div>
        </div>
        <div className="flex flex-col gap-5 justify-center items-center">
          <p>Dónde he trabajado</p>
          <img className="w-32 h-16 object-contain" src="./logoBienvenidaCalma.png" alt="" />
        </div>
      </div>
    </div>
  );
};
