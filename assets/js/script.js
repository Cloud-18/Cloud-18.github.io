AOS.init({
  duration: 1200
});

var mobile = false;
if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
) {
  mobile = true;
}

var currentpage = 0;
var scrollpositions = [];
var scrolllock = false;
var i = 0;

// pages = ["#about", "#news", "#team"];
var galleryYears = [2018, 2017, 2016, 2015];

function closeNav() {
  if(mobile) {
    $('span.navbar-toggler-icon').click();
  }
  scrollAction();
}

function isScrolledIntoView(elem) {
  var offset = 0;
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();

  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();

  return elemBottom - offset <= docViewBottom && elemTop + offset >= docViewTop;
}

function scrolledIntoElement(elem) {
  var docViewTop = $(window).scrollTop();
  var elemTop = $(elem).offset().top;

  return docViewTop >= elemTop;
}

function scrolledPassedElement(elem, offset) {
  var docViewTop = $(window).scrollTop();

  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();

  return docViewTop >= elemBottom - offset;
}

function unlockscroll() {
  setTimeout(function() {
    scrolllock = false;
  }, 100);
}

var consecutivedown = 0;
var consecutiveup = 0;
function inarow(delta) {
  var margin = 5;
  if (delta <= 0) {
    consecutiveup = 0;
    consecutivedown++;
  } else {
    consecutivedown = 0;
    consecutiveup++;
  }
  //console.log(consecutivedown, consecutiveup);
  if (consecutivedown == margin) {
    consecutivedown = 0;
    return -1;
  }
  if (consecutiveup == margin) {
    consecutiveup = 0;
    return 1;
  }
  return 0;
}

function fixNewsTiles() {
  var newsMax = 0;
  i = 0;
  $("div#newsTile").each(function() {
    newsMax = Math.max(newsMax, newstiles[i].height);
    $(this).css("min-height", "auto");
    i++;
  });
  if (screen.height <= 768 || (screen.height <= 864 && screen.width >= 864)) {
    if (
      screen.width >= 320 &&
      screen.width <= 375 &&
      screen.height >= 568 &&
      screen.height <= 667
    ) {
      $("div.page#news").css("min-height", "150vh");
    } else {
      $("div.page#news").css("min-height", "116.25vh");
    }
    $("div.page#news").css("max-height", "none");
    newsMax -= newsBuffer;
    i = 0;
    $("div#newsTile").each(function() {
      var numDivisions = screen.height > 768 && screen.height <= 900 ? 4.5 : 8;
      if (newstiles[i].height >= newsMax) {
        var buffer = Math.ceil(
          (newstiles[i].height - newsMax) / (newsBuffer / numDivisions) + 82
        );
        $(this).css("min-height", buffer.toString() + "vh");
      }
      i++;
    });
  } else if (screen.height <= 864 && screen.width < screen.height) {
    $("div.page#news").css("min-height", "82vh");
    $("div.page#news").css("max-height", "107vh");
  } else if (screen.height <= 900 && screen.height < screen.width) {
    $("div.page#news").css("min-height", "85vh");
    $("div.page#news").css("max-height", "105vh");
  } else {
    $("div.page#news").css("min-height", "80vh");
    $("div.page#news").css("max-height", "97vh");
  }
}

function createGalleries() {}

function scrollAction() {
  if (scrolledIntoElement("#team") && !scrolledIntoElement("#sponsorship")) {
    $("a.nav-link").each(function() {
      $(this).removeClass("txt-black");
      $(this).addClass("team-fix");
    });
    $("a.social-btn").each(function() {
      $(this).addClass("active-social-btn");
    });
    $("#social-background").removeClass("social-btn");
  } else if (scrolledIntoElement("#about")) {
    $("nav#mynav").addClass("bg-white");
    $("nav#mynav").removeClass("team-fix");
    $("a.nav-link").each(function() {
      $(this).addClass("txt-black");
      $(this).removeClass("team-fix");
    });
    $("a.social-btn").each(function() {
      $(this).addClass("active-social-btn");
    });
    $("#social-background").removeClass("social-btn");
  } else {
    $("nav#mynav").removeClass("bg-white");
    $("nav#mynav").removeClass("team-fix");
    $("a.nav-link").each(function() {
      $(this).addClass("txt-black");
      $(this).removeClass("team-fix");
    });
    $("a.social-btn").each(function() {
      $(this).removeClass("active-social-btn");
    });
    $("#social-background").addClass("social-btn");
  }
}

var bkgtxt =
  '<p class="bkgtxt">RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING RIOT RACING </p>';

var file = "";

if (!mobile) {
  //console.log("Setting Width");
  $("#navbarNav").css("margin-right", $("a.navbar-brand").width() - 100);
}

$(document).ready(function() {
  $(".page").each(function() {
    scrollpositions.push($(this).offset().top);
    //console.log(scrollpositions);
  });
  file = window.document.location.href.split("/");
  file = file[file.length - 1].split("#");
  file = file[0];
  if (file == "index.html" || file == "" || file == "Bajasite") {
    createNewsTiles();
    createGalleries();
    $("#about").append(bkgtxt);
    dispResults(0);
    Object.keys(results)
      .slice()
      .reverse()
      .forEach(function(year) {
        $("#results .col-md-4").append(
          '<button type="button" class="btn btn-primary btn-lg m-1" onclick="dispResults(' +
            year +
            ');">' +
            year +
            "</button>"
        );
      });
    createSponsorLink();
    $(window).scroll(scrollAction);
    $(window).resize(fixNewsTiles);
    if (mobile) {
      //console.log(mobile);
      $("#about").css("padding-bottom", 50 + $("#jumpcar").height());
    }
    i = 0;
    $("div#newsTile").each(function() {
      newstiles[i].height =
        $(this)
          .find("p")
          .height() + newstiles[i].height;
      i++;
    });
    fixNewsTiles();
    scrollAction();
  }
});
