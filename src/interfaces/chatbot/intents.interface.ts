import { WhatsappClientDocument } from "../whatsapp.interface";
import { AttachmentDocument } from "./attachment.interface";
import { ButtonDocument } from "./button.interface";
import { ContactGroupDocument } from "./contact.interface";
import { SurveyDocument } from "./survey.interface";

interface NotificationDocument {
    email?: string;
    whatsapp_number?: string;
}

export interface LocationDocument {
    lat: any;
    lng: any;
    loc: string
}

export interface IntentContactDocument {
    name: string;
    number: string;
}


interface IntentActionDocument {
    send_location?: LocationDocument;
    send_contact?: IntentContactDocument;
    send_file?: AttachmentDocument;
    send_photo?: AttachmentDocument;
    send_notification?: NotificationDocument;
    add_to_group?: ContactGroupDocument["_id"];
    start_survey?: SurveyDocument["_id"];
    send_button?: ButtonDocument[];
}

export interface IntentDocument {
    _id?: string;
    title: string;
    keyword: string;
    reply: string;
    client_id?: WhatsappClientDocument["_id"];
    action?: IntentActionDocument;
}