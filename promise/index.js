let currentPage = "all";
let data;
let tasks;
let currentEdit = -1;
const input = document.querySelector('.new-todo');

function $(selector) {
    return document.querySelector(selector)
}

function toggleBtn(index) {
    let name
    let status
    axios.get(`https://63c96a17904f040a965db8df.mockapi.io/todo-list/${index}`).then(
        (response) => {
            const temp = response.data
            name = temp.name
            status = temp.status
            if (status === "active") status = "completed"
            else status = "active"
            axios.put(`https://63c96a17904f040a965db8df.mockapi.io/todo-list/${index}`,
                { status, name }).then(() => {
                    fetchData()
                    input.value = ''
                })
            fetchData()
        })
}

function edit(id) {
    currentEdit = id
    let item = document.getElementById(`${id}`)
    let box = item.querySelector('.edit-box')
    box.style.display = "flex"
}

function del(id){
    axios.delete(`https://63c96a17904f040a965db8df.mockapi.io/todo-list/${id}`).then(
        (response) => {
            fetchData()
        }
    )
}

const fetchData = () => {
    console.log('fetch');
    tasks = axios.get('https://63c96a17904f040a965db8df.mockapi.io/todo-list').then(
        (response) => {
            data = response.data
            console.log(data)

            if (currentPage === "all") showItems()
            if (currentPage === "active") showActiveItems()
            if (currentPage === "completed") showCompletedItems()

            showItemsLeft()
        }
    ).catch((error) => {
        console.log("co loi");
    })
}

const showItems = () => {
    let content = ''

    data.forEach((task) => {
        if (task.status === "active") {
            content += `<li class="todo-item" id="${task.id}" ondblclick="edit(${task.id})"> 
                    <input type="checkbox" class="toggle" onclick="toggleBtn(${task.id})"> 
                    <label>${task.name}</label> 
                    <input type="text" class="edit-box" onkeypress="editName(event)">
                    <div class="delBtn" onclick="del(${task.id})">X</div>
                    </li>`
        }
        else {
            content += `<li class="todo-item-completed" id="${task.id}" ondblclick="edit(${task.id})"> 
                    <input type="checkbox" class="toggle" onclick="toggleBtn(${task.id})"> 
                    <label>${task.name}</label> 
                    <input type="text" class="edit-box" onkeypress="editName(event)">
                    <div class="delBtn" onclick="del(${task.id})">X</div>
                    </li>`
        }
    })

    document.querySelector('.todo-list').innerHTML = content
}

const showActiveItems = () => {
    let content = ''

    data.forEach((task) => {
        if (task.status === "active")
            content += `<li class="todo-item" id="${task.id}"> 
                        <input type="checkbox" class="toggle" onclick="toggleBtn(${task.id})"> 
                        <label>${task.name}</label> 
                        <div class="delBtn" onclick="del(${task.id})">X</div>
                        </li>`
    })

    document.querySelector('.todo-list').innerHTML = content
}

const showCompletedItems = () => {
    let content = ''

    data.forEach((task) => {
        if (task.status === "completed")
            content += `<li class="todo-item-completed" id="${task.id}"> 
                        <input type="checkbox" class="toggle" onclick="toggleBtn(${task.id})"> 
                        <label>${task.name}</label> 
                        <div class="delBtn" onclick="del(${task.id})">X</div>
                        </li>`
    })

    document.querySelector('.todo-list').innerHTML = content
}

$('.new-todo').addEventListener('keypress', function (event) {
    if (event.key === "Enter") {
        event.preventDefault()
        const name = input.value
        const status = "active"
        axios.post('https://63c96a17904f040a965db8df.mockapi.io/todo-list',
            { status, name }).then(() => {
                fetchData()
                input.value = ''
            })
    }
})

const showItemsLeft = () => {
    let sum = 0
    data.forEach(task => {
        if (task.status === "active") sum++
    })
    $('.item-left').innerHTML = `${sum} item left`
}

$('.all').addEventListener('click', function (event) {
    event.preventDefault()
    showItems()
    currentPage = "all"
})

$('.active').addEventListener('click', function (event) {
    event.preventDefault()
    showActiveItems()
    currentPage = "active"
})

$('.completed').addEventListener('click', function (event) {
    event.preventDefault()
    showCompletedItems()
    currentPage = "completed"
})

/*document.addEventListener('click', function(event){
    event.preventDefault()
    console.log(event.target.id)
    if(event.target.id === currentEdit){
        console.log(event.target.id)
    }
    else{
        let item = document.getElementById(`${currentEdit}`)
        console.log(item)
        let box = item.querySelector('.edit-box')
        const name = box.value
        const status = axios.get(`https://63c96a17904f040a965db8df.mockapi.io/todo-list/${currentEdit}`).data.status
        axios.put(`https://63c96a17904f040a965db8df.mockapi.io/todo-list/${currentEdit}`,
                {name,
                status})
                .then(
                    box.style.display = "none"
                )
    }


})*/

function editName(event){
    if (event.key === "Enter") {
        event.preventDefault()
        let item = document.getElementById(`${currentEdit}`)
        console.log(item)
        let box = item.querySelector('.edit-box')
        let name = box.value
        let status
        axios.get(`https://63c96a17904f040a965db8df.mockapi.io/todo-list/${currentEdit}`).then(response => {
            status = response.data.status
        })
        axios.put(`https://63c96a17904f040a965db8df.mockapi.io/todo-list/${currentEdit}`,
                {name,
                status})
                .then(() => {
                    fetchData()
                    box.style.display = "none"
    })
    }
}

fetchData()




