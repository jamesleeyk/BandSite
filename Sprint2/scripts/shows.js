const showsList = [
  { date: 'Mon Dec 17 2018', venue: 'Ronald Lane', location: 'San Fancisco, CA' },
  { date: 'Tue Jul 18 2019', venue: 'Pier 3 East', location: 'San Fancisco, CA' },
  { date: 'Fri Jul 22 2019', venue: 'View Loungue', location: 'San Fancisco, CA' },
  { date: 'Sat Aug 12 2019', venue: 'Hyatt Agency', location: 'San Fancisco, CA' },
  { date: 'Fri Sep 05 2019', venue: 'Moscow Center', location: 'San Fancisco, CA' },
  { date: 'Wed Aug 11 2019', venue: 'Pres Club', location: 'San Fancisco, CA' },
];

function displayShows(showsArr) {
  for (let show of showsArr) {
    // select section to append
    const showsSection = document.querySelector('.shows');

    // create article card
    const article = document.createElement('article');
    article.classList.add('shows__card');

    // date
    const dateContainer = document.createElement('div');
    dateContainer.classList.add('shows__div');

    const date = document.createElement('h4');
    date.classList.add('shows__subtitle');
    date.classList.add('shows__subtitle-tablet');
    date.innerText = 'DATE';
    const dateContent = document.createElement('p');
    dateContent.classList.add('shows__content');
    dateContent.classList.add('shows__date');
    dateContent.innerText = show.date;

    dateContainer.appendChild(date);
    dateContainer.appendChild(dateContent);

    // venue
    const venueContainer = document.createElement('div');
    venueContainer.classList.add('shows__div');

    const venue = document.createElement('h4');
    venue.classList.add('shows__subtitle');
    venue.classList.add('shows__subtitle-tablet');
    venue.innerText = 'VENUE';
    const venueContent = document.createElement('p');
    venueContent.classList.add('shows__content');
    venueContent.innerText = show.venue;

    venueContainer.appendChild(venue);
    venueContainer.appendChild(venueContent);

    // location
    const locationContainer = document.createElement('div');
    locationContainer.classList.add('shows__div');

    const location = document.createElement('h4');
    location.classList.add('shows__subtitle');
    location.classList.add('shows__subtitle-tablet');
    location.innerText = 'LOCATION';
    const locationContent = document.createElement('p');
    locationContent.classList.add('shows__content');
    locationContent.innerText = show.location;

    locationContainer.appendChild(location);
    locationContainer.appendChild(locationContent);

    // button
    const button = document.createElement('a');
    button.classList.add('shows__button');
    button.setAttribute('href', '../index.html');
    button.innerText = 'BUY TICKETS';

    article.appendChild(dateContainer);
    article.appendChild(venueContainer);
    article.appendChild(locationContainer);
    article.appendChild(button);

    // append to DOM
    showsSection.appendChild(article);
  }
}

displayShows(showsList);
