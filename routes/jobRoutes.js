import express from "express";
import testUser from "../middleware/testUser.js";
const router = express.Router();

import {
  createJob,
  deleteJob,
  getAllJobs,
  updateJob,
  showStats,
} from "../controllers/jobsController.js";

router.route("/").post(testUser, createJob).get(getAllJobs);

// remember about :id
router.route("/showStats").get(showStats);
router.route("/:id").delete(testUser, deleteJob).patch(testUser, updateJob);
export default router;
