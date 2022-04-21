let api = "https://api.adviceslip.com/advice";

fetch(api)
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            console.log(data);
        })

function insertAdvice(){
    let advice = document.querySelector("#advice");
    let h1 = document.querySelector("#title");
    fetch(api)
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            advice.textContent = '"' + data.slip.advice + '"';
            id = data.slip.id;
            id = id.toString();
            id = id.split('').join(' ')
            h1.textContent += " # " + id;
        })
}

insertAdvice();
 
