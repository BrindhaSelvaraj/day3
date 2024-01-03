var req = new XMLHttpRequest();
req.open("GET","https://restcountries.com/v2/all");
req.send();
req.onload=function()
{
    
    var res=JSON.parse(req.response)
    
    for (var i = 0; i < 250; i++) {
        
        console.log("Name: " + res[i].name);
        console.log("Region: " + res[i].region);
        console.log("Subregion: " + res[i].subregion);
        console.log("population: " + res[i].population);
        console.log("--------------");
     
    }
}
