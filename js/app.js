(function (){

  var mainContainer = document.getElementById("Container");

  var postContainer = document.createElement("div");
  postContainer.id = "PostContainer";
  mainContainer.appendChild(postContainer);

  function reqRedditListener(){
    var res = JSON.parse(this.responseText);
    // console.log("HI", res)
    // console.log(res.data.children)
    // console.log(res.data.title)

    var currentPost;

    for(var i = 0; i < res.data.children.length; i++){

    currentPost = res.data.children[i].data

    var newDiv = document.createElement("div");
    newDiv.id = "box"
    postContainer.appendChild(newDiv)

    var images = document.createElement("img")
    images.src = currentPost.thumbnail
    images.setAttribute('href', currentPost.url)
    images.className = "Images";
    newDiv.appendChild(images);

    var titles = document.createElement("a");
    titles.className = "Titles";
    titles.setAttribute('href', currentPost.url)
    titles.innerHTML = currentPost.title
    // console.log(res.data.children[i].title)
    console.log(res.data.children[i])
    newDiv.appendChild(titles);

    var author = document.createElement("p");
    author.className = "Author";
    author.setAttribute('href', currentPost.user)
    author.innerHTML = currentPost.author
    newDiv.appendChild(author);

    var commentsCount = document.createElement("p");
    commentsCount.className = "CommentsCount";
    commentsCount.innerHTML = currentPost.num_comments;
    newDiv.appendChild(commentsCount);





   }//ending my forloop for res data
}// ending my reqRedditListener function

var rReq = new XMLHttpRequest();
rReq.addEventListener('load', reqRedditListener);
rReq.open('GET', `https://www.reddit.com/r/schnauzer.json`);
rReq.send();

// console.log("hello are you there?")

})()// ending my iife function