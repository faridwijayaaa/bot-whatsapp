const { Buttons } = require("whatsapp-web.js");

function menuAwal() {
  return new Buttons(
    "Selamat Datang DiPelayanan SDM",
    [{ body: "Restitusi" }, { body: "Layanan SPPD" }, { body: "Aturan SDM" }],
    "Header Menu Awal",
    "Footer Menu Awal"
  );
}

module.exports = { menuAwal };
