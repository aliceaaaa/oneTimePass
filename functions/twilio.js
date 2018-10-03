const twilio = require("twilio");

const accountSid = "AC3ec88f950abeb21f92998d12f8fd5366";
const authToken = "dcddcb7a04ab82f8d00eed3fdd5f3a32";

module.exports = new twilio.Twilio(accountSid, authToken);
