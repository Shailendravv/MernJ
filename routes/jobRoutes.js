import express from "express";
const router = express.Router();

import {
  createJob,
  deleteJob,
  getAllJobs,
  updateJob,
  showStats,
} from "../controllers/jobsController.js";

router.route("/").post(createJob).get(getAllJobs);

// remember about :id
router.route("/showStats").get(showStats);
router.route("/:id").delete(deleteJob).patch(updateJob);
export default router;
