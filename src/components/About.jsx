export const About = () => {
  return (
    <div
      id="/about"
      className="flex flex-col font-normal items-center text-black"
    >
      <div className="mt-28 content-center w-2/3 sm:w-2/3 lg:w-2/4">
        <div className="items-center h-full w-full flex flex-col">
          <h2 className="text-4xl uppercase">Un poco sobre mí</h2>
          <div className="rounded-full overflow-hidden mb-5 mt-5">
            <img
              className="block mx-auto h-60 w-60 object-cover"
              src="/portfolio/public/about2.jpg"
              alt=""
            />
          </div>
          <p className="text-center text-xl font-light">
            ¡Hola! Me llamo Bryan y soy desarrolladora web. Me apasiona el
            diseño y el desarrollo front-end. Actualmente soy estudiante de
            Computacion e Informatica en{" "}
            <a
              href="https://www.cibertec.edu.pe/"
              target="_blank"
              className="underline text-blue-800 hover:text-blue-400"
            >
              Cibertec
            </a>{" "}
            y estoy llevando unos cursos externos para Full Stack. Aspiro a una
            carrera que me permita canalizar mi creatividad mediante la creación
            de software atractivo y experiencias atractivas.<br></br>
            <br></br>
            Cuando no estoy frente a la computadora, disfruto de viajar, hacer
            ejercicios y acariciar perros.
          </p>
        </div>
        <div className=" bg-aditional w-full gap-10 flex flex-col items-center text-center rounded-xl p-5 mt-10">
          <h3 className="text-2xl">AUTOPROCLAMACIONES: </h3>

          <div className="sm:flex sm:flex-row sm:items-center flex flex-col gap-14">
            <div>
              <div className="flex flex-col items-center">
                <img
                  className="h-20 w-20"
                  src="./keyboard.png"
                  alt="keyboard"
                />
              </div>
              <p className="sm:mt-8 mt-4 text-sm text-center">Desarrollo web</p>
            </div>

            <div>
              <div className="flex flex-col items-center">
                <img
                  className="h-20 w-20"
                  src="./pencil-case.png"
                  alt="pencil"
                />
              </div>
              <p className="sm:mt-8 mt-4 text-sm text-center">
                Entusiasta de la <br />
                experiencia de usuario
              </p>
            </div>

            <div>
              <div className="flex flex-col items-center">
                <img className="h-20 w-20" src="./travel.png" alt="travel" />
              </div>
              <p className="sm:mt-8 mt-4 text-sm text-center">Viajar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
