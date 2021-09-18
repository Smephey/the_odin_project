import loadHomePage from './home-page';

export function buildNavBar() {
  const navBarContainer = document.createElement('nav');
  navBarContainer.classList.add('nav-bar-container');

  const homePageTab = createNavBarItem('Home');
  homePageTab.addEventListener('click', (event) => {
    if (event.target.classList.contains('active')) return;
    setActiveTab(homePageTab);
    console.log('active');
    // load home page
  });

  const menuPageTab = createNavBarItem('Menu');
  menuPageTab.addEventListener('click', (event) => {
    if (event.target.classList.contains('active')) return;
    setActiveTab(menuPageTab);
    // load menu page
  });

  const contactPageTab = createNavBarItem('Contact');
  contactPageTab.addEventListener('click', (event) => {
    if (event.target.classList.contains('active')) return;
    setActiveTab(contactPageTab);
    // load contact page
  });

  navBarContainer.appendChild(homePageTab);
  navBarContainer.appendChild(menuPageTab);
  navBarContainer.appendChild(contactPageTab);

  return navBarContainer;
}

function createNavBarItem(name) {
  const navBarItem = document.createElement('div');
  navBarItem.classList.add('nav-bar-item');
  const navBarItemTitle = document.createElement('h3');
  navBarItemTitle.innerText = name;
  navBarItem.appendChild(navBarItemTitle);
  return navBarItem;
}

function setActiveTab(tab) {
  const navTabs = document.querySelectorAll('.nav-bar-item');

  navTabs.forEach((navTab) => {
    if (navTab !== tab) {
      navTab.classList.remove('active');
    }
  });
  tab.classList.add('active');
}

export function buildSite() {
  const bodyContainer = document.body;
  bodyContainer.appendChild(buildNavBar());

  loadHomePage();
}

export default buildSite;
