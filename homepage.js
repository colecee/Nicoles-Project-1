var getrbsongs =function() {
    console.log("function was called")
};
getrbsongs
var gethiphopsongs =function() {
    console.log("function was called")
};
gethiphopsongs
var getrapsongs =function() {
    console.log("function was called")
}
getrapsongs
var getCLBsongs =function() {
    console.log("function was called")
};
getCLBsongs
var getscorpionsongs =function() {
    console.log("function was called")
};
getscorpionsongs
var getdarklanedemotapes =function() {
    console.log("function was called")
};
getdarklanedemotapes
const endpoint = "https://api.spotify.com/v1/recommendations";
const artists = '6sFIWsNpZYqfjUpaCgueju';
const danceability = encodeURIComponent('0.9');

fetch(`${endpoint}?seed_artists=${artists}&target_danceability=${danceability}`, {
  method: "GET",
  headers: {
      Authorization: `Bearer ${userAccessToken}`
  }
})
.then(response => response.json())
.then(({tracks}) => {
  tracks.forEach(item => {
    console.log(`${item.name} by ${item.artists[0].name}`);
  })
})