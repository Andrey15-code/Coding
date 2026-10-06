document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById('myButton');
  const menu = document.getElementById('myMenu');

  if (btn && menu) {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      
      menu.classList.toggle('invisible');
      menu.classList.toggle('opacity-0');
      menu.classList.toggle('-translate-y-full'); 
    });

    
    document.addEventListener('click', (e) => {
      if (!menu.contains(e.target) && e.target !== btn) {
        menu.classList.add('invisible', 'opacity-0', '-translate-y-full');
      }
    });
  }
});
