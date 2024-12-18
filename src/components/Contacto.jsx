export const Contacto = () => {
  return (
    <div className="h-[300px] bg-aditional">
      <div className="w-full h-full flex flex-col justify-center items-center text-center gap-5 overflow-hidden">
        <img src="/paper-plane.png" className="w-20 h-20" />
        <p className="text-lg md:text-3xl">¡PONGASE EN CONTACTO!</p>
        <p className="text-sm md:text-base">
          Si tienes una idea para un proyecto o simplemente quieres charlar, ¡no
          dudes en enviarme un correo electrónico!
        </p>
        <a className="border-2 border-y-neutral-950 border-spacing-28  hover:text-teal-600 hover:border-y-teal-600" href="mailto:bryan_94tj@hotmail.com?subject=Consulta sobre el CV&body=Hola, me gustaría saber más sobre tu experiencia.">
          Envíame un correo
        </a>
      </div>
    </div>
  );
};
