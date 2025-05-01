import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
  try {
    const json = JSON.stringify(updatedContacts, undefined, 2);
    await fs.writeFile(PATH_DB, json, 'utf-8');
  } catch (error) {
    console.error('Contact write error:', error.message);
  }
};
