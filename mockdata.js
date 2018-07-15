const faker = require('faker');

var db = { contacts: [] };

for (var i = 1; i <= 100; i++) {
  var contact = {};
  contact.id = i;
  contact.firstname = faker.name.firstName();
  contact.lastname = faker.name.lastName();
  contact.email = faker.internet.email();
  contact.avatar = faker.internet.avatar();

  db.contacts.push(contact);
}
console.log(JSON.stringify(db));
