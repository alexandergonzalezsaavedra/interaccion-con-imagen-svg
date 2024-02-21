import {
  TransformWrapper,
  TransformComponent,
  useControls,
} from "react-zoom-pan-pinch";
import CirculosSvg from "./icons/circulos/circulos.ico";
import { useState } from "react";
import AzulModule from "./components/Colores/Azul.Module";
import GrisModule from "./components/Colores/Gris.Module";
import AmarilloModule from "./components/Colores/Amarillo.Module";
import RojoModule from "./components/Colores/Rojo.Module";
import NaranjaModule from "./components/Colores/Naranja.Module";
import VioletaModule from "./components/Colores/Violeta.Module";
import OcreModule from "./components/Colores/Ocre.Module";
import LoadingModule from "./components/Loading/Loading.Module";

const App = () => {
  const [texto, setTexto] = useState();
  const [cargando, setCargando] = useState(false);
  window.addEventListener("load", function () {
    setCargando(true);
    try {
      const circulos = document.querySelectorAll("circle");
      circulos.forEach((c) => {
        c.classList.add(`circulo`);
      });
      let [azul, gris, amarillo, rojo, naranja, violeta, ocre] = circulos;
      console.log(azul);
      azul.addEventListener("click", (e) => {
        e.preventDefault();
        setTexto(<AzulModule />);
      });
      gris.addEventListener("click", (e) => {
        e.preventDefault();
        setTexto(<GrisModule />);
      });
      amarillo.addEventListener("click", (e) => {
        e.preventDefault();
        setTexto(<AmarilloModule />);
      });
      rojo.addEventListener("click", (e) => {
        e.preventDefault();
        setTexto(<RojoModule />);
      });
      naranja.addEventListener("click", (e) => {
        e.preventDefault();
        setTexto(<NaranjaModule />);
      });
      violeta.addEventListener("click", (e) => {
        e.preventDefault();
        setTexto(<VioletaModule />);
      });
      ocre.addEventListener("click", (e) => {
        e.preventDefault();
        setTexto(<OcreModule />);
      });
    } catch (error) {
    } finally {
      setCargando(false);
    }
  });
  const Controls = () => {
    const { zoomIn, zoomOut, resetTransform } = useControls();
    return (
      <>
        <button onClick={() => zoomIn()}>Acercar</button>
        <button onClick={() => zoomOut()}>Alejar</button>
        <button onClick={() => resetTransform()}>Restablecer tamaño</button>
      </>
    );
  };
  return (
    <>
      {(() => {
        if (cargando) return <LoadingModule />;
        else {
          return (
            <>
              <TransformWrapper>
                <Controls />
                <TransformComponent>
                  <CirculosSvg />
                </TransformComponent>
              </TransformWrapper>
              {(() => {
                if (!texto) {
                  return (
                    <>
                      <h3>Seleccione un color</h3>
                    </>
                  );
                } else {
                  return texto;
                }
              })()}
            </>
          );
        }
      })()}
    </>
  );
};
export default App;
