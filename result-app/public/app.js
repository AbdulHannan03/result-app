// var a = {
//     name:"Hannan",
//     age:19,
//     institute:"SAIMS",
// }

// h.innerHTML = a.name;


// C:\Users\User45\Desktop\New folder (5)\index.html
var a = [   
     {
    name : "ali",
    age:18,
    institute:"SAIMS",
    contact: 03007,
    result : 1,
}
,
 {
    name : "Ahmed",
    age:18,
    institute:"SAIMS",
    contact: 03007,
    result : 0,
}
,
  {
    name : "SAJID",
    age:18,
    institute:"SAIMS",
    contact: 03007,
    result : 1,
}
,
 {
    name : "JAWWAD",
    age:18,
    institute:"SAIMS",
    contact: 03007,
    result : 1,
}
,
 {
    name : "Majid",
    age:18,
    institute:"SAIMS",
    contact: 03007,
    result : "",
}
,
 {
    name : "Nawaz",
    age:18,
    institute:"SAIMS",
    contact: 03007,
    result : 0,
}
,
 {
    name : "Shehryar",
    age:18,
    institute:"SAIMS",
    contact: 03007,
    result : "",
}
,
 {
    name : "Farrukh",
    age:18,
    institute:"SAIMS",
    contact: 03007,
    result : 0,
}
,
 {
    name : "rafay",
    age:18,
    institute:"SAIMS",
    contact: 0300,
    result : 0,
}
]
for(var i=0; i<a.length; i++){
    a[i].rollNumber = 'asd'+ (i+1)
}
// for(var i=0; i<a.length; i++){
//    if (a.result == 0){
//     a[i].status = "pass"
//    } 
//    else{
//        a[i].status = 'Fail'
//    }
// }
var inp = document.getElementById('rollNumber')
function searchRes(){
    console.log(inp.value)
    for (var j=0; j<a.length; j++){
        if(a[j].rollNumber == inp.value){
            if(a[j].result){
                console.log('pass')
                display1.innerHTML = a[j].name
                display2.innerHTML = "PASS"
                display3.innerHTML = "For Details Open Console"
            }else{
                console.log('fail')
                display1.innerHTML = a[j].name
                display2.innerHTML = "FAIL"
                display3.innerHTML = "For Details Open Console"
            }
        }
    }
}
console.log(a)