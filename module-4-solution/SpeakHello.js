(function (window) {
    //Set speakWord variable to Hello
    var speakWord = "Hello";
    //Create helloSpeaker object
    var helloSpeaker = {
        //Give helloSpeaker a function called speak, which can be given the variable name
        speak: function (name) {
            //Print out to console the speakWord (Good Bye), a space, and the name
            console.log(speakWord + " " + name);
        }
    };
    //Expose the helloSpeaker object to the global scope
    window.helloSpeaker = helloSpeaker;
})(window);

