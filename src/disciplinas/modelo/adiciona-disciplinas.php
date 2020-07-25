<?php
//Iremos nos conectar ao banco de dados
//require_once é o memso que include
include('../../conexao/conn.php');

$disciplina = $_REQUEST['disciplina'];
$professor = $_REQUEST['professor'];

//Só o nome da disciplina vai ser obrigatória o nome do prof não
//isso é uma validação
if ($disciplina == "") {
    echo "O campo com o nome da disciplina não pode estar vazio, tente novamente";
}else{
    //Gerar um script SQL para cadastro de informações no banco de dados, em parentese os campos e values é os valores
    $sql = "INSERT INTO disciplinas (disciplina, professor) VALUES ('".$disciplina."', '".$professor."')";
    //Testar o comando SQL no banco de dados
    //Query = linha de comando no BD
    if (mysqli_query($conecta, $sql)) {
        echo "Dados cadastrados com sucesso!";
    }else {
        echo "Deu ruim no cadastro";
    }
}
