 function update_todo() {
        let task_element = this.parentElement;
        task_element.style.display = "none";
        task_element.remove();
        let task = task_element.textContent;
        document.getElementById("inputBox").value = task.slice(0, -12);
    }

    function delete_todo() {

        let parent = this.parentElement;


        parent.style.display = "none";
        parent.remove();
    }

    function check_todo(ev) {
        if (ev.target.tagName === "DIV") {
            ev.target.classList.toggle("checked");
        }
    }

    function create_delete_button() {

        let delete_button = document.createElement("button");


        let t = document.createTextNode("Delete");


        delete_button.appendChild(t);


        delete_button.onclick = delete_todo;
        delete_button.classList.add('delete');
        return delete_button;
    }

    function create_update_button() {

        let update_button = document.createElement("button");


        let t = document.createTextNode("Update");


        update_button.appendChild(t);


        update_button.onclick = update_todo;
        update_button.classList.add('update');

        return update_button;
    }

    function add_todo() {

        let todo = document.getElementById("inputBox").value;


        if (todo === "") {
            alert("You must have to type something...");
        } else {

            let t = document.createTextNode(todo);

            let new_todo = document.createElement("div");

            new_todo.appendChild(t);

            new_todo.appendChild(create_delete_button());

            new_todo.appendChild(create_update_button());

            new_todo.addEventListener("click", check_todo, false);

            new_todo.classList.add('todo');

            let tasks = document.getElementById("tasks");

            tasks.appendChild(new_todo);

            document.getElementById("inputBox").value = "";
        }
    }
