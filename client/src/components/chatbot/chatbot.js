import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { context } from "./Store";

const useStyles = makeStyles(theme => ({
  root: {
    alignItems: "center",
    margin: "50px",
    padding: theme.spacing(3, 2)
  },
  flex: {
    alignItems: "center",
    display: "flex"
  },
  chat: {
    padding: "20px",
    width: "100%",
    height: "300px",
    overflowY: "scroll"
  },
  chatbox: {
    width: "85%"
  },
  chatButton: {
    width: "15%"
  },
  chip: {
    margin: "10px"
  }
}));

export default function Chatbot() {
  const classes = useStyles();

  const { allChat, sendChatAction, dispatch } = React.useContext(context);

  const [textValue, changeTextValue] = React.useState("");

  function sendMessage(text) {
    if (text != "") {
      sendChatAction(dispatch, text);
      changeTextValue("");
    }
  }

  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant='h4' component='h4'>
          Chatbot
        </Typography>
        <div className={classes.flex}>
          <div className={classes.chat}>
            {allChat.messages.map((chat, i) => (
              <div className={classes.flex} key={i}>
                <Chip label={chat.from} className={classes.chip} />
                <Typography component='p'>{chat.msg}</Typography>
              </div>
            ))}
          </div>
        </div>
        <div className={classes.flex}>
          <div className={classes.chatbox}>
            <TextField
              id='standard-name'
              label='Request'
              value={textValue}
              className={classes.chatbox}
              onChange={e => changeTextValue(e.target.value)}
            />
          </div>
          <div className={classes.chatButton}>
            {" "}
            <Button
              variant='contained'
              color='primary'
              onClick={() => {
                sendMessage(textValue);
              }}
            >
              Send
            </Button>
          </div>
        </div>
      </Paper>
    </div>
  );
}
