import { ComputerDesktopIcon, CodeBracketIcon, LightBulbIcon } from "@heroicons/react/24/outline";

export const Pasion = () => {
  return (
    <div id="/pasion" className="text-gray-950 mt-24 text-center bg-aditional">
      <div className="flex flex-col">
        <h2 className="text-4xl uppercase mt-12">Lo que hago</h2>
        <div className="flex flex-col gap-12 lg:gap-28 lg:flex-row p-7 overflow-hidden mt-6">
          
          {/* Primer div */}
          <div className="flex flex-col gap-7 lg:w-1/3 items-center">
            <div className="flex justify-center items-center w-40 h-40 bg-amber-400 rounded-full lg:mb-10">
              <ComputerDesktopIcon className="w-28 h-28 transition-transform duration-300 sm:hover:scale-110" />
            </div>
            <p className="font-semibold uppercase">Diseño</p>
            <p className="text-sm leading-6 text-center">El diseño no se limita a la apariencia y la sensación que transmite un producto por fuera. El diseño abarca la funcionalidad interna de un producto, así como la experiencia general del usuario. Me esfuerzo por diseñar interfaces y experiencias que las personas puedan disfrutar en todos los medios digitales.</p>
          </div>

          {/* Segundo div */}
          <div className="flex flex-col gap-7 lg:w-1/3 items-center">
            <div className="flex justify-center items-center w-40 h-40 bg-amber-400 rounded-full lg:mb-10">
              <CodeBracketIcon className="w-28 h-28 transition-transform duration-300 sm:hover:scale-110" />
            </div>
            <p className="font-semibold uppercase">Desarrollo</p>
            <p className="text-sm leading-6 text-center">Con una sólida base en informática, me apasiona el diseño y el desarrollo web y me interesa el desarrollo de aplicaciones móviles. A medida que crezca como desarrollador, espero escribir código limpio y legible que otros puedan usar y aprovechar para crear un software atractivo.</p>
          </div>

          {/* Tercer div */}
          <div className="flex flex-col gap-7 lg:w-1/3 items-center">
            <div className="flex justify-center items-center w-40 h-40 bg-amber-400 rounded-full lg:mb-10">
              <LightBulbIcon className="w-28 h-28 transition-transform duration-300 sm:hover:scale-110" />
            </div>
            <p className="font-semibold uppercase">Participación</p>
            <p className="text-sm leading-6 text-center">Actualmente mi participación abarca a proyectos personales y grupales dentro de mi Institución, sin embargo siempre participo activamente en foros de Discord y grupos estudiantiles con el fin de expandir mis conocimientos.</p>
          </div>
          
        </div>
      </div>
    </div>
  );
}