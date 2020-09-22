$(document).ready(function() {
    //Se for id = #; se for class = .

    //$('#conteudo').load('src/disciplinas/visao/list-disciplinas.html')
    //Criando uma funçãpn para adicionar o formulário de cadastro na tela pelo botão #add-disciplina
    $('#add-disciplina').click(function(e) {
        e.preventDefault()
        $('#conteudo').empty()
        $('#conteudo').load('src/disciplinas/visao/adiciona-disciplinas.html')
    })

    $('#list').click(function(e) {
        e.preventDefault()
        $('#conteudo').empty()
        $('#conteudo').load('src/disciplinas/visao/list-disciplinas.html')
    })

    //$('#conteudo').load('src/disciplinas/visao/list-disciplinas.html')
    //Criando uma funçãpn para adicionar o formulário de cadastro na tela pelo botão #add-disciplina
    $('#add-alunos').click(function(e) {
        e.preventDefault()
        $('#conteudo').empty()
        $('#conteudo').load('src/alunos/visao/adiciona-alunos.html')
    })

    $('#list-alunos').click(function(e) {
        e.preventDefault()
        $('#conteudo').empty()
        $('#conteudo').load('src/alunos/visao/list-alunos.html')
    })

})