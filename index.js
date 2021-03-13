function click(){

    let nomeAlunos = document.getElementById("nomeAlunos").value;
    let inserirAlunos = document.getElementById("mostraAlunos");
    
    return inserirAlunos.value = nomeAlunos;
}

let botao = document.getElementById("inserir");
botao.onclick = click;