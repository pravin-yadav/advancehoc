import React from 'react';

const ContactList = ({ contacts, filterText }) => {
  const filteredContacts = contacts.filter(
    contact =>
      `${contact.firstname} ${contact.lastname}`
        .toLowerCase()
        .indexOf(filterText.toLowerCase()) !== -1
  );
  return (
    <div>
      {filteredContacts.map(contact => (
        <div key={contact.id} className="list-data">
          <div>
            <img
              className="prop-img"
              src={contact.avatar}
              alt="pic"
              width={75}
              height={75}
            />
          </div>
          <div className="list-detail">
            <div className="text-head">
              {contact.firstname} {contact.lastname}
            </div>
            <div className="text-content">{contact.email}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ContactList;
