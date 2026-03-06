function adicionarTarefa(){

let input = document.getElementById("tarefaInput")
let lista = document.getElementById("lista")

let li = document.createElement("li")
li.textContent = input.value

li.onclick = function(){
li.remove()
}

lista.appendChild(li)

input.value = ""

}

