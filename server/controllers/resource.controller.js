const Resource = require("../models/resource.model");

// GET all resources
exports.getAllResources = async (req, res) => {
  try {
    const resources = await Resource.find().sort({ createdAt: -1 });
    res.status(200).json(resources);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET resource by ID
exports.getResourceById = async (req, res) => {
  try {
    const resource = await Resource.findById(req.params.id);

    if (!resource) {
      return res.status(404).json({ message: "Resource not found" });
    }

    res.status(200).json(resource);
  } catch (error) {
    res.status(400).json({ message: "Invalid ID" });
  }
};

// CREATE resource
exports.createResource = async (req, res) => {
  try {
    const { title, description, type } = req.body;

    if (!title || !description || !type) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newResource = await Resource.create({
      title,
      description,
      type,
    });

    res.status(201).json(newResource);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE resource
exports.updateResource = async (req, res) => {
  try {
    const updatedResource = await Resource.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedResource) {
      return res.status(404).json({ message: "Resource not found" });
    }

    res.status(200).json(updatedResource);
  } catch (error) {
    res.status(400).json({ message: "Update failed" });
  }
};

// DELETE resource
exports.deleteResource = async (req, res) => {
  try {
    const deletedResource = await Resource.findByIdAndDelete(req.params.id);

    if (!deletedResource) {
      return res.status(404).json({ message: "Resource not found" });
    }

    res.status(200).json({ message: "Resource deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: "Delete failed" });
  }
};
