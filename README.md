# WAABOT-SDK Documentation

## Introduction
The WAABOT-SDK is a powerful tool that allows you to integrate with the WAABOT platform and interact with WhatsApp. This documentation provides a comprehensive guide on how to create credentials, create a session, initialize the WhatsApp client, configure the WhatsApp instance, and send various types of messages.

## Create Credentials
To get started with the SDK, follow these steps to create your credentials:

1. Go to [waabot.com](https://waabot.com/) using your preferred web browser and create an account.
2. Use the credentials obtained during the account creation process to create a session.


## Creating a Session
To create a session for API access, follow these steps:

**Endpoint:** `https://api.waabot.com/api/v1/sessions`

```json
{
    "email": "your-account-email",
    "password": "your-account-password"
}
```

Make a POST request to the provided endpoint with the JSON payload, replacing "your-account-email" and "your-account-password" with your actual account credentials. Save the session details, including the `accessToken` and `refreshToken` from the response, to a secure location or a `.env` file.

## Initializing the WhatsApp Client
To initialize the WhatsApp client and start interacting with the API, follow these steps:

```javascript
const { Waabot } = require("wasms-sdk");
const waabot = new Waabot(config.accessToken, config.refreshToken);
const chatId = "15417543010";
const chat = {
    chatId,
    fullname: "Chat Name",
    displayName: "Display Name",
    organization: "Organization",
    phoneNumber: chatId
};
const message = "This is the message to be sent!";
```

1. Import the `Waabot` class from the SDK.
2. Create a new instance of `Waabot` by passing the `accessToken` and `refreshToken` obtained from the session creation step.
3. Define a `chat` object with the necessary details, such as `chatId`, `fullname`, `displayName`, `organization`, and `phoneNumber`.
4. Set the `message` variable with the desired content of the message to be sent.

## Creating a WhatsApp Instance
To create a WhatsApp instance, use the following code:

```javascript
const response = await waabot.whatsapp.createNew("preferedName");
```

The response will contain the settings and details of the newly created instance.

## Configuring the WhatsApp Instance
To configure the Waabot instance, use the following code:

```javascript
waabot.setConfig({ session_id: "464c3391-dee7-4206-ad13-d75ffb7498a0", access_token: "0b375583-b9c7-4a86-b95c-7e5064326778" });
```

Replace the `session_id` and `access_token` with the appropriate values you want to use for the rest of the requests.

## Sending Text Messages
To send a text message, use the following code:

```javascript
await waabot.whatsapp.sendTextMessages({ chatId, message });
```

## Sending a List Message
To send a list message, use the following code:

```javascript
await waabot.whatsapp.sendListMessage({
    chatId,
    msgdata: {
        buttonText: "Button Text",
        text: "Middle Text",
        title: "Head Title",
        description: "Footer Description",
        sections: [
            {
                title: "title",
                rows: [
                    {
                        title: "Title Option 1",
                        description: "Option Description",
                        rowId: "string"
                    }
                ]
            }


        ],
        "listType": 0
    }
});
```

## Sending a Contact
To send a contact, use the following code:

```javascript
await waabot.whatsapp.sendContact({
    chatId,
    vcard: {
        fullName: chat.fullname,
        displayName: chat.displayName,
        organization: chat.organization,
        phoneNumber: chat.phoneNumber,
    }
});
```


## ChatBot Interaction

To interact with the ChatBot functionality of the WAABOT-SDK, use the `intent` property from the instantiated `waabot` class. Here are some examples of available methods:

### Adding a New Keyword for Auto Replies

To add a new keyword and its corresponding auto reply, use the following code:

```javascript
const intent = waabot.intent;

const createdAutoReply = intent.add({
    title: "test auto reply title",
    keyword: "this keyword",
    reply: "Response",
    action: {}
});
```

### Finding and Deleting Auto Replies

To find and delete an auto reply by its ID, use the following code:

```javascript
// Find one auto reply
const foundAutoReply = await waabot.intent.getOne(createdAutoReply._id);

// Delete an auto reply
await waabot.intent.deleteOne(createdAutoReply._id);
```

## Settings Interaction

The WAABOT-SDK provides methods to interact with various settings. Here are some examples:

### Setting Default Replies

To set the default reply message, use the following code:

```javascript
const response = await waabot.settings.setDefaultReply({ default_msg: "{Hi|Hello} [name] I can't find a reply for your message." });
```

### Turning Off Group Replies

To turn off group auto replies, use the following code:

```javascript
const response = await waabot.settings.turnOffGroupAutoreplies();
```

### Turning On ChatBot

To turn on the ChatBot functionality, use the following code:

```javascript
const response = await waabot.settings.turnOnChatbot();
```

### Turning On Group Replies

To turn on group replies, use the following code:

```javascript
const response = await waabot.settings.turnOnGroupReplies();
```

### To Listen to Message events

To listen to message events, use the following code.

```javascript
const response = await waabot.settings.setWebhookUrl("https://webhook.site/ca0fa48b-aa9f-4614-8e11-fd916b4a8fad");
```

## Action Types

```
// Buttons
action: {
    send_button: [
        {
            "type": "replyButton",
            "title": "Reply this text (REPLY)"
        },
        {
            "type": "urlButton",
            "title": "Click me (URL)",
            "payload": "https://google.com"
        },
        {
            "type": "callButton",
            "title": "Click to call (CALL)",
            "payload": "918788889688"
        }
    ]
}

// Locations
"send_location": {
    "lat": "51.5074",
    "lng": "0.1278",
    "loc": "London!"
},

// send contact
"send_contact": {
    "name": "Banky",
    "number": "2348123343433"
},

// and the rest
"send_file": "attachment_id",
"send_photo": "attachment_id",
"send_notification": {
    "email": "mrbarnk1@gmail.com",
    "whatsapp_number": "2348179803743"
},
"add_to_group": "61b19e128f12f271545eec7c",
"start_survey": "survey_id"
```

These examples demonstrate how to interact with the ChatBot and various settings using the WAABOT-SDK. Please refer to the official documentation or reach out to the WAABOT support team for further details and additional functionalities.

Please note that the provided code snippets are examples and may require modifications based on your specific implementation and requirements.