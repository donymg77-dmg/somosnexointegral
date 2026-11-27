const menuButton=document.querySelector('.menu-toggle');
const navigation=document.querySelector('#navigation');
if(menuButton&&navigation){menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')!=='true';menuButton.setAttribute('aria-expanded',String(open));navigation.classList.toggle('open',open);});navigation.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{menuButton.setAttribute('aria-expanded','false');navigation.classList.remove('open');}));}
const tabs=[...document.querySelectorAll('[data-example]')];
function selectExample(tab){tabs.forEach(item=>{const selected=item===tab;item.setAttribute('aria-selected',String(selected));item.tabIndex=selected?0:-1;const panel=document.getElementById(item.getAttribute('aria-controls'));if(panel)panel.hidden=!selected;});}
tabs.forEach((tab,index)=>{tab.addEventListener('click',()=>selectExample(tab));tab.addEventListener('keydown',event=>{let next=index;if(event.key==='ArrowRight')next=(index+1)%tabs.length;else if(event.key==='ArrowLeft')next=(index+tabs.length-1)%tabs.length;else if(event.key==='Home')next=0;else if(event.key==='End')next=tabs.length-1;else return;event.preventDefault();selectExample(tabs[next]);tabs[next].focus();});});
const year=document.getElementById('current-year');if(year)year.textContent=new Date().getFullYear();
