(()=>{const e=document.getElementById("links"),n=documente.querySelector("h1"),t={name:"Germán Cavani",nickname:"JeffUy",description:"...",avatar:"...",social:[{name:"linkedin",url:"https://linkedin.com/in/german-c-b0b371218/",username:"German Cavani"},{name:"instagram",url:"https://instagram.com/kwanggae",username:"kwanggae"}],links:[{name:"KwangGae App",url:"https://www.kwanggae.com/",color:"red",emoji:"📖"},{name:"Website",url:"https://www.gcavani.com/",color:"yellow",emoji:"💬"}],footer:"Made with Love on Uruguay"};(()=>{let a=document.createTextNode(t?.name),o=t?.links?.map((e=>`<div class="bg-${e.color}-200 px-4 py-5 w-full flex justify-between">\n\t\t<a class="text-sm font-bold text-${e.color}-600 text-center hover:${e.color}-800 cursor-pointer"\n\t\t\thref=${e.url} target="_blank">\n\t\t\t${e.name}\n\t\t</a>\n\t\t<span>${e.emoji}</span>\n\t</div>`)).join(""),r=document.createElement("section");r.innerHTML=o,e.appendChild(r),n.appendChild(a)})()})();