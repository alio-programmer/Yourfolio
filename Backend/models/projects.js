const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  project_name: {
    type: String,
    require: true,
  },
  project_img: {
    type: String,
    require: true,
  },
  project_description: {
    type: String,
    require: true,
  },
  project_url: {
    type: String,
    require: true,
  },
});

const Projects = mongoose.model("Project", projectSchema);
module.exports = { Projects };
