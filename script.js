
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
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];


  // created a variable that assigns elements
  for (let link of menuLinks) {
    const a = document.createElement('a');
    a.setAttribute('href', link.href);
    a.innerText = link.text
    topMenuEl.append(a)
  }
// task 4.0
  const subMenuEl = document.getElementById('sub-menu')

// task 4.1
  subMenuEl.style.height = '100%';

// task 4.2
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)'

// task 4.3
subMenuEl.classList.add('flex-around');


console.log(subMenuEl.style);
console.log(subMenuEl.classList);



console.log(subMenuEl);

subMenuEl.style.position = 'absolute';

// task 4.5
subMenuEl.style.top = 0

// task 5.1
const topMenuLinks = document.querySelectorAll('nav#top-menu > a');
console.log(topMenuLinks);


// task 5.6

// const linkFound = menuLinks.find(obj => obj.text === 'account');

// console.log(linkFound);

// if (linkFound.subLinks !== undefined) {
//   showingSubMenu = true
// } else {
//     showingSubMenu = false

// }