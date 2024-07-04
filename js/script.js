let textoAlterado = [];
let textoDescriptografado = [];
let imagemDiamante = document.querySelector(".icon__Diamond");
let botaoCopiar = document.querySelector(".btn__Copiar");
let tituloResultado = document.querySelector(".titulo__Resultado");
let paragrafoResultado = document.querySelector(".paragrafo__Resultado");

function criptograndoTexto() {
  let inputTexto = document.getElementById("texto__Digitado").value;
  if (!/^[a-z]+$/.test(inputTexto)) {
    alert(
      "Erro! O texto precisa conter apenas letras minúsculas e sem acento."
    );
  } else {
    verificandoLetrasEntrada();
    textoAlterado = textoAlterado.join("");
    imagemDiamante.style.display = "none";
    botaoCopiar.style.display = "block";
    tituloResultado.innerHTML = "Texto Criptografado:";
    paragrafoResultado.innerHTML = textoAlterado;
  }
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
  let textoDescriptografado;

  if (!/^[a-z]+$/.test(inputTexto)) {
    alert(
      "Erro! O texto precisa conter apenas letras minúsculas e sem acento."
    );
  } else {
    textoDescriptografado = inputTexto
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");

    imagemDiamante.style.display = "none";
    botaoCopiar.style.display = "block";
    tituloResultado.innerHTML = "Texto Descriptografado:";
    paragrafoResultado.innerHTML = textoDescriptografado;
  }
}
