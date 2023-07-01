import { WhatsappClientInput } from "../interfaces/whatsapp.interface";
import { Waabot } from "./waabot.class";

export class Settings {
    private waabot: Waabot;
    constructor(waabot: Waabot) {
        this.waabot = waabot;
    }
    /**
     * Set The Default Response when messages doesnt match any autreply.
     * @param config 
     * @returns 
     */
    public async setDefaultReply(config: WhatsappClientInput["settings"]) {
        return await this.waabot.sendRequest('/whatsapp/updateGeneral', 'put', config)
    }


    public async setWebhookUrl(webhookUrl: string) {
        return await this.waabot.sendRequest('/whatsapp/setWebhook', 'put', { webhook_url: webhookUrl })
    }


    public async turnOffChatbot() {
        const config: WhatsappClientInput["settings"]["actions"] = { reply_msgs: false };
        return await this.waabot.sendRequest('/whatsapp/updateActions', 'put', config)
    }


    public async turnOffGroupAutoreplies() {
        const config: WhatsappClientInput["settings"]["actions"] = { reply_group_msgs: false };
        return await this.waabot.sendRequest('/whatsapp/updateActions', 'put', config)
    }


    public async turnOnChatbot() {
        const config: WhatsappClientInput["settings"]["actions"] = { reply_msgs: true };
        return await this.waabot.sendRequest('/whatsapp/updateActions', 'put', config)
    }

    public async turnOnGroupReplies() {
        const config: WhatsappClientInput["settings"]["actions"] = { reply_group_msgs: true };
        return await this.waabot.sendRequest('/whatsapp/updateActions', 'put', config)
    }

}