import { WhatsappClientDocument } from "../whatsapp.interface";
import { AttachmentDocument } from "./attachment.interface";
import { ButtonDocument } from "./button.interface";
import { ContactGroupDocument } from "./contact.interface";
import { IntentDocument, LocationDocument } from "./intents.interface";
import { NotificationDocument } from "./notification.interface";

export interface SurveyContactDocument {
    name: string;
    number: string;
}


interface SurveyActionDocument {
    send_location?: LocationDocument;
    send_contact?: SurveyContactDocument;
    send_file?: AttachmentDocument;
    send_photo?: AttachmentDocument;
    send_notification?: NotificationDocument;
    add_to_group?: ContactGroupDocument["_id"];
    send_button?: ButtonDocument[];
}

export interface SurveyDocument extends IntentDocument {
    _id?: string;
    title: string;
    // keyword: string;
    question: string;
    // survey_id: ;
    client_id?: WhatsappClientDocument["_id"];
    action: SurveyActionDocument;
    sort_id: number;
}
