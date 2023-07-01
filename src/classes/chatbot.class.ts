import { IntentDocument } from "../interfaces/chatbot/intents.interface";
import { WhatsappClientInput } from "../interfaces/whatsapp.interface";
import { Waabot } from "./waabot.class";

export class ChatBot {
    private waabot: Waabot;
    constructor(waabot: Waabot) {
        this.waabot = waabot;
    }
    /**
     * get auto replies
     * @returns 
     */
    async getAll() {
        return await this.waabot.sendRequest("intent", "get")
    }

    /**
     * add auto replies
     * @param config 
     * @returns 
     */
    async add(config: IntentDocument) {
        return await this.waabot.sendRequest("intent", "post", config)
    }

    /**
     * update auto reply
     * @param replyId 
     * @param config 
     * @returns 
     */
    async update(replyId: IntentDocument["_id"], config: IntentDocument) {
        return await this.waabot.sendRequest(`intent/${replyId}`, "put", config)
    }

    /**
     * get one auto reply
     * @param replyId 
     * @returns 
     */
    async getOne(replyId: IntentDocument["_id"]) {
        return await this.waabot.sendRequest(`intent/${replyId}`, "get")
    }

    /**
     * delete one auto reply
     * @param replyId 
     * @returns 
     */
    async deleteOne(replyId: IntentDocument["_id"]) {
        return await this.waabot.sendRequest(`intent/${replyId}`, "delete")
    }

}