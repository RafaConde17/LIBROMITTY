let paginaActual = 0;

/* 📖 TODAS LAS PÁGINAS DEL LIBRO */
const paginas = [
  {
    izquierda: {
      titulo: "DARLING",
      imagen: "fotos/IMG2.png",
      texto: "Amor buenas noches, se que es tarde pero la verdad queria hacerte este detalle por lo mucho que te amo. tu sabes que hoy estaba mal pero igualmente me disculpo,tambien me disculpo por lo del pollo creo que hice mal en no exigir pero dejando eso, encontre esto en mis recuerdos.se q son de roblox pero para mi es importante por todo lo q vivimos esos tiempos."
    },
    derecha: {
      titulo: "HONEY",
      imagen: "fotos/IMG4.png",
      texto: "Amor, yo quiero estar toda mi vida contigo por que para mi eres la mejor persona del mundo, para mi solo existes tu, te amo mucho demasiado, que cada vez que pienso en ti me pongo muy feliz y empiezo a llorar de felicidad"
    }
  },

  {
    izquierda: {
      titulo: "11 JUNIO",
      imagen: "fotos/IMG6.jpg",
      texto: "Amor eres una gran persona, se que cumplirás cada una de tus metas y yo siempre te apoyaré en todo lo que tu quieras, quiero que te vaya bien en tu carrera, con tu familia y que tu seas muy feliz por que eres una gran mujer y te lo mereces."
    },
    derecha: {
      titulo: "Eternal Sunshine",
      imagen: "fotos/IMG5.png",
      texto: "Y por ultimo quiero recordarte que yo siempre estaré para ti en las buenas y las malas, cada dia intento mejorar para estar mejor y hacerte muy feliz y asi será hasta que sea abuelita, siempre resolveré los problemas para que estemos bien y cuidar mucho tu corazoncito mi vida muchas gracias por las flores, soy la mujer mas feliz del mundo y yo se que quiza soy muy tonta pero creeme que el amor q yo siento por ti es muy grande quisiera ser tu enamorada, tu novia y tu esposa"
    }
  }
];

/* ================= AUDIO ================= */

function fadeInAudio(audio) {
  audio.volume = 0;
  audio.play();

  let vol = 0;
  const intervalo = setInterval(() => {
    if (vol < 0.5) {
      vol += 0.02;
      audio.volume = vol;
    } else {
      clearInterval(intervalo);
    }
  }, 120);
}

/* ================= CONTROLES ================= */

function abrirLibro() {
  document.getElementById("portada").classList.add("oculto");
  document.getElementById("libro").classList.remove("oculto");

  const musica = document.getElementById("musica");
  fadeInAudio(musica);

  paginaActual = 0;
  renderPaginas();
}

function cerrarLibro() {
  document.getElementById("libro").classList.add("oculto");
  document.getElementById("portada").classList.remove("oculto");

  const musica = document.getElementById("musica");
  musica.pause();
  musica.currentTime = 0;
}

function siguientePagina() {
  if (paginaActual < paginas.length - 1) {
    paginaActual++;
    renderPaginas();
  }
}

function paginaAnterior() {
  if (paginaActual > 0) {
    paginaActual--;
    renderPaginas();
  }
}

/* ================= RENDER ================= */

function renderPaginas() {
  const izquierda = document.getElementById("izquierda");
  const derecha = document.getElementById("derecha");

  const pagina = paginas[paginaActual];

  izquierda.innerHTML = `
    <h2>${pagina.izquierda.titulo}</h2>

    <div class="marco-foto">
      <img src="${pagina.izquierda.imagen}" class="imagen-romantica">
      <span class="nota-foto">♥</span>
    </div>

    <p>${pagina.izquierda.texto}</p>
  `;

  derecha.innerHTML = `
    <h2>${pagina.derecha.titulo}</h2>

    <div class="marco-foto">
      <img src="${pagina.derecha.imagen}" class="imagen-romantica">
      <span class="nota-foto">♥</span>
    </div>

    <p>${pagina.derecha.texto}</p>

    <div class="controles">
      ${
        paginaActual > 0
          ? `<button onclick="paginaAnterior()">← Anterior</button>`
          : `<button onclick="cerrarLibro()">Cerrar</button>`
      }

      ${
        paginaActual < paginas.length - 1
          ? `<button onclick="siguientePagina()">Siguiente →</button>`
          : `<button onclick="cerrarLibro()">Cerrar</button>`
      }
    </div>
  `;

  izquierda.setAttribute("data-page", paginaActual * 2 + 1);
  derecha.setAttribute("data-page", paginaActual * 2 + 2);
}

/* ================= CORAZONES ================= */

function crearCorazones() {
  const contenedor = document.querySelector(".corazones-fondo");

  setInterval(() => {
    const corazon = document.createElement("div");
    corazon.classList.add("corazon");
    corazon.innerHTML = "♥";

    corazon.style.left = Math.random() * 100 + "vw";
    corazon.style.fontSize = 28 + Math.random() * 40 + "px";
    corazon.style.animationDuration = 6 + Math.random() * 6 + "s";

    contenedor.appendChild(corazon);

    setTimeout(() => {
      corazon.remove();
    }, 12000);

  }, 120);
}

crearCorazones();
