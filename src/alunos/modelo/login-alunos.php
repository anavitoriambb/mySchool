<?php

//REcebendo as informações enviadas pelo formulário
$id = $_REQUEST['id'];
$senha = $_REQUEST['senha'];

//Iremos conectar ao nosso banco de dados
include("../../conexao/conn.php");

//Converter a senha para a criptocrafia do banco de dados
$senha = md5($senha);

//Criar uma consulta ao banco de dados para ver se o usuário existe ou não e ver se o daddos estão corretos
$sql = "SELECT * FROM alunos WHERE id = ".$id." AND senha = '".$senha."' ";

//Iremos pegar a nossa linha de consulta e executar no Banco de Dados
$resultado = mysqli_query($conecta, $sql);

if($resultado && mysqli_num_rows($resultado)>0){
    $dados = array('result' => true);
}else{
    $dados = array('result' =>false);
}

echo json_encode($dados);