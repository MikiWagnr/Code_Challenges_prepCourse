var riderHeight = 42 //the riderHeight variable must be set to a number equal to or greater than 42 to ride.
var riderAge = 9//the riderAge variable must be set to a number equal to or greater than 10 to ride.

function tallEnoughToRide(){
    if(riderHeight >= 52 || riderAge >= 10){//&&= and ||= or
        console.log('Get on that ride kiddo!')
    } else{
        console.log('Sorry kiddo. Maybe next year.')
    }
}
tallEnoughToRide(42)
