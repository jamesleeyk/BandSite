const comments = [
  {
    userName: 'Micheal Lyons',
    newComment:
      'They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.',
    timeStamp: '12/18/2018',
  },
  {
    userName: 'Gary Wong',
    newComment:
      'Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!',
    timeStamp: '12/12/2018',
  },
  {
    userName: 'Theodore Duncan',
    newComment:
      'How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!',
    timeStamp: '11/15/2018',
  },
];

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
    name.innerText = commentObj.userName;
    nameDiv.appendChild(name);

    const date = document.createElement('p');
    date.classList.add('user-comments__date');
    date.innerText = commentObj.timeStamp;
    nameDiv.appendChild(date);

    const commentDiv = document.createElement('div');
    commentDiv.classList.add('user-comments__description-div');

    const comment = document.createElement('p');
    comment.classList.add('user-comments__description');
    comment.innerText = commentObj.newComment;
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
  console.log(event);
  const userName = event.target.userName.value;
  const newComment = event.target.newComment.value;
  const timeStamp = '01/31/2021';

  const commentObj = {
    userName,
    newComment,
    timeStamp,
  };
  comments.push(commentObj);
  displayComment(comments);
  form.reset();
});

displayComment(comments);
