(function (window) {
    //Set speakWord variable to Good Bye
    var speakWord = "Good Bye";
    //Create byeSpeaker object
    var byeSpeaker = {
        //Give byeSpeaker a function called speak, which can be given the variable name
        speak: function (name) {
            //Print out to console the speakWord (Good Bye), a space, and the name
            console.log(speakWord + " " + name);
        }
    };
    //Expose the byeSpeaker object to the global scope
    window.byeSpeaker = byeSpeaker;
})(window);
