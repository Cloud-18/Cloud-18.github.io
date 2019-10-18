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
  if (mobile) {
    $("span.navbar-toggler-icon").click();
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
  document.querySelectorAll("div#newsTileBody").forEach(tile => {
    newsMax = Math.max(newsMax, tile.clientHeight);
  });
  let headerHeight = document.querySelector("div#newsHead").clientHeight;
  let footerHeight = document.querySelector("div#newsFoot").clientHeight;

  document.querySelectorAll("div#newsTileBody").forEach(tile => {
    tile.style["min-height"] = newsMax + "px";
    tile.style["max-height"] = newsMax + "px";
    tile.style.height = newsMax + "px";
  });

  var newsHeight =
    newsMax + headerHeight + footerHeight + $("div#news>h1").height() + 200;
  let newsPage = $("div.page#news");
  newsPage.css("max-height", newsHeight);
  newsPage.css("min-height", newsHeight);
  newsPage.css("height", newsHeight);

  let height = newsMax + headerHeight + footerHeight + 5;
  $("div.card#newsTile").each(function() {
    $(this).css("min-height", height);
    $(this).css("max-height", height);
    $(this).css("height", height);
  });
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
    $("nav#mynav").addClass("bg-white");
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

function adjustNavbar() {
  if (!$("#navbarNav").is(":visible")) {
    $("nav#mynav").addClass("bg-white");
    $("nav#mynav").addClass("bgR");
  } else if (!scrolledIntoElement("#about")) {
    for (var i = 1; i <= 256; i += 5) {
      let x = (1 / 255) * (256 - i);
      setTimeout(function() {
        if (x === 1) {
          $("nav#mynav").removeClass("bg-white");
        }
        $("nav#mynav").css(
          "background-color",
          "rgba(255, 255, 255, " + x + ")"
        );
      }, i);
    }
    setTimeout(function() {
      $("nav#mynav").removeClass("bgR");
    }, 350);
  }
}

function disableScrolling() {
  // var x = window.scrollX;
  // var y = window.scrollY;
  // window.onscroll = function() {
  //   window.scrollTo(x, y);
  // };

  // lock scroll position, but retain settings for later
  var scrollPosition = [
    self.pageXOffset ||
      document.documentElement.scrollLeft ||
      document.body.scrollLeft,
    self.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop
  ];
  var html = jQuery("html"); // it would make more sense to apply this to body, but IE7 won't have that
  html.data("scroll-position", scrollPosition);
  html.data("previous-overflow", html.css("overflow"));
  html.css("overflow", "hidden");
  window.scrollTo(scrollPosition[0], scrollPosition[1]);
}

function enableScrolling() {
  // window.onscroll = function() {};

  // un-lock scroll position
  var html = jQuery("html");
  var scrollPosition = html.data("scroll-position");
  html.css("overflow", html.data("previous-overflow"));
  window.scrollTo(scrollPosition[0], scrollPosition[1]);
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
    // fixNewsTiles();
    scrollAction();
  }
});
