import { aileenChat, bensonChat, high5GhostChat, mordecaiChat, muscleManChat, popsChat, rigbyChat, skippsChat } from "./chat.js";

// Making a list of all park members to make checking whether provided character is supported easier
export const parkMembers = ['rigby', 'mordecai', 'skips', 'muscleman', 'high5ghost', 'aileen', 'benson', 'pops'];

// A dict with character as key that stores all of the chats
export const chats = {
    rigby: rigbyChat,
    mordecai: mordecaiChat,
    skips: skippsChat,
    muscleman: muscleManChat,
    high5ghost: high5GhostChat,
    aileen: aileenChat,
    benson: bensonChat,
    pops: popsChat
}