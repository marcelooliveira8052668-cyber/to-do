function adicionarTarefa() {

    // Pega o valor digitado
    const input = document.getElementById("tarefaInput");
    const textoTarefa = input.value;

    if (textoTarefa === "") {
        alert("Digite uma tarefa!");
        return;
    }

    li.onclick = function() {
  li.remove();
}
    // Cria novo elemento <li>
    const novaTarefa = document.createElement("li");
    novaTarefa.textContent = textoTarefa;

    // Adiciona dentro da <ul>
    const lista = document.getElementById("listaTarefas");
    lista.appendChild(novaTarefa);

    // Limpa o input
    input.value = "";

}
