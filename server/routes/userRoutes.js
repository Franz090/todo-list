import express from 'express';
import { createUser, loginUser } from '../controllers/userController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';


const router = express.Router();

// Ruta para sa paglikha ng bagong user
router.post('/register', createUser);

// Ruta para sa pag-login ng user
router.post('/login', loginUser);

router.get('/dashboard', authMiddleware, (req, res) => {
    res.json({
        message: "Welcome to the dashboard!",
        user: {
            id: req.user.id,
            email: req.user.email
        }
    });
});


export default router;
