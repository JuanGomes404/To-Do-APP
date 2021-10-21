

//Pega o texto do input
function getTextInput(){
   let inputText = document.getElementById("inputInsert").value;
   //console.log(inputText);

    insertText(inputText);

}
//insere o texto da task na pagina
function insertText(text){



    let ulTasks = document.getElementById("tasks");


    let task = createTask(text);
    let btnExcluir = createButton();

    btnExcluir.classList.add('btnExcluir');

   /* btnExcluir.onclick = function (){
        excluirItem(btnExcluir.parentElement);
    }
  */

    btnExcluir.addEventListener('click',  () =>{
        excluirItem(btnExcluir.parentElement);
    })

    let liTask = document.createElement('li');
    liTask.appendChild(task);
    liTask.appendChild(btnExcluir);
    ulTasks.prepend(liTask);


}
function createTask(text){
    let task = document.createElement('p');
    let newTask = document.createTextNode(text);
    task.appendChild(newTask);
    return task;
}
function createButton(){
    let excluir = document.createElement('button');
    let textBtnExcluir = document.createTextNode('Excluir');
    excluir.appendChild(textBtnExcluir);
    return excluir;
}
function excluirItem(elemento){

   // console.log(elemento);
    elemento.remove();
}