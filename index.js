document.addEventListener('DOMContentLoaded', function() {
    const nome = window.localStorage.getItem('nome');
    const matricula = window.localStorage.getItem('matricula');
    const email = window.localStorage.getItem('email');
    ativaComp("home");

    var perfil = '';    


    if (nome) {
       if(matricula != 999999){
        perfil = "estudante";

        //alert("Alou " + nome + " Matricula:" + matricula + " Perfil:" + perfil);
       } else {
        perfil = "bibliotecaria";
        //alert("Alou " + nome + " Matricula:" + matricula + " Perfil:" + perfil);
       }
       document.getElementById("user").innerHTML = "Olá " + nome.split(' ')[0] + ", Matrícula: " + matricula;
       document.getElementById("loginbar").style.display="none";
       document.getElementById("loginDiv").style.display="none";
       document.getElementById("logout").style.display="block";
    } else {        
        document.getElementById("user").style.display="none";
        document.getElementById("logout").style.display="none";
        document.getElementById("loginbar").style.display="block";
        document.getElementById("loginDiv").style.display="none";
    }

});
function logoutSis() {
    window.localStorage.removeItem('nome');
    window.localStorage.removeItem('matricula');
    window.localStorage.removeItem('email');
    nome='', matricula='', perfil='', email='';
    document.getElementById("user").style.display="none";
    document.getElementById("logout").style.display="none";
    document.getElementById("loginDiv").style.display="none";
    document.getElementById("loginbar").style.display="block";
    //document.location.reload();
}
var componentes = ['emprestimos','livros','estudante-list','loginDiv'];

function ativaComp(comp) {

    componentes.forEach(divid => {
        // Verifica se o ID do elemento atual corresponde ao ID para Ativar
        if (divid === comp) {
            document.getElementById(comp).style.display="block";
        } else {
            document.getElementById(divid).style.display="none";
        }
    });    
}
