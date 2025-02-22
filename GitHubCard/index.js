/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

axios.get('https://api.github.com/users/Martins-O-U')
  .then(refs => {
    //debugger
    //cardMaker(res); // return div
    const cardHolder = document.querySelector('.cards');
    cardHolder.appendChild(cardMaker(refs));
  })
  .catch(error => {
    //debugger
    console.log(error.message)
  })

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

let followersArray = [];
followersArray = ['osammy', 'oloruntobiAwoderu', 'tolls-3', 'luishrd', 'ojokure', 'AbelTedros'];
const followerCards = followersArray.forEach(element => {
  axios.get ('https://api.github.com/users/' + element)
  .then(refs => {
    document.querySelector('.cards').appendChild(cardMaker(refs));
  })
  .catch(error => {
    console.log(error.message)
  })
})

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:
*/

          function cardMaker (response) {
            //const {} = data;
            const div = document.createElement('div');
            div.setAttribute('class', 'card');
            const img = document.createElement('img');
            img.setAttribute('src', response.data.avatar_url);
            const div2 = document.createElement('div');
            div2.setAttribute('class', 'card-info');
            const h3 = document.createElement('h3');
            h3.setAttribute('class', 'name');
            h3.textContent = response.data.name;
            const p1 = document.createElement('p');
            p1.setAttribute('class', 'username');
            p1.textContent = response.data.login;
            const p2 = document.createElement('p');
            p2.textContent = 'Location: ' + response.data.location;
            const p3 = document.createElement('p');
            p3.textContent = "Profile: ";
            const a = document.createElement('a');
            a.setAttribute('href', response.data.url);
            a.textContent = response.data.url;
            const p4 = document.createElement('p');
            p4.textContent = 'Followers: ' + response.data.followers_url;
            const p5 = document.createElement('p');
            p5.textContent = 'Following: ' + response.data.following_url;
            const p6 = document.createElement('p');
            p6.textContent = "Bio: " + response.data.bio;

            div.appendChild(img);
            div.appendChild(div2);
            div2.appendChild(h3);
            div2.appendChild(p1);
            div2.appendChild(p2);
            div2.appendChild(p3);
            p3.appendChild(a);
            div2.appendChild(p4);
            div2.appendChild(p5);
            div2.appendChild(p6);
          
            return div;
          }
/*
<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
