const express = require("express");
const {createJobPost,
    getAllJobPosts,
    getJobPostById,
    updateJobPostById,
    deleteJobPostById} = require("../controller/jobController.js")
const router = express.Router();

// CREATE a new job post
router.route('/list').post(createJobPost);

// GET all job posts
router.get('/allposts', getAllJobPosts);

// GET a single job post
router.get('/job-posts/:id', getJobPostById);


// UPDATE a job post
router.put('/job-posts/:id', updateJobPostById);

// DELETE a job post
router.delete('/job-posts/:id', deleteJobPostById);

module.exports = router;