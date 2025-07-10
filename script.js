// script.js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('lyrics-form');
    const lyricsList = document.getElementById('lyrics-list');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        saveLyrics();
    });

    function saveLyrics() {
        const title = document.getElementById('title').value;
        const artist = document.getElementById('artist').value;
        const lyrics = document.getElementById('lyrics').value;

        if (!title || !artist || !lyrics) {
            alert('Please fill in all fields.');
            return;
        }

        const id = Date.now();
        const song = {
            title: title,
            artist: artist,
            lyrics: lyrics
        };

        localStorage.setItem(id, JSON.stringify(song));
        displayLyrics();
        form.reset();
    }

    function displayLyrics() {
        lyricsList.innerHTML = '';
        for (let i = 0; i < localStorage.length; i++) {
            const id = localStorage.key(i);
            const song = JSON.parse(localStorage.getItem(id));
            const listItem = document.createElement('li');
            listItem.innerHTML = `<strong>${song.title}</strong> by ${song.artist} <button class='edit-btn' data-id='${id}'>Edit</button>`;
            lyricsList.appendChild(listItem);
        }
    }

    displayLyrics();
});