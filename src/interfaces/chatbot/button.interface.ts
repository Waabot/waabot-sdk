export interface ButtonDocument {
    type: "replyButton" | "urlButton" | "callButton";
    title: string;
    payload?: string;// phone number for callButton, urlButton for url and text for replyButton
}