"use strict";

class UserController {
  async list({ response }) {
    const page = 1;
    const users = await User.query().paginate(page);

    response.send(users);
  }

  async login({ request, auth }) {
    const { email, password } = request.all();
    const { token } = await auth.attempt(email, password);
    return token;
  }
  show({ auth, params }) {
    if (auth.user.id !== Number(params.id)) {
      return "You cannot see someone else's profile";
    }
    return auth.user;
  }

  async register({ request, response }) {
    try {
      const userData = request.only(["username", "email", "password"]);

      const User = use("App/Models/User");

      response.status(201).send(await User.create(userData));
    } catch (error) {
      response.status(402).send(error.detail);
    }
  }

  async update({ request, params, response }) {
    try {
      const userData = request.only(["username", "email", "password"]);
      const User = use("App/Models/User");
      const user = await User.findOrFail(params.id);
      user.merge(userData);
      await user.save();
      return user;
    } catch (error) {
      response.status(402).send(error);
    }
  }
  async delete({ auth, params }) {
    const User = use("App/Models/User");
    const { id } = params;
    const user = await User.find(id);

    return await user.delete();
  }
}
module.exports = UserController;
