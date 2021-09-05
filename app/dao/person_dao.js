const db = require("../database/db");

class PersonDAO {
  async createPerson(firstName, lastName, email) {
    const [id] = await db("person")
      .insert({
        email,
        first_name: firstName,
        last_name: lastName,
      })
      .returning("id");

    return id;
  }

  async readPersonParams(personId) {
    const [id] = await db("person")
      .select("*")
      .where({id: personId})
      .returning("id");

    return id;
  }

  async updatePerson(personId, firstName, lastName, email) {
    const [id] = await db("person")
      .where({id: personId})
      .update({
        first_name: firstName,
        last_name: lastName,
        email,
      })
      .returning("id");

    return id;
  }

  async updatePersonParams(personId, data) {
    const {firstName, lastName, email} = data;
    const [id] = await db("person")
      .where({id: personId})
      .update({
        first_name: data.firstName,
        last_name: data.lastName,
        email: data.email,
      })
      .returning("id");

    return id;
  }

  async deletePersonParams(personId) {
    const [id] = await db("person")
      .where({id: personId})
      .delete()
      .returning("id");

    return id;
  }
}

module.exports = new PersonDAO();
