const songs = [
    {"artist": "Pero deformero", "title": "Cerka Djavola", "duration": 187, "genres": ['metal', 'alternative', 'folk']},
    {"artist": "Rocky Raccoon", "title": "Woodland Groove", "duration": 220, "genres": ['rock', 'indie']},
    {"artist": "Adele", "title": "Someone like you", "duration": 295, "genres": ['rock', 'pop']},
    {"artist": "The Rolling Stones", "title": "Paint It Black", "duration": 220, "genres": ['rock']},
{"artist": "Michael Jackson", "title": "Thriller", "duration": 358, "genres": ['pop', 'dance']},
{"artist": "Bob Marley", "title": "Three Little Birds", "duration": 182, "genres": ['reggae']},
{"artist": "Queen", "title": "Bohemian Rhapsody", "duration": 356, "genres": ['rock', 'opera']},
{"artist": "Ed Sheeran", "title": "Shape of You", "duration": 234, "genres": ['pop', 'R&B']},
{"artist": "Mozart", "title": "Eine kleine Nachtmusik", "duration": 354, "genres": ['classical']},
{"artist": "Daft Punk", "title": "Get Lucky", "duration": 248, "genres": ['electronic', 'disco']},
{"artist": "Johnny Cash", "title": "Ring of Fire", "duration": 157, "genres": ['country', 'rock']},
  ];
  
  const genres = Array.from(new Set(songs.flatMap(song => song.genres)));
  
  function renderGenres() {
    const genresContainer = document.getElementById('genres');
    genresContainer.innerHTML = genres.map(genre => `<span class="badge badge-dark genre-badge" onclick="filterByGenre('${genre}')">${genre}</span>`).join(' ');
  }
  
  function renderSongs(filteredSongs = songs) {
    const songsContainer = document.getElementById('songs');
    songsContainer.innerHTML = filteredSongs.map(song =>
      `<div class="col-md-4 mb-3">
        <div class="card grow">
          <div class="card-body ">
            <h5 class="card-title ttt">${song.title}</h5>
            <p class="card-text">Izvođač: ${song.artist}<br/>Trajanje: ${song.duration} sekundi</p>
          </div>
        </div>
      </div>`
    ).join(' ');
  }
  
  function filterByGenre(genre) {
    const filteredSongs = songs.filter(song => song.genres.includes(genre));
    renderSongs(filteredSongs);
  }
  
  renderGenres();
  renderSongs();
  