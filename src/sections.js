import React from "react";

const sections = [
  {
    title: ["Information", "Información"],
    par: [
      <div>
        <p>
          My name is Julio Cesar Morales Ramos, I'm 22 years old and I'm a
          Computer Science graduate from Universidad de Guadalajara.
        </p>
        <p>FOSS, music and basquetball enthusiast, I do not use Arch btw.</p>
      </div>,
      <div>
        {/*Español*/}
        <p>
          Mi nombre es Julio Cesar Morales Ramos, tengo 22 años y estudio
          Ingeniería en Informática en la Universidad de Guadalajara
        </p>
        <p>
          Soy un entusiasta del FOSS, la música y el basquetball, y no uso Arch
          btw.
        </p>
      </div>,
    ],
    extra: [
      <div>
        <a
          href="mailto:juliocesar.mr@protonmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="envelope"
        >
          <i className="fa fa-envelope-square"></i> E-mail
        </a>
        <a
          href="https://www.linkedin.com/in/julio-morales-2336a11b0/"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin"
        >
          <i className="fab fa-linkedin-in"></i> Linkedin
        </a>
        <a
          href="https://github.com/juliomorales98"
          target="_blank"
          rel="noopener noreferrer"
          className="github"
        >
          <i className="fab fa-github"></i> GitHub
        </a>
      </div>,
      <div>
        {/*Español*/}
        <a
          href="mailto:juliocesar.mr@protonmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="envelope"
        >
          <i className="fa fa-envelope-square"></i> Correo electrónico
        </a>
        <a
          href="https://www.linkedin.com/in/julio-morales-2336a11b0/"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin"
        >
          <i className="fab fa-linkedin-in"></i> Linkedin
        </a>
        <a
          href="https://github.com/juliomorales98"
          target="_blank"
          rel="noopener noreferrer"
          className="github"
        >
          <i className="fab fa-github"></i> GitHub
        </a>
      </div>,
    ],
  },
  {
    title: ["Skills", "Habilidades"],
    par: [
      <div>
        {/*English*/}
        <p>
          My skills are focused on desktop development and server
          administration, but I have Web development experience as well.
        </p>
      </div>,
      <div>
        {/*Español*/}
        <p>
          Mis habilidades están enfocadas en el desarrollo de escritorio y la
          administración de servidores, aunque también cuento con experiencia en
          el desarrollo web.
        </p>
      </div>,
    ],
    extra: [
      <div>
        <ul>
          <li>
            <i className="fab fa-java"></i> Java
          </li>
          <li>
            <i className="fab fa-python"></i> Python3/Django
          </li>
          <li>
            <i className="fab fa-stack-overflow"></i> JavaScript/React
          </li>
          <li>
            <i className="fab fa-html5"></i> Web Development
          </li>
          <li>
            <i className="fa fa-table"></i> SQL
          </li>
          <li>
            <i className="fab fa-linux"></i> Linux
          </li>
          <li>
            <i className="fab fa-unity"></i> C# / Unity
          </li>
         <li>
           <i className="fab fa-git"></i> Git
         </li> 
        </ul>
      </div>,
      <div>
        <ul>
          <li>
            <i className="fab fa-java"></i> Java
          </li>
          <li>
            <i className="fab fa-python"></i> Python3/Django
          </li>
          <li>
            <i className="fab fa-stack-overflow"></i> JavaScript/React
          </li>
          <li>
            <i className="fab fa-html5"></i> Desarrollo web
          </li>
          <li>
            <i className="fa fa-table"></i> SQL
          </li>
          <li>
            <i className="fab fa-linux"></i> Linux
          </li>
          <li>
            <i className="fab fa-unity"></i> C# / Unity
          </li>
         <li>
           <i className="fab fa-git"></i> Git
         </li> 
        </ul>
      </div>,
    ],
  },
  {
    title: ["Projects", "Proyectos"],
    par: [
      <div>
        <p>Personal and teamed-up projects.</p>
      </div>,
      <div>
        <p>Projectos personales y en equipo</p>
      </div>,
    ],
    extra: ["", ""],
  },
];

export default sections;
