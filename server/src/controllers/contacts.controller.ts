import { Request, Response } from 'express';
import Contact from '../models/contacts';

export const createContact = async (req: Request, res: Response) => {
    try {
        const { title, content, link } = req.body;

        const newContent = new Contact({
            title,
            content,
            link
        });

        await newContent.save();

        res.status(201).json({ message: 'Content created successfully', content: newContent });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

export const getAllContacts = async (req: Request, res: Response) => {
    try {
        const contents = await Contact.find();

        res.status(200).json({ contents });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

export const getContactById = async (req: Request, res: Response) => {
    try {
        const contentId = req.params.id;

        const content = await Contact.findById(contentId);

        if (!content) {
            return res.status(404).json({ message: 'Content not found' });
        }

        res.status(200).json({ content });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

export const updateContactById = async (req: Request, res: Response) => {
    try {
        const contentId = req.params.id;
        const updateData = req.body;

        const updatedContent = await Contact.findByIdAndUpdate(contentId, updateData, { new: true });

        if (!updatedContent) {
            return res.status(404).json({ message: 'Content not found' });
        }

        res.status(200).json({ message: 'Content updated successfully', content: updatedContent });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

export const deleteContactById = async (req: Request, res: Response) => {
    try {
        const contentId = req.params.id;

        const deletedContent = await Contact.findByIdAndDelete(contentId);

        if (!deletedContent) {
            return res.status(404).json({ message: 'Content not found' });
        }

        res.status(200).json({ message: 'Content deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};
