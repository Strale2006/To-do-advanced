
/*--------------------MENU BTN------------------------*/
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});

/*--------------NEW TASK-----------*/
const newTaskBtn = document.getElementById('new-btn');
const taskList = document.querySelector('.content');

newTaskBtn.addEventListener('click', () => {
    // Create the modal and form dynamically
    const modal = document.createElement('div');
    modal.className = 'modal';

    const taskForm = document.createElement('form');
    taskForm.className = 'task-form';

    const taskHeader = document.createElement('div');
    taskHeader.className = 'task-header';
    const headerText = document.createElement('h3');
    headerText.textContent = 'New Task';
    taskHeader.appendChild(headerText);

    const taskBody = document.createElement('div');
    taskBody.className = 'task-body';

    const taskInput = document.createElement('input');
    taskInput.className = 'task-input';
    taskInput.type = 'text';
    taskInput.required = true;
    taskBody.appendChild(taskInput);

    const submitBtn = document.createElement('button');
    submitBtn.className = 'task-button';
    submitBtn.type = 'submit'
    submitBtn.textContent = 'Create';

    taskForm.appendChild(taskHeader);
    taskForm.appendChild(taskBody);
    taskForm.appendChild(submitBtn);

    modal.appendChild(taskForm);

    // Add the modal to the DOM
    document.body.appendChild(modal);

    // Remove the modal when clicking outside of it
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent form submission

        // Get the task name from the input field
        const taskName = taskInput.value;

        // Create a new task item
        const taskItem = document.createElement('div');
        taskItem.classList.add('task');

        const taskNameElement = document.createElement('h4');
        taskNameElement.className = 'task-name';
        taskNameElement.textContent = taskName;

        const taskContent = document.createElement('div');
        taskContent.style = "display: flex; align-items: center; justify-content: center;gap: 10px";
        const circle = document.createElement('div');
        circle.className = 'circle';

        taskContent.appendChild(circle);
        taskContent.appendChild(taskNameElement);

        taskItem.appendChild(taskContent);

        const lordIcon = document.createElement('lord-icon');
        lordIcon.setAttribute('src', 'https://cdn.lordicon.com/exkbusmy.json');
        lordIcon.setAttribute('trigger', 'click');
        lordIcon.setAttribute('colors', 'outline:#121331,primary:#646e78,secondary:#545454,tertiary:#ebe6ef');
        lordIcon.setAttribute('stroke', '100');
        lordIcon.setAttribute('state', 'hover-empty');
        lordIcon.style = "width:30px;height:30px";

        lordIcon.addEventListener('click', () => {
            taskItem.remove();
        });

        taskItem.appendChild(lordIcon);

        // Add the task item to the task list
        taskList.appendChild(taskItem);

        // Clear the input field
        taskInput.value = '';

        // Remove the modal after task creation
        document.body.removeChild(modal);
    });
});