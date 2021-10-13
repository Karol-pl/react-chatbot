class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    if (message.includes("Hello") || message.includes("Hi")) {
      this.actionProvider.handleHello();
    }
    if (
      message.includes("dog") ||
      message.includes("cat") ||
      message.includes("animal")
    ) {
      this.actionProvider.handleDog();
    }
    if (message.includes("question")) {
      this.actionProvider.handleQuestion();
    }
  }
}

export default MessageParser;
