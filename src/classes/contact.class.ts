import { ContactDocument } from "../interfaces/chatbot/contact.interface";
import { WhatsappClientInput } from "../interfaces/whatsapp.interface";
import { Waabot } from "./waabot.class";

export class Contact {
    private waabot: Waabot;
    constructor(waabot: Waabot) {
        this.waabot = waabot;
    }
    /**
     * get auto replies
     * @returns 
     */
    async getAll() {
        return await this.waabot.sendRequest("contact", "get")
    }

    /**
     * add auto replies
     * @param config 
     * @returns 
     */
    async add(config: ContactDocument) {
        return await this.waabot.sendRequest("contact", "post", config)
    }

    /**
     * update auto reply
     * @param contactId 
     * @param config 
     * @returns 
     */
    async update(contactId: ContactDocument["_id"], config: ContactDocument) {
        return await this.waabot.sendRequest(`contact/${contactId}`, "put", config)
    }

    /**
     * get one auto reply
     * @param contactId 
     * @returns 
     */
    async getOne(contactId: ContactDocument["_id"]) {
        return await this.waabot.sendRequest(`contact/${contactId}`, "get")
    }

    /**
     * delete one auto reply
     * @param contactId 
     * @returns 
     */
    async deleteOne(contactId: ContactDocument["_id"]) {
        return await this.waabot.sendRequest(`contact/${contactId}`, "delete")
    }

}