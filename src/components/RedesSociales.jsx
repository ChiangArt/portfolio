export const RedesSociales = () => {
  return (
    <div className="redes h-[250px] text-center p-14 flex flex-col gap-10">
      <div className="flex flex-row justify-center items-center gap-5">
        <a className="transform hover:scale-125 flex justify-center items-center hover:bg-white hover:duration-300 transition-all" href="https://www.linkedin.com/in/bryan-lee-chiang-arteaga-048452196/" target="_blank">
          <img src="./linkedin.png" alt="" />
        </a>
        <a className="transform hover:scale-125 flex justify-center items-center hover:bg-white hover:duration-300 transition-all" href="https://es-la.facebook.com/" target="_blank">
          <img src="./fb.png" alt="" />
        </a>
        <a className="transform hover:scale-125 flex justify-center items-center hover:bg-white hover:duration-300 transition-all" href="https://github.com/ChiangArt" target="_blank">
          <img src="./github.png" alt="" />
        </a>
        <a className="transform hover:scale-125 flex justify-center items-center hover:bg-white hover:duration-300 transition-all" href="https://www.instagram.com/bryanchiang_art" target="_blank">
          <img src="./instagram_15527615.png" alt="" />
        </a>
      </div>
      <p className="text-white">&copy; Bryan Chiang 2023</p>
    </div>
  );
};
