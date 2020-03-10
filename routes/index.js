const express = require("express");
const router = express.Router();
const config = require("../config/index");

const usersRoutes = require("./users");
const productsRoutes = require("./products");
const ordersRoutes = require("./orders");
const cartRoutes = require("./cart");
const passport = require("passport");

/* GET home page. */
router.get("/", function (req, res, next) {
  return res.json({ message: "welcome to homepage" });
});

/* GET about page. */
router.get("/about", function (req, res, next) {
  return res.json({ message: "welcome to about us page" });
});

router.use("/user", usersRoutes);
router.use(
  "/products",
  // passport.authenticate('jwt', { session: false }),
  productsRoutes
);
router.use(
  "/cart",
  // config.jwtMiddleware,
  passport.authenticate('jwt', { session: false }),
  cartRoutes
);
router.use(
  "/orders",
  //  config.jwtMiddleware, 
  passport.authenticate('jwt', { session: false }),
  ordersRoutes
);

module.exports = router;
