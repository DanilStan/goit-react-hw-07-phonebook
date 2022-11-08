import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/ContactList/operations';
import { Button, ContactsList } from './Contact.styled';

function Contact({ name, phone, id }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <ContactsList>
      <span>{name}: </span>
      <span>{phone}</span>
      <Button type="button" onClick={handleDelete}>
        Delete
      </Button>
    </ContactsList>
  );
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Contact;
