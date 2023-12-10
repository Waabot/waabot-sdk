import { Waabot } from "./waabot.class";

export class Whatsapp {

    private waabot: Waabot;

    constructor(waabot: Waabot) {
        this.waabot = waabot;
    }

    /**
     * Create a new whatsapp
     * @returns 
     */
    public async createNew(botName: string) {
        return await this.waabot.sendRequest('/whatsapp/createNewWhatsapp', 'post', { bot_name: botName })
    }

    /**
     * Get Whatsapp Info
     * @returns 
     */
    public async isConnected() {
        const config = {
            session_id: "",
            access_token: "",
        };
        config.session_id = this.waabot.session_id;
        config.access_token = this.waabot.access_token;
        const response = await this.waabot.sendRequest('/whatsapp/instance', 'get', config)
        // console.log(response?.settings)
        if (response?.settings?.status === 'ONLINE') {
            return true;
        }
        return false;
    }

    /**
     * Get Whatsapp Info
     * @returns 
     */
    public async getInfo() {
        const config = {
            session_id: "",
            access_token: "",
        };
        config.session_id = this.waabot.session_id;
        config.access_token = this.waabot.access_token;
        return await this.waabot.sendRequest('/whatsapp/info', 'get', config)
    }

    /**
     * Initialize Whatsapp
     * 
     * @param param0 
     * @returns 
     */
    public async initialize(
        config: {
            session_id?: string;
            access_token?: string;
            config?: {
                multiDevice: boolean;
                setWebhook: boolean;
            }
        } = {}) {
        config.session_id = this.waabot.session_id;
        config.access_token = this.waabot.access_token;
        return await this.waabot.sendRequest('/whatsapp/init', 'post', config)
    }


    /**
     * Scan Whatsapp Base64
     * @param config 
     * @returns 
     */
    public async scan(
        config: {
            session_id?: string;
            access_token?: string;
        }) {
        config.session_id = this.waabot.session_id;
        config.access_token = this.waabot.access_token;
        return await this.waabot.sendRequest('/whatsapp/scan', 'get', config)
    }

    /**
     * Scan Whatsapp To Base64
     * @param config 
     * @returns 
     */
    public async scanToBase64(
        config: {
            session_id?: string;
            access_token?: string;
            format: "base64" | "base64text";
        } = {
                format: "base64text"
            }) {
        config.format = "base64text"
        config.session_id = this.waabot.session_id;
        config.access_token = this.waabot.access_token;
        return await this.waabot.sendRequest('/whatsapp/scan', 'get', config)
    }


    public async logout() {
        return await this.waabot.sendRequest(`/whatsapp/logout`, 'get')
    }
    /**
     * Get Instances
     * @returns 
     */

    public async getAll() {
        return await this.waabot.sendRequest('/whatsapp', 'get')
    }

    /**
     * Send Text Messages
     * @param config 
     * @returns 
     */
    public async sendTextMessages(
        config: {
            session_id?: string;
            access_token?: string;
            chatId: string;
            message: string;
        }) {
        config.session_id = this.waabot.session_id;
        config.access_token = this.waabot.access_token;
        return await this.waabot.sendRequest('/whatsapp/message', 'post', config)
    }


    /**
     * Send Image Message
     * @param config 
     * @returns 
     */
    public async sendImageMessages(
        config: {
            session_id?: string;
            access_token?: string;
            type: string | "image" | "video" | "gif" | "video";
            mimetype: string;
            caption: string;
            url: string;
        }) {
        config.session_id = this.waabot.session_id;
        config.access_token = this.waabot.access_token;
        return await this.waabot.sendRequest('/whatsapp/image/fileurl', 'post', config)
    }

    /**
     * Send Contact
     * @param config 
     * @returns 
     */
    public async sendContact(
        config: {
            session_id?: string;
            access_token?: string;
            chatId: string;
            vcard: {
                fullName: string
                displayName: string
                organization: string
                phoneNumber: string
            }
        }) {
        config.session_id = this.waabot.session_id;
        config.access_token = this.waabot.access_token;
        return await this.waabot.sendRequest('/whatsapp/message/contact', 'post', config)
    }


    /**
     * Send List Message
     * @param config 
     * @returns 
     */
    public async sendListMessage(
        config: {
            session_id?: string;
            access_token?: string;
            chatId: string;
            msgdata: {
                buttonText: string;
                text: string;
                title: string;
                description: string;
                sections: [
                    {
                        title: string;
                        rows: [
                            {
                                title: string;
                                description: string;
                                rowId: string;
                            }
                        ]
                    }
                ],
                listType: number
            }
        }) {
        config.session_id = this.waabot.session_id;
        config.access_token = this.waabot.access_token;
        return await this.waabot.sendRequest('/whatsapp/message/list', 'post', config)
    }

}