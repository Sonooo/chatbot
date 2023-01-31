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

    {
      widgetName: "DQLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Wrong Data in Application",
            url:
              "https://saurabhsanap.netlify.app/",
            id: 1,
          },
          {
            text: "Source Data error",
            url:
              "https://saurabhsanap.netlify.app/",
            id: 2,
          },
          {
            text: "data not present in pulse",
            url: "https://saurabhsanap.netlify.app/",
            id: 3,
          },
        ],
      },
    },
    {
      widgetName: "LgLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "logistics data is wong",
            url:
              "https://saurabhsanap.netlify.app/",
            id: 1,
          },
          {
            text: "need help with data",
            url:
              "https://saurabhsanap.netlify.app/",
            id: 2,
          },
          {
            text: "Module Walk-through",
            url: "https://saurabhsanap.netlify.app/",
            id: 3,
          },
        ],
      },
    },

    {
      widgetName: "FinanceLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Finance data is wrong",
            url:
              "https://saurabhsanap.netlify.app/",
            id: 1,
          },
          {
            text: "Doubts in calculation",
            url:
              "https://saurabhsanap.netlify.app/",
            id: 2,
          },
          {
            text: "Module Walk-through",
            url: "https://saurabhsanap.netlify.app/",
            id: 3,
          },
        ],
      },
    },

    {
      widgetName: "DMLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "DM data is wrong",
            url:
              "https://saurabhsanap.netlify.app/",
            id: 1,
          },
          {
            text: "Doubts in calculation / KPI Logic",
            url:
              "https://saurabhsanap.netlify.app/",
            id: 2,
          },
          {
            text: " Daily management Module Walk-through",
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