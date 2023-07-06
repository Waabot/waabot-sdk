import { BroadcastDocument } from "../interfaces/chatbot/broadcast.interface";
import { WhatsappClientInput } from "../interfaces/whatsapp.interface";
import { Waabot } from "./waabot.class";

export class Broadcast {
    private waabot: Waabot;
    constructor(waabot: Waabot) {
        this.waabot = waabot;
    }
    /**
     * get auto replies
     * @returns 
     */
    async getAll() {
        return await this.waabot.sendRequest("broadcast", "get")
    }

    /**
     * add auto replies
     * @param config 
     * @returns 
     */
    async add(config: BroadcastDocument) {
        return await this.waabot.sendRequest("broadcast", "post", config)
    }

    /**
     * update auto reply
     * @param replyId 
     * @param config 
     * @returns 
     */
    async update(replyId: BroadcastDocument["_id"], config: BroadcastDocument) {
        return await this.waabot.sendRequest(`broadcast/${replyId}`, "put", config)
    }

    /**
     * get one auto reply
     * @param replyId 
     * @returns 
     */
    async getOne(replyId: BroadcastDocument["_id"]) {
        return await this.waabot.sendRequest(`broadcast/${replyId}`, "get")
    }

    /**
     * delete one auto reply
     * @param replyId 
     * @returns 
     */
    async deleteOne(replyId: BroadcastDocument["_id"]) {
        return await this.waabot.sendRequest(`broadcast/${replyId}`, "delete")
    }

}