document.addEventListener('DOMContentLoaded', () => {

  let searchBox = document.getElementById('search');

  searchBox.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
     
      // let audio = document.createElement('audio');
      // audio.setAttribute('src', 'D2.mp3');
      // audio.setAttribute('id', 'audio');
      // document.body.appendChild(audio);
      // audio.play();

      let audio = new Audio('D2.mp3');
      //document.body.appendChild(audio);
      audio.play();

      let searchTerm = searchBox.value.replace(/\s/g, '+');

      const query = 'https://www.google.com/search?start=0&num=10&q=' + searchTerm;

      document.getElementById('searchLink').setAttribute("href", query); 
      document.getElementById('searchLink').click(); 

    }

  });

});

