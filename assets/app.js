// Solarized Palette
var solarized_baseDark  = "#002b36";
var solarized_baseLight  = "#fdf6e3";
var solarized_baseZero = "#839496";
var solarized_yellow  = "#b58900";
var solarized_orange  = "#cb4b16";
var solarized_red     = "#dc322f";
var solarized_magenta = "#d33682";
var solarized_violet  = "#6c71c4";
var solarized_blue    = "#268bd2";
var solarized_cyan    = "#2aa198";
var solarized_green   = "#859900";


var i = 0;


$('.modal').modal({
    dismissible: true, // Modal can be dismissed by clicking outside of the modal
    opacity: .5, // Opacity of modal background
    in_duration: 300, // Transition in duration
    out_duration: 200, // Transition out duration
    starting_top: '4%', // Starting top style attribute
    ending_top: '10%', // Ending top style attribute
    ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
    },
    complete: function() {
        loopFunction()
    } // Callback for Modal close
  }
);





function loopFunction(){

    var phrase = $('#textarea1').val().split(' ')

    if (i < phrase.length){

        callAPI(phrase[i])

    } else {
        return;
    }

}//loopFunction





function callAPI(word){
    $.get('http://api.pearson.com/v2/dictionaries/entries?headword=' + word).done(function(response){

        var total = response.total;
        var partOfSpeech;


        if (total > 0){
            partOfSpeech = response.results[0].part_of_speech;
        } else {
            partOfSpeech = undefined;
        }
        console.log(partOfSpeech)

    changeColor(partOfSpeech,word);





    }) //$.get

} //callAPI








function changeColor(partOfSpeech, word){

    var word = word + " ";

    if (partOfSpeech === 'verb'){
        $(".solarizedTxt").append("<span style=color:" + solarized_orange + ">" + word + "</span>")

    } else if (partOfSpeech === 'noun'){
        $(".solarizedTxt").append("<span style=color:" + solarized_yellow + ">" + word + "</span>")
/*
    } else if (partOfSpeech === 'adjective'){
        $(".solarizedTxt").append("<span style=color:" + solarized_violet + ">" + word + "</span>")

    } else if (partOfSpeech === 'adverb'){
        $(".solarizedTxt").append("<span style=color:" + solarized_yellow + ">" + word + "</span>")

    } else if (partOfSpeech === 'preposition'){
        $(".solarizedTxt").append("<span style=color:" + solarized_blue + ">" + word + "</span>")

    } else if (partOfSpeech === 'conjunction' || partOfSpeech === 'conj'){
        $(".solarizedTxt").append("<span style=color:" + solarized_cyan + ">" + word + "</span>")

    } else if (partOfSpeech === 'interjection' || partOfSpeech === 'interj'){
        $(".solarizedTxt").append("<span style=color:" + solarized_red + ">" + word + "</span>")

    } else if (partOfSpeech === 'determiner'){
        $(".solarizedTxt").append("<span style=color:" + solarized_magenta + ">" + word + "</span>")
*/
    } else if (partOfSpeech === undefined){
        $(".solarizedTxt").append("<span style=color:" + solarized_baseZero + ">" + word + "</span>")
    } else {
            $(".solarizedTxt").append("<span style=color:" + solarized_baseZero + ">" + word + "</span>")
        }

    // loops back up again
    i++;
    loopFunction()

}//changeColor
