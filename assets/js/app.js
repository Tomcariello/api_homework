//create animal array
var searchTerms = ["cat","dog","rabbit","fish","turtle","hawk","hamster","piglet"];

var supplementarySearch = "";

function loadPresetAnimals() {
	$( ".jumbotron" ).html("");
	for (i=0; i < searchTerms.length; i++) {
		drawButtons(searchTerms[i]);
	}
	trackChoices();
}

//Process Form Submittal
// $('#addAnimal').click(function() {
    
// 	drawButtons(animalToAdd);
// });


function drawButtons(itemToPrint) {
	var buttonToPrint = ("<a class='btn btn-primary btn-lg choice' data-value='" + itemToPrint + "'role='button'>" + itemToPrint + "</a>");
	$( "#buttonContainer" ).append( buttonToPrint );
	
};

function trackChoices() {
	$('.choice').on('click', function(event) {
		console.log('Something was clicked');
		
		var animalSelected = $(this).attr('data-value');
		
		console.log("It was " + animalSelected);
		
		$( ".jumbotron" ).html("");

		var giphyUrl = "http://api.giphy.com/v1/gifs/search?q=" + animalSelected + "+" + supplementarySearch + "&api_key=dc6zaTOxFJmzC";
		
		$.ajax({
			url: giphyUrl,
			 method: "GET"
			})
		.done(function(response){
			for (i=0; i < 10; i++) {
				$( ".jumbotron" ).append("<img src='" + response.data[i].images.original.url + "'>");
			}
		});
	return;

		
	});
}

loadPresetAnimals();