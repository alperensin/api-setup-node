import User from '@models/User';

export default class UserController {
  teste() {
    const user = new User();

    if (user.email) {
      return true;
    }

    return false;
  }
}
