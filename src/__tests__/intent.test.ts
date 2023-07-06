import { waabot } from "./whatsapp.test"
let createdAutoReply: any;

test("Get Intents", async () => {
    createdAutoReply = await waabot.intent.getAll()
})

test("Create Auto Reply", async () => {
    createdAutoReply = await waabot.intent.add({
        title: "test auto reply title",
        keyword: "this keyword",
        reply: "Response",
        action: {}
    })
})

test("Create Auto Reply With Button", async () => {
    const createdActionAutoReply = await waabot.intent.add({
        title: "test auto reply title",
        keyword: "this keyword",
        reply: "Response",
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
    })

    await waabot.intent.deleteOne(createdActionAutoReply._id);
})

test("Find Created Auto reply", async () => {
    await waabot.intent.getOne(createdAutoReply._id);
})


test("Delete Created Auto reply", async () => {
    await waabot.intent.deleteOne(createdAutoReply._id);
})

