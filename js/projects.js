'use strict';

var projectData = [
  {
    title:        'Biographic Page',
    description:  '<p>A basic resume/biographic page using vanilla JavaScript.</p><p>The page includes W3C validated semantic HTML5 and CSS.  It lets the reader play a simple JavaScript guessing game based on the content using basic <em>alerts</em> and <em>prompts</em>.</p>',
    url:          'https://0smium.github.io/bio_game/',
    imgUrl:       'images/bio_game.jpg',
    publishedOn:  '2017-01-26',
    category:     'Biographic'
  },
  {
    title:        'Algae Cookies',
    description:  '<p>A demo site for a ficticious "algae cookie" store.</p><p>The app populates demo projections data for various locations in Seattle.</p>',
    url:          'https://0smium.github.io/cookie-stand/',
    imgUrl:       'images/algae_cookies.jpg',
    publishedOn:  '2017-03-02',
    category:     'Demo'
  },
  {
    title:        'Bus Mall',
    description:  '<p>A demo site for a bus version of <em>Sky Mall</em>.</p><p>The app determines what products are most popular and charts the results using the Chart.js library.</p>',
    url:          'https://0smium.github.io/bus-mall/',
    imgUrl:       'images/bus_mall.jpg',
    publishedOn:  '2017-03-04',
    category:     'Demo'
  },
  {
    title:        'Black Jack',
    description:  '<p>A fully functional Black Jack game coded strictly in vanilla JavaScript.</p><p>This was a group project for the completion of Code 201.  It features a sleek, modern design and incorporates the abity to alter bets and double-down.  It also utilizes local storage for a basic leaderboard.</p>',
    url:          'https://0smium.github.io/BlackJack/',
    imgUrl:       'images/blackjack.jpg',
    publishedOn:  '2017-03-18',
    category:     'Games'
  },
  {
    title:        'Trend of the World',
    description:  '<p>A fully functional app that populates tiles from sources of trending internet topics and links them to their source.</p><p>This app was a group project for the completion of Code 301.  It features a contemporary design and a color scheme toggle (dark and light).  The app is deployed to Heroku.  AJAX requests for trending topics are cached into PostgreSQL every ten minutes uisng Heroku Scheduler.  The page is current whenever a user loads it and automatically refreshes results after 60s of idle without reloading the page.</p>',
    url:          'http://trendofthe.world',
    imgUrl:       'images/totw.jpg',
    publishedOn:  '2017-05-19',
    category:     'Trending'
  },
];
