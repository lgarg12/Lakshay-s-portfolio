import mongoose, { Document } from 'mongoose';

interface Project extends Document {
    title: string;
    description: string;
    imageUrl: string;
    link: string;
    techStack: string[];
}

const projectSchema = new mongoose.Schema<Project>({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    techStack: {
        type: [String], 
        required: true
    }
});

const projectModel = mongoose.model<Project>('project', projectSchema);

export default projectModel;
