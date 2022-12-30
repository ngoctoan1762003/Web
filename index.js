let result = prompt("What is ur name")
if(result != null && result != ""){
    document.getElementById("text").innerHTML='Hello ' + result
}
else if(result == null || result == ""){
    location.reload()
}