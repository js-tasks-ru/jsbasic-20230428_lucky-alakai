//makeFriendsList
function makeFriendsList(friends) {
  const ul = document.createElement('ul');

  let ulList = friends.map( user => `${user.firstName} ${user.lastName}`);
  for (const item in ulList) {
    let listItem = document.createElement('li');
    listItem.innerText = `${ulList[item]}`;
    ul.appendChild(listItem);
  }

  return ul;
}
