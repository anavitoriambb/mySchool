$(document).ready(function() {
    //Se for id = #; se for class = .

    //$('#conteudo').load('src/disciplinas/visao/list-disciplinas.html')
    //Criando uma funçãpn para adicionar o formulário de cadastro na tela pelo botão #add-disciplinas
    $('#add-disciplinas').click(function(e) {
        e.preventDefault()
        $('#conteudo').empty()
        $('conteudo').load('src/disciplinas/visao/add-disciplinas')
    })

})