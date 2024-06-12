document.addEventListener("DOMContentLoaded", function() {
    console.log("Page loaded and ready for actions!");

    // const playlistContainer = document.querySelector('.playlist-cards');
    const playlists = data.playlists;
    const randomPlaylist = playlists[Math.floor(Math.random() * playlists.length)];

    const featuredImage = document.getElementById("featuredImage");
    const featuredName = document.getElementById("featuredName");
    const featuredCreator = document.getElementById("featuredCreatorName");

    const songList = document.getElementById("songList");

    featuredImage.src = randomPlaylist.playlist_art;
    featuredName.textContent = randomPlaylist.playlist_name;
    featuredCreator.textContent = randomPlaylist.playlist_creator;


    randomPlaylist.songs.forEach(song => {
        const songDiv = document.createElement('div');
        songDiv.classList.add('songList');

        songDiv.innerHTML = `
        <li id="featured-song-item">
        <section id="lists-image-title-name">
            <div class="featured-song-details">
                <img id="songImage" src="${song.cover_art}" alt="${song.title}">
                <div id="song-artist">
                    <p class="song-title">${song.title}</p
                    <p>Artist: ${song.artist}</p>
                    <p>Album: ${song.album}</p>
                </div>
                 <span class="featured-song-duration">${song.duration}</span>
            </div>
        </section>
         </li>
        `;

        songList.appendChild(songDiv);
    });
});

//     function loadPlaylist(){
//       playlistContainer.innerHTML = '';
//       data.playlists.forEach(playlist =>{
//          const card = createPlaylistCard(playlist);
//          playlistContainer.appendChild(card);
//       });
//    }

    
//     function getRandom(playlist){
//         const randomIndex = Math.floor(Math.random() * playlist.length);
//             return playlist[randomIndex];
//     }
    
//     function featuredPlaylist(playlist) {
//             const featuredPlaylistTitle = document.getElementById("featured-playlistTitle");
//             const featuredPlaylistImage = document.getElementById("featured-playlistImage");
//             const featuredPlaylistCreator = document.getElementById("featured-creatorName");
    
//             featuredPlaylistImage.src = playlist.playlist_art;
//             featuredPlaylistTitle.textContent = playlist.playlist_name;
//             featuredPlaylistCreator.textContent = `Created By: ${playlist.playlist_creator}`;
    
//             const featuredsongList = document.getElementById('featured-songList');
//             featuredsongList.innerHTML ='';
//         playlist.songs.forEach(song =>{
//             const featuredSongItem = document.createElement('li');
//             featuredSongItem.classList.add('featured-song-item');
//             featuredSongItem.innerHTML = `
//             <section id="lists-image-title-name">
//                 <div class="featured-song-details">
//                     <img id="songImage" src="${song.cover_art}" alt="${song.title}">
//                     <section id="song-artist">
//                     <p class="song-title">${song.title}</p>
//                     <p>Artist: ${song.artist}</p>
//                     <p>Album: ${song.album}</p>
//                     </section>
//                     <span class="song-duration">${song.duration}</span>
//                 </div>
//             </section>
//             `;
//             songList.appendChild(featuredSongItem);
//         });
//         }
    
//         loadPlaylist();
//         // const randomPlaylist = getRandom(data.playlists);
//         featuredPlaylist(randomPlaylist);
