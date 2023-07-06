import { ContactDocument, ContactGroupDocument } from "../interfaces/chatbot/contact.interface";
import { WhatsappClientInput } from "../interfaces/whatsapp.interface";
import { Waabot } from "./waabot.class";

export class ContactGroup {
    private waabot: Waabot;
    constructor(waabot: Waabot) {
        this.waabot = waabot;
    }
    /**
     * get auto replies
     * @returns 
     */
    async getAll() {
        return await this.waabot.sendRequest("contact_groups", "get")
    }

    /**
     * add auto replies
     * @param config 
     * @returns 
     */
    async add(config: ContactGroupDocument) {
        return await this.waabot.sendRequest("contact_groups", "post", config)
    }

    /**
     * update auto reply
     * @param contactGroupId 
     * @param config 
     * @returns 
     */
    async update(contactGroupId: ContactGroupDocument["_id"], config: ContactGroupDocument) {
        return await this.waabot.sendRequest(`contact_groups/${contactGroupId}`, "put", config)
    }

    /**
     * get one auto reply
     * @param contactGroupId 
     * @returns 
     */
    async getOne(contactGroupId: ContactGroupDocument["_id"]) {
        return await this.waabot.sendRequest(`contact_groups/${contactGroupId}`, "get")
    }

    /**
     * delete one auto reply
     * @param contactGroupId 
     * @returns 
     */
    async deleteOne(contactGroupId: ContactDocument["_id"]) {
        return await this.waabot.sendRequest(`contact_groups/${contactGroupId}`, "delete")
    }

}