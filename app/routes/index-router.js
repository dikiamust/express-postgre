const express = require("express");
const personController = require("../controllers/person_controller");

const indexRouter = express.Router();
indexRouter.post("/person/register", personController.createPerson);
indexRouter.get("/person/read/:id", personController.readPersonParams);
indexRouter.put("/person/update", personController.updatePerson);
indexRouter.put("/person/update/:id", personController.updatePersonParams);
indexRouter.delete("/person/delete/:id", personController.deletePersonParams);

module.exports = indexRouter;
