import { SendTypeEnum } from "../interfaces/chatbot/broadcast.interface";
import { chat, message, waabot } from "./whatsapp.test"
let createdAutoReply: any;

test("Get Broadcasts", async () => {
    createdAutoReply = await waabot.broadcast.getAll()
})


test("Create Broadcast", async () => {
    createdAutoReply = await waabot.broadcast.add({
        send_type: SendTypeEnum.individual,
        to: "2348179803743",
        message: { text: message },
    })
})

test("Find Created Auto reply", async () => {
    await waabot.broadcast.getOne(createdAutoReply._id);
})


test("Delete Created Auto reply", async () => {
    await waabot.broadcast.deleteOne(createdAutoReply._id);
})

