import User from '../models/User';

class UserController {
  async store(request, response) {
    const { user, password } = request.body;

    if (!user || !password) {
      return response.status(400).json({
        message: 'Invalid data',
      });
    }

    const username = await User.create({
      user,
      password: password.toString(),
    });

    return response.json(username);
  }
}

export default new UserController();
