     const robots = [
     {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      image: 'https://robohash.org/1?200x200'
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      image: 'https://robohash.org/2?200x200'
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      image: 'https://robohash.org/3?200x200'
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      image: 'https://robohash.org/4?200x200'
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      image: 'https://robohash.org/5?200x200'
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      image: 'https://robohash.org/6?200x200'
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      image: 'https://robohash.org/7?200x200'
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      image: 'https://robohash.org/8?200x200'
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      image:'https://robohash.org/9?200x200'
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      image:'https://robohash.org/10?200x200'
    }
    ];
    
    console.log(robots);














    const addRobotToPage = (arr) => {
      const root = document.getElementById('root');
      root.innerHTML = '';
      arr.forEach((item, i)=> {
       const div = document.createElement('div');
       div.classList.add('dib');


       const img = document.createElement('img');
       img.setAttribute('src', `https://robohash.org/${item.id}size=150*150`);
       div.appendChild(img);


       const h3 = document.createElement('h3');
       h3.innerText = item.name;
       div.appendChild(h3);


       const h4 = document.createElement('h4');
       h3.innerText = item.username;
       div.appendChild(h4);


       const p = document.createElement('p');
       h3.innerText = item.email;
       div.appendChild(p);


       root.appendChild.div;
     })



      const search = () => {
        const searchTxt = document.getElementById('search').value;
        // const.log(searchTxt);
        const filterRobots = robots.filter(item =>{
          return item.name.toLowerCase().includes(searchTxt.toLowerCase());
        })
        addRobotToPage(filterRobots);
      }


      addRobotToPage(robots);