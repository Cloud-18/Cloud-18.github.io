function createTeamTiles(){
	function majorlookup(major) {
		switch(major.toLowerCase()) {
			case 'cive':
				return 'Civil Engineering Technology';
			case 'ce':
				return 'Computer Engineering';
			case 'cet':
				return 'Computer Engineering Technology';
			case 'me':
				return 'Mechanical Engineering';
			case 'met':
				return 'Mechanical Engineering Technology';
			case 'emet':
				return 'Electrical Mechanical Engineering Technology';
			case 'mfet':
				return 'Manufacturing Engineering Technology';
			case 'ee':
				return 'Electrical Engineering';
			case 'eet':
				return 'Electrical Engineering Technology';
			case 'ie':
				return 'Industrial Engineering';
			case 'cs':
				return 'Computer Science';
			default:
				return major;
		}
	}

	function tilewrap(tile, person) {
		var lowerName = person.name.toLowerCase();
		var chosen = (person.display_name ? person.display_name : person.name);
		var modname = chosen.split('_').join(' ');
		return '<li class="hex"><div class="hexIn" data-toggle="modal" data-target="#gallery\' + index + \'"><a class="hexLink" href="#" style="cursor: default;"><img class="portrait" src="assets/images/headshots/' + lowerName + '.jpg" alt="" onerror=this.src="assets/images/Not-Pictured.jpg" /><h1>' + modname + '</h1><p>' + tile + '</p></a></div></li>';
	}
	
	function generalmembertile(person) {
		return tilewrap(majorlookup(person.major) + ', 20' + person.grad, person);
	}
	
	function emailblock(person) {
		var modname = person.name.split('_');
		return '<br/><span style="cursor: pointer;" title="Email ' + modname[0] + '" class="btn" onclick="email(\'' + person.email + '\')"><i class="fa fa-envelope"></i></span>';
	}
	
	function eboardtile(title) {
		var person = team.find(member => member.eboard === title);
		person.email = title.split(' ').join('').toLowerCase();
		return tilewrap(title + '<br/>' + majorlookup(person.major) + ', 20' + person.grad + emailblock(person), person);
	}
	
	function designertile(person, title) {
		return tilewrap(title + '<br/>' + majorlookup(person.major) + ', 20' + person.grad + emailblock(person), person);
	}


	const eboard_positions = ['Team Manager', 'Project Manager', 'Treasurer', 'Secretary'];
	
	team = team.filter(person => !person.hide);
	eboard_positions.forEach(title => {
		$('ul.eboardList').append(eboardtile(title))
	});
	team.filter(person => person.lead).sort((a, b) => {
		if(a.system === b.system) {
			if(a.name < b.name) { return -1; }
			if(a.name > b.name) { return 1; }
			return 0;
		}
		return a.system-b.system;
	}).forEach(person => $('ul.leadsList').append(designertile(person, person.lead)));
	team.filter(person => person.designer).sort((a, b) => {
		if(a.system === b.system) {
			if(a.name < b.name) { return -1; }
			if(a.name > b.name) { return 1; }
			return 0;
		}
		return a.system-b.system;
	}).forEach(person => $('ul.designerList').append(designertile(person, person.designer)));
	team.filter(person => person.manuf).sort((a, b) => {
		if(a.system === b.system) {
			if(a.name < b.name) { return -1; }
			if(a.name > b.name) { return 1; }
			return 0;
		}
		return a.system-b.system;
	}).forEach(person => $('ul.manufList').append(designertile(person, person.manuf)));
	team.filter(person => person.grad === year).sort((a, b) => {
		if(a.name < b.name) { return -1; }
		if(a.name > b.name) { return 1; }
		return 0;
	}).forEach(person => $('ul.seniorList').append(generalmembertile(person)));
	team.filter(person => person.grad > year && !person.eboard && !person.lead && !person.designer && !person.manuf).sort((a, b) => {
		if(a.name < b.name) { return -1; }
		if(a.name > b.name) { return 1; }
		return 0;
	}).forEach(person => $('ul.matriculatedList').append(generalmembertile(person)));
}


$(document).ready(function(){
    $('h1.group').each(function(value, i){
        $(this).css('top', $(this).width() + 106);
    });
	createTeamTiles();
})