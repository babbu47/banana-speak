var btnt= document.querySelector("#btn-translate")
var inputxt=document.querySelector("#txt-input")
var outputdiv=document.querySelector("#output")
var url="https://api.funtranslations.com/translate/minion.json";

function constructurl(tt)
{
  return url +"?"+"text="+tt
}


function errorhandler(error)
{
    alert("something wrong with server ");
}

function clickhandle()
{
    var textinput=inputxt.value;
    fetch(constructurl(textinput))
    .then(response=> response.json())
     .then(json=>
        {
    var translatedtxt=json.contents.translated;

    outputdiv.innerText=translatedtxt;
})
    .catch(errorhandler)
};
btnt.addEventListener("click",clickhandle)