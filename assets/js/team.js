function createTeamTiles() {
  function majorlookup(major) {
    switch (major.toLowerCase()) {
      case "met":
        return "Mechanical Engineering Technology";
      case "me":
        return "Mechanical Engineering";
      case "emet":
        return "Electrical Mechanical Engineering Technology";
      case "ee":
        return "Electrical Engineering";
      case "ce":
        return "Computer Engineering";
      case "cive":
        return "Civil Engineering Technology";
      case "mfet":
        return "Manufacturing Engineering Technology";
      case "ie":
        return "Industrial Engineering";
      case "cet":
        return "Computer Engineering Technology";
      case "eet":
        return "Electrical Engineering Technology";
      case "cs":
        return "Computer Science";
      default:
        return major;
    }
  }

  function tilewrap(tile, person) {
    var lowerName = person.name.toLowerCase();
    var chosen = person.display_name ? person.display_name : person.name;
    var modname = chosen.split("_").join(" ");
    return (
      '<li class="hex"><div class="hexIn" data-toggle="modal" data-target="#team_' +
      lowerName +
      '"><a class="hexLink"><img class="portrait" src="assets/images/headshots/' +
      lowerName +
      '.jpg" alt="" onerror=this.src="assets/images/Not-Pictured.jpg" /><h1>' +
      modname +
      '</h1><div id="chevrondownwhite"></div><p class="font-weight-bold">' +
      tile +
      "</p></a></div></li>"
    );
  }

  function modaltile(person) {
    var lowerName = person.name.toLowerCase();
    var chosen = person.display_name ? person.display_name : person.name;
    var modname = chosen.split("_").join(" ");
    var title = person.eboard ? person.eboard : "";
    if (person.lead) {
      title = person.lead;
    } else if (person.designer) {
      title = person.designer;
    } else if (person.manuf) {
      title = person.manuf;
    }
    if (title.length > 0) {
      //title = "<h5>Role: " + title + "</h5>";
      if (!person.other) {
        person.other = [];
      }
      person.other.unshift(title);
    }
    if (person.other && person.other.length > 0) {
      title = "<h5>Role" + (person.other.length > 1 ? "s" : "") + ": ";
      person.other.forEach(role => (title = title + role + ", "));
      title = title.substring(0, title.length - 2);
      title = title + "</h5>";
    }
    var emailstr = "";
    if (person.email) {
      emailstr =
        "<h5>Email: <i>" +
        person.email +
        "@ritbaja.com&ensp;</i>" +
        emailblock(person);
    }
    var seniorstr = "";
    if (person.prev) {
      //person.grad === year &&
      seniorstr = "<h5>Previous Roles Held: ";
      person.prev.forEach(role => (seniorstr = seniorstr + role + ", "));
      seniorstr = seniorstr.substring(0, seniorstr.length - 2);
      seniorstr = seniorstr + "</h5>";
    }
    var major = "<h5>Major: " + majorlookup(person.major) + "</h5>";
    var years = year + 1 - person.first;
    switch (years) {
      case 1:
        years = "1st";
        break;
      case 2:
        years = "2nd";
        break;
      case 3:
        years = "3rd";
        break;
      default:
        years = years + "th";
    }
    var snip = person.snippet
      ? '<p class="snip">"' + person.snippet + '"</p>'
      : "";
    return (
      '<div class="modal fade" id="team_' +
      lowerName +
      '" tabindex="-1" role="dialog"><div class="modal-dialog modal-dialog-centered modal-lg" role="document"><div class="modal-content"><div class="modal-body"><div class="float-left"><img src="assets/images/headshots/' +
      lowerName +
      '.jpg" alt=""></div><div class="float-left"><h1>' +
      modname +
      "</h1> " +
      title +
      major +
      "<h5>Graduation: 20" +
      person.grad +
      "</h5><h5>" +
      years +
      " year on RIT Baja</h5>" +
      seniorstr +
      emailstr +
      snip +
      "</div></div></div></div></div>"
    );
  }

  function generalmembertile(person) {
    var grad_year = "";
    if (person.grad !== year) {
      grad_year = ", 20" + person.grad;
    }
    return tilewrap(majorlookup(person.major) + grad_year, person);
  }

  function emailblock(person) {
    var modname = person.name.split("_")[0];
    var copystr = mobile
      ? ""
      : "&nbsp;<span onclick=\"getcopy('" +
        person.email +
        '\')"><!--i style="cursor: pointer;" title="Copy ' +
        modname +
        '\'s Email" class="fa fa-copy"></i--></span>';
    return (
      "<span onclick=\"email('" +
      person.email +
      '\')"><i style="cursor: pointer;" title="Email ' +
      modname +
      '" class="fa fa-envelope-o"></i></span>' +
      copystr +
      "</h5>"
    );
  }

  function eboardtile(title) {
    var person = team.find(member => member.eboard === title);
    person.email = title
      .split(" ")
      .join("")
      .toLowerCase();
    return tilewrap(title, person);
  }

  function designertile(person, title) {
    return tilewrap(title, person);
  }

  team = team.filter(person => !person.hide && person.grad >= year);
  eboard_positions.forEach(title => {
    $("ul.eboardList").append(eboardtile(title));
  });
  team
    .filter(person => person.lead)
    .sort((a, b) => {
      if (a.system === b.system) {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      }
      return a.system - b.system;
    })
    .forEach(person =>
      $("ul.leadsList").append(designertile(person, person.lead))
    );
  team
    .filter(person => person.designer)
    .sort((a, b) => {
      if (a.system === b.system) {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      }
      return a.system - b.system;
    })
    .forEach(person =>
      $("ul.designerList").append(designertile(person, person.designer))
    );
  team
    .filter(person => person.manuf)
    .sort((a, b) => {
      if (a.system === b.system) {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      }
      return a.system - b.system;
    })
    .forEach(person =>
      $("ul.manufList").append(designertile(person, person.manuf))
    );
  team
    .filter(person => person.grad === year)
    .sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    })
    .forEach(person => $("ul.seniorList").append(generalmembertile(person)));
  team
    .filter(
      person =>
        person.grad > year &&
        !person.eboard &&
        !person.lead &&
        !person.designer &&
        !person.manuf
    )
    .sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    })
    .forEach(person =>
      $("ul.matriculatedList").append(generalmembertile(person))
    );

  team.forEach(person => $("div#teammodals").append(modaltile(person)));
}

$(document).ready(function() {
  $("h1.group").each(function(value, i) {
    $(this).css("top", $(this).width() + 106);
  });
  createTeamTiles();
  $("div.hexIn").click(function() {
    disableScrolling();
  });
  $(".modal").on("hidden.bs.modal", function(e) {
    enableScrolling();
  });
});
