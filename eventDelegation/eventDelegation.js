const tweetForm = document.querySelector('#form');
const tweetContainer = document.querySelector('#container');
tweetForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const userName = tweetForm.elements.username;
    const tweet = tweetForm.elements.tweet;
    addToList(userName.value, tweet.value)
    userName.value = " ";
    tweet.value = " ";
})
const addToList = (userName, tweet) => {
    const newTweet = document.createElement('li');
    newTweet.append(`${userName} - ${tweet}`);
    tweetContainer.append(newTweet);
}
tweetContainer.addEventListener('click', function (e) {    // adding a event listener to parent of li
    e.target.nodeName === 'LI' && e.target.remove();
})

