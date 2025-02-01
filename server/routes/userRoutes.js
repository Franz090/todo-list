import express from 'express';
import { createUser, loginUser } from '../controllers/userController.js';

const router = express.Router();

// Ruta para sa paglikha ng bagong user
router.post('/register', createUser);

// Ruta para sa pag-login ng user
router.post('/login', loginUser);


export default router;
