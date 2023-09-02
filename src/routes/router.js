const { Router } = require("express");
const router = Router();

const { create, read, update, delete_, all } = require("../controllers/crud");
const wrapper = require("../err/wrapper");

//crud

router.post("/create", wrapper(create));
router.get("/read", wrapper(read));
router.patch("/update", wrapper(update));
router.delete("/delete", wrapper(delete_));

router.get("/all", all);

module.exports = router;