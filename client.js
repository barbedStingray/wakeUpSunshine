console.log(`Wake Up, Sunshine`);

const toDoListDiv = document.querySelector(`#todo-list`);



// ************** FUNCTIONS ***************
function addToDoItem(event) {
    console.log(`in addToDoItem`);
    event.preventDefault();

    let userInput = document.querySelector(`#todo-input`).value;
    console.log(userInput);

    document.querySelector(`#todo-input`).value = ``;


    toDoListDiv.innerHTML += `
    <div id="todo-item">
            ${userInput}
                <button id="remove-todo" onclick="removeToDoItem(event)">
                    Remove
                </button>
                <button id="complete" onclick="completeItem(event)">
                    Complete
                </button>
                <button id="priority" onclick="priorityItem(event)">
                    Prioritize
                </button>
                <button id="multi-step" onclick="addMultiStep(event)">
                    Add Step
                </button>
        <div id="multi-div">
        </div>

        <div id=multiBuilder-div>
        </div>
        
    </div>
    `
}

function removeToDoItem(event) {
    console.log(`in remove ToDo`);
    event.target.parentElement.remove();
}

function completeItem(event) {
    console.log(`item completed`, event.target);
    event.target.parentElement.style.textDecoration = `Line-through`;
}

function priorityItem(event) {
    let parentDiv = event.target.parentElement;
    console.log(`priority item selected`);
    // parentDiv.style.backgroundColor = `lightgreen`;

    console.log(parentDiv.style.backgroundColor);

    if(parentDiv.style.backgroundColor === `lightgreen`){
        console.log(`switching to white`);
        parentDiv.style.backgroundColor = `white`;
        event.target.innerHTML = `low priority`;
    }
    else {
        parentDiv.style.backgroundColor = `lightgreen`;
        event.target.innerHTML = `high priority`;
    }
}

// *********** MULTISTEP TO DO ITEMS ****************
function addMultiStep(event) {
    console.log(`in addMultiStep`);
    let multiStepDiv = document.querySelector(`#multi-div`);
    multiStepDiv.innerHTML += `
    <div class="multi-step">

    <input type="text" id="multi-input" placeholder="add a step..."/>

    <button id="addstep-func" onClick="addMultiParts(event)">+</button>

    <button id="multi-complete" onClick="removeMultiStepBtn(event)">Complete</button>

    </div>
    `
}

function addMultiParts(event) {
    console.log(`in addMultiParts`);
    let multiBuilderDiv = document.querySelector(`#multiBuilder-div`);

    multiBuilderDiv.innerHTML += `
    <div id=checkbox>
        <label>New Checkbox<input type="checkbox"/></label>
    </div>
    `
}

function removeMultiStepBtn(event) {
    console.log(`removing multi parts`);
    event.target.parentElement.remove();
}
