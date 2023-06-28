# WAABOT-SDK

### Create Credentials
Goto https://waabot.com/ and create an account, use the credentials to create a session.

### How to Create session

```
Endpoint: https://api.waabot.com/api/v1/sessions
{
    "email": "account email",
    "password": "password"
}
```

Save the session to .env, and use the response `accessToken, refreshToken` respectevly from the response to initialize the whatsapp.

## How to Initialize the Whatsapp

```
const whatsapp = new Whatsapp(config.accessToken, config.refreshToken);
const chatId = "15417543010";
const chat = { chatId, fullname: "Chat Name", displayName: "Display Name", organization: "Organization", phoneNumber: chatId };
const message = "This messages, how messages sent!";
```
## How to create a whatsapp instance
```
await whatsapp.createNewWhatsapp()
```
Response
```
{
    "status": true,
    "message": "Whatsapp created successfully!",
    "data": {
        "settings": {
            "bot_name": "WhatsappClient (bot_number)",
            "status": "CONNECTED",
            "bot_timezone": "Africa/Harare",
            "bot_lang": "en",
            "default_msg": "{Hi|Hello} [name] your message has no keyword here.",
            "actions": {
                "send_default_msg": true,
                "reply_group_msgs": true,
                "reply_unread_msgs": true,
                "reply_msgs": true,
                "multi_device": false,
                "send_webhook": false
            },
            "active_days": {
                "monday": true,
                "tuesday": true,
                "wednesday": true,
                "thursday": true,
                "friday": true,
                "saturday": true,
                "sunday": true
            },
            "active_hours": {
                "from": "always",
                "to": "always"
            },
            "access_token": "0184-28a5-439a-a1cd-fc6f"
        },
        "_id": "61c08cdf2ff357329471bbb1",
        "user_id": "61bbdbe3087d744b748535ff",
        "session_id": "2ad8-07c9-447b-994d-eb8b",
        "createdAt": "2021-12-20T14:02:07.472Z",
        "updatedAt": "2021-12-20T14:02:07.472Z",
        "__v": 0
    }
}
```
## How to configue the whatsapp instance.
```
whatsapp.setWhatsapp({ session_id: "464c3391-dee7-4206-ad13-d75ffb7498a0", access_token: "0b375583-b9c7-4a86-b95c-7e5064326778" })
```

## How to Send Text Messages
```
await whatsapp.sendTextMessages({ chatId, message })
```

## How to Send a List Message

```
await whatsapp.sendListMessage({
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
  })
```

## How to send contact
```
await whatsapp.sendContact({
    chatId, vcard: {
      fullName: chat.fullname,
      displayName: chat.displayName,
      organization: chat.organization,
      phoneNumber: chat.phoneNumber,
    }
})
```
