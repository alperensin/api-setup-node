import User from '@models/User';

test('it should be ok', () => {
  const user = new User();

  user.name = 'André Luiz';
  user.email = 'andreluizperensin@gmail.com';

  expect(user.name).toEqual('André Luiz');
});
