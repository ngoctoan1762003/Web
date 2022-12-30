/*
//1-----------------------------------
//arrow function
const arrow = (a, b) => a + b;
console.log(arrow(2, 3));

//anonymous function
setTimeout(function () {
    console.log('Anonymous!')
}, 1000);

//2------------------------------------
function getDateTime() {
    let toDay = new Date()
    let curTime = 'Now is: ' + toDay.getHours() + ':' + toDay.getMinutes() + ' ' + toDay.getDate() + '/' + toDay.getMonth() + '/' + toDay.getFullYear()
    return curTime
}
const now = getDateTime()
console.log(now)

//3------------------------------------
function allFormatsOfDate({ day, month, year }) {
    let text = month + '-' + day + '-' + year + '\n' + month + '/' + day + '/' + year
    + '\n' + day + '-' + month + '-' + year + '\n' + day + '/' + month + '/' + year
    return text
}

const date = {
    day: 28,
    month: 12,
    year: 2022
}

const result = allFormatsOfDate(date)
console.log(result)

//4--------------------------
function isIncreaseChainNumber(number) {
    const arr = number.toString().split('')
    let previous = arr[0]
    let present = 0
    for (let i = 1; i < arr.length;) {
        present = present * 10 + parseInt(arr[i])
        while (present < previous) {
            if (i == arr.length - 1) return false
            i++
            present = present * 10 + parseInt(arr[i])
        }
        previous = present
        present = 0
        i++
    }
    return true
}

const number1 = 123456789n
const number2 = 123432112321n
const number3 = 988811111n

console.log(isIncreaseChainNumber(number1))
console.log(isIncreaseChainNumber(number2))
console.log(isIncreaseChainNumber(number3))

//5---------------------------------
function ceasarCypher(text, step) {
    const arr = text.toString().split('')
    const newText = arr.map(function (x) {
        if (x !== " ") x = String.fromCharCode(x.charCodeAt(0) + step)
        return x
    }).join('')
    return newText
}

const senpai = "Hoang Nhan"
const cypherText = ceasarCypher(senpai, 3)

console.log(cypherText)

//6---------------------------------
function highestFreqNumber(numbers) {
    let besttime = 0
    let times
    let most
    let number
    for(let i=0; i<numbers.length; i++){
        number=numbers[i]
        times = 1
        for(let j=i+1; j<numbers.length; j++){
            while(numbers[j] === number){
                console.log('index' + j)
                times++
                numbers.splice(j, 1)
            }
        }
        if(times > besttime){
            console.log('best time' + times)
            besttime = times
            most = number
        }
    }
    return most
}

const numbers = [1,2,3,5,6,7,4,7,3,2,1,6,7,8,7,7,1,7,3,7,9999,7,123,7]

console.log(highestFreqNumber(numbers)) 

//7-----------------------------------------
const isIncludeJS = (text) => {
    let newText = text.toString().toLowerCase()
    return newText.includes('javascript')
}

const str1 = "asdsajkzzjAVAscriptttaskldjkl123aszxc"
const str2 = "jjjjjjjavaaaaScriptttttttttt"
const str3 = "888javaScript888"

console.log(isIncludeJS(str1)); 
console.log(isIncludeJS(str2)); 
console.log(isIncludeJS(str3)); 

//8---------------------------------------
const getMonthName = (monthNumber) => {
    switch(monthNumber){
        case 1:
            return "January"
            
        case 2:
            return "February"
            
        case 3:
            return "March"
            
        case 4:
            return "April"
            
        case 5:
            return "May"
            
        case 6:
            return "June"
            
        case 7:
            return "July"
            
        case 8:
            return "August"
            
        case 9:
            return "September"
            
        case 10:
            return "October"
            
        case 11:
            return "November"
            
        case 12:
            return "December"
            
        default:
            return "NotAMonth"
    }
}
   
console.log(getMonthName(3)) // March
console.log(getMonthName(4)) // April

//9--------------------------------
const longestWord = (str) => {
    let newstr=str.split('')
    newstr=newstr.map(function(x){
        if(x==",")
        x = ""
        return x
    }).join('')
    newstr=newstr.split(' ')
    let max = 0
    let final
    for(let i=0; i<newstr.length; i++){
        if(newstr[i].length > max){
            max=newstr[i].length
            final=newstr[i]
        }
    }
    return final
}

const str = "'Little darlin', it's been a loooooong, cold, lonely winter"

console.log(longestWord(str)) // loooooong
*/
//10------------------------------------
const sum = (number) => {
    let arr=number.toString().split('')
    return arr.reduce((accumulator, item) => parseInt(accumulator) + parseInt(item))
}
  
console.log(sum(1231312321378127391237219312n)) // 90
console.log(sum(99999999999999999999999999999n))// 261
console.log(sum(12345678908765432123456555566n)) // 98 cho nay dap an anh cho sai hay sao ay=))
  
