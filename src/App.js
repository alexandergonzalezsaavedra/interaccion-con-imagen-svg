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
    try {
      setCargando(true);
      const circulos = document.querySelectorAll("#contentMapAdmin path");
      circulos.forEach((c) => {
        c.classList.add(`circulo`);
      });
      circulos[0].addEventListener("click", (e) => {
        e.preventDefault();
        console.log("click en el azul");
        setTexto(<AzulModule />);
        document.location.href = "#resContentMap";
      });
      circulos[6].addEventListener("click", (e) => {
        e.preventDefault();
        setTexto(<GrisModule />);
        document.location.href = "#resContentMap";
      });
      circulos[3].addEventListener("click", (e) => {
        e.preventDefault();
        setTexto(<AmarilloModule />);
        document.location.href = "#resContentMap";
      });
      circulos[4].addEventListener("click", (e) => {
        e.preventDefault();
        setTexto(<RojoModule />);
        document.location.href = "#resContentMap";
      });
      circulos[2].addEventListener("click", (e) => {
        e.preventDefault();
        setTexto(<NaranjaModule />);
        document.location.href = "#resContentMap";
      });
      circulos[5].addEventListener("click", (e) => {
        e.preventDefault();
        setTexto(<VioletaModule />);
        document.location.href = "#resContentMap";
      });
      circulos[1].addEventListener("click", (e) => {
        e.preventDefault();
        setTexto(<OcreModule />);
        document.location.href = "#resContentMap";
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
            <div id="contentMapAdmin">
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
                  return <div id="resContentMap">{texto}</div>;
                }
              })()}
            </div>
          );
        }
      })()}
    </>
  );
};
export default App;
