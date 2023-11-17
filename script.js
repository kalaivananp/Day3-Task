//question 1 How to compare two json have thr same properties without same order
let obj1 = {
    name:"person1",
    age : 23
}
let obj2 = {
    age : 23,
    name:"person1"
}
function check(obj1,obj2){
    for(key in obj2){
        if(obj1[key]!==obj2[key]){
            return false;
        }
    }
    return true;
}
console.log(check(obj1,obj2));

//Question 2 use the rest country url and display all country flags in console
let request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true) 
request.send();
request.onload = function(){
    let data = request.response;
    // console.log(data);
    let result = JSON.parse(data);
    console.log(result);
    for(let i=0;i<result.length;i++){
        console.log(result[i].flags.png,result[i.area]);
    }
}

//question 3 print the name,region,sub-region,populatiohn using api url
let request1 = new XMLHttpRequest();
request1.open("GET","https://restcountries.com/v3.1/all",true) 
request1.send();
request1.onload = function(){
    let data1 = request1.response;
    // console.log(data);
    let result1 = JSON.parse(data1);
    console.log(result1);
    for(let i=0;i<result1.length;i++){
        console.log(result1[i].name.common,result1[i].region,result1[i].subregion,result1[i].population);
    }
}
