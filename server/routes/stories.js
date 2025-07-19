import { Router } from "express";
import { getStories, createStory } from "../controllers/stories.js";
const router = Router();

router.get("/", getStories);
router.get("/", createStory);

export default router;