
//task 1.0
const mainEl = document.querySelector('main');
console.log(mainEl);

//task 1.1
mainEl.style.backgroundColor = 'var(--main-bg)';

//task 1.2
mainEl.innerHTML = "<h1> SEI ROCKS!</H1>";

//task 1.3
mainEl.classList.add('flex-ctr');
console.log(mainEl.classList);

//task 2.0
const topMenuEl = document.getElementById('top-menu');

//task 2.1
topMenuEl.style.height = '100%';

// task 2.2
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

//task 2.3
topMenuEl.classList.add('flex-around');
console.log(topMenuEl.style);
console.log(topMenuEl.classList);

console.log(topMenuEl);

// task 3.0
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

  // created a variable that assigns elements
  for (let link of menuLinks) {
    const a = document.createElement('a');
    a.setAttribute('href', link.href);
    a.innerText = link.text
    topMenuEl.append(a)
  }