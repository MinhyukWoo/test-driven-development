import { UpperServer, MockConnection } from '../src/upperServer';

describe('Test Upper Server', () => {
  test('Test Upper', () => {
    const upperServer = new UpperServer();
    expect(upperServer.toUpper('testing')).toEqual('TESTING');
  });

  test('Test Receive', () => {
    const mockConnection = new MockConnection();
    const text = 'testing';
    mockConnection.setReceiveData(text);
    const upperServer = new UpperServer();
    upperServer.receive(mockConnection);
    expect(upperServer.getReceived()).toEqual(text);
  });
});
