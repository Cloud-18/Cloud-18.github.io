/*	Example Options: (* means required)
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
*/
var team = [ // You do not need to worry about removing members after they graduate. They are filtered out
	{
		"name": "Erica_Neese",
		"major": "ie",
		"grad": 20,
		"eboard": "Team Manager",
		"snippet":"I love this team!"
	},
	{
		"name": "Adam_Seidman",
		"major": "ce",
		"grad": 22,
		"eboard": "Treasurer"
	},
	{
		"name": "Justin_Neves",
		"major": "cive",
		"grad": 20,
		"eboard": "Project Manager"
	},
	{
		"name": "Griffin_Joslin",
		"major": "Graphic Design",
		"grad": 22,
		"eboard": "Secretary"
	},
	{
		"name": "Ethan_Yaro",
		"major": "met",
		"grad": 20,
		"lead": "Chief Engineer",
		"system": 0,
		"email": "chiefengineer"
	},
	{
		"name": "Dana_Eschler",
		"major": "me",
		"grad": 21,
		"lead": "Frame Lead",
		"system": 1,
		"email": "frame"
	},
	{
		"name": "Kishoth_Manoranjithan",
		"major": "met",
		"grad": 21,
		"lead": "Suspension Lead",
		"system": 2,
		"email": "suspension"
	},
	{
		"name": "Kyle_Mellendorf",
		"major": "mfet",
		"grad": 21,
		"lead": "Driveline/Outboard Lead",
		"system": 4,
		"email": "driveline"
	},
	{
		"name": "Justin_Woods",
		"major": "met",
		"grad": 21,
		"lead": "Brakes Lead",
		"system": 5,
		"email": "brakes"
	},
	{
		"name": "Bryan_Lin",
		"major": "emet",
		"grad": 21,
		"lead": "Electrical Lead",
		"system": 9,
		"email": "dataaq"
	},
	{
		"name": "Alex_Smart",
		"major": "me",
		"grad": 20,
		"lead": "Research and Development",
		"system": 10,
		"email": "rnd"
	},
	{
		"name": "Anthony_Coppola",
		"major": "met",
		"grad": 23,
		"designer": "Suspension Designer",
		"system": 2,
		"email": "suspension"
	},
	{
		"name": "Chris_Impellizzeri",
		"major": "met",
		"grad": 22,
		"designer": "Suspension Designer",
		"system": 2,
		"email": "suspension",
		"display_name": 'Christopher Impellizzeri'
	},
	{
		"name": "Grayson_Keaton",
		"major": "met",
		"grad": 22,
		"designer": "Shocks/Vehicle Dynamics",
		"system": 2,
		"email": "suspension"
	},
	{
		"name": "Anthony_Blasie",
		"major": "met",
		"grad": 23,
		"designer": "Steering Designer",
		"system": 3,
		"email": "steering"
	},
	{
		"name": "Dan_Salai",
		"major": "me",
		"grad": 22,
		"designer": "Brakes Designer",
		"system": 5,
		"email": "brakes",
		"display_name": "Daniel Salai"
	},
	{
		"name": "Julia_Nelson",
		"major": "me",
		"grad": 20,
		"designer": "Ergonomics Designer",
		"system": 6,
		"email": "ergo"
	},
	{
		"name": "Susan_Lane",
		"major": "me",
		"grad": 21,
		"designer": "Reduction Designer",
		"system": 7,
		"email": "reduction"
	},
	{
		"name": "Sam_Dhykoff",
		"major": "me",
		"grad": 22,
		"designer": "Primary CVT Designer",
		"system": 8,
		"email": "primary",
		"display_name": "Samuel Dhykoff"
	},
	{
		"name": "Brendan_Murphy",
		"major": "me",
		"grad": 21,
		"designer": "Secondary CVT Designer",
		"system": 8.5,
		"email": "secondary"
	},
	{
		"name": "Nick_Harter",
		"major": "emet",
		"grad": 22,
		"designer": "Driveline Integration/Engines",
		"system": 12,
		"email": "engines",
		"display_name": "E. Nicholas Harter"
	},
	{
		"name": "Ledyard_McFadden",
		"major": "met",
		"grad": 22,
		"manuf": "Manufacturing Manager",
		"system": 1,
		"email": "mman"
	},
	{
		"name": "Brie_Ludwig",
		"major": "me",
		"grad": 20,
		"manuf": "Composites Lead",
		"system": 2,
		"email": "composites"
	},
	{
		"name": "Bennett_Wong",
		"major": "met",
		"grad": 20,
		"manuf": "CNC Machinist",
		"system": 3,
		"email": "alathe"
	},
	{
		"name": "Alan_Richman",
		"major": "Computing Security",
		"grad": 21,
		"manuf": "CNC Machinist",
		"system": 4,
		"email": "amill"
	},
	{
		"name": "David_Jones",
		"major": "me",
		"grad": 21,
		"manuf": "CNC Machinist",
		"system": 5,
		"email": "amill"
	},
	{
		"name": "Allison_Moulton",
		"major": "me",
		"grad": 20
	},
	{
		"name": "Anna_Gallo",
		"major": "ee",
		"grad": 20
	},
	{
		"name": "Asif_Habib",
		"major": "met",
		"grad": 20
	},
	{
		"name": "Caitlin_Barron",
		"major": "ce",
		"grad": 20
	},
	{
		"name": "Colton_Johnson",
		"major": "me",
		"grad": 20
	},
	{
		"name": "Connor_Blasie",
		"major": "ee",
		"grad": 20
	},
	{
		"name": "Danielle_Worthington",
		"major": "ASL Interpreting/Mechanical Engineering Technology",
		"grad": 20
	},
	{
		"name": "Elizabeth_Harvey",
		"major": "met",
		"grad": 20
	},
	{
		"name": "Erik_Gross",
		"major": "met",
		"grad": 20
	},
	{
		"name": "Ethan_Spence",
		"major": "me",
		"grad": 20
	},
	{
		"name": "Max_Marchioli",
		"major": "met",
		"grad": 20
	},
	{
		"name": "Adam_Case",
		"major": "met",
		"grad": 22
	},
	{
		"name": "Ava_Shortino",
		"major": "met",
		"grad": 23
	},
	{
		"name": "Brendan_Leuze",
		"major": "met",
		"grad": 23
	},
	{
		"name": "Connor_Orcutt",
		"major": "me",
		"grad": 22
	},
	{
		"name": "Evan_Garber",
		"major": "met",
		"grad": 22
	},
	{
		"name": "Graham_Cullen",
		"major": "met",
		"grad": 23
	},
	{
		"name": "Hayden_Barbeau",
		"major": "Art??",
		"grad": 22
	},
	{
		"name": "Jacob_Giuliano",
		"major": "met",
		"grad": 23
	},
	{
		"name": "James_Lucinese",
		"major": "me",
		"grad": 23
	},
	{
		"name": "Jason_Kaye",
		"major": "me",
		"grad": 23
	},
	{
		"name": "Matthew_Brogan",
		"major": "met",
		"grad": 23
	},
	{
		"name": "Michael_Borodzik",
		"major": "me",
		"grad": 23,
		"display_name": "Michael \"Craig\" Borodzik"
	},
	{
		"name": "Natalie_Mantegna",
		"major": "me",
		"grad": 23
	},
	{
		"name": "Pete_VanCamp",
		"major": "met",
		"grad": 23
	},
	{
		"name": "Rhys_Dsouza",
		"major": "ee",
		"grad": 22,
		"display_name": "Rhys D'Souza"
	},
	{
		"name": "Ryan_Stratton",
		"major": "met",
		"grad": 23
	},
	{
		"name": "Victoria_Bellomo",
		"major": "me",
		"grad": 23
	},
	{
		"name": "Zach_Jackson",
		"major": "Chemical Engineering",
		"grad": 23
	},
	{
		"name": "Dan_Cosachov",
		"major": "met",
		"grad": 21,
		"hide": true
	}
]; // no comma on last person