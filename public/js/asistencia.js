let button = document.getElementById('btnCantidadAlumnos');
var cantidadAlumnos;
var alumnos = [];
const DIAS = 10;
const LIBRE = 5;

button.onclick = function () {
  let cant = prompt('Ingrese cantidad de Alumnos: ');
  cantidadAlumnos = cant;

  for (i = 0; i < cantidadAlumnos; i++) {
    alumnos[i] = [prompt("Nombre alumno " + (i + 1)), 0];
  }

  for (i = 0; i < DIAS; i++) {
    for (a in alumnos) {
      tomarAsistencia(alumnos[a][0], a, i + 1)
    }
  }

  let resultado = document.getElementById("resultados");
  resultado.innerHTML = "<strong>Listado de Alumnos</strong><br><hr>"
  for (aux in alumnos) {
    resultado.innerHTML += `
    ${alumnos[aux][0]}<br>
    ___________PRESENTES: ${alumnos[aux][1]}<br>
    ___________AUSENTES: ${DIAS - alumnos[aux][1]}<br>
    `;
    if ((DIAS - alumnos[aux][1]) > LIBRE) {
      resultado.innerHTML += "<b style='color: red'>ALUMNO LIBRE</b> <br>"
    };
    resultado.innerHTML += "<br>"
  }


}

function tomarAsistencia(nombre, p, d) {
  estado = prompt(nombre + " Estado día " + d.toString() + ": ==> <P-p: Presente> o <A-a: Ausente")
  if (estado == "P" || estado == "p") {
    alumnos[p][1]++
  }
}






