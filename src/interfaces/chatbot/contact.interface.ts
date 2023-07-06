import { WhatsappClientDocument } from "../whatsapp.interface";
import { SurveyDocument } from "./survey.interface";

export interface ContactGroupDocument {
    _id?: string;
    title: string;
    is_default: boolean;
}

interface TransactionDocument {
    survey_id?: SurveyDocument["_id"];
    survey_sort_id?: SurveyDocument["sort_id"];
}

export interface ContactDocument {
    _id?: string;
    name?: string;
    number: string;
    client_id?: WhatsappClientDocument["_id"];
    group_id: ContactGroupDocument["_id"];
    contact?: any;
    channel?: string;
    transaction?: TransactionDocument;
}