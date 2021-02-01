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

const displayComment = (comment) => {
  const userComments = document.querySelector('user-comments');
  const commentArticle = document.createElement('article');
  commentArticle.classList.add('user-comments__comment');
  const userPicture = document.createElement('img');
  userPicture.classList.add('user-comments__author-img');
  userPicture.setAttribute('src', './Assets/Images/Mohan-muruge.jpg');
  const name = document.createElement('h3');
  name.classList.add('user-comments__author');
  name.innerText(comment.userName);
  const date = document.createElement('p');
  date.classList.add('user-comments__date');
  date.innerText(comment.timeStamp);
  const comment = document.createElement('p');
  comment.classList.add('user-comments__description');
  comment.innerText(user.newComment);

  commentArticle.appendChild(userPicture);
  commentArticle.appendChild(name);
  commentArticle.appendChild(date);
  commentArticle.appendChild(comment);

  userComments.appendChild(commentArticle);
};

const renderComment = (commentsArray) => {
  for (let comment of commentsArray) {
    displayComment(comment);
  }
};

renderComment(comments);

form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.reset();
  const userName = event.target.userName.value;
  const newComment = event.target.newComment.value;
  const timeStamp = '01/31/2021';

  const commentObj = {
    userName,
    newComment,
    timeStamp,
  };
  comments.push(commentObj);
  renderComment(comments);
});
