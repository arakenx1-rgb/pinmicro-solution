const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.global-nav');
if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  }));
}


// Prevent awkward line breaks around Japanese middle dots in headings/navigation.
(function protectJapaneseMiddleDots(){
  const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
  const nodes=[];
  while(walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach(node=>{
    if(node.nodeValue && node.nodeValue.includes('・')){
      node.nodeValue=node.nodeValue.replace(/・/g,'\u2060・\u2060');
    }
  });
})();
