var btnt= document.querySelector("#btn-translate")
var inputxt=document.querySelector("#txt-input")
var outputdiv=document.querySelector("#output")

btnt.addEventListener("click",function clickhandle(){
    console.log("clicked!")
    console.log("input",inputxt.value)
    outputdiv.innerText="output will appear here";
})

