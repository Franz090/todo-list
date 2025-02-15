import express from 'express';
import { createUser, loginUser, updateUser, deleteUser, logoutUser } from '../controllers/userController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/register', createUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser); 
router.get('/dashboard', authMiddleware, (req, res) => {
    res.json({ message: "Welcome to the dashboard!", user: req.user });
});
router.put('/update/:id', authMiddleware, updateUser); 
router.delete('/delete/:id', authMiddleware, deleteUser); 

export default router;
