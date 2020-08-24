// Criar a funcionalidade pra fechar o formulário na tela

function closeForm() {
    $('.btn-close').click(function(e) {
        e.preventDefault()
            //Primeiro iremos limpar a DIV
        $('#form').empty()

        //Depois iremos ocultar a DIV
        $('#form').hide()
    })
}

$(document).ready(function() {

    //Monitorar o clique em cima dos botões com a classe btn-view
    //DEsenvolvo uma hash e juntamente com ela eu coleto o id do botão clicado com a função this
    $('.btn-edit').on('click', function(e) {
        e.preventDefault()

        //Criando uma variével para colocar o ID do botão clicar
        var dados = `id=${$(this).attr('id')}`

        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            assync: true,
            data: dados,
            url: 'src/disciplinas/modelo/view-disciplinas.php',
            success: function(dados) {
                $('#form').show()

                //Carregando nosso formulário dentro da DIV que deixamos em branco pra mostrar os dados
                $('#form').load('src/disciplinas/visao/adiciona-disciplinas.html', function() {
                    //$('.btn-save').after('<button class="btn btn-success btn-block btn-save"><i class="mdi mdi-content-save"></i> Salvar alterações</button>')
                    // $('.btn-save').hide()
                    $('h2').empty()
                    $('h2').append('Editar Cadastro')
                    $('#disciplina').val(dados[0].disciplina)
                        //$('#disciplina').attr('disabled', true)
                    $('#professor').val(dados[0].professor)
                        //$('#professor').attr('disabled', true)

                    // closeForm()

                })
            }
        })
    })
})