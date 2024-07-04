let textoAlterado = [];
let textoDescriptografado = [];

function criptograndoTexto() {
  verificandoLetrasEntrada();
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
  console.log(textoAlterado);

  for (let i = 0; i < textoAlterado.length; i++) {
    switch (textoAlterado[i]) {
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

  return console.log(textoDescriptografado);
}
