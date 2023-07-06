import config from "../constant/testconstant";
import { Waabot } from "../classes/index.class"
export const waabot = new Waabot(config.accessToken, config.refreshToken)
const chatId = "2349048988056";
const whatsappConfig = { session_id: "a1c91084-fa2e-43b8-8d52-3d98f65a0495", access_token: "8d09556f-d169-42b8-b52c-08d9a9026018" }
// { session_id: "464c3391-dee7-4206-ad13-d75ffb7498a0", access_token: "0b375583-b9c7-4a86-b95c-7e5064326778" }
export const chat = { chatId, fullname: "Bankole Emmanuel", displayName: "Bankole Emmanuel", organization: "Organization", phoneNumber: chatId };
export const message = "This messages, how messages sent!";

test('Get Whatsapp Instances', async () => {
  expect((await waabot.whatsapp.getAll())).not.toBeNull()
});

test('Create New Whatsapp', async () => {
  // await waabot.whatsapp.createNew("My Test Bot")
})


test('Setup Whatsapp', async () => {
  expect(waabot.setConfig(whatsappConfig)).toBe(true)
});


// test('Initialize Whatsapp', async () => {
//   expect((await whatsapp.initializeWhatsapp()).status).toBe(true)
// });

test('Get Whatsapp Info', async () => {
  // console.log(await whatsapp.getInstanceInfo())
  expect((await waabot.whatsapp.getInfo())).not.toBeNull()
});

// test('Initialize Whatsapp', async () => {
//   // console.log(await whatsapp.getInstanceInfo())
//   const whatsappStatus = await whatsapp.initializeWhatsapp()
//   console.log(whatsappStatus)
//   expect((whatsappStatus).status).toBe(true)
// });

test('Send Text Message', async () => {
  // console.log((await whatsapp.sendTextMessages({ chatId, message })))
  expect((await waabot.whatsapp.sendTextMessages({ chatId, message }))).not.toBeNull()
});


test('Send List Message', async () => {
  expect((await waabot.whatsapp.sendListMessage({
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
  }))).not.toBeNull()
});

test('Send Contact Message', async () => {
  expect((await waabot.whatsapp.sendContact({
    chatId, vcard: {
      fullName: chat.fullname,
      displayName: chat.displayName,
      organization: chat.organization,
      phoneNumber: chat.phoneNumber,
    }
  }))).not.toBeNull()
});
