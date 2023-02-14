var cohortOneStudents = ["Sable", "David", "Joey", "Nick", "Tommy", "Connor", "Charles", "Russ", "Bobby", "Josh", "Nikki", "Matt", "Dale", "Sydney"];

for(var i = 0; i < cohortOneStudents.length; i++){
    console.log(cohortOneStudents[i]);
}

var interests = ["Gaming", "Walking", "Making Music", "Streaming", "Wrestling"];

for(var i = 0; i < interests.length; i++){
    if(interests[i] === "Wrestling"){
        console.log(`My absolute favorite interest is: ${interests[i]}`)
    }
    else{
        console.log(`One of my favorite interests is: ${interests[i]}`)
    }

}

