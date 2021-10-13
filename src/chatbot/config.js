import { createChatBotMessage } from "react-chatbot-kit";
import DogPicture from "../components/DogPicture";

const botName = "BadBot";

const config = {
  initialMessages: [createChatBotMessage(`Hello there! I'm ${botName}`)],
  botName,
  customStyles: {
    botMessageBox: {
      bacgroundColor: "#00284e",
    },
    chatButton: {
      backgroundColor: "#01d731",
    },
  },
  widgets: [
    {
      widgetName: "dogPicture",
      widgetFunc: (props) => <DogPicture {...props} />,
    },
  ],
};

export default config;
