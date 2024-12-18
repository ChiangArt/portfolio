export const About = () => {
  return (
    <div
      id="/about"
      className="flex flex-col font-normal items-center text-center text-black"
    >
      <div className="mt-28 content-center max-w-[70%]">
        <div className="items-center h-full w-full flex flex-col gap-10">
          <h2 className="text-4xl uppercase">Un poco sobre mí</h2>
          <div className="rounded-full overflow-hidden mb-5 mt-5">
            <img
              className="block mx-auto h-60 w-60 object-cover"
              src="/public/IMG-20241217-WA0157.jpg"
              alt=""
            />
          </div>
          <p className="text-center text-xl font-light">
            ¡Hola! Me llamo Bryan y soy desarrolladora web. Me apasiona el
            diseño y el desarrollo front-end. Actualmente soy estudiante de
            Computacion e Informatica en
            <a
              href="https://www.cibertec.edu.pe/"
              target="_blank"
              className=" text-blue-800 hover:text-blue-400"
            >
              {" "}
              Cibertec{" "}
            </a>
            y estoy llevando unos cursos externos para Full Stack. Aspiro a una
            carrera que me permita canalizar mi creatividad mediante la creación
            de software atractivo y experiencias atractivas.<br></br>
            <br></br>
            Cuando no estoy frente a la computadora, disfruto de viajar, hacer
            ejercicios y acariciar perros.
          </p>
        </div>
        <div className=" bg-aditional w-full gap-10 flex flex-col text-center rounded-xl p-5 mt-10">
          <h3 className="md:text-2xl">AUTOPROCLAMACIONES: </h3>

          <div className="grid md:grid-cols-3 items-center gap-24">
            <div className="flex flex-col items-center justify-between gap-12 h-full">
              <img className="h-20 w-h-20" src="/keyboard.png" alt="keyboard" />
              <p>Desarrollador Full Stack</p>
            </div>

            <div className="flex flex-col items-center justify-between gap-12 h-full">
              <img
                className="h-20 w-h-20"
                src="/pencil-case.png"
                alt="pencil"
              />
              <p>Entusiasta de la experiencia de usuario</p>
            </div>

            <div className="flex flex-col items-center justify-between gap-12 h-full">
              <img className="h-20 w-h-20" src="/travel.png" alt="travel" />
              <p>Viajar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
