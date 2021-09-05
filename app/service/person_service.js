const personDAO = require("../dao/person_dao");

class PersonService {
  createPerson(personDto) {
    const {firstName, lastName, email} = personDto;
    return personDAO.createPerson(firstName, lastName, email);
  }

  readPersonParams(personId) {
    return personDAO.readPersonParams(personId);
  }

  updatePerson(personDto) {
    const {personId, firstName, lastName, email} = personDto;
    return personDAO.updatePerson(personId, firstName, lastName, email);
  }

  updatePersonParams(personId, personDto) {
    const {firstName, lastName, email} = personDto;
    return personDAO.updatePersonParams(personId, personDto);
  }

  deletePersonParams(personId) {
    return personDAO.deletePersonParams(personId);
  }
}

module.exports = new PersonService();
