
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function()
{
    
    var result=JSON.parse(request.response)
    
    for (var i = 0; i < 250; i++) {
        console.log(result[i].flag);
     
    }
}