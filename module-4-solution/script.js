(function () {
    //Assign array with names to variable
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    //Create a constant with the value lowercase j
    const letter = 'j';
    for (let i = 0; i < names.length; i++) {
        //Put the value of names[i] into a variable
        let name = names[i];
        //Grab the first letter and put that into a variable
        let firstLetter = name.charAt(0);
        //Cast it to lowercase and put that into a variable
        let lowerCaseFirstLettter = firstLetter.toLowerCase();

        //Compare the lowerCaseFistLetter to the constant letter
        if (letter === lowerCaseFirstLettter) {
            //If name starts with a j, say goodbye
            byeSpeaker.speak(name);
        } else {
            //If name does not start with a j, say hello
            helloSpeaker.speak(name);
        }
    }
})();
