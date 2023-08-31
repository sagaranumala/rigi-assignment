var tabButtons=document.querySelectorAll(".tabs_container .tabs button");
var tabs=document.querySelectorAll(".tabs_container .tab");

function displayTab(tabIndex){
   tabButtons.forEach(function(node){
        node.style.backgroundColor="";
        node.style.color="";
   })
   tabButtons[tabIndex].style.backgroundColor="rgb(0, 98, 255)";
   tabButtons[tabIndex].style.color="white";

   tabs.forEach(function(node){
    node.style.display="none";
   })
   
   tabs[tabIndex].style.backgroundColor="#F0F8FF";
   tabs[tabIndex].style.display="block";
}
displayTab(0)
