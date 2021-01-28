import React from "react";
//Import of images, has to be a better way...
import tangerine1 from "./assets/img/projects/tangerine/tangerine.jpg";
import tangerine2 from "./assets/img/projects/tangerine/tangerine1.png";
import tangerine3 from "./assets/img/projects/tangerine/tangerine2.png";
import tangerine4 from "./assets/img/projects/tangerine/tangerine3.png";
import experimento1 from "./assets/img/projects/experimento/experimento.png";
import experimento2 from "./assets/img/projects/experimento/experimento2.png";
import experimento3 from "./assets/img/projects/experimento/experimento3.png";
import experimento4 from "./assets/img/projects/experimento/experimento4.png";
import teachme1 from "./assets/img/projects/teachme/teachme1.png";
import teachme2 from "./assets/img/projects/teachme/teachme2.png";
import teachme3 from "./assets/img/projects/teachme/teachme3.png";
import teachme4 from "./assets/img/projects/teachme/teachme4.png";
import teachme5 from "./assets/img/projects/teachme/teachme5.png";
import eLibrary1 from "./assets/img/projects/e-library/e-library1.jpg";
import eLibrary2 from "./assets/img/projects/e-library/e-library2.jpg";
import eLibrary3 from "./assets/img/projects/e-library/e-library3.jpg";

