let data
let currentEdit
let currentDrag
let addWindow = document.querySelector('.addWindow')
let editWindow = document.querySelector('.editWindow')
let boxes = document.querySelectorAll('.box')
let containers = document.querySelectorAll('.container')
let toggles = document.querySelectorAll('.toggle-btn')

toggles.forEach((toggle) => {
    toggle.addEventListener('click', (e) => {
        e.preventDefault()
        toggle.parentElement.classList.toggle('active')
    })
})

boxes.forEach((box) => {
    box.addEventListener('dragover', (e) => {
        e.preventDefault()
        box.classList.add('hovered')
    })
    box.addEventListener('dragleave', () => {
        box.classList.remove('hovered')
    })
    box.addEventListener('drop', () => {
        let index
        for(let i=0; i<data.length; i++){
            if(data[i].id == currentDrag){
                index = i
                break
            }
        }

        if (box.classList.contains('todo-box')){
            data[index].status = 'to-do'
        }
        if (box.classList.contains('doing-box')){
            data[index].status = 'doing'
        }
        if (box.classList.contains('finished-box')){
            data[index].status = 'finished'
        }

        axios.put(`https://63c96a17904f040a965db8df.mockapi.io/todo-list-2/${data[index].id}`, {
            category: data[index].category,
            title: data[index].title,
            content: data[index].content,
            status: data[index].status   
        })

        showItems()
        box.classList.remove('hovered')
    })
})

function showLoading() {
    document.querySelector('.loading').style.display = 'flex'
}

function hideLoading() {
    document.querySelector('.loading').style.display = 'none'
}

document.querySelector('.newTaskBtn').addEventListener('click', (event) => {
    event.preventDefault()
    addWindow.style.display = "flex";
})

document.querySelector('.exitBtn').addEventListener('click', (event) => {
    event.preventDefault()
    addWindow.style.display = "none";
})

document.querySelector('.exit-edit-btn').addEventListener('click', (event) => {
    event.preventDefault()
    editWindow.style.display = "none";
})

const showItemsLeft = (todoItem, doingItem, finishedItem) => {
    document.querySelector('.todo-item-left').innerHTML=todoItem
    document.querySelector('.doing-item-left').innerHTML=doingItem
    document.querySelector('.finished-item-left').innerHTML=finishedItem
}

const showItems = () => {
    let content = '';
    let contentDoing = '';
    let contentFinished = '';
    let todoItem = 0
    let doingItem = 0
    let finishedItem = 0

    data.forEach((task) => {
        if(task.status == 'to-do'){
            content += `<div class="card" id="${task.id}" draggable="true" ondragstart="dragStart(${task.id})">
                            <div class="cardHeader">
                                <div class="info">
                                    <p class="category">${task.category}</p>
                                    <p class="title">${task.title}</p>
                                </div>
                                <div class="icon">
                                    <div class="editIcon flex">
                                        <iconify-icon icon="teenyicons:edit-1-outline" class="w-[16px] h-[18px] cursor-pointer" onclick="edit(${task.id})"></iconify-icon>
                                        <iconify-icon icon="iconoir:trash"  class="w-[24px] h-[25px] ml-5 cursor-pointer" onclick="del(${task.id})"></iconify-icon>
                                    </div>
                                </div>
                            </div>
                            <div class="h-0 w-[80%] border-2 border-solid border-[#DBDBDB] mt-[20px]"></div>
                            <p class="content">${task.content}</p>
                            <div class="timeBox flex gap-[7px] items-center">
                                <iconify-icon icon="mdi:clock-time-nine-outline" flip="horizontal"></iconify-icon>
                                <p class="time">June 30, 2022</p>
                            </div>
                        </div>`
            todoItem++
        }
        else if (task.status == 'doing'){
            contentDoing += `<div class="card" id="${task.id}" draggable="true" ondragstart="dragStart(${task.id})">
                                <div class="cardHeader">
                                    <div class="info">
                                        <p class="category">${task.category}</p>
                                        <p class="title">${task.title}</p>
                                    </div>
                                    <div class="icon">
                                        <div class="editIcon flex">
                                            <iconify-icon icon="teenyicons:edit-1-outline" class="w-[16px] h-[18px] cursor-pointer" onclick="edit(${task.id})"></iconify-icon>
                                            <iconify-icon icon="iconoir:trash"  class="w-[24px] h-[25px] ml-5 cursor-pointer" onclick="del(${task.id})"></iconify-icon>
                                        </div>
                                    </div>
                                </div>
                                <div class="h-0 w-[80%] border-2 border-solid border-[#DBDBDB] mt-[20px]"></div>
                                <p class="content">${task.content}</p>
                                <div class="timeBox flex gap-[7px] items-center">
                                    <iconify-icon icon="mdi:clock-time-nine-outline" flip="horizontal"></iconify-icon>
                                    <p class="time">June 30, 2022</p>
                                </div>
                            </div>`
            doingItem++
        }
        else {
            contentFinished += `<div class="card" id="${task.id}" draggable="true" ondragstart="dragStart(${task.id})">
                                    <div class="cardHeader">
                                        <div class="info">
                                            <p class="category">${task.category}</p>
                                            <p class="title">${task.title}</p>
                                        </div>
                                        <div class="icon">
                                            <div class="editIcon flex">
                                                <iconify-icon icon="teenyicons:edit-1-outline" class="w-[16px] h-[18px] cursor-pointer" onclick="edit(${task.id})"></iconify-icon>
                                                <iconify-icon icon="iconoir:trash"  class="w-[24px] h-[25px] ml-5 cursor-pointer" onclick="del(${task.id})"></iconify-icon>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="h-0 w-[80%] border-2 border-solid border-[#DBDBDB] mt-[20px]"></div>
                                    <p class="content">${task.content}</p>
                                    <div class="timeBox flex gap-[7px] items-center">
                                        <iconify-icon icon="mdi:clock-time-nine-outline" flip="horizontal"></iconify-icon>
                                        <p class="time">June 30, 2022</p>
                                    </div>
                                </div>`
            finishedItem++
        }
    })

    showItemsLeft(todoItem, doingItem, finishedItem)

    document.querySelector('.todo-box').innerHTML = content
    document.querySelector('.doing-box').innerHTML = contentDoing
    document.querySelector('.finished-box').innerHTML = contentFinished
}

function dragStart(id){
    currentDrag = id
}

document.querySelector('.submit-btn').addEventListener('click', (e) => {
    let tempCate = document.querySelector('.category-input').value
    let tempTitle = document.querySelector('.title-input').value
    let tempContent = document.querySelector('.content-input').value
    const tempStatus = 'to-do'
    const tempID = (data[data.length - 1].id + 1)
    data.push({
        category: tempCate, 
        title: tempTitle,
        content: tempContent,
        status: tempStatus,
        id: tempID
    })
    showItems()
    axios.post('https://63c96a17904f040a965db8df.mockapi.io/todo-list-2',
    {
        category: tempCate,
        title: tempTitle,
        content: tempContent,
        status: tempStatus,
        id: tempID
    })
})

function edit(index){
    editWindow.style.display = 'flex'


    data.forEach(element => {
        if(element.id == index){
            currentEdit = element
        }
    });

    document.querySelector('.category-edit').value = currentEdit.category
    document.querySelector('.title-edit').value = currentEdit.title
    document.querySelector('.content-edit').value = currentEdit.content
    
}

function del(index){
    for(let i=0; i<data.length; i++){
        if(data[i].id == index){
            axios.delete(`https://63c96a17904f040a965db8df.mockapi.io/todo-list-2/${data[i].id}`)
            data.splice(i, 1)
            showItems()
            break
        }
    }
}

document.querySelector('.submit-edit-btn').addEventListener('click', (event) => {
    event.preventDefault()
    let tempCate = document.querySelector('.category-edit').value
    let tempTitle = document.querySelector('.title-edit').value
    let tempContent = document.querySelector('.content-edit').value

    currentEdit.category = tempCate
    currentEdit.title = tempTitle
    currentEdit.content = tempContent
    currentEdit.status = document.querySelector('input[name="status"]:checked').value;

    showItems()

    editWindow.style.display = 'none'

    axios.put(`https://63c96a17904f040a965db8df.mockapi.io/todo-list-2/${currentEdit.id}`, {
        category: tempCate,
        title: tempTitle,
        content: tempContent,
        status: currentEdit.status   
    })

})

async function fetchData() {

    try {
        const response = await axios.get('https://63c96a17904f040a965db8df.mockapi.io/todo-list-2')
        console.log("oke")
        data = response.data
        console.log(data)

        showItems()
    } catch (e) {
        alert("Khong the lay du lieu");
    }
}

async function main(){
    showLoading()
    addWindow.style.display = "none";
    editWindow.style.display = "none";
    try{
        fetchData().then( () => {
            hideLoading()   
        })
    }
    catch (error) {
        alert ("Failed");
    }
}

main()