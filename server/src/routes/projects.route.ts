import express from 'express';
import { createProject, getAllProjects, getProjectById, updateProjectById, deleteProjectById } from '../controllers/projects.controller';

const router = express.Router();

router.post('/create', createProject);
router.get('/all', getAllProjects);
router.get('/:id', getProjectById);
router.put('/:id', updateProjectById);
router.delete('/:id', deleteProjectById);

export default router;
