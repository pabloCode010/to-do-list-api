const { Router } = require("express");
const router = Router();

const { create, read, update, delete_, all } = require("../controllers/crud");
const wrapper = require("../err/wrapper");
const validateSchema = require("../validations/validate-schema");
const { createTask, searchById, updateTask } = require("../validations/schemas");

//crud

router.post("/create",
    validateSchema("body", createTask),
    wrapper(create));

router.get("/all", all);

router.use(validateSchema("query", searchById));

router.get("/read", wrapper(read));

router.patch("/update",
    validateSchema("body", updateTask),
    wrapper(update));

router.delete("/delete", wrapper(delete_));


module.exports = router;