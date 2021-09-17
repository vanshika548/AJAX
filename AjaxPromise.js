let XMLHTTPRequest = require("xmlhttprequest").XMLHttpRequest;

function showTime(){
    const date = new Date();
    return date.getHours() + "Hrs:" + date.getMinutes() +"Min:" + date.getSeconds()+ "Secs";
}

function makePromiseCall(methodType,url,async=true,data=null){
    return new Promise(function(resolve,reject){
    let xhr = new XMLHTTPRequest();
    xhr.onreadystatechange = function(){
   //     console.log(methodType+" State Changed Called at: "+showTime()+"RS: "+
     //                xhr.readyState+" Status:"+xhr.status);
        if(xhr.readyState == 4){
            if(xhr.status == 200 || xhr.status == 201){
                resolve(xhr.responseText);
            }else if(xhr.status >= 400){
                reject({
                    status:xhr.status,
                    statusText:xhr.statusText
                });
                
                console.log("Handle 400 Client Error or 500 Server Error at : "+showTime());
            }
        }
    }
    xhr.open(methodType,url,async);
    if(data){
        //console.log(JSON.stringify(data));
        xhr.setRequestHeader("Content-Type","application/json");
        xhr.send(JSON.stringify(data));
    }else xhr.send();
    console.log(methodType+" request sent to the server at: "+showTime());
});
}

const getURL = "http://localhost:3000/employees/1";
makePromiseCall("GET",getURL,true)
    .then(responseText => {
        console.log("GET User Data: "+responseText)
    })
    .catch(error => console.log("GET Error Status: "+ JSON.stringify(error)));
    console.log("Made GET AJAX Called Server At: "+showTime());

const deleteURL = "http://localhost:3000/employees/4";
makePromiseCall("DELETE",getURL,true)
    .then(responseText => {
        console.log("User Deleted: "+responseText)
    })
    .catch(error => console.log("DELETE Error Status: "+ JSON.stringify(error)));

const postURL = "http://localhost:3000/employees";
const empData = {"name":"Harry","salary":5000};
makePromiseCall("GET",getURL,true)
    .then(responseText => {
        console.log("GET User Data: "+responseText)
    })
    .catch(error => console.log("POST Error Status: "+ JSON.stringify(error)));
