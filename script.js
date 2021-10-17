document.getElementById("userform").addEventListener("submit", function(event) {
  event.preventDefault();
  var id = document.getElementById("user").value;
  console.log("id is", id);
  var fullURL = "https://www.omdbapi.com/?apikey=e7701900&s=" + id;
  console.log(fullURL);
  fetch(fullURL)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      console.log(json);
      console.log(json['Search']['0']['Title']);
      var movieInfo;
      movieInfo = "";
      for (let i = 0; i < json['Search'].length; i++) {
        movieInfo += "<div id='sMovie'>";
        movieInfo += "<h2>" + json['Search'][i]['Title'] + " (" + json['Search'][i]['Year'] + ")" +"</h2>";
        movieInfo += '<img src=' + json['Search'][i]['Poster'] + '>'
        movieInfo += "</div>"
      }
      movieInfo += "";
      document.getElementById("movies").innerHTML = movieInfo;
    });
});
