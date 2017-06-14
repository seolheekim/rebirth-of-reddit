
(function (){

  function reqRedditListener(){
    var res = JSON.parse(this.responseText);
    // console.log("HI", res)
    // console.log(res.data.children)
    // console.log(res.data.title)
    var mainContainer = document.getElementById("Container");

    var postContainer = document.createElement("div");
    postContainer.id = "PostContainer";
    mainContainer.appendChild(postContainer);

    var currentPost;

    for(var i = 0; i < res.data.children.length; i++){
      for(var x = 0; x < 4; x++){
        currentPost = res.data.children[x].data;
        if(currentPost.stickied === false) {

        var newDiv = document.createElement("div");
        newDiv.id = "box"
        postContainer.appendChild(newDiv)

        for(var s = 0; s < currentPost.preview.images[0]; s++) {

        var newImgDiv = document.createElement("div");
        newImgDiv.className = "imgDiv";
        newDiv.appendChild(newImgDiv);

        var img = document.createElement("img");
        img.src = currentPost.images[0].source.url
        img.className = "Images";
        img.setAttribute('href', currentPost.url);
        newImgDiv.appendChild(img);

         function imageError(images){
          var replaceImages = document.getElementsByClassName("Images");
          if(replaceImages === null){
            replaceImages.src = "/assets/image_placeholder.png";
          }
         }//ending imageError function
        }//ending image forloop

        var titles = document.createElement("a");
        titles.className = "Titles";
        titles.setAttribute('href', currentPost.url);
        titles.innerHTML = currentPost.title;
        // console.log(res.data.children[i].title)
        // console.log(res.data.children[x])
        newDiv.appendChild(titles);

        var author = document.createElement("a");
        author.className = "Author";
        author.setAttribute('href', currentPost.url);
        author.innerHTML = "by " + currentPost.author;
        newDiv.appendChild(author);

        var commentsCount = document.createElement("a");
        commentsCount.className = "CommentsCount";
        commentsCount.innerHTML = "comments ".link("http://www.reddit.com" + currentPost.permalink) + currentPost.num_comments;
        newDiv.appendChild(commentsCount);

        var timeStamp = document.createElement("p");
        timeStamp.className = "timeStamp";
        timeStamp.innerHTML = new Date(currentPost.created * 1000)
        newDiv.appendChild(timeStamp);

      }//endings post count forloop
    }// ending stickied if statment
  }//ending my forloop for res data
}// ending my reqRedditListener function

var rReq = new XMLHttpRequest();
rReq.addEventListener('load', reqRedditListener);
rReq.open('GET', `https://www.reddit.com/r/schnauzer.json`);
rReq.send();

// console.log("hello are you there?")

})()// ending my iife function