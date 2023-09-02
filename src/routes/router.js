const { Router } = require("express");
const router = Router();

const { create, read, update, delete_ } = require("../controllers/crud");

//crud

router.post("/create", create);
router.get("/read", read);
router.patch("/update", update);
router.delete("/delete", delete_);

module.exports = router;