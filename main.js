(()=>{"use strict";let e=document.querySelector("body");const t=()=>{let t=document.createElement("div");t.classList.add("home"),t.classList.add("container"),t.innerText="Home",e.appendChild(t)};let n=document.querySelector("body");let d=document.querySelector("body");let c=document.querySelector("body"),l=document.querySelector("#content"),o=document.createElement("div");o.classList.add("navBar");let a=document.createElement("a");a.innerText="🌮 EatFull",a.setAttribute("id","logo");let i=document.createElement("a");i.textContent="Home",i.setAttribute("href","#home");let r=document.createElement("a");r.textContent="About",r.setAttribute("href","#about");let s=document.createElement("a");s.textContent="Menu",s.setAttribute("href","#menu"),o.appendChild(a),o.appendChild(i),o.appendChild(r),o.appendChild(s),l.appendChild(o);const u=()=>{l=document.querySelector(".container"),console.log(l)},m=()=>{u(),c.removeChild(l),t()};r.addEventListener("click",(()=>{u(),c.removeChild(l),(()=>{let e=document.createElement("div");e.classList.add("about"),e.classList.add("container"),e.innerText="About",n.appendChild(e)})()})),a.addEventListener("click",m),i.addEventListener("click",m),s.addEventListener("click",(()=>{u(),c.removeChild(l),(()=>{let e=document.createElement("div");e.classList.add("menu"),e.classList.add("container"),e.innerText="Menu",d.appendChild(e)})()})),t()})();