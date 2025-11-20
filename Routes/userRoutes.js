import express from "express";
import { getAllUsers, getOneUser, createUser, updateUser, deleteUser } from "../controllers/userController.js";
import upload from "../uploads/multerconfig.js"; // Multer config for profile pictures

const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getOneUser);
router.post("/", createUser);

// Update user with profile pic
router.put("/:id", upload.single("profilePic"), updateUser);

router.delete("/:id", deleteUser);

export default router;
