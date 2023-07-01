
export interface ActiveHoursDocument {
    from: string | Date;
    to: string | Date;
}

export interface ActiveDaysDocument {
    monday: boolean;
    tuesday: boolean;
    wednesday: boolean;
    thursday: boolean;
    friday: boolean;
    saturday: boolean;
    sunday: boolean;
}

export interface SettingsActionDocument {
    // send_welcome_msg: boolean;
    send_default_msg?: boolean;
    reply_group_msgs?: boolean;
    reply_unread_msgs?: boolean;
    reply_msgs?: boolean;
    multi_device?: boolean;
    send_webhook?: boolean;
}

export interface WebhookDocument {
    url: string;
    events?: string[] | string | string,
    requestConfig?: any;
}

export interface SettingsInput {
    bot_name?: string;
    bot_number?: string;
    bot_timezone?: string;
    bot_lang?: string;
    default_msg?: string;
    status?: string;
    webhook?: WebhookDocument;
    actions?: SettingsActionDocument;
    active_days?: ActiveDaysDocument;
    active_hours?: ActiveHoursDocument;
    access_token?: string;
}

export interface SettingsDocument extends SettingsInput {
    _id?: string;
}

export interface WhatsappClientInput {
    user_id?: string;
    session_id?: string;
    settings: SettingsInput;
}

export interface WhatsappClientDocument extends WhatsappClientInput {
    _id?: string;
}