const qrcode = require("qrcode-terminal");
const { Client, LocalAuth, MessageMedia } = require("whatsapp-web.js");

const { menuAwal } = require("./src/menus");
const Restitusi = require("./src/Restitusi");
const Sppd = require("./src/Sppd");

const client = new Client({
  authStrategy: new LocalAuth(),
});

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on("authenticated", () => {
  console.log("AUTHENTICATED");
});

client.on("ready", () => {
  console.log("Client is ready!");
});

isSent = false;
let sessions = {};

client.on("message", async (msg) => {
  const chat = await msg.getChat();
  console.log(`Message from ${msg.from}: ${msg.body}`);

  if (!isSent) {
    //await chat.sendMessage(menuAwal());
    chat.sendMessage(menuAwal());
    isSent = true;
  } else if (msg.body.toLocaleLowerCase() == "menu") {
    chat.sendMessage(menuAwal());
  }

  if (!sessions[msg.from]) {
    sessions[msg.from] = msg.from;
    console.log(`Session ${msg.from} telah disimpan.`);
    console.log(sessions);
  }

  switch (msg.body.toLowerCase()) {
    // Restitusi Menu
    case "restitusi":
      chat.sendMessage(Restitusi.menuUtama());
      break;
    case "informasi syarat reimburse":
      chat.sendMessage(Restitusi.menuPertama());
      break;
    case "daftar faskes jawa timur":
      chat.sendMessage(Restitusi.menuKedua());
      break;
    case "1.1 gigi":
      chat.sendMessage(Restitusi.menuGigi());
      break;
    case "1.2 rawat jalan":
      chat.sendMessage(Restitusi.menuRawatJalan());
      break;
    case "1.3 rawat inap":
      chat.sendMessage(Restitusi.menuRawatInap());
      break;
    case "1.4 kacamata":
      chat.sendMessage(Restitusi.menuKacamata());
      break;

    // SPPD Menu
    case "layanan sppd":
      chat.sendMessage(Sppd.menuUtama());
      break;
    case "pengajuan sppd":
      chat.sendMessage(Sppd.pengajuanSppd());
      isSent = false;
      break;
    case "unduh pdf":
      chat.sendMessage(Restitusi.faskesPDF());
      isSent = false;
      break;
    default:
      break;
  }

  console.log(`isSent: ${isSent}`);
});

client.initialize();
