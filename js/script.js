let textoAlterado = [];
let textoDescriptografado = [];
let imagemDiamante = document.querySelector(".icon__Diamond");
let botaoCopiar = document.querySelector(".btn__Copiar");
let tituloResultado = document.querySelector(".titulo__Resultado");
let paragrafoResultado = document.querySelector(".paragrafo__Resultado");

console.log(imagemDiamante);

function criptograndoTexto() {
  verificandoLetrasEntrada();
  textoAlterado = textoAlterado.join("");
  imagemDiamante.style.display = "none";
  botaoCopiar.style.display = "block";
  tituloResultado.innerHTML = "Texto Criptografado:";
  paragrafoResultado.innerHTML = textoAlterado;
}

function verificandoLetrasEntrada() {
  textoAlterado = [];
  let inputTexto = document.getElementById("texto__Digitado").value;
  let textoDigitado = Array.from(inputTexto);

  for (let i = 0; i < textoDigitado.length; i++) {
    switch (textoDigitado[i]) {
      case "a":
        textoAlterado.push("ai");
        console.log(textoAlterado);
        break;
      case "e":
        textoAlterado.push("enter");
        console.log(textoAlterado);
        break;
      case "i":
        textoAlterado.push("imes");
        console.log(textoAlterado);
        break;
      case "o":
        textoAlterado.push("ober");
        console.log(textoAlterado);
        break;
      case "u":
        textoAlterado.push("ufat");
        console.log(textoAlterado);
        break;
      default:
        textoAlterado.push(textoDigitado[i]);
    }
  }

  return textoAlterado;
}

function descriptograndoTexto() {
  let inputTexto = document.getElementById("texto__Digitado").value;
  let textoDigitado = Array.from(inputTexto);

  for (let i = 0; i < textoDigitado.length; i++) {
    switch (textoDigitado[i]) {
      case "ai":
        textoDescriptografado.push("a");
        break;
      case "enter":
        textoDescriptografado.push("e");
        break;
      case "imes":
        textoDescriptografado.push("i");
        break;
      case "ober":
        textoDescriptografado.push("o");
        break;
      case "ufat":
        textoDescriptografado.push("u");
        break;
      default:
        textoDescriptografado.push(textoAlterado[i]);
    }
  }

  textoDescriptografado = textoDescriptografado.join("");

  imagemDiamante.style.display = "none";
  botaoCopiar.style.display = "block";
  tituloResultado.innerHTML = "Texto Descriptografado:";
  paragrafoResultado.innerHTML = textoDescriptografado;

  return console.log(textoDescriptografado);
}
