
let input = document.getElementById("tarefaInput")
let lista = document.getElementById("listaTarefas")

// Carregar tarefas salvas
window.onload = function(){
    let tarefas = JSON.parse(localStorage.getItem("tarefas")) || []
    
    tarefas.forEach(function(tarefa){
        criarTarefa(tarefa)
    })
}

function adicionarTarefa(){

    if(input.value === ""){
        alert("Digite uma tarefa!")
        return
    }

    criarTarefa(input.value)

    salvarTarefas()

    input.value = ""
}

function criarTarefa(texto){

    let li = document.createElement("li")
    li.textContent = texto

    // marcar concluído
    li.onclick = function(){
        li.classList.toggle("concluida")
        salvarTarefas()
    }

    let botao = document.createElement("button")
    botao.textContent = "Excluir"

    botao.onclick = function(e){
        e.stopPropagation()
        li.remove()
        salvarTarefas()
    }

    li.appendChild(botao)
    lista.appendChild(li)
}

function salvarTarefas(){

    let tarefas = []

    document.querySelectorAll("#listaTarefas li").forEach(function(li){
        tarefas.push(li.firstChild.textContent)
    })

    localStorage.setItem("tarefas", JSON.stringify(tarefas))
}
