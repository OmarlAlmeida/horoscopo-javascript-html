

function receberTurmaUsuario() {
//Receber dados do campo "form_turma_usuario" do fomulário quando usuario digitar valor no campo//

 let turmaUsuario = document.getElementById("form_turma_usuario").value;

 if (turmaUsuario == 01 || turmaUsuario == 'Janeiro' ) {
    document.getElementById("valor_form_turma_usuario").innerHTML = 'Capricórniano/a';
 } else if (turmaUsuario == 02 || turmaUsuario == 'Fevereiro') {
    document.getElementById("valor_form_turma_usuario").innerHTML = 'Aquariano/a';
 } else if (turmaUsuario == 03 || turmaUsuario == 'Março' ) {
    document.getElementById("valor_form_turma_usuario").innerHTML = 'Pisciniano/a';
 } else if (turmaUsuario == 04 || turmaUsuario == 'Abril') {
    document.getElementById("valor_form_turma_usuario").innerHTML = 'Áriano/a';
 } else if (turmaUsuario == 05 || turmaUsuario == 'Maio') {
    document.getElementById("valor_form_turma_usuario").innerHTML = 'Taurino/a';
 } else if (turmaUsuario == 06 || turmaUsuario == 'Junho') {
    document.getElementById("valor_form_turma_usuario").innerHTML = 'Gêminiano/a';
 } else if (turmaUsuario == 07 || turmaUsuario == 'Julho') {
    document.getElementById("valor_form_turma_usuario").innerHTML = 'Canceriâno/a';
 } else if (turmaUsuario == 08 || turmaUsuario == 'Agosto') {
    document.getElementById("valor_form_turma_usuario").innerHTML = 'leõnino/a';
 } else if (turmaUsuario == 09 || turmaUsuario == 'Setembro') {
    document.getElementById("valor_form_turma_usuario").innerHTML = 'Viginiano/a';
 } else if (turmaUsuario == 10 || turmaUsuario == 'Outubro') {
    document.getElementById("valor_form_turma_usuario").innerHTML = 'Libriano/a';
} else if (turmaUsuario == 11 || turmaUsuario == 'Novembro') {
    document.getElementById("valor_form_turma_usuario").innerHTML = 'Escorpiano/a';
} else if (turmaUsuario == 12 || turmaUsuario == 'Dezembro') {
    document.getElementById("valor_form_turma_usuario").innerHTML = 'Sagitáriano/a';
   } else {
    document.getElementById("valor_form_turma_usuario").innerHTML = '';
 }
 
}
   
  // Enviar os dados para o formulario do arquivo index.html utilizando o atributo ID
//   document.getElementById("receber_turma_usuario").value = turmaUsuario;
  

  // Enviar os dados para o arquivo index.html utilizando o atributo ID
//   document.getElementById("valor_form_turma_usuario").innerHTML = turmaUsuario;
    

    
    