const contactPage = (() => {
  function buildContent() {
    const parentContent = document.getElementById('content');
    const oldContentDiv = document.getElementById('content-div');
    const contentDiv = document.createElement('div');
    contentDiv.id = 'content-div';
    const title = document.createElement('h1');
    const dashboardCopy = document.createElement('h3');

    title.innerHTML = 'Contact Us';
    title.classList.add('title');

    dashboardCopy.innerHTML = 'Contact Info';
    dashboardCopy.classList.add('dashboard-copy');

    contentDiv.appendChild(title);
    contentDiv.appendChild(dashboardCopy);

    if (oldContentDiv) {
      parentContent.replaceChild(contentDiv, oldContentDiv);
    } else {
      parentContent.appendChild(contentDiv);
    }
  }

  return { buildContent };
})();

export default contactPage;
