const onLoad = () => {
  const contentDiv = document.querySelector('#content');
  const title = document.createElement('h1');
  const dashboardCopy = document.createElement('h3');

  title.innerHTML = 'Cake and Bake';
  title.classList.add('title');

  dashboardCopy.innerHTML =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ipsam mollitia quam cum dolore facilis unde sit sunt distinctio quo. Eaque optio nisi nihil quisquam? Nostrum, ipsum officia. Nulla, perferendis?';
  dashboardCopy.classList.add('dashboard-copy');

  contentDiv.appendChild(title);
  contentDiv.appendChild(dashboardCopy);
};

export default onLoad;
