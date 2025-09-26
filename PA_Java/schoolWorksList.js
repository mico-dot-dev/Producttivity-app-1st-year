savedTodoSW = JSON.parse(localStorage.getItem("savedTodoSW")) || [];

window.addEventListener('load',()=>{
const schoolWorkListForm = document.querySelector(".schoolWorksListForm");

schoolWorkListForm.addEventListener('submit' , (e) => {
    e.preventDefault();

const addedTodoSW = {
    items:e.target.elements.items.value,
    done:false,
    dateTime: new Date().getTime()
}

savedTodoSW.push(addedTodoSW);

localStorage.setItem('savedTodoSW' , JSON.stringify(savedTodoSW));  

e.target.reset();

DisplayList();

})
DisplayList()
})

function DisplayList() {
    const schoolWorksList = document.querySelector(".schoolWorksList");
    schoolWorksList.innerHTML = "";

    savedTodoSW.forEach(addedTodoSW => {
        const contentListSW = document.createElement('div');
        const divListSW = document.createElement('div');
        const actionsSW = document.createElement('div');
        const EditSW = document.createElement('button');
        const deleteSW = document.createElement('button');

        contentListSW.classList.add("schoolWorksContentList");
        divListSW.classList.add("List");
        actionsSW.classList.add("schoolWorkListActions");
        EditSW.classList.add("Edit");
        deleteSW.classList.add("Delete");
        
        divListSW.innerHTML = `<input type="text" class="schoolWorksItems" value="${addedTodoSW.items}" readonly>`
        EditSW.innerHTML = "Edit";
        deleteSW.innerHTML = "Delete";

        actionsSW.appendChild(EditSW);
        actionsSW.appendChild(deleteSW);
        contentListSW.appendChild(divListSW);
        contentListSW.appendChild(actionsSW);
        schoolWorksList.appendChild(contentListSW);

        EditSW.addEventListener('click' , (e) =>{
            const editModeSW = divListSW.querySelector('input');

            editModeSW.removeAttribute('readonly');
            editModeSW.focus();

          editModeSW.addEventListener('blur' , (e) =>{
            editModeSW.setAttribute('readonly' , true);
            addedTodoSW.items = e.target.value;
            localStorage.setItem('savedTodoSw' , JSON.stringify(savedTodoSW));
            DisplayList();
          });
          
          if (EditSW.innerHTML.toLowerCase() == "edit"){
            EditSW.innerHTML = "save";
          }
        });

        deleteSW.addEventListener('click' , (e) => {
            savedTodoSW = savedTodoSW.filter(t => t != addedTodoSW);
            localStorage.setItem('savedTodoSW' , JSON.stringify(savedTodoSW));
            DisplayList()
        });

    })



}