const Freelancer = require("../../models/Freelancer");
const uuid = require("uuid/v1");

async function getFreelancers(req, res) {
  try {
    const freelancers = await Freelancer.find({}).sort({ date: -1 });
    return res.json(freelancers);
  } catch (err) {
    handleError(res, err);
  }
}

async function getFreelancer(req, res) {
  try {
    const freelancer = await Freelancer.find({ id: req.params.id });
    if (!freelancer) {
      return res.status(404).json({ msg: "Freelancer not found" });
    } else {
      return res.json(freelancer);
    }
  } catch (err) {
    handleError(res, err);
  }
}

async function addFreelancer(req, res) {
  const { description, perimetre, services } = req.body;
  try {
    const id = uuid();
    let freelancer = new Freelancer({
      id,
      description,
      perimetre,
      services
    });

    await freelancer.save();
    res.json(freelancer);
  } catch (err) {
    handleError(res, err);
  }
}

async function updateFreelancer(req, res) {
  const { description, perimetre, services } = req.body;

  const updateFields = {};
  if (description) updateFields.description = description;
  if (perimetre) updateFields.perimetre = perimetre;
  if (services) updateFields.services = services;
  try {
    let freelancer = await Freelancer.find({ id: req.params.id });
    if (!freelancer) {
      if (req.user.type === "admin") {
        return res.status(404).json({ msg: "Freelancer not found" });
      } else {
        return res.status(401).json({ msg: "Unauthorized" });
      }
    }

    if (freelancer.freelancer !== req.user.id) {
      return res.status(401).json({ msg: "Unauthorized" });
    }

    freelancer = await Freelancer.where({ id: req.params.id }).update({
      $set: updateFields
    });
    return res.json(freelancer);
  } catch (err) {
    handleError(res, err);
  }
}

async function deleteFreelancer(req, res) {
  try {
    //check if the user is found
    let freelancer = await Freelancer.find({ id: req.params.id });
    if (!freelancer) {
      if (req.user.type === "admin") {
        return res.status(404).json({ msg: "Freelancer not found" });
      } else {
        return res.status(401).json({ msg: "Unauthorized" });
      }
    }

    //check if user is authorized to delete this
    if (freelancer.freelancer !== req.user.id || req.user.type !== "admin") {
      return res.status(401).json({ msg: "Unauthorized" });
    }

    await Freelancer.remove({ id: req.params.id });
    res.json({ msg: "Freelancer removed" });
  } catch (err) {
    handleError(res, err);
  }
}

function handleError(res, err) {
  console.error(err.message);
  res.status(500).send("Sever Error");
}

module.exports = {
  addFreelancer,
  getFreelancer,
  getFreelancers,
  updateFreelancer,
  deleteFreelancer
};
