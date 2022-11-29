
const promise = $.ajax({
    url:'https://www.omdbapi.com/?apikey=2b9698f3&t=BladeRunner2045'
});

promise.then(
  (data) => {
   console.log(data);
  },
  (error) => {
   console.log('bad request: ', error);
  }
);