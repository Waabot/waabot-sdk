import axios, { Axios, InternalAxiosRequestConfig } from "axios";
import { axiosInstance } from "../packages/http";
import { ChatBot } from "./chatbot.class";
import { Whatsapp } from "./whatsapp.class";
import { Settings } from "./settings.class";
import { Broadcast } from "./broadcast.class";
import { ContactGroup } from "./contact-group.class";
import { Contact } from "./contact.class";

export class Waabot {

    public intent: ChatBot = new ChatBot(this);
    public whatsapp: Whatsapp = new Whatsapp(this);
    public settings: Settings = new Settings(this);
    public broadcast: Broadcast = new Broadcast(this);
    public contact: Contact = new Contact(this);
    public contactGroup: ContactGroup = new ContactGroup(this);


    /** */
    public accessToken: string;
    /** */
    public refreshToken: string;


    /** */
    public session_id: string = "";
    /** */
    public access_token: string = "";


    public waabotHttp: Axios;

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
    public async sendRequest(path: string, method: 'post' | 'get' | 'put' | 'delete', requestData: any = {}) {
        try {
            if (this.session_id || this.access_token) {
                requestData.session_id = this.session_id;
                requestData.access_token = this.access_token;

                // console.log(requestData.session_id, requestData.access_token, "HELLO!")
            }

            // const { data } = method === 'post' ? await this.waabotHttp.post(path, requestData) : await this.waabotHttp.get(path, { params: requestData })
            const { data } = await this.waabotHttp.request({ data: requestData, method, url: path, params: requestData })
            return data?.data || data;
        } catch (error: any) {
            if (axios.isAxiosError(error)) {
                throw new Error(error.response?.data?.error || error.response?.data?.message)
            }
            throw error;
        }
    }

    /**
     * Init Whatsapp
     * @param config 
     */
    public setConfig(
        config: {
            session_id: string;
            access_token: string;
        }) {
        this.session_id = config.session_id;
        this.access_token = config.access_token;
        return true;
    }
}