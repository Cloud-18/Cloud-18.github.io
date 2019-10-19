function dispResults(year) {
  if (year === 0) {
    year = Object.keys(results).reduce(function(a, b) {
      return results[a] > results[b] ? a : b;
    });
  }
  function createCategory(cat) {
    var [name, position] = cat;
    name = name.split("_").join(" ");
    switch (position) {
      case 1:
        return (
          '<li class="list-group-item"><div class="row"><div class="col-3"><span class="badge badge-gold badge-pill">1st</span></div><div class="col-9"><b>' +
          name +
          ": </b>1st</div></div></li>"
        );
      case 2:
        return (
          '<li class="list-group-item"><div class="row"><div class="col-3"><span class="badge badge-silver badge-pill">2nd</span></div><div class="col-9"><b>' +
          name +
          ": </b>2nd</div></div></li>"
        );
      case 3:
        return (
          '<li class="list-group-item"><div class="row"><div class="col-3"><span class="badge badge-bronze badge-pill">3rd</span></div><div class="col-9"><b>' +
          name +
          ": </b>3rd</div></div></li>"
        );
      case 11:
      case 12:
      case 13:
        return (
          '<li class="list-group-item"><div class="row"><div class="col-3"></div><div class="col-9"><b>' +
          name +
          ": </b>" +
          position +
          "th</div></div></li>"
        );
      default:
        switch (position % 10) {
          case 1:
            return (
              '<li class="list-group-item"><div class="row"><div class="col-3"></div><div class="col-9"><b>' +
              name +
              ": </b>" +
              position +
              "st</div></div></li>"
            );
          case 2:
            return (
              '<li class="list-group-item"><div class="row"><div class="col-3"></div><div class="col-9"><b>' +
              name +
              ": </b>" +
              position +
              "nd</div></div></li>"
            );
          case 3:
            return (
              '<li class="list-group-item"><div class="row"><div class="col-3"></div><div class="col-9"><b>' +
              name +
              ": </b>" +
              position +
              "rd</div></div></li>"
            );
          default:
            return (
              '<li class="list-group-item"><div class="row"><div class="col-3"></div><div class="col-9"><b>' +
              name +
              ": </b>" +
              position +
              "th</div></div></li>"
            );
        }
    }
  }

  function createRaceEvent(eventname, eventresults) {
    eventlist = "";
    Object.entries(eventresults).forEach(function(cat) {
      eventlist += createCategory(cat);
    });
    return (
      '<div class="card"><div class="card-header collapsed" id="' +
      eventname +
      '" data-toggle="collapse" data-target="#' +
      eventname +
      '-collapse" aria-expanded="false" aria-controls="' +
      eventname +
      '-collapse"><h5 class="mb-0">' +
      eventname +
      ' Results<span class="dropdown"></span></h5></div><div id="' +
      eventname +
      '-collapse" class="collapse" aria-labelledby="' +
      eventname +
      '" data-parent="#accordion"><div class="card-body"><ul class="list-group-flush">' +
      eventlist +
      "</ul></div></div></div>"
    );
  }

  yearresults = results[year];
  var mikeText = "";
  if (yearresults.mike && yearresults.mike !== 0) {
    mikeText =
      '<h3 class="mike"><i class="fa fa-trophy" id="mike' +
      yearresults.mike.toString() +
      '"></i>&nbsp;';
    if (yearresults.mike === 1) {
      mikeText += "1st";
    } else if (yearresults.mike === 2) {
      mikeText += "2nd";
    } else {
      mikeText += "3rd";
    }
    mikeText += " Place Mike Schmidt Memorial Iron Team Award</h3>";
  }
  var eventtitle =
    '<h2 class="rotate">' +
    year +
    " - " +
    yearresults.car.name +
    '</h2><img src="' +
    yearresults.car.imgloc +
    '" onerror=this.src="assets/images/cars/Not-Pictured.jpg" alt="Car from ' +
    year +
    '">' +
    mikeText;
  $("div#showresult")
    .empty()
    .append(eventtitle);
  var $accordion = $("<div>", { id: "accordion" });
  yearresults.races.forEach(function(eventresults, index) {
    var eventname = yearresults.racetitles[index];
    $accordion.append(createRaceEvent(eventname, eventresults));
  });
  $("div#showresult").append($accordion);
  var width = $("div#showresult h2").width();
  $("div#showresult h2").css("margin-top", width);
}
