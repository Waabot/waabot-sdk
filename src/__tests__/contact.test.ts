import { chat, waabot } from "./whatsapp.test"
let createdContact: any;

test("Get Contacts", async () => {
    createdContact = await waabot.contact.getAll()
})


test("Create Contact", async () => {
    createdContact = await waabot.contact.add({
        name: chat.displayName,
        number: "1234556677",
        group_id: "64a00ec7c5e487d95dcb0d5c"
    })
})

test("Find Created Contact", async () => {
    await waabot.contact.getOne(createdContact._id);
})


test("Delete Created contact", async () => {
    await waabot.contact.deleteOne(createdContact._id);
})

