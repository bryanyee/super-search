document.addEventListener('DOMContentLoaded', () => {

  let searchBox = document.getElementById('search');

  searchBox.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
     
      let searchTerm = searchBox.value.replace(/\s/g, '+');

      const query = 'https://www.google.com/search?start=0&num=10&q=' + searchTerm;

      document.getElementById('searchLink').setAttribute("href", query); 
      document.getElementById('searchLink').click(); 

    }

  });

});

