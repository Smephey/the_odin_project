const homePage = (() => {
  function buildContent() {
    const parentContent = document.getElementById('content');
    const oldContentDiv = document.getElementById('content-div');
    const contentDiv = document.createElement('div');
    contentDiv.id = 'content-div';
    const title = document.createElement('h1');
    const dashboardCopy = document.createElement('h3');

    title.innerHTML = 'Cake and Bake';
    title.classList.add('title');

    dashboardCopy.innerHTML =
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ipsam mollitia quam cum dolore facilis unde sit sunt distinctio quo. Eaque optio nisi nihil quisquam? Nostrum, ipsum officia. Nulla, perferendis?';
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

export default homePage;
