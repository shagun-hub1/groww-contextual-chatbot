import axios from "axios";

class actionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage,state) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
    this.State=state
  }

  greet() {
    const greetingMessage = this.createChatBotMessage("Please select from available questions")
    this.setState(prevState => ({
      ...prevState, messages: [...prevState.messages, greetingMessage]
    }))
  }

  handleFaqTap = (faq) => {
    const question=this.createClientMessage(faq.question)
    this.setState(prevState => ({
      ...prevState, messages: [...prevState.messages,question]
    }))
    axios.get(`/api/v1/faq/answer/${faq._id}`).then((res) => {
      
      console.log(res.data)
        const message = this.createChatBotMessage(res.data.answer);
         
        this.setState(prevState => ({
          ...prevState, messages: [...prevState.messages, message],
        }
        ))
         
    });

    console.log(this.State)
  };

  handleMessages=(message)=>{
  }
  
  greet(message){
    
    
  }

}

export default actionProvider