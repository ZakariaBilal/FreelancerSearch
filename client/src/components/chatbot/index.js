import React from "react";

import Chatbot from "./chatbot";
import Store from "./Store";

export default function() {
  return (
    <Store>
      <Chatbot />
    </Store>
  );
}
