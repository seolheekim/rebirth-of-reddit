
(function (){

  function reqRedditListener(){
    var res = JSON.parse(this.responseText);
    console.log(res)
    // console.log(res.data.children)
    // console.log(res.data.title)
    // console.log(res.data.children[0].data.preview.images[0].source.url)

    var mainContainer = document.getElementById("Container");

    var postContainer = document.createElement("div");
    postContainer.id = "PostContainer";
    mainContainer.appendChild(postContainer);

    var currentPost;
    // var imageUrl = currentPost.preview.images[0].source.url;

    for(var i = 0; i < res.data.children.length; i++){
        currentPost = res.data.children[i].data;

        var newDiv = document.createElement("div");
        newDiv.id = "box"
        postContainer.appendChild(newDiv)

        var newImgDiv = document.createElement("div");
        newImgDiv.className = "imgDiv";
        newDiv.appendChild(newImgDiv);

        var imgage = document.createElement("img");
        imgage.className = "Images";
        imgage.src = res.data.children[i].data.preview.images[0].source.url;
        newImgDiv.appendChild(imgage);

        var contentBox = document.createElement("div");
        contentBox.className = "contentBox";
        newDiv.appendChild(contentBox);

        var titles = document.createElement("a");
        titles.className = "Titles";
        titles.setAttribute('href', currentPost.url);
        titles.innerHTML = currentPost.title;
        contentBox.appendChild(titles);

        var author = document.createElement("a");
        author.className = "Author";
        author.setAttribute('href', currentPost.url);
        author.innerHTML = "by " + currentPost.author;
        contentBox.appendChild(author);

        var linkToComments = "http://www.reddit.com" + currentPost.permalink;

        var commentsCount = document.createElement("a");
        commentsCount.className = "CommentsCount";
        commentsCount.setAttribute('href', linkToComments);
        commentsCount.innerHTML = "comments " + currentPost.num_comments;
        contentBox.appendChild(commentsCount);

        var timeStamp = document.createElement("p");
        timeStamp.className = "timeStamp";
        timeStamp.innerHTML = new Date(currentPost.created * 1000)
        contentBox.appendChild(timeStamp);

        var readMe = document.createElement("div");
        readMe.className = "readMe";
        readMe.innerHTML = "Puppy kitty ipsum dolor sit good dog walk scooby snacks twine vaccine run wet nose tooth. Run Fast furry polydactyl heel behavior vitamins Spike wet nose Buddy."
        contentBox.appendChild(readMe);


  }//ending my forloop for res data
}// ending my reqRedditListener function
function requestData(url){
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqRedditListener);
    oReq.open("GET", url);
    oReq.send();
  }// ending requestData function
requestData('https://www.reddit.com/r/FoodPorn.json');

  var randomButton = document.getElementById("random");
  var myBoardsButton = document.getElementById("myBoards");
  var getTheAppButton = document.getElementById("getTheApp");

  var randomArray = ["https://www.reddit.com/r/puppies.json", "https://www.reddit.com/r/MechanicalKeyboards.json", "https://www.reddit.com/r/cats.json", "https://www.reddit.com/r/Art.json"];
  var makeItRandom = randomArray[Math.floor(randomArray.length)]

  var myBoardsArray = ["https://www.reddit.com/r/VeganFoodPorn.json"];
  var getTheAppArray = ["https://www.reddit.com/r/gaming.json"];
  var logoArray = ["https://www.reddit.com/r/FoodPorn.json"];

  function addButton(array, button, name){

    var createButton = document.createElement("button");
    createButton.className = "button";
    createButton.innerHTML = name;
    createButton.setAttribute('href', array);
    button.appendChild(createButton);
  }

  addButton(randomArray, randomButton, "RANDOM");
  addButton(myBoardsArray, myBoardsButton, "MY BOARDS");
  addButton(getTheAppArray, getTheAppButton, "GET THE APP");

    randomButton.addEventListener("click", function() {
      var getRandomHTML = document.getElementById("Container");
      getRandomHTML.innerHTML = "";
      requestData(makeItRandom);
    });

     myBoardsButton.addEventListener("click", function() {
      var getMyBoardHTML = document.getElementById("Container");
      getMyBoardHTML.innerHTML = "";
      requestData(myBoardsArray);
    });

     getTheAppButton.addEventListener("click", function() {
      var getTheAppHTML = document.getElementById("Container");
      getTheAppHTML.innerHTML = "";
      requestData(getTheAppArray);
    });

     var logoButton = document.getElementById("logo");
      logoButton.addEventListener("click", function() {
      var logoHTML = document.getElementById("Container");
      logoHTML.innerHTML = "";
      requestData(logoArray);
    });




  // addClick(randomButton, );

})()// ending my iife function