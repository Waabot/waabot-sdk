import { waabot } from "./whatsapp.test"
let createdAutoReply: any;
test("Create Auto Reply", async () => {
    createdAutoReply = await waabot.intent.add({
        title: "test auto reply title",
        keyword: "this keyword",
        reply: "Response",
        action: {}
    })
})

test("Find Created Auto reply", async () => {
    await waabot.intent.getOne(createdAutoReply._id);
})


test("Delete Created Auto reply", async () => {
    await waabot.intent.deleteOne(createdAutoReply._id);
})

