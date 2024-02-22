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
import InicioConveniosMapa from "./components/Inicio/InicioConveniosMapa.Module";
const App = () => {
  const [texto, setTexto] = useState();
  const [cargando, setCargando] = useState(false);
  window.addEventListener("load", function () {
    try {
      setCargando(true);
      const circulos = document.querySelectorAll("#contentMapAdmin path");
      const quitarActive = () => {
        circulos.forEach((c) => {
          c.classList.remove(`activeMap`);
        });
      };
      circulos.forEach((c) => {
        c.classList.add(`circulo`);
      });
      circulos[0].addEventListener("click", (e) => {
        e.preventDefault();
        setTexto(<AzulModule />);
        quitarActive();
        circulos[0].classList.add("activeMap");
        //document.location.href = "#resContentMap";
      });
      circulos[6].addEventListener("click", (e) => {
        e.preventDefault();
        setTexto(<GrisModule />);
        quitarActive();
        circulos[6].classList.add("activeMap");
      });
      circulos[3].addEventListener("click", (e) => {
        e.preventDefault();
        setTexto(<AmarilloModule />);
        quitarActive();
        circulos[3].classList.add("activeMap");
      });
      circulos[4].addEventListener("click", (e) => {
        e.preventDefault();
        setTexto(<RojoModule />);
        quitarActive();
        circulos[4].classList.add("activeMap");
      });
      circulos[2].addEventListener("click", (e) => {
        e.preventDefault();
        setTexto(<NaranjaModule />);
        quitarActive();
        circulos[2].classList.add("activeMap");
      });
      circulos[5].addEventListener("click", (e) => {
        e.preventDefault();
        setTexto(<VioletaModule />);
        quitarActive();
        circulos[5].classList.add("activeMap");
      });
      circulos[1].addEventListener("click", (e) => {
        e.preventDefault();
        setTexto(<OcreModule />);
        quitarActive();
        circulos[1].classList.add("activeMap");
      });
    } catch (error) {
    } finally {
      setCargando(false);
    }
  });
  const Controls = () => {
    const { zoomIn, zoomOut, resetTransform } = useControls();
    return (
      <div className="btn-group gap-1">
        <button onClick={() => zoomIn()} className="btn btn-primary rounded-0">
          Acercar
        </button>
        <button onClick={() => zoomOut()} className="btn btn-primary rounded-0">
          Alejar
        </button>
        <button
          onClick={() => resetTransform()}
          className="btn btn-primary rounded-0"
        >
          Restablecer tamaño
        </button>
      </div>
    );
  };
  return (
    <>
      {(() => {
        if (cargando) return <LoadingModule />;
        else {
          return (
            <>
              <div className="container text-center mb-3">
                <h3>Vive una experiencia global:</h3>
                <p>Descubre las experiencias internacionales que te esperan</p>
              </div>
              <div className="row" id="contentMapAdmin">
                <div className="col-sm-6">
                  <TransformWrapper>
                    <small>
                      elige un pais para conocer los convenios con la
                      universidad
                    </small>
                    <br />
                    <TransformComponent>
                      <CirculosSvg />
                    </TransformComponent>
                    <Controls />
                  </TransformWrapper>
                  <button
                    className="btn btn-outline-danger rounded-0"
                    onClick={() => {
                      setTexto(<InicioConveniosMapa />);
                    }}
                  >
                    Cantidad de convenios
                  </button>
                </div>
                {(() => {
                  if (!texto) {
                    return (
                      <div className="col-sm-6">
                        <div style={{ paddingTop: "100px" }}>
                          <InicioConveniosMapa />
                        </div>
                      </div>
                    );
                  } else {
                    return (
                      <div className="col-sm-6">
                        <div id="resContentMap" style={{ paddingTop: "150px" }}>
                          {texto}
                        </div>
                      </div>
                    );
                  }
                })()}
              </div>
            </>
          );
        }
      })()}
    </>
  );
};
export default App;
