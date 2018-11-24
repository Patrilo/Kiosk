const express = require("express");
const router = express.Router();
const mapsRoutes = require("./maps");
const kioskPlacesRoutes = require("./kioskPlaces");
const commentsRoutes= require("./comments");
const editProfileRoutes = require("./editProfile");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.use("/maps", mapsRoutes);
router.use("/kioskPlaces", kioskPlacesRoutes);
router.use("/comments", commentsRoutes);
router.use("/editProfile", editProfileRoutes);


module.exports = router;
