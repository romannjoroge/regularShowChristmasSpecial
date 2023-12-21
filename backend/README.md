# Backend

This is where the APIs are defined. It implements saving chat history, receiving responses from Google Gemini and also prompting it.

To run the backend run the following command:

```bash
npm start
```

ai_functions folder contains helper functions

1. model.js defines the Gemini text and text and image models
2. path_to_file.js defines a function for converting files to a form Gemini can understand
3. prompt_gemini.js defines functions for prompting the AI

app.js defines the routes for chatting with a character and with a group of characters

chat.js defines the chats for each character and the group

constants.js defines helper lists and dictionaries

To understand the use of each function check out [my article](https://medium.com/@roman.njoroge_90440/google-gemini-tutorial-how-to-build-a-chat-app-with-characters-from-your-favorite-show-a8c0efd732ef)
