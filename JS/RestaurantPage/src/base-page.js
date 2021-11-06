import contactPage from './contact-page';
import homePage from './home-page';
import menuPage from './menu-page';

export function buildNavBar() {
  const navBarContainer = document.createElement('nav');
  navBarContainer.classList.add('nav-bar-container');

  const homePageTab = createNavBarItem('Home');
  homePageTab.addEventListener('click', (event) => {
    if (
      event.target.classList.contains('active') ||
      event.target.parentElement.classList.contains('active')
    ) {
      return;
    }
    setActiveTab(homePageTab);
    homePage.buildContent();
  });

  const menuPageTab = createNavBarItem('Menu');
  menuPageTab.addEventListener('click', (event) => {
    if (event.target.classList.contains('active')) return;
    setActiveTab(menuPageTab);
    menuPage.buildContent();
  });

  const contactPageTab = createNavBarItem('Contact');
  contactPageTab.addEventListener('click', (event) => {
    if (event.target.classList.contains('active')) return;
    setActiveTab(contactPageTab);
    contactPage.buildContent();
  });

  navBarContainer.appendChild(homePageTab);
  navBarContainer.appendChild(menuPageTab);
  navBarContainer.appendChild(contactPageTab);
  setActiveTab(homePageTab);

  return navBarContainer;
}

function createNavBarItem(name) {
  const navBarItem = document.createElement('div');
  navBarItem.classList.add('nav-bar-item');
  const navBarItemTitle = document.createElement('h3');
  navBarItemTitle.innerHTML = name;
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
  const headerContainer = document.createElement('header');
  headerContainer.id = 'header';
  const contentContainer = document.createElement('main');
  contentContainer.id = 'content';
  bodyContainer.appendChild(headerContainer);
  bodyContainer.appendChild(contentContainer);
  headerContainer.appendChild(buildNavBar());

  homePage.buildContent();
}

export default buildSite;
