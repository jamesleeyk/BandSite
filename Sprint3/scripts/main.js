const apiKey = '82478ecb-a6fc-45c4-9d2d-2b113a35e5b9';

let comments;

axios
  .get(`https://project-1-api.herokuapp.com/comments?api_key=${apiKey}`)
  .then(function (response) {
    displayComment(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });

const form = document.querySelector('.comments__form');

const displayComment = (commentArr) => {
  const userComments = document.querySelector('.user-comments');
  userComments.innerHTML = '';
  for (let commentObj of commentArr) {
    // select user comments section
    // create elements and add attributes accordingly
    const commentArticle = document.createElement('article');
    commentArticle.classList.add('user-comments__comment');

    const imgDiv = document.createElement('div');
    imgDiv.classList.add('user-comments__img-div');

    const userPicture = document.createElement('img');
    userPicture.classList.add('user-comments__author-img');
    userPicture.setAttribute('src', './Assets/Images/Mohan-muruge.jpg');
    imgDiv.appendChild(userPicture);

    const textDiv = document.createElement('div');
    textDiv.classList.add('user-comments__text-div');

    const nameDiv = document.createElement('div');
    nameDiv.classList.add('user-comments__name-div');

    const name = document.createElement('h3');
    name.classList.add('user-comments__author');
    name.innerText = commentObj.name;
    nameDiv.appendChild(name);

    const date = document.createElement('p');
    date.classList.add('user-comments__date');
    date.innerText = commentObj.timestamp;
    nameDiv.appendChild(date);

    const commentDiv = document.createElement('div');
    commentDiv.classList.add('user-comments__description-div');

    const comment = document.createElement('p');
    comment.classList.add('user-comments__description');
    comment.innerText = commentObj.comment;
    commentDiv.appendChild(comment);

    textDiv.appendChild(nameDiv);
    textDiv.appendChild(commentDiv);

    commentArticle.appendChild(imgDiv);
    commentArticle.appendChild(textDiv);

    userComments.appendChild(commentArticle);
  }
};

form.addEventListener('submit', (event) => {
  event.preventDefault();
  let commentObj;
  axios
    .post(`https://project-1-api.herokuapp.com/comments?api_key=${apiKey}`, {
      name: event.target.userName.value,
      comment: event.target.newComment.value,
    })
    .then(function (response) {
      commentObj = {
        name: response.data.name,
        comment: response.data.comment,
        timestamp: response.data.timestamp,
      };
    })
    .catch(function (error) {
      console.log(error);
    });

  comments.push(commentObj);
  // console.log(comments);
  displayComment(comments);
  // form.reset();
});

// displayComment(comments);
