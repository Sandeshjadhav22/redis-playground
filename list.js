const client = require("./client");

async function init() {
  await client.lpush("messages", 1);
  const Result = await client.rpop("messages");
  console.log("Result--> ", Result);
}

init();
