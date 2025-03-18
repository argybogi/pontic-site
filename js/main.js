fetch('https://your-render-api-url/api/songs')
    .then(response => response.json())
    .then(data => {
        let list = document.getElementById('songs-list');
        data.forEach(song => {
            let li = document.createElement('li');
            li.textContent = `${song.title} - ${song.artist}`;
            list.appendChild(li);
        });
    })
    .catch(error => console.error('Error fetching songs:', error));
