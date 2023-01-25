import { createChatBotMessage } from 'react-chatbot-kit';
import HelpOptions from './HelpOptions';
import LinkList from './LinkList';
const config = { 
  botName: "AI Bot",
  initialMessages: [
    createChatBotMessage("Hi, I'm here to help.How Can I help You?", {
      widget: "helpOptions",
    }),
  ],
  widgets: [
    {
      widgetName: "helpOptions",
      widgetFunc: (props) => <HelpOptions {...props} />,
    },
    {
      widgetName: "helpLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Request Access",
            url:
              "https://saurabhsanap.netlify.app/",
            id: 1,
          },
          {
            text: "Try Basic Troubleshooting",
            url:
              "https://saurabhsanap.netlify.app/",
            id: 2,
          },
          {
            text: "Connect with Admin Team",
            url: "https://saurabhsanap.netlify.app/",
            id: 3,
          },
        ],
      },
    },
    
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },
}

export default config