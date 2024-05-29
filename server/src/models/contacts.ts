import mongoose, { Document } from 'mongoose';

interface Contact extends Document {
    title: string;
    content: string;
    link: string;
}

const contactSchema = new mongoose.Schema<Contact>({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    }
});

const ContactModel = mongoose.model<Contact>('Contact', contactSchema);

export default ContactModel;
