class item{
   constructor(code,itemname,category,price,discount,expdate){
    this.code=code,
    this.itemname=itemname,
   //  this.category=category,
    this.price=price //,
   //  this.discount=discount,
   //  this.expdate=expdates
 }
}


  itemlist=[{code:"B1001",name:"Classic Burger (Large)",price:750.0},
        {code:"B1003",name:"Turkey Burger",price:1600.00},
        {code:"B1004",name:"Chicken Burger (Large)",price:1400.00},
        {code:"B1005",name:"Chicken Burger (Regular)",price: 800.00},
        
        {code:"B1001",name:"Classic Burger (Large)",price:750.0},
        {code:"B1003",name:"Turkey Burger",price:1600.00},
        {code:"B1004",name:"Chicken Burger (Large)",price:1400.00},
        {code:"B1005",name:"Chicken Burger (Regular)",price: 800.00},

        {code:"B1001",name:"Classic Burger (Large)",price:750.0},
        {code:"B1003",name:"Turkey Burger",price:1600.00},
        {code:"B1004",name:"Chicken Burger (Large)",price:1400.00},
        {code:"B1005",name:"Chicken Burger (Regular)",price: 800.00}]
// console.log( items   [0].name);
// console.log( items[2].name);

let cartlisr=[];


function displayll(){
       // Reference to the table body
       let tableBody = document.getElementById("itemsTable").getElementsByTagName('tbody')[0];
      tableBody.innerHTML='';
       // Loop through the items and create a table row for each item
       for (var i = 0; i < itemlist.length; i++) {
           let row = tableBody.insertRow(i);
           let cell1 = row.insertCell(0);
           let cell2 = row.insertCell(1);
           let cell3 = row.insertCell(2);
           let cell4 = row.insertCell(3);
           
           cell1.innerHTML = itemlist[i].code;
           cell2.innerHTML = itemlist[i].name;
           cell3.innerHTML = itemlist[i].price;
           cell4.innerHTML = i;
       }
   // document.getElementById("viewAll").removeEventListener('click',displayll);
   // document.getElementById("viewAll").addEventListener('click',displayll);
}
function showLess(){
   let tableBody1 = document.getElementById("itemsTable").getElementsByTagName('tbody')[0];
   tableBody1.innerHTML='';
   console.log(1);
   document.getElementById("viewAll").addEventListener('click',displayll);
}
let viewAllButton=document.getElementById("viewAll");
viewAllButton.addEventListener('click',displayll);

let showLessButton=document.getElementById("showLess");
showLessButton.addEventListener('click',showLess);

let namess;
document.getElementById("formSubmit").onclick=function(){
   let code=document.getElementById("code").value;
   let name=document.getElementById("name").value;
   let price=document.getElementById("price").value;
   let stock=document.getElementById("stock").value;
   let newitem=new item(code,name,price,stock);
   itemlist.push(newitem);
   console.log("New Item Added"+newitem.name);
   alert("Item Added Sucessfully");
   document.getElementById("code").value='';
   document.getElementById("name").value='';
   document.getElementById("price").value='';
   document.getElementById("stock").value='';
}

function orderid(){
   let currentDate =new Date();
   const year = currentDate.getFullYear()%100;
   const month = currentDate.getMonth() + 1;
   const day = currentDate.getDate();
   const hours = currentDate.getHours();
   const minutes = currentDate.getMinutes();
   const seconds = currentDate.getSeconds();
   console.log(currentDate);
   let orderid=""+year+month+day+hours+minutes+seconds;
   console.log(orderid);
}  
console.log(itemlist);
// displayll();