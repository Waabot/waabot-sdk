import { WhatsappClientDocument } from "../whatsapp.interface";
import { AttachmentDocument } from "./attachment.interface";
import { ButtonDocument } from "./button.interface";
import { ContactDocument, ContactGroupDocument } from "./contact.interface";
import { IntentContactDocument, LocationDocument } from "./intents.interface";
import { SurveyDocument } from "./survey.interface";

/**
 * Broadcast Message Document
 */
export interface BroadcastMessageDocument {
    text: string;
    file?: string;
    location?: BroadcastLocationDocument;
}

export enum SendTypeEnum {
    group = "group",
    individual = "individual"
}

interface BroadcastLocationDocument {
    _id?: string;
}



interface BroadcastActionDocument {
    send_location?: LocationDocument;
    send_contact?: IntentContactDocument;
    send_file?: AttachmentDocument;
    send_photo?: AttachmentDocument;
    add_to_group?: ContactGroupDocument["_id"];
    start_survey?: SurveyDocument["_id"];
    send_button?: ButtonDocument[];
}

/**
 * 
 */
export interface BroadcastDocument {
    _id?: string;
    client_id?: WhatsappClientDocument["_id"];
    send_type: 'group' | 'individual';
    to: string;
    // location?: BroadcastLocationDocument;
    message: BroadcastMessageDocument;
    status?: string;
    sent?: ContactDocument["_id"][];
    pending?: ContactDocument["_id"][];
    failed?: ContactDocument["_id"][];
    action?: BroadcastActionDocument;
}
