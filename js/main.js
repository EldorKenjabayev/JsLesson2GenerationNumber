let a = "+998 90-"
let b = Math.round(Math.random()*999) 
let e = "-"
let c = Math.round(Math.random()*90)
let f = "-"
let d = Math.round(Math.random()*90)
if (b<100){
    b = "0" + Math.round(Math.random()*99)
    if(b<10)
    b = "0" + "0" + Math.round(Math.random()*99)

}

if (c<10){
    c = "0" + Math.round(Math.random()*10)

}
if (d<10){
    d = "0" + Math.round(Math.random()*10)
}

let nomer = a + b + e + c + f + d
document.getElementById("tel").innerHTML = nomer 


