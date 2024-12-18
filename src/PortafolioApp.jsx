import { About, Contacto, DescargarCv, Experience, Header, Pasion, Proyectos, RedesSociales } from './components';



export const PortafolioApp = () => {
  return (
    <div className="text-black">
      <Header/>
      {/* secction About */}
      <About/>
      {/* secction Pasion */}
      <Pasion/>
      {/* secction Experience */}
      <Experience/>
      {/* secction Conctacto */}
      <DescargarCv/>
      {/* secction Proyectos */}
      <Proyectos/>
      {/* seccion Contacto */}
      <Contacto/>
      {/* footer */}
      <RedesSociales/>
    </div>
  )
}

