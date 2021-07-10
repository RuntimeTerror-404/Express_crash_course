const express = require("express");
const router = express.Router();
const path = require("path");
const members = require("../../Members");
const uuid = require("uuid");

router.get("/", (req, res) => {
  res.json(members);
});

router.get("/:id", (req, res) => {
  const found = members.some((member) => member.id === parseInt(req.params.id));
  if (found) {
    res.json(members.filter((member) => member.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
  }
});

// create member
router.post("/", (req, res) => {
  const newMember = {
    id: uuid.v4(),
    name: req.body.name,
    age: req.body.age,
    location: req.body.location,
  };
  if (!newMember.name || !newMember.age || newMember.location) {
    return res.status(400).json({ msg: "info not found" });
  }

  members.push(newMember);
  res.json(members);
});

// update member
router.get("/:id", (req, res) => {
  const found = members.some((member) => member.id === parseInt(req.params.id));
  if (found) {
    res.json(members.filter((member) => member.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
  }
});

module.exports = router;
