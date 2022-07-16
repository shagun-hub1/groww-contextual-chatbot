import { createChatBotMessage } from "react-chatbot-kit";
import botLogo from '../utils/botLogo.png'
import FAQ from "./widgets/FAQ";  
import userLogo from "../utils/userLogo.jpg"

const config = {
  botName: "Groww Chatbot",
  initialMessages: [createChatBotMessage(`Hello !What would you like to know?`,
   {
    
    delay: 500,
    widget: "faqs",
  }
  ),
],
  customStyles: {
      botMessageBox: {
          backgroundColor: "#00d09c",
      },
      chatButton: {
          backgroundColor: "#00d09c",
      },
  },
  customComponents: {
      header: () => <div className="font-bold flex item-center justify-center text-xl bg-slate-300 rounded-md">Groww Chatbot </div>,
      botAvatar: (props) => 
      <img 
      alt="chatbot" 
      className="w-10 h-8 rounded-full"
      src={botLogo}  
      />,
      userAvatar: (props) => 
      <img
      alt="user"
      className="w-10 h-8 rounded-full text-right"
      src={userLogo} 
      />
  },
  widgets:[
    {
      widgetName: "faqs",
      widgetFunc: (props) => <FAQ {...props} />,
    },
  ]
}
export default config