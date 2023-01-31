class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  greet() {
    const greetingMessage = this.createChatBotMessage("Hi, friend.")
    this.updateChatbotState(greetingMessage)
  }
  handlehelpList = () => {
    const message = this.createChatBotMessage(
      "I've got the following resources for you  regarding Access:",
      {
        widget: "helpLinks",
      }
    );

    this.updateChatbotState(message);
  };

  handleDQhelpList = () => {
    const message = this.createChatBotMessage(
      "I've got the following resources for you regarding data quality :",
      {
        widget: "DQLinks",
      }
    );

    this.updateChatbotState(message);
  };

  handleLGhelpList = () => {
    const message = this.createChatBotMessage(
      "I've got the following resources for you regarding Logistics :",
      {
        widget: "LgLinks",
      }
    );

    this.updateChatbotState(message);
  };

   handleFhelpList = () => {
    const message = this.createChatBotMessage(
      "I've got the following resources for you regarding Finance :",
      {
        widget: "FinanceLinks",
      }
    );

    this.updateChatbotState(message);
  };

  handleDMhelpList = () => {
    const message = this.createChatBotMessage(
      "I've got the following resources for you regarding Daily Management :",
      {
        widget: "DMLinks",
      }
    );

    this.updateChatbotState(message);
  };


  updateChatbotState(message) {
    // NOTICE: This function is set in the constructor, and is passed in from the top level Chatbot component. The setState function here actually manipulates the top level state of the Chatbot, so it's important that we make sure that we preserve the previous state.

    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;