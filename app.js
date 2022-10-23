//Zadanie 1
document.getElementById('ID_akapitu').textContent = "Michal"
//Zadanie 2 
document.getElementById('ID_akapitu2').textContent = "Tekst w akapicie"
document.getElementById('ID_akapitu2').onmouseover = function(){
    let oldFont =  document.getElementById('ID_akapitu2').style.fontFamily
    let oldColor = document.getElementById('ID_akapitu2').style.color
    document.getElementById('ID_akapitu2').style.fontFamily = "cursive"
    document.getElementById('ID_akapitu2').style.color ="red"
    document.getElementById('ID_akapitu2').onmouseleave = function(){
        document.getElementById('ID_akapitu2').style.fontFamily = oldFont
        document.getElementById('ID_akapitu2').style.color = oldColor
    }
}
//Zadanie 3 
document.getElementById("Submit_FS_akapitu").onclick= function(){
    document.getElementById("ID_akapitu").style.fontSize = document.getElementById("FS_akapitu").value +"px"
}
//Zadanie 4 
document.getElementById("Submit_T4").onclick= function(){
    document.getElementById("T4_Out").textContent =""
    document.getElementById('ContPT2').style.backgroundColor = document.querySelector('input[name="Color"]:checked').value
    document.getElementById("T4_Out").textContent = document.getElementById("Text_T_4").value
}

//Zadanie 5 
document.getElementById('Submit_Num').onclick = function(){
    document.getElementById('numOut').innerHTML =""
    let num1 = parseInt(document.getElementById('Num1').value)
    let num2 = parseInt(document.getElementById('Num2').value)
    if(num1 > num2) { 
        for(let i = num1; i>=num2; i--){
            if(i%3==0 && i%2==0){
                document.getElementById('numOut').innerHTML += `<span class='red bold'> ${i} </span>`
            }
            else if(i%2==0){
                document.getElementById('numOut').innerHTML += `<span class='red'> ${i} </span>`
            }
            else if(i%3==0){
                document.getElementById('numOut').innerHTML += `<span class='bold'> ${i} </span>`
            }
            else{
                document.getElementById('numOut').innerHTML += i 
            }
        }
        document.getElementById('numOut').innerHTML += "   ciag jest malejacy"
    }
    else{ 
        for(let i = num1; i<=num2; i++){
            if(i%3==0 && i%2==0){
                document.getElementById('numOut').innerHTML += `<span class='red bold'> ${i} </span>`
            }
            else if(i%2==0){
                document.getElementById('numOut').innerHTML += `<span class='red'> ${i} </span>`
            }
            else if(i%3==0){
                document.getElementById('numOut').innerHTML += `<span class='bold'> ${i} </span>`
            }
            else{
                document.getElementById('numOut').innerHTML += i 
            }
        }
        document.getElementById('numOut').innerHTML += "   ciag jest Rosnacy"
    }
}
//Zadanie 6 
var Dzis = new Date();
document.getElementById('data').textContent = "dzisiaj jest: " + Dzis.getDate() + "." + (Dzis.getMonth() + 1) + "." + Dzis.getFullYear()  

//Zadanie 7 
function StartClock(){
    ///////Holy shit 
    var TimeRN = new Date();
    var hrs = TimeRN.getHours();
    var min = TimeRN.getMinutes();
    var sec = TimeRN.getSeconds();
    min = checkTime(min);
    hrs = checkTime(hrs);
    sec = checkTime(sec);
    document.getElementById('godz').textContent = "teraz jest:" + hrs + ':' +  min + ':' + sec
    setTimeout(StartClock, 1000);
}
StartClock()
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
//Zadanie 8 
let posts = []
document.getElementById('Submit_Post').onclick = function(){
    document.getElementById('Sorted').innerHTML = ""
    posts.push(document.getElementById('Post').value)
    posts.sort()
    console.log(posts.length)
    for(let i=0 ; i<posts.length; i++){
        document.getElementById('Sorted').innerHTML += `<br>${posts[i]}</br>`
    }
}
