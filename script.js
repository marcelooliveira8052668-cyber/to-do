function adicionarTarefa(){

let input = document.getElementById("tarefaInput")
let lista = document.getElementById("listaTarefas")

if(input.value === ""){
alert("Digite uma tarefa")
return
}

let li = document.createElement("li")
li.textContent = input.value

let botao = document.createElement("button")
botao.textContent = "Excluir"

botao.onclick = function(){
li.remove()
}

li.appendChild(botao)
lista.appendChild(li)

input.value = ""

}
