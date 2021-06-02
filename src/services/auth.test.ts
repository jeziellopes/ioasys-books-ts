import Auth from './auth';
import userMock from './auth.mock';

test('deve retornar um usuário com shortName', async () => {
  const userResponse = {
    name: 'Silas Carvalho',
    email: 'desafio@ioasys.com.br',
    birthdate: '2020-07-20',
    gender: 'M',
    id: '6017163afaf5de22b804a173',
  };
  const authResponse = await Auth.getUserFrom(userResponse);
  expect(authResponse).toStrictEqual(userMock);
});
