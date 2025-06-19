function makeFriendsList(friends) {
    let listOfFriends = document.createElement('ul');

  for (let friend of friends) {
    let li = document.createElement('li');
    li.textContent = `${friend.firstName} ${friend.lastName}`;
    listOfFriends.appendChild(li);
  }

  return listOfFriends;
}
