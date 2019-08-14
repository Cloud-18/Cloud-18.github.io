/*	Example Options: (+ means required)
 *	+ name: First_Last (Do not use any other formatting, this attaches the picture to it)
 *	+ major: cive, ce, cet, me, met, emet, mfet, ee, eet, ie, cs (Or full major name)
 *	+ grad: (graduation year)
 *	eboard: [Full Title]
 *	lead: [Full Title]
 *	designer: [Full Title]
 *	manuf: [Full Title]
 *	system: A number used for sorting pictures. I use design group #'s
 *	email: [USE THIS PART]@ritbaja.com (eboard only need emails if they have another position)
 *	hidden: (true/false) If nothing is there, it is assumed false
 *	display_name: If there is a special character in their name or some special name case, put it here
 *	first: First year on team
*/
var team = [ // You do not need to worry about removing members after they graduate. They are filtered out
	{
		"name": "Erica_Neese",
		"major": "ie",
		"grad": 20,
		"eboard": "Team Manager",
		"snippet":"I love this team!",
		"first": 17
	},
	{
		"name": "Adam_Seidman",
		"major": "ce",
		"grad": 22,
		"eboard": "Treasurer",
		"first": 18
	},
	{
		"name": "Justin_Neves",
		"major": "cive",
		"grad": 20,
		"eboard": "Project Manager",
		"first": 16
	},
	{
		"name": "Griffin_Joslin",
		"major": "Graphic Design",
		"grad": 22,
		"eboard": "Secretary",
		"first": 19
	},
	{
		"name": "Ethan_Yaro",
		"major": "met",
		"grad": 20,
		"lead": "Chief Engineer",
		"system": 0,
		"email": "chiefengineer",
		"first": 16
	},
	{
		"name": "Dana_Eschler",
		"major": "me",
		"grad": 21,
		"lead": "Frame Lead",
		"system": 1,
		"email": "frame",
		"first": 17
	},
	{
		"name": "Kishoth_Manoranjithan",
		"major": "met",
		"grad": 21,
		"lead": "Suspension Lead",
		"system": 2,
		"email": "suspension",
		"first": 17
	},
	{
		"name": "Kyle_Mellendorf",
		"major": "mfet",
		"grad": 21,
		"lead": "Driveline/Outboard Lead",
		"system": 4,
		"email": "driveline",
		"first": 17
	},
	{
		"name": "Justin_Woods",
		"major": "met",
		"grad": 21,
		"lead": "Brakes Lead",
		"system": 5,
		"email": "brakes",
		"first": 17
	},
	{
		"name": "Bryan_Lin",
		"major": "emet",
		"grad": 21,
		"lead": "Electrical Lead",
		"system": 9,
		"email": "dataaq",
		"first": 17
	},
	{
		"name": "Alex_Smart",
		"major": "me",
		"grad": 20,
		"lead": "Research and Development",
		"system": 10,
		"email": "rnd",
		"first": 17
	},
	{
		"name": "Anthony_Coppola",
		"major": "met",
		"grad": 23,
		"designer": "Suspension Designer",
		"system": 2,
		"email": "suspension",
		"first": 19
	},
	{
		"name": "Chris_Impellizzeri",
		"major": "met",
		"grad": 22,
		"designer": "Suspension Designer",
		"system": 2,
		"email": "suspension",
		"display_name": 'Christopher Impellizzeri',
		"first": 18
	},
	{
		"name": "Grayson_Keaton",
		"major": "met",
		"grad": 22,
		"designer": "Shocks/Vehicle Dynamics",
		"system": 2,
		"email": "suspension",
		"first": 18
	},
	{
		"name": "Anthony_Blasie",
		"major": "met",
		"grad": 23,
		"designer": "Steering Designer",
		"system": 3,
		"email": "steering",
		"first": 19
	},
	{
		"name": "Dan_Salai",
		"major": "me",
		"grad": 22,
		"designer": "Brakes Designer",
		"system": 5,
		"email": "brakes",
		"display_name": "Daniel Salai",
		"first": 18
	},
	{
		"name": "Julia_Nelson",
		"major": "me",
		"grad": 20,
		"designer": "Ergonomics Designer",
		"system": 6,
		"email": "ergo",
		"first": 17
	},
	{
		"name": "Susan_Lane",
		"major": "me",
		"grad": 21,
		"designer": "Reduction Designer",
		"system": 7,
		"email": "reduction",
		"first": 17
	},
	{
		"name": "Sam_Dhykoff",
		"major": "me",
		"grad": 22,
		"designer": "Primary CVT Designer",
		"system": 8,
		"email": "primary",
		"display_name": "Samuel Dhykoff",
		"first": 18
	},
	{
		"name": "Brendan_Murphy",
		"major": "me",
		"grad": 21,
		"designer": "Secondary CVT Designer",
		"system": 8.5,
		"email": "secondary",
		"first": 18
	},
	{
		"name": "Nick_Harter",
		"major": "emet",
		"grad": 22,
		"designer": "Driveline Integration/Engines",
		"system": 12,
		"email": "engines",
		"display_name": "E. Nicholas Harter",
		"first": 19
	},
	{
		"name": "Ledyard_McFadden",
		"major": "met",
		"grad": 22,
		"manuf": "Manufacturing Manager",
		"system": 1,
		"email": "mman",
		"first": 19
	},
	{
		"name": "Brie_Ludwig",
		"major": "me",
		"grad": 20,
		"manuf": "Composites Lead",
		"system": 2,
		"email": "composites",
		"first": 17
	},
	{
		"name": "Bennett_Wong",
		"major": "met",
		"grad": 20,
		"manuf": "CNC Machinist",
		"system": 3,
		"email": "alathe",
		"first": 17
	},
	{
		"name": "Alan_Richman",
		"major": "Computing Security",
		"grad": 21,
		"manuf": "CNC Machinist",
		"system": 4,
		"email": "amill",
		"first": 18
	},
	{
		"name": "David_Jones",
		"major": "me",
		"grad": 21,
		"manuf": "CNC Machinist",
		"system": 5,
		"email": "amill",
		"first": 17
	},
	{
		"name": "Allison_Moulton",
		"major": "me",
		"grad": 20,
		"first": 17
	},
	{
		"name": "Anna_Gallo",
		"major": "ee",
		"grad": 20,
		"first": 16
	},
	{
		"name": "Asif_Habib",
		"major": "met",
		"grad": 20,
		"lead": "Test Systems Lead",
		"system": 20,
		"first": 16
	},
	{
		"name": "Caitlin_Barron",
		"major": "ce",
		"grad": 20,
		"first": 17
	},
	{
		"name": "Colton_Johnson",
		"major": "me",
		"grad": 20,
		"first": 18
	},
	{
		"name": "Connor_Blasie",
		"major": "ee",
		"grad": 20,
		"first": 16
	},
	{
		"name": "Dani_Worthington",
		"major": "ASL Interpreting/Mechanical Engineering Technology",
		"grad": 20,
		"first": 16
	},
	{
		"name": "Elizabeth_Harvey",
		"major": "met",
		"grad": 20,
		"first": 16
	},
	{
		"name": "Erik_Gross",
		"major": "met",
		"grad": 20,
		"first": 17
	},
	{
		"name": "Ethan_Spence",
		"major": "me",
		"grad": 20,
		"first": 17
	},
	{
		"name": "Max_Marchioli",
		"major": "met",
		"grad": 20,
		"first": 16
	},
	{
		"name": "Adam_Case",
		"major": "met",
		"grad": 22,
		"first": 18
	},
	{
		"name": "Ava_Shortino",
		"major": "met",
		"grad": 23,
		"first": 19
	},
	{
		"name": "Brendan_Leuze",
		"major": "met",
		"grad": 23,
		"first": 19
	},
	{
		"name": "Connor_Orcutt",
		"major": "me",
		"grad": 22,
		"first": 19
	},
	{
		"name": "Evan_Garber",
		"major": "met",
		"grad": 22,
		"first": 19
	},
	{
		"name": "Graham_Cullen",
		"major": "met",
		"grad": 23,
		"first": 19
	},
	{
		"name": "Hayden_Barbeau",
		"major": "Industrial Design",
		"grad": 22,
		"first": 19
	},
	{
		"name": "Jacob_Giuliano",
		"major": "met",
		"grad": 23,
		"first": 19
	},
	{
		"name": "James_Lucinese",
		"major": "me",
		"grad": 23,
		"first": 19
	},
	{
		"name": "Jason_Kaye",
		"major": "me",
		"grad": 23,
		"first": 19
	},
	{
		"name": "Matthew_Brogan",
		"major": "met",
		"grad": 23,
		"first": 19
	},
	{
		"name": "Mike_Borodzik",
		"major": "me",
		"grad": 23,
		"first": 19
	},
	{
		"name": "Natalie_Mantegna",
		"major": "me",
		"grad": 23,
		"first": 19
	},
	{
		"name": "Pete_VanCamp",
		"major": "met",
		"grad": 23,
		"first": 19
	},
	{
		"name": "Rhys_Dsouza",
		"major": "ee",
		"grad": 22,
		"display_name": "Rhys D'Souza",
		"first": 18
	},
	{
		"name": "Ryan_Stratton",
		"major": "met",
		"grad": 23,
		"first": 19
	},
	{
		"name": "Victoria_Bellomo",
		"major": "me",
		"grad": 23,
		"first": 19
	},
	{
		"name": "Zach_Jackson",
		"major": "Chemical Engineering",
		"grad": 23,
		"first": 19
	},
	{
		"name": "Dan_Cosachov",
		"major": "met",
		"grad": 21,
		"first": 17,
		"hide": true
	}
]; // no comma on last person