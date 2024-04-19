const client = require('./client')

async function init() {
    // await client.set("msg:4","Hey from nodejs")
    await client.expire("msg:4",2)
    const result = await client.get("msg:4");
    console.log('Result -->',result);
}

init();