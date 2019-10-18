
document.querySelectorAll("a").forEach(p=>console.log(p.href));

for(j=0;j<10;j++){

 

    let nodes=document.querySelectorAll("a");
    console.log(nodes[j].href);
    
     
    
    }


    document.querySelectorAll(".css-hobwqm").forEach(p=>p.style.color="yellow")

    document.querySelectorAll(".css-hobwqm").forEach(p=>p.style.fontSize="30px")

    document.querySelectorAll(".css-hobwqm").forEach(p=>p.style.backgroundColor="orange")

    document.querySelector(".css-159p4b7").style.position="absolute")

    JavaScript
      
    
    
    // Topics Covered
//  ARIA, DOM, Controlling HTML/CSS via Javascript
//  ID Selectors, CSS Selectors
// Query Selectors
document.querySelector(".css-159p4b7").style.top='20px'
document.querySelector(".css-159p4b7").style.left='200px'
document.querySelector(".css-159p4b7").style.zIndex=99
document.querySelector(".css-159p4b7").attributes
document.querySelector("#algolia-doc-search").setAttribute("event","user-started typing")
document.querySelector("#algolia-doc-search").getAttribute("event")
//Event Listeners
document.querySelector("#btnToggle").addEventListener('click',function(e){ console.log(e,"You clicked this button"); });
//Adding & Removing Class
document.querySelector(".css-1s44ra").classList.remove("failure")
document.querySelector(".css-1s44ra").classList.add("success")
document.querySelector(".css-1s44ra").classList.toggle("failure")
//Dynamically adding elements
let divPlaceholder=document.querySelector(".css-tctv7l")
let paraElement=document.createElement("p")
paraElement.appendChild("Thi sis the paragraph")
paraElement.appendChild(document.createTextNode("Thi sis the paragraph"))
divPlaceholder.appendChild(paraElement)
