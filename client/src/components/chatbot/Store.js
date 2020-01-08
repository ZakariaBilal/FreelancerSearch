import React from "react";
import axios from "axios";

export const context = React.createContext();

const dialogflowURL = "localhost:5000/chatbot/textQuery";

const initState = {
  messages: [{ from: "bot", msg: "hello" }]
};
async function textQuery(text) {
  const res = await axios.post(dialogflowURL, { text });
  return res.data.fulfillementMessages;
}

async function sendChatAction(dispatch, msg) {
  dispatch({
    type: "SEND_MESSAGE",
    payload: { msg }
  });
  const res = await axios.post(dialogflowURL, { text: msg });
  console.log(res);
  getChatAction(dispatch, "hi");
}

function getChatAction(dispatch, msg) {
  dispatch({ type: "RECEIVE_MESSAGE", payload: { msg } });
}

function reducer(state, action) {
  const { msg } = action.payload;
  switch (action.type) {
    case "RECEIVE_MESSAGE":
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            from: "bot",
            msg
          }
        ]
      };
    case "SEND_MESSAGE":
      return {
        ...state,
        messages: [...state.messages, { from: "user", msg }]
      };
      break;

    default:
      return state;
      break;
  }
}

export default function Store(props) {
  const [allChat, dispatch] = React.useReducer(reducer, initState);

  return (
    <context.Provider value={{ allChat, sendChatAction, dispatch }}>
      {props.children}
    </context.Provider>
  );
}
