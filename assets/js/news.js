function createNewsTiles() {
  function cardtile(newstile, index) {
    var img = "";
    if (newstile.imageloc != "" && newstile.imageloc != "None")
      img =
        '<img id="instaPic" class="card-img-top" src="' +
        newstile.imageloc +
        '" alt="Card image cap">';
    var ellipses = newstile.desc.length > 200 ? " ... " : "";
    descriptionSnippet = newstile.desc.substring(0, 200);
    return ( // data-aos="fade-up"
      '<div class="card" id="newsTile"><div id="newsHead" class="card-header">' +
      newstile.date +
      '</div><div class="card-body" id="newsTileBody">' +
      img +
      '<p class="card-text p-0">' +
      descriptionSnippet +
      ellipses +
      '</p></div><div class="card-footer pt-0" id="newsFoot"><button type="button" class="btn ' + 
      'btn-outline-primary float-right m-1" data-toggle="modal" data-target=".readmore' +
      index +
      '">Read More</button></div></div>'
    );
  }
  function modaltile(newstile, index) {
    return (
      '<div class="modal fade readmore' +
      index +
      '" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h5 class="modal-title" id="exampleModalLabel">' +
      newstile.date +
      '</h5><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><img src="' +
      newstile.imageloc +
      '" width="100%"><div class="modal-body"><p id="instaIcon">' +
      newstile.desc +
      "</p><button onclick=\"goToPost('" +
      newstile.link +
      '\')" class="btn btn-outline-primary" id="instaIcon"><span class="font-weight-bold">View on Instagram &nbsp;</span><i id="instaIcon" class="fa fa-instagram fa-2x"></i></button></div></div></div></div>'
    );
  }

  newstiles.forEach(function(tile, i) {
    var card = cardtile(tile, i);
    var popup = modaltile(tile, i);
    $("div#tiles").append(card);
    $("div#news").append(popup);
  });

  if (mobile) $("div#tiles").width(322 * newstiles.length);
  else $("div#tiles").append('<div class="verti"></div>');

  $(document).ready(function() {
    var imagesLoaded = 0;

    $('img#instaPic').on('load', function(event) {
      imagesLoaded++;
      if (imagesLoaded == 20) {
        fixNewsTiles()
      }
    });
  });
}
