const JobPost = require("../models/jobListing.js")

// Create a new job post
const createJobPost = async (req, res) => {
    try {
      const { title, company, location, salary, description, requirements } = req.body;
      const newJobPost = await JobPost.create({
        title,
        company,
        location,
        salary,
        description,
        requirements
      });
      res.status(201).json({ message: "post created successfully" });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
};

// Get all job posts
const getAllJobPosts = async (req, res) => {
    try {
      const jobPosts = await JobPost.find();
      res.status(200).json(jobPosts);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
};


// Get a single job post by ID
const getJobPostById = async (req, res) => {
    try {
      const { id } = req.params;
      const jobPost = await JobPost.findById(id);
      if (jobPost) {
        res.status(200).json(jobPost);
      } else {
        res.status(404).json({ error: 'Job post not found' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
};
  
// Update a job post by ID
const updateJobPostById = async (req, res) => {
    try {
      const { id } = req.params;
      const { title, company, location, salary, description, requirements } = req.body;
      const updatedJobPost = await JobPost.findByIdAndUpdate(
        id,
        {
          title,
          company,
          location,
          salary,
          description,
          requirements
        },
        { new: true }
      );
      if (updatedJobPost) {
        res.status(200).json(updatedJobPost);
      } else {
        res.status(404).json({ error: 'Job post not found' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
};
  
// Delete a job post by ID
const deleteJobPostById = async (req, res) => {
    try {
      const { id } = req.params;
      const deletedJobPost = await JobPost.findByIdAndDelete(id);
      if (deletedJobPost) {
        res.status(200).json(deletedJobPost);
      } else {
        res.status(404).json({ error: 'Job post not found' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
};


module.exports = {
    createJobPost,
    getAllJobPosts,
    getJobPostById,
    updateJobPostById,
    deleteJobPostById
};
