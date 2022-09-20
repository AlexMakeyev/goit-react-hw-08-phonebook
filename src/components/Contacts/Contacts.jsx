import React from 'react';
import PropTypes from 'prop-types';
import { ContactsItem } from 'components/ContactsItem/ContactsItem';
export const Contacts = ({contacts, onDelete}) => {
    return (<ul>
        {contacts.map(({name, number, id}) => (
            <ContactsItem 
            key={id}
            id={id}
            name={name}
            number={number}
            deleteBtn={onDelete} />
                
        
        ))}
            
            </ul>)
        };
    
        Contacts.propTypes = {
            contacts: PropTypes.arrayOf(
              PropTypes.shape({
                id: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
                number: PropTypes.string.isRequired,
              }).isRequired
            ),
            onDelete: PropTypes.func.isRequired,
          };