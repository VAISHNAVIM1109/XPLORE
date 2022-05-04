// var c= new Array(2,3,4);
// console.log(c);
// m=[];
// var m=new Array("hi","hey");
// console.log(m);
// console.log(m[0])

// for(var i=0;i<5;i++)
// {
//     console.log(i)
// }


// document.write("hi")

// var a=document.getElementById("name")
// console.log(a.innerHTML)
// console.log(a.innerHTML="steve")


// var health=100
// if(health>80)
// {
//     a.innerHTML="healthy"
//     a.style.color="green"
// }
// else{
//     a.innerHTML="not healthy"
//     a.style.color="red"
//     a.style.fontFamily="Georgia"
// }

// var button=document.getElementById("btn")
// var b=document.getElementById("place")
// function abc(){
//     b.innerHTML="button was clicked"
// }
// button.addEventListener("click",abc)

// function square(a)
// {
//     console.log(a*a)
// }
// square(10)

var a=document.getElementById("name")
var button=document.getElementById("btn")
var counter=0;
function abc()
{
a.innerHTML=counter;
counter++;
}
button.addEventListener("click",abc)


var button=document.getElementById("btn1")
function def()
{
    a.innerHTML=counter-1;
    counter--;
}
button.addEventListener("click",def)