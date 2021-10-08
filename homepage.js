hrefButtonsEl.addEventListener("click", buttonClickHandler);
if (song) {
    getartiststoptracks(href);
  
    // clear old content
    artisttoptracksContainerEl.textContent = "";
    if (album) {
        getseveralalbums(href);
      
        // clear old content
        severalalbumsContainerEl.textContent = "";
      }
  }
var artiststoptracksContainerEl = document.querySelector("#tracks-container");
var severalalbumsContainerEl = document.querySelector("#albums-container");
var getartiststoptracks =function(song) {
    // format the spotify api url
     var apiUrl = "https://api.spotify.com/v1/artists/{3TVXtAsR1Inumwj472S9r4}/top-tracks" + artists +"/toptracks";
     // make a request to the url
  fetch(apiUrl).then(function(response) {
    response.json().then(function(data) {
      console.log(data);
    });
  });
};

     fetch("https://api.spotify.com/v1/artists/{3TVXtAsR1Inumwj472S9r4}/top-tracks").then(function)(response) {
         response.json().then(function(data) {
             console.log(data);
     });
    });
     
var getseveralalbums=function(album) {
    // format the spotify api url
    var apiUrl = "https://api.spotify.com/v1/3TVXtAsR1Inumwj472S9r4/discography/album" +discography +"/album";
    // make a request to the url
  fetch(apiUrl).then(function(response) {
    response.json().then(function(data) {
      console.log(data);
    });
  });
};

    fetch("https://api.spotify.com/v1/3TVXtAsR1Inumwj472S9r4/discography/album").then(function)(response) {
        response.json().then(function(data) {

        });
    });
  
}
var getartiststoptracksFormEl = document.querySelector("#SONG");
var getseveralalbumsFormEl = document.querySelector("#ALBUM");
{

    var formSubmitHandler = function(event) {
        event.preventDefault();
        console.log(event);
      };
      getartiststoptracksFormEl.addEventListener("submit", formSubmitHandler);
      getseveralalbumsFormEl.addEventListener("submit", formSubmitHandler);

      var displaytracks = function(tracks, searchTerm) {
        console.log(tracks);
        console.log(searchTerm);
      };
      var displayalbums = function(albums, searchTerm) {
        console.log(albums);
        console.log(searchTerm);
      };
      // loop over tracks
for (var i = 0; i < repos.length; i++) {
    // format tracks name
    var artiststoptracksName = artiststoptracks[i].owner.login + "/" + artiststoptracksName[i].name;
  
    // create a container for track
    var artiststoptracksNameEl = document.createElement("div");
    artiststoptracksNameEl.classList = "list-item flex-row justify-space-between align-center";
  
    // create a span element to hold tracks
    var titleEl = document.createElement("span");
    titleEl.textContent = artiststoptracksName;
  
    // append to container
    artiststoptracksEl.appendChild(titleEl);
  
    // append container to the dom
    artiststoptracksContainerEl.appendChild(artiststoptracksEl);
  }
  // loop over album name
for (var i = 0; i < albums.length; i++) {
    // format album name
    var severalalbumsName = severalalbums[i].owner.login + "/" + severalalbums[i].name;
  
    // create a container for album
    var severalalbumsEl = document.createElement("div");
    severalalbumsEl.classList = "list-item flex-row justify-space-between align-center";
  
    // create a span element to hold album name
    var titleEl = document.createElement("span");
    titleEl.textContent = severalalbumName;
  
    // append to container
    severalalbumEl.appendChild(titleEl);
  
    // append container to the dom
    severalalbumContainerEl.appendChild(severalalbumEl);
  }