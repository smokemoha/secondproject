const btns= document.querySelectorAll("[data-target]");

const close_modals=document.querySelectorAll(".close-modal");

const overlay =document.getElementById("overlay");

//For opening popup
 btns.forEach((btn) => {

btn.addEventListener("click", () => {

document.querySelector(btn.dataset.target).classList.add("active")

overlay.classList.add("active");
});
 });
//For closing popup using "x" sign

close_modals.forEach((btn) => { 
    btn.addEventListener("click", ()=>{
        const modal=btn.closest(".modal");

modal.classList.remove("active");
 overlay.classList.remove("active");
    });
});
//After opening popup, if you click outside the popup, it will close,

window.onclick=(event) => {

if (event.target== overlay) {

const modals =document.querySelectorAll(".modal");
 modals.forEach((modal) => modal.classList.remove("active"));
  overlay.classList.remove("active");
}
};

//Search functionality

function filter() {
     var filterValue, input, ProductList, ProductName, h4, i;

input = document.getElementById("search");

filterValue = input.value.toUpperCase();

ProductList = document.getElementById("product-list");
 ProductName = ProductList.getElementsByClassName("col-4");
  for (i = 0; i < ProductName.length; i++) {

h4 = ProductName [i].getElementsByTagName("h4") [0]; 
//In search if typed string matches with the element name.
 if (h4.innerHTML.toUpperCase().indexOf (filterValue) > -1){

ProductName[i].style.display = "";
}
else{

ProductName[i].style.display="none";
}
  }
}
    

//Sort product by price

function sortList () {
    var ProductList, ProductName, i, switching, b, c, shouldswitch;
     ProductList=document.getElementById("product-list");

ProductName=ProductList.getElementsByClassName("col-4");
 switching=true;//boclean true

while (switching) {

switching=false;

//loop is running through each product
 for (i = 0; i < (ProductName.length - 1); i++) {

     shouldswitch= false;

b = ProductName[i].getElementsByTagName("span")[0].innerHTML;
c =ProductName[i+1].getElementsByTagName("span")[0]. innerHTML;

//Concion to check price for each product item

if (Number(b) > Number (c)) { 
    shouldswitch = true;

break;
}
}
//Each product element will switch with next product element based on

//product price sorting
if(shouldswitch) {

     ProductName [i].parentNode.insertBefore(ProductName[i + 1],
         ProductName[i]);
    
    switching = true;
     }
    }
}
