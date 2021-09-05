const personService = require("../service/person_service");

class PersonController {
  async createPerson(req, res) {
    try {
      const id = await personService.createPerson(req.body);
      res.status(201).json(id);
    } catch (err) {
      console.log(err);
      res.send(err);
    }
  }

  async readPersonParams(req, res) {
    try {
      const id = await personService.readPersonParams(req.params.id);
      if (!id) {
        res.status(200).json({message: "Not found"});
      }
      res.status(200).json(id);
    } catch (err) {
      console.log(err);
      res.send(err);
    }
  }

  async updatePerson(req, res) {
    try {
      const id = await personService.updatePerson(req.body);
      res.status(200).json(id);
    } catch (err) {
      console.log(err);
      res.send(err);
    }
  }

  async updatePersonParams(req, res) {
    try {
      const id = await personService.updatePersonParams(
        req.params.id,
        req.body
      );
      res.status(200).json(id);
    } catch (err) {
      console.log(err);
      res.send(err);
    }
  }

  async deletePersonParams(req, res) {
    try {
      const id = await personService.deletePersonParams(req.params.id);
      res.status(200).json(id);
    } catch (err) {
      console.log(err);
      res.send(err);
    }
  }
}

module.exports = new PersonController();
