const inputNome = document.getElementById('nome')
const inputEmail = document.getElementById('email')
const inputMensagem = document.getElementById('mensagem')
const btnEnviar = document.getElementById('btnEnviar');

btnEnviar.addEventListener('click', () => {
    if(!inputNome.value || !inputEmail.value || !inputMensagem.value){
        alert('ERRO: Preencha todos campos e tente novamente.')
    }else{

        alert('Mensagem enviada com sucesso! ')
    }
})