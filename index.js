const axios = require('axios')

const fetchFoodData = () => {
    axios.get('https://631b4048fae3df4dcff94f47.mockapi.io/api/foods').then(
        (response) => {
            const data = response.data
            data.forEach((element, index) => {
                if (element.name === 'nước táo')
                    console.log(index + '. uống nước táo')
                else if (element.name === 'pizza')
                console.log(index + '. ăn pizza')
            });
        }
    ).catch((error) => {
        console.log("co loi");
    })
}

const fetchData = () => {
    axios.get('https://631b4048fae3df4dcff94f47.mockapi.io/api/todoItems').then(
        (response) => {
            const data = response.data
            const todo = data.filter(data => data.status == 'todo')
            console.log(todo)
            const inProgress = data.filter(data => data.status == 'in-progress')
            console.log(inProgress)
            const done = data.filter(data => data.status == 'done')
            console.log(done)
        }
    ).catch((error) => {
        console.log("co loi");
    })
}

//fetchFoodData()
fetchData()