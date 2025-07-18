b=document.getElementById("box")
c=document.getElementById("sec")
d=document.getElementById("min")
e=document.getElementById("hr")



// function ut(){
//     now = new Date()
//     h=now.getHours().toString().padStart(2,'0')
//     m=now.getMinutes().toString().padStart(2,'0')
//     s=now.getSeconds().toString().padStart(2,'0')
//     b.innerHTML=`${h} : ${m} :${s}`
// }
// window.onload=function(){
//     ut()
//     setInterval(ut,1000)
// }
   


 function movesec(){
    now = new Date()
    h=now.getHours().toString().padStart(2,'0')
    m=now.getMinutes().toString().padStart(2,'0')
    s=now.getSeconds().toString().padStart(2,'0')
    s1=s-15
    a1=s1*6
    m1=m-15
    a2=m1*6
   
    c.style.transform=`rotate(${a1}deg)`
    d.style.transform=`rotate(${a2}deg)`


if(h<=12){
     h1=h-15
     m2=0.5*m
    a3=h1*6*5
    a4=a3+m2
    e.style.transform=`rotate(${a4}deg)`
}
else{
    h1=h-12
    h2=h1-15
     m2=0.5*m
    a3=h2*6*5
    a4=a3+m2
    e.style.transform=`rotate(${a4}deg)`

}


    b.innerHTML=`${h} : ${m} :${s}`
} 
window.onload=function(){
    movesec()
    setInterval(movesec,1000)
}
