var childHeight = 55
function displayIfChildIsAbleToRideTheRollerCoaster(){
    if (childHeight > 52){
        console.log('get on that ride, kiddo!')
    } else {
        console.log('sorry kiddo. Maybe next year')
    }
}

displayIfChildIsAbleToRideTheRollerCoaster(childHeight)