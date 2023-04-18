
// map
function loadMapScenario() {
    var map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
        credentials: 'AuioiykgQR6L65sZSOcC2yw6pS6GpHvwhgSryFrMWnr2o1NuFfBZEfKYCr0UrvBM'
    });
}



// get ip
let getIP = '';
fetch("https://api.ipify.org?format=json").then(res=>res.json()).then(data=>getIP = (data.ip))

let apiKey = '1E1B8FE55F3D7C27380A30A10F7A6872';

fetch(`https://api.ip2location.io/?key=${apiKey}&ip=${getIP}`)
.then(res=>res.json())
.then(data=>console.log(data))
.catch(error=>console.error(error))

// document.getElementById('ipButton').onclick = () => {
//     fetch(`https://get-data-141b2-default-rtdb.firebaseio.com/.json`,{
//         method: "POST",
//         headers: {
//             'Content-type': 'application/json'
//         },
//         body: JSON.stringify({id:1,name:"ahmed"})
//     }).then(res=>{})
// }


// let arr = [];

window.onclick = () => {
    console.log(getIP)
    fetch(`https://get-data-141b2-default-rtdb.firebaseio.com/.json`,{
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({IP:getIP})
    }).then(res=>res.json()).then(data=>console.log(data))
}
