import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();
    if (contacts.length > 0) {
      contacts.pop();

      await writeContacts(contacts);
      console.log('Last contact deleted.');
    } else {
      console.log('No contacts to delete.');
    }
  } catch (error) {
    console.error('Error removing:', error.message);
  }
};

removeLastContact();
