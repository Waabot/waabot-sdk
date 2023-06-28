import config from "../constant/testconstant";
import Whatsapp from "../whatsapp.class"

const whatsapp = new Whatsapp(config.accessToken, config.refreshToken)
const chatId = "2349048988056";
const chat = { chatId, fullname: "Bankole Emmanuel", displayName: "Bankole Emmanuel", organization: "Organization", phoneNumber: chatId };
const message = "This messages, how messages sent!";

test('Get Whatsapp Instances', async () => {
  expect((await whatsapp.getInstances()).status).toBe(true)
});



test('Setup Whatsapp', async () => {
  expect(whatsapp.setWhatsapp({ session_id: "464c3391-dee7-4206-ad13-d75ffb7498a0", access_token: "0b375583-b9c7-4a86-b95c-7e5064326778" })).toBe(true)
});

// test('Initialize Whatsapp', async () => {
//   expect((await whatsapp.initializeWhatsapp()).status).toBe(true)
// });

test('Get Whatsapp Info', async () => {
  // console.log(await whatsapp.getInstanceInfo())
  expect((await whatsapp.getInstanceInfo()).status).toBe(true)
});

// test('Initialize Whatsapp', async () => {
//   // console.log(await whatsapp.getInstanceInfo())
//   const whatsappStatus = await whatsapp.initializeWhatsapp()
//   console.log(whatsappStatus)
//   expect((whatsappStatus).status).toBe(true)
// });

test('Send Text Message', async () => {
  // console.log((await whatsapp.sendTextMessages({ chatId, message })))
  expect((await whatsapp.sendTextMessages({ chatId, message })).status).toBe(true)
});


test('Send List Message', async () => {
  expect((await whatsapp.sendListMessage({
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
  })).status).toBe(true)
});

test('Send Contact Message', async () => {
  expect((await whatsapp.sendContact({
    chatId, vcard: {
      fullName: chat.fullname,
      displayName: chat.displayName,
      organization: chat.organization,
      phoneNumber: chat.phoneNumber,
    }
  })).status).toBe(true)
});
