import { waabot } from "./whatsapp.test"
let createdContactGroup: any;

test("Get Contact Groups", async () => {
    // createdContactGroup = await waabot.contactGroup.getAll()
})


test("Create Contact Group", async () => {
    createdContactGroup = await waabot.contactGroup.add({
        title: "Contact Group Title",
        is_default: false
    })
})

test("Find Created Contact Group", async () => {
    await waabot.contactGroup.getOne(createdContactGroup._id);
})


test("Delete Created Contact Group", async () => {
    await waabot.contactGroup.deleteOne(createdContactGroup._id);
})

