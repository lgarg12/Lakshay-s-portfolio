import express from 'express';
import { createContact, getAllContacts, getContactById, updateContactById, deleteContactById } from '../controllers/contacts.controller';

const router = express.Router();

router.post('/create', createContact);
router.get('/all', getAllContacts);
router.get('/:id', getContactById);
router.put('/:id', updateContactById);
router.delete('/:id', deleteContactById);

export default router;
