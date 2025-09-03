// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombres
let amigos = [];

// Capturas de elementos del DOM
const inputAmigo = document.getElementById('amigo');
const listaAmigosEl = document.getElementById('listaAmigos');
const resultadoEl = document.getElementById('resultado');

// Render de la lista en el UL usando innerHTML y bucle for
function renderLista() {
  // limpiar lista para evitar duplicados
  listaAmigosEl.innerHTML = "";

  // recorrer el array amigos y crear li por cada nombre
  for (let i = 0; i < amigos.length; i++) {
    const nombre = amigos[i];
    // agregamos cada li concatenando innerHTML
    listaAmigosEl.innerHTML += `<li>${i + 1}. ${nombre}</li>`;
  }
}

// Agregar amigo cumpliendo validaciones
function agregarAmigo() {
  // Capturar valor del input
  const nombre = inputAmigo.value;

  // Validar campo vacío
  if (!nombre || nombre.trim() === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

  // Actualizar el array de amigos
  amigos.push(nombre.trim());

  // Limpiar el campo de entrada
  inputAmigo.value = "";

  // Actualizar lista en pantalla
  renderLista();

  // Limpiar resultado previo (si existía)
  resultadoEl.innerHTML = "";
}

// Sortear amigo aleatoriamente
function sortearAmigo() {
  // Validar que haya amigos disponibles
  if (amigos.length === 0) {
    alert("No hay amigos en la lista para sortear.");
    return;
  }

  // Generar un índice aleatorio
  const indice = Math.floor(Math.random() * amigos.length);

  // Obtener el nombre sorteado
  const elegido = amigos[indice];

  // Mostrar el resultado en el elemento #resultado
  resultadoEl.innerHTML = `<li>🎉 El amigo secreto es: <strong>${elegido}</strong></li>`;
}

// Enter para agregar más rápido
inputAmigo.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') agregarAmigo();
});

// Exponer funciones para que los botones del HTML las encuentren
window.agregarAmigo = agregarAmigo;
window.sortearAmigo = sortearAmigo;
