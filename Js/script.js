
const botaoTema = document.querySelector("#mudar-tema");
const formulario = document.querySelector("#form-contato");
const campos = document.querySelectorAll("#form-contato input");
const mensagemErro = document.querySelector("#mensagem-erro");

function validaCampo(campo){
   if (campo.type === "text" && campo.value === ""){
        return "Opa, qual seu nome?"}

   if (campo.type === "email" && campo.value === ""){
    return "Opa, qual seu e-mail?"}

   if (campo.type === "tel" && campo.value === ""){
    return "Opa, qual seu telefone?"}

   if (campo.type === "file" && campo.value === ""){
    return "Faltou a proposta!"}

   if (campo.type === "date" && campo.value === ""){
    return "Que dia posso falar contigo?"}

  if (campo.closest("[data-campo-proposta]")) {
    if (imagemURL === "")
      return "Por favor, tire uma foto da sua proposta."; }

  return "";

}

formulario.addEventListener("submit", function (event) {
  campos.forEach(function (campo) {
  const campoPai = campo.parentNode;
  const spamErro = campoPai.querySelector(".erro");
  spamErro.innerHTML = "";
  const erro = validaCampo(campo);

    if (erro !== "") {
      event.preventDefault();
      spamErro.innerHTML = erro;
    }
  });
});



if (botaoTema) {
  botaoTema.addEventListener("click", function () {
    document.body.classList.toggle("tema-escuro");
  });
}

const botaoIniciarCamera = document.querySelector("[data-video-botao]");
const campoCamera = document.querySelector("[data-camera]");
const video = document.querySelector("[data-video]");
const botaoTirarFoto = document.querySelector("[data-tirar-foto]");
const canvas = document.querySelector("[data-video-canvas]");
const mensagem = document.querySelector("[data-mensagem]");

let imagemURL = "";


botaoIniciarCamera.addEventListener("click", async function () {
  const stream = await navigator.mediaDevices.getUserMedia({
    video: true,
    audio: false
  });
  campoCamera.style.display = "block";
  botaoIniciarCamera.style.display = "none";
  video.srcObject = stream;
});


botaoTirarFoto.addEventListener("click", () => {
  canvas.getContext("2d").drawImage(
    video,
    0,
    0,
    canvas.width,
    canvas.height
  );

  imagemURL = canvas.toDataURL("image/jpeg");

  campoCamera.style.display = "none";
  mensagem.style.display = "block";

  video.srcObject.getTracks().forEach(track => track.stop());
});
``

