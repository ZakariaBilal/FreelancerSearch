import React from "react";

import useChat from "./_useChat";
import MessageBox from "./MessageBox/MessageBox.js";
import Messages from "./Messages/Messages.js";
import FriendsList from "./FriendsList/FriendsList.js";
import Grid from "@material-ui/core/Grid"
const Chat = () => {
  const { messages, sendMessage } = useChat();

  return (
    <div>
      <Grid container>
        <Grid item xs={3}>
<FriendsList />
        </Grid>
        <Grid item xs={6}>
        <Messages messages={messages} />
        <MessageBox
        onSendMessage={message => {
          sendMessage({ message });
        }}
      />
        </Grid>
       
      </Grid>
     
      
    </div>
  );
};

export default Chat;
