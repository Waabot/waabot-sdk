import { waabot } from "./whatsapp.test";

test('Setup Default Message', async () => {
    const response = await waabot.settings.setDefaultReply({ default_msg: "{Hi|Hello} [name] I can't find a reply for your message." });
});

test('Turn Off Whatsapp', async () => {
    const response = await waabot.settings.turnOffChatbot();
});

test('Turn Off Group Replies', async () => {
    const response = await waabot.settings.turnOffGroupAutoreplies();
});

test('Turn On Whatsapp', async () => {
    const response = await waabot.settings.turnOnChatbot();
});


test('Turn on Group Replies', async () => {
    const response = await waabot.settings.turnOnGroupReplies();
});


test('Set Webhook Url', async () => {
    const response = await waabot.settings.setWebhookUrl("https://webhook.site/ca0fa48b-aa9f-4614-8e11-fd916b4a8fad");
});
