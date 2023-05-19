function showSalary(users, age) {
 return res = users
    .filter( user => user.age <= age)
    .map( user => `${user.name}, ${user.balance}`)
    .join('\n');
}