const projects = [
  {
    name: ["TeachMe - E-learning platform for UdeG community.",
    "TeachMe - Plataforma de aprendizaje electrónico para la comunidad UdeG"],
    short: ["TeachMe","TeachMe"],
    icon : <i className='fab fa-python'></i>,
    description: [
      <span>
        <p>
          TeachMe is a web platform where all UdeG community (students,
          teachers, doctors, etc) can see, share and create knowledge in various
          available formats such as articles, videos and documents, as well as
          giving feedback to this content.
        </p>
        <p>
          Right now, all people with an UdeG related e-mail can access the site
          and all of its functions with no cost at all.
        </p>
        <p>
          <b>Developed with:</b>
          <br></br>
          Python 3, Django 3, HTML5, CSS3, JavaScript, MySQL, MongoDB, Docker,
          Redis, Nginx, Daphne, Gunicorn
        </p>
        <p>
          <b>Also participated in project:</b>{" "}
          <a
            href="https://alexrobledo.github.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pablo Barrera
          </a>
          ,{" "}
          <a
            href="https://cuauhfer.github.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cuauhtli Benavides
          </a>
        </p>
        <p>
          <b>Want to know more?</b>
          <br></br>
          <a
            href="https://www.youtube.com/channel/UCVsiU2awOny0ZkX8KTcFS_A"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube Channel
          </a>
        </p>
      </span>,
      <span>
        <p>
          TeachMe es una plataforma web donde toda la comunidad UdeG (estudiantes, profesores, doctores, etc) pueden
          ver, compartir y crear conocimiento en diferentes formatos disponibles tales como artículos, videos y documentos,
          además de poder dar retroalimentaciones a este mismo contenido.
        </p>
        <p>
          En este momento, todas las personas con un correo UdeG pueden acceder al sitio y a todas sus funciones
          sin costo alguno.
        </p>
        <p>
          <b>Desarrollado con: </b>
          <br></br>
          Python 3, Django 3, HTML5, CSS3, JavaScript, MySQL, MongoDB, Docker,
          Redis, Nginx, Daphne, Gunicorn
        </p>
        <p>
          <b>También participaron en el proyecto:</b>{" "}
          <a
            href="https://alexrobledo.github.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pablo Barrera
          </a>
          ,{" "}
          <a
            href="https://cuauhfer.github.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cuauhtli Benavides
          </a>
        </p>
        <p>
          <b>¿Quieres saber más?</b>
          <br></br>
          <a
            href="https://www.youtube.com/channel/UCVsiU2awOny0ZkX8KTcFS_A"
            target="_blank"
            rel="noopener noreferrer"
          >
            Canal de YouTube
          </a>
        </p>
      </span>
    ],
    img: (
      <div className="imagesContainer">
        <img src={teachme1} alt="" onClick={() => ShowMaximize(teachme1)} />
        <img src={teachme2} alt="" onClick={() => ShowMaximize(teachme2)} />
        <img src={teachme3} alt="" onClick={() => ShowMaximize(teachme3)} />
        <img src={teachme4} alt="" onClick={() => ShowMaximize(teachme4)} />
        <img src={teachme5} alt="" onClick={() => ShowMaximize(teachme5)} />
      </div>
    ),
  },
  {
    name: ["Tangerine - Data mining desktop application","Tangerine - Aplicación de escritorio para la minería de datos"],
    short: ["Tangerine","Tangerine"],
    icon : <i className='fab fa-windows'></i>,
    description: [
      <span>
        <p>
          Tangerine is a Windows desktop application to manipulate and analize
          given data from a csv file. Tangerine has tools for data cleaning,
          multi-variable analysis, data graphing and many others that helps the
          user make their analysis in a simple and intituive way.
        </p>
        <p>
          <b>Developed with:</b>
          <br></br>
          C#, .NET
        </p>
        <p>
          <b>Also participated in project:</b>{" "}
          <a
            href="https://alexrobledo.github.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pablo Barrera
          </a>
        </p>
        <p>
          <b>Want to know more?</b>
          <br></br>
          <a
            href="https://github.com/AlexRobledo/Tangerine"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source Code
          </a>
        </p>
      </span>,
      <span>
        <p>
          Tangerine es una aplicación de escritorio Windows para manipular y analizar
          la información dada desde un archivo csv. Tangerine cuenta con herramientas para la limpieza
          de datos, análisis multivariable, gráfico de datos y muchas otras las cuales ayudan al usuario
          a hacer un análisis de una manera simple e intuitiva.
        </p>
        <p>
          <b>Desarrollado con:</b>
          <br></br>
          C#, .NET
        </p>
        <p>
          <b>También participaron en el proyecto:</b>{" "}
          <a
            href="https://alexrobledo.github.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pablo Barrera
          </a>
        </p>
        <p>
          <b>¿Quieres saber más?</b>
          <br></br>
          <a
            href="https://github.com/AlexRobledo/Tangerine"
            target="_blank"
            rel="noopener noreferrer"
          >
            Código Fuente
          </a>
        </p>
      </span>
    ],
    img: (
      <div className="imagesContainer">
        <img src={tangerine1} alt="" onClick={() => ShowMaximize(tangerine1)} />
        <img src={tangerine2} alt="" onClick={() => ShowMaximize(tangerine3)} />
        <img src={tangerine3} alt="" onClick={() => ShowMaximize(tangerine3)} />
        <img src={tangerine4} alt="" onClick={() => ShowMaximize(tangerine4)} />
      </div>
    ),
  },
  {
    name: ["Experimento Piratas - Videogame to test student's behaviour",
    "Experimento Piratas - Videojuego para analizar el comportamiento de los estudiantes"],
    short: ["Experimento Piratas","Experimento Piratas"],
    icon : <i className='fab fa-unity'></i>,
    description: [
      <span>
        <p>
          <i>Experimento Piratas </i> is a PC online multiplayer game that test
          student's behaviours and approaches to solve a specific situation
          where they have to work as a team to solve a problem.<br></br>
        </p>
        <p>
          In the game, a pirate boat has exploded and the pieces landed on
          diferent islands of the archipelago. Each of the players (max 4) take
          the roll of a pirate of the tripulation and have to retrieve the
          boat's pieces and assemble it again in a limited time. But, every of
          the pirates has a different condition that changes the gameplay, there
          is a pirate that moves slower, other that cannot lift heavy pieces of
          the boat, another is color blind and the last one is deaf.
        </p>
        <p>
          <b>Developed with:</b>
          <br></br>
          Unity 2017.4, C#, JavaScript
        </p>
        <p>
          <b>Want to know more?</b>
          <br></br>
          <a
            href="http://www.scielo.mec.pt/scielo.php?pid=S1646-98952015000400007&script=sci_arttext&tlng=es"
            target="_blank"
            rel="noopener noreferrer"
          >
            Proposal (document)
          </a>
          <br></br>
          <a
            href="https://github.com/juliomorales98/Experimento-Piratas"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source Code
          </a>
        </p>
      </span>,
      <span>
        <p>
          Experimento Piratas es un videojuego multijugador para PC que estudia el comportamiento
          y las estrategias que los estudiantes toman para resolver un problema específico en donde
          tienen que trabajar como equipo para lograrlo.<br></br>
        </p>
        <p>
          Dentro del juego, un bote pirata ha explotado y las piezas se han esparcido en las diferente islands
          del archipiélago. Cada uno de los jugadores (máximo 4) toma el rol de un pirata de la tripulación y juntos tienen que 
          recuperar las piezas del bote y ensamblarlo de nuevo dentro de un límite de tiempo. Pero, cada pirata tiene una 
          condición que cambia la jugabilidad, se tiene un pirata que se mueve más lento, otro que no puede cargar las piezas
          más pesadas del bote, otro que es daltónico y el último es sordo.
        </p>
        <p>
          <b>Desarrollado con:</b>
          <br></br>
          Unity 2017.4, C#, JavaScript
        </p>
        <p>
          <b>¿Quieres saber más?</b>
          <br></br>
          <a
            href="http://www.scielo.mec.pt/scielo.php?pid=S1646-98952015000400007&script=sci_arttext&tlng=es"
            target="_blank"
            rel="noopener noreferrer"
          >
            Propuesta (documento)
          </a>
          <br></br>
          <a
            href="https://github.com/juliomorales98/Experimento-Piratas"
            target="_blank"
            rel="noopener noreferrer"
          >
            Código fuente
          </a>
        </p>
      </span>
    ],
    img: (
      <div className="imagesContainer">
        <img
          src={experimento1}
          alt=""
          onClick={() => ShowMaximize(experimento1)}
        />
        <img
          src={experimento2}
          alt=""
          onClick={() => ShowMaximize(experimento2)}
        />
        <img
          src={experimento3}
          alt=""
          onClick={() => ShowMaximize(experimento3)}
        />
        <img
          src={experimento4}
          alt=""
          onClick={() => ShowMaximize(experimento4)}
        />
      </div>
    ),
  },
  {
    name: ["E-library: Manage and share your pdfs", "E-library: Administra y comparte tus pdfs"],
    short: ["E-library","E-library"],
    icon : <i className='fab fa-php'></i>,
    description: [
      <div>
        <p>
          E-library is a platform where you can upload, delete, share (soon) and
          read them in a simple and easy way.
        </p>
        <p>
          <b>Developed with:</b>
          <br></br>
          PHP, HTML5, CSS, JavaScript
        </p>
        <p>
          <b>Want to know more?</b>
          <br></br>
          <a
            href="https://github.com/juliomorales98/e-library"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source Code
          </a>
        </p>
      </div>,
      <div>
        <p>
          E-library es una plataforma en donde tu puedes cargar, eliminar, compartir (pronto) y leer tus archivos pdf
          de una manera sencilla.
        </p>
        <p>
          <b>Desarrollado con:</b>
          <br></br>
          PHP, HTML5, CSS, JavaScript
        </p>
        <p>
          <b>¿Quieres saber más</b>
          <br></br>
          <a
            href="https://github.com/juliomorales98/e-library"
            target="_blank"
            rel="noopener noreferrer"
          >
            Código fuente
          </a>
        </p>
      </div>
    ],
    img: (
      <div className="imagesContainer">
        <img src={eLibrary1} alt="" onClick={() => ShowMaximize(eLibrary1)} />
        <img src={eLibrary2} alt="" onClick={() => ShowMaximize(eLibrary2)} />
        <img src={eLibrary3} alt="" onClick={() => ShowMaximize(eLibrary3)} />
      </div>
    ),
  },
];

export default projects;

function ShowMaximize(img) {
  // Show image in preview mode (maximized), receives the image itself
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("imgMaximized");
  modal.style.display = "block";
  modalImg.src = img;
}
