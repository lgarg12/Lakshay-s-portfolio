import { Request, Response } from 'express';
import Project from '../models/projects'; 

export const createProject = async (req: Request, res: Response) => {
    try {
        const { title, description, imageUrl, link, techStack } = req.body;

        const newProject = new Project({
            title,
            description,
            imageUrl,
            link,
            techStack
        });

        await newProject.save();

        res.status(201).json({ message: 'Project created successfully', project: newProject });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

export const getAllProjects = async (req: Request, res: Response) => {
    try {
        const projects = await Project.find();

        res.status(200).json({ projects });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

export const getProjectById = async (req: Request, res: Response) => {
    try {
        const projectId = req.params.id;

        const project = await Project.findById(projectId);

        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }

        res.status(200).json({ project });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

export const updateProjectById = async (req: Request, res: Response) => {
    try {
        const projectId = req.params.id;
        const updateData = req.body;

        const updatedProject = await Project.findByIdAndUpdate(projectId, updateData, { new: true });

        if (!updatedProject) {
            return res.status(404).json({ message: 'Project not found' });
        }

        res.status(200).json({ message: 'Project updated successfully', project: updatedProject });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

export const deleteProjectById = async (req: Request, res: Response) => {
    try {
        const projectId = req.params.id;

        const deletedProject = await Project.findByIdAndDelete(projectId);

        if (!deletedProject) {
            return res.status(404).json({ message: 'Project not found' });
        }

        res.status(200).json({ message: 'Project deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};
