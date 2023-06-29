import axios, { Axios, InternalAxiosRequestConfig } from "axios";
import { axiosInstance, sendRequest } from "./packages/http";
import { WaabotError } from "./packages/error";

export class Waabot {
    /** */
    private accessToken: string;
    /** */
    private refreshToken: string;


    /** */
    private session_id: string = "";
    /** */
    private access_token: string = "";


    private waabotHttp: Axios;

    /**
     * Constructor takes in the account accessToken & refreshToken
     * @param accessToken 
     * @param refreshToken 
     */
    constructor(accessToken: string, refreshToken: string) {
        this.refreshToken = refreshToken;
        this.accessToken = accessToken;
        this.waabotHttp = axiosInstance;

        /**
         * Intercept waabot from here to send with request the clients accessToken and secret.
         */
        this.waabotHttp.interceptors.request.use((req: InternalAxiosRequestConfig<any>) => {
            req.headers.Authorization = `Bearer ${this.accessToken}`;
            req.headers["x-refresh"] = this.refreshToken
            return req;
        })
    }

    /**
     * Send request
     * @param path 
     * @param method 
     * @param requestData 
     * @returns 
     */
    public async sendRequest(path: string, method: 'post' | 'get', requestData: any = {}) {
        try {
            if (this.session_id || this.access_token) {
                requestData.session_id = this.session_id;
                requestData.access_token = this.access_token;

                // console.log(requestData.session_id, requestData.access_token, "HELLO!")
            }

            const { data } = method === 'post' ? await this.waabotHttp.post(path, requestData) : await this.waabotHttp.get(path, { params: requestData })
            return data?.data || data;
        } catch (error: any) {
            if (axios.isAxiosError(error)) {
                throw new Error(error.response?.data?.message)
            }
            throw error;
        }
    }


    /**
     * Init Whatsapp
     * @param config 
     */
    public setWhatsapp(
        config: {
            session_id: string;
            access_token: string;
        }) {
        this.session_id = config.session_id;
        this.access_token = config.access_token;
        return true;
    }

    /**
     * Create a new whatsapp
     * @returns 
     */
    public async createNewWhatsapp() {
        return await this.sendRequest('/whatsapp/createNewWhatsapp', 'post', {})
    }

    /**
     * Create a new whatsapp
     * @returns 
     */
    public async getInstanceInfo() {
        const config = {
            session_id: "",
            access_token: "",
        };
        config.session_id = this.session_id;
        config.access_token = this.access_token;
        return await this.sendRequest('/whatsapp/info', 'get', config)
    }

    /**
     * Initialize Whatsapp
     * 
     * @param param0 
     * @returns 
     */
    public async initializeWhatsapp(
        config: {
            session_id?: string;
            access_token?: string;
            config?: {
                multiDevice: boolean;
                setWebhook: boolean;
            }
        } = {}) {
        config.session_id = this.session_id;
        config.access_token = this.access_token;
        return await this.sendRequest('/whatsapp/init', 'post', config)
    }


    /**
     * Scan Whatsapp Base64
     * @param config 
     * @returns 
     */
    public async scanWhatsapp(
        config: {
            session_id?: string;
            access_token?: string;
        }) {
        config.session_id = this.session_id;
        config.access_token = this.access_token;
        return await this.sendRequest('/whatsapp/scan', 'get', config)
    }

    /**
     * Scan Whatsapp To Base64
     * @param config 
     * @returns 
     */
    public async scanWhatsappToBase64(
        config: {
            session_id?: string;
            access_token?: string;
            format: "base64";
        }) {
        config.format = "base64"
        config.session_id = this.session_id;
        config.access_token = this.access_token;
        return await this.sendRequest('/whatsapp/scan', 'get', config)
    }


    /**
     * Get Instances
     * @returns 
     */

    public async getInstances() {
        return await this.sendRequest('/whatsapp', 'get')
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
        config.session_id = this.session_id;
        config.access_token = this.access_token;
        return await this.sendRequest('/whatsapp/message', 'post', config)
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
            type: string;
            mimetype: string;
            caption: string;
        }) {
        config.session_id = this.session_id;
        config.access_token = this.access_token;
        return await this.sendRequest('/whatsapp/image/fileurl', 'post', config)
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
        config.session_id = this.session_id;
        config.access_token = this.access_token;
        return await this.sendRequest('/whatsapp/message/contact', 'post', config)
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
        config.session_id = this.session_id;
        config.access_token = this.access_token;
        return await this.sendRequest('/whatsapp/message/list', 'post', config)
    }



}