document.addEventListener("DOMContentLoaded", function() {
   console.log("Page loaded and ready for actions!");
   const playlistContainer = document.querySelector('.playlist-cards');
   const playlistTitle = document.getElementById("playlistTitle");
   const playlistImage = document.getElementById("playlistImage");
   const playlistCreator = document.getElementById("creatorName");

   // const playlistLikes = document.getElementById('playlist-likes');


   const modalOverlay = document.getElementById('modal-overlay');
   // const closeModalButton = document.getElementById('close');
   // var span = document.getElementsByClassName("close")[0];
   const songList = document.getElementById('songList');

   const shuffleButton = document.getElementById('shuffle-button');



   function createPlaylistCard(playlist){
      const card = document.createElement('div');
      card.classList.add('individual-card');

      card.innerHTML =`
      <img class="playlist-card-image" src="${playlist.playlist_art}" alt="Playlist Cover">
      <h3 class="playlist-title">${playlist.playlist_name}</h3>
      <p class="creator-name">Created By: ${playlist.playlist_creator}</p>
      <span class="heart-icon">&#x2665;</span>
      <span class="like-count">${playlist.likeCount}</span>`

      // click to open
      card.addEventListener('click', (event) => {
         if(!event.target.classList.contains(".heart-icon")){
            openModal(playlist);
         }

         //clck event listner for the heart
         const heartIcon = card.querySelector(".heart-icon");
         heartIcon.addEventListener("click", (event) => {
            event.stopPropagation();
            const likeCountElement = heartIcon.nextElementSibling;
            let likeCount = parseInt(likeCountElement.textContent);
            if(likeCount === 1){
               likeCount--;
               heartIcon.classList.remove("liked");
               likeCountElement.textContent = likeCount;
            }
            else if(likeCount === 0){
               likeCount++;
               heartIcon.classList.add("liked");
               likeCountElement.textContent = likeCount;
            }
         });
      });
      
      return card;
   }

   function loadPlaylist(){
      playlistContainer.innerHTML = '';
      data.playlists.forEach(playlist =>{
         const card = createPlaylistCard(playlist);
         playlistContainer.appendChild(card);
      });
   }

   function openModal(playlist){
      playlistImage.src = playlist.playlist_art;
      playlistTitle.textContent = playlist.playlist_name;
      playlistCreator.textContent = `Created By: ${playlist.playlist_creator}`;
      // playlistLikes.textContent = `Likes: ${playlist.likeCount}`;

      songList.innerHTML ='';
      playlist.songs.forEach(song =>{
         const songItem = document.createElement('li');
         songItem.classList.add('song-item');
         songItem.innerHTML = `
         <section id="lists-image-title-name">
            <div class="song-details">
               <img id="songImage" src="${song.cover_art}" alt="${song.title}">
               <section id="song-artist">
                  <p class="song-title">${song.title}</p>
                  <p>Artist: ${song.artist}</p>
                  <p>Album: ${song.album}</p>
               </section>
               <span class="song-duration">${song.duration}</span>
            </div>
         </section>
         `;
         songList.appendChild(songItem);
      });
      modalOverlay.style.display = 'block'; // preivous flex

      //click to close
      document.querySelector(".close").addEventListener("click", () =>{
         document.getElementById("modal-overlay").style.display ="none";
      });

      //shuffle songs
      shuffleButton.addEventListener("click", () => {
         //shuffle random
         const songs = Array.from(songList.children);
         songs.sort(() => Math.random() - 0.5);
         songList.innerHTML ="";
         songs.forEach((song) => songList.appendChild(song));
      });
   }

   loadPlaylist();
   playlistContainer.addEventListener("click", (event) => {
      openModal();
   });

   
   // span.onclick = function(){
   //    modalOverlay.style.display = "none";
   // }
   // window.onclick = function(event){
   //    if(event.target == modalOverlay){
   //       modal.style.display = "none";
   //    }
   // }

   // Add Playlist

   let lastAddedPlaylist = 0;

   const playlistOverlay = document.getElementById('playlist-overlay');
   const addButton = document.getElementById("add-playlist");

   addButton.addEventListener('click', (event) => {
         openAddPlaylistModal();
      });

      function openAddPlaylistModal(playlist){
         playlistOverlay.style.display = 'block'; // preivous flex
         //click to close
         document.querySelector(".playlist-close").addEventListener("click", () =>{
            document.getElementById("playlist-overlay").style.display ="none";
         });
   
      }
      addButton.addEventListener('click', openAddPlaylistModal);

      function handleNewPlayist(event){
         event.preventDefault();
         const newPlaylistName = document.getElementById('new-playlist-name').value;
         const newCreatorName = document.getElementById('new-creator-name').value;

         console.log("New Playlist Name:", newPlaylistName);
         console.log("Creator Name:", newCreatorName);

         lastAddedPlaylist +=1;

         const newPlaylist = {
				playlistID: lastAddedPlaylist, 
            playlist_name: newPlaylistName, 
            playlist_creator: newCreatorName,
				playlist_art: "./assets/img/playlist.png",
				likeCount: 0,
		};

      console.log("New Playlist Object:", newPlaylist)

      playlistContainer.insertBefore(createPlaylistCard(newPlaylist), playlistContainer.firstChild);
      // event.target.reset();
       document.getElementById('add-playlist-content').reset();
   }

      document.getElementById('add-playlist-content').addEventListener('submit', handleNewPlayist);

// Featured Playlist

// function featuredPaylist(playlist){

//    const featuredPlaylistTitle = document.getElementById("featured-playlistTitle");
//    const featuredPlaylistImage = document.getElementById("featured-playlistImage");
//    const featuredPlaylistCreator = document.getElementById("featured-creatorName");

//    playlistImage.src = playlist.playlist_art;
//    featuredPlaylistTitle.textContent = playlist.playlist_name;
//    featuredPlaylistCreator.textContent = `Created By: ${playlist.playlist_creator}`;
   
// }
// loadPlaylist();
// const randomPlaylist = getRandom(data.playlists);
//     featuredPlaylist(randomPlaylist);
// function getRandom(playlist){
//    const randomIndex = Math.floor(Math.random() * playlist.length);
//         return playlist[randomIndex];
// }

// function featuredPlaylist(playlist) {
//         const featuredPlaylistTitle = document.getElementById("featured-playlistTitle");
//         const featuredPlaylistImage = document.getElementById("featured-playlistImage");
//         const featuredPlaylistCreator = document.getElementById("featured-creatorName");

//         featuredPlaylistImage.src = playlist.playlist_art;
//         featuredPlaylistTitle.textContent = playlist.playlist_name;
//         featuredPlaylistCreator.textContent = `Created By: ${playlist.playlist_creator}`;

//         const featuredsongList = document.getElementById('featured-songList');
//         featuredsongList.innerHTML ='';
//       playlist.songs.forEach(song =>{
//          const featuredSongItem = document.createElement('li');
//          featuredSongItem.classList.add('featured-song-item');
//          featuredSongItem.innerHTML = `
//          <section id="lists-image-title-name">
//             <div class="featured-song-details">
//                <img id="songImage" src="${song.cover_art}" alt="${song.title}">
//                <section id="song-artist">
//                   <p class="song-title">${song.title}</p>
//                   <p>Artist: ${song.artist}</p>
//                   <p>Album: ${song.album}</p>
//                </section>
//                <span class="song-duration">${song.duration}</span>
//             </div>
//          </section>
//          `;
//          songList.appendChild(featuredSongItem);
//       });
//     }

//     loadPlaylist();
//     const randomPlaylist = getRandom(data.playlists);
//     featuredPlaylist(randomPlaylist);

});