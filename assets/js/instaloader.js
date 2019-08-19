var months = {'Jan': 'January', 'Feb':'February', 'Mar':'March', 'Apr':'April', 'May':'May', 'Jun':'June', 'Jul':'July', 'Aug':'August', 'Sep':'September', 'Oct':'October', 'Nov':'November', 'Dec':'December'};

function getDayString(num) {
    day = Number(num)
    switch (day) {
        case 1:
            return '1st'
        case 2:
            return '2nd'
        case 3:
            return '3rd'
        case 11:
        case 12:
        case 13:
            return day + 'th'
        default:
            switch (day % 10) {
                case 1:
                    return day + 'st'
                case 2:
                    return day + 'nd'
                case 3:
                    return day + 'rd'
                default:
                    return day + 'th'
            }
    }
}

function getImgDate(seconds) {
  var dateString = new Date(Number(seconds + "000")).toDateString().split(' ');
  return months[dateString[1]] + ' ' + getDayString(dateString[2]) + ', ' + dateString[3]
}

function goToPost(link) {
    window.open(link, '_blank');
}

var newstiles = [];
window.mishaProcessResult = function( data ) {
    for( x in data.data ){
        newstiles.push({"date": getImgDate(data.data[x].created_time), "imageloc": data.data[x].images.standard_resolution.url, "link": data.data[x].link, 
			"desc": (data.data[x].caption ? data.data[x].caption.text : '')});
    }
}