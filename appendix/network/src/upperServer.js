class UserConnection {
  /**
   * @returns {string}
   */
  receive() {
    throw new Error('Abstract method must be implemented.');
  }
}

export class MockConnection extends UserConnection {
  setupReceived;
  constructor() {
    super();
    this.setupReceived = null;
  }

  /**
   *
   * @param {string} text
   */
  setReceiveData(text) {
    this.setupReceived = text;
  }

  /**
   * @returns {string}
   */
  receive() {
    return this.setupReceived;
  }
}

export class UpperServer {
  #receivedText;
  constructor() {
    this.#receivedText = null;
  }

  /**
   *
   * @param {string} text
   * @returns {string}
   */
  toUpper(text) {
    return text.toUpperCase();
  }

  /**
   *
   * @param {UserConnection} connection
   */
  receive(connection) {
    this.#receivedText = connection.receive();
  }

  getReceived() {
    return this.#receivedText;
  }
}
