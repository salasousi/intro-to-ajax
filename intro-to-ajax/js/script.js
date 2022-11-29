
//////////////////
// VARIABLES
//////////////////
const URL = 'https://www.omdbapi.com/?apikey=2b9698f3&t=';


//////////////////
// ELEMENTS REF'D / CACHED ELEMENTS
//////////////////
const $title = $("#title")
const $year = $("#year")
const $rated = $("#rated")
const $form = $("form")
const $input = $("input[type='text']")

//////////////////
// EVENT LISTENERS
//////////////////
$form.on("submit", handleGetData);


//////////////////
// FUNCTIONS
//////////////////


// promise.then(
//   (data) => {
//    console.log(data);
//   },
//   (error) => {
//    console.log('bad request: ', error);
//   }
// );

//Starting at the $.ajax method below is the same as the above but 
//different syntax (as well as surrounded by the handleGetData function)

function handleGetData(event){
    event.preventDefault();
    userInput= $input.val();
    if (userInput === "") return;

    $input.val("");
    
    $.ajax(URL + userInput).then((data) => {
        console.log(data)
        $title.text(data.Title);
        $year.text(data.Year);
        $rated.text(data.Rated);
        //$("main").append(`<img src="${data.Poster}" alt="${data.Title}"/>`);
        $("main>div").html(`<img id="movieImg" src="${data.Poster}"/>`)
    }, (error) => {
        console.log("bad request ", error)
    })
}
