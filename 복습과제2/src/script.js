function addTodo() {
    const todoInput = document.getElementById('todoInput');
    const todoList = document.getElementById('todoList');

    if (todoInput.value.trim() !== '') {
        const newTodo = document.createElement('li');
        newTodo.innerText = todoInput.value;

        const editButton = document.createElement('button');
        editButton.innerText = '수정';
        editButton.onclick = function() {
            const updatedTodo = prompt('수정할 내용을 입력하세요', newTodo.innerText.trim().replace(/수정삭제$/, ''));
            if (updatedTodo !== null) {
                newTodo.innerHTML = updatedTodo;
                newTodo.appendChild(editButton);
                newTodo.appendChild(deleteButton);
            }
        };

        const deleteButton = document.createElement('button');
        deleteButton.innerText = '삭제';
        deleteButton.onclick = function() {
            todoList.removeChild(newTodo);
        };

        newTodo.appendChild(editButton);
        newTodo.appendChild(deleteButton);

        todoList.appendChild(newTodo);

        todoInput.value = '';
    } else {
        alert('할 일을 입력하세요');
    }
}