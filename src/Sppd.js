const { Buttons, MessageMedia } = require("whatsapp-web.js");

class Sppd {
  static menuUtama() {
    return new Buttons(
      "SPPD adalah kependekan dari Surat Perintah Perjalanan Dinas\n\n" +
        "Tujuan dari SPPD adalah untuk memberikan persetujuan secara resmi kepada karyawan atau pegawai untuk melakukan perjalanan dinas, serta memberikan informasi tentang detail perjalanan seperti tanggal, waktu, tujuan, anggaran, dan alokasi biaya selama perjalanan.\n",
      [{ body: "Pengajuan SPPD" }],
      "Layanan SPPD",
      "Silahkan klik tombol Pengajuan di bawah untuk mengajukan SPPD atau Ketik *Menu* untuk kembali ke Menu Utama"
    );
  }

  static pengajuanSppd() {
    return (
      "*Pengajuan SPPD*\n\n" +
      "Untuk Mengajukan SPPD, terdapat beberapa persyaratan yang harus dipenuhi oleh karyawan atau pegawai yang akan melakukan perjalanan dinas. Beberapa persyaratan umum yang mungkin dibutuhkan antara lain :\n\n" +
      "1. Melengkapi Formulir yang disediakan.\n" +
      "2. Melampirkan Surat Perintah.\n" +
      // "3. Menyertakan bukti reservasi transportasi dan penginapan.\n",
      "3. Jika melakukan Reservasi Transportasi atau Penginapan harus menyertekan buktinya.\n" +
      "\nSilahkan akses link berikut untuk mulai mengisi Formulir pengajuan SPPD https://docs.wwebjs.dev/index.html"
    );
  }

  // static pengajuanSppd() {
  //   return new Buttons(
  //     "Untuk Mengajukan SPPD, terdapat beberapa persyaratan yang harus dipenuhi oleh karyawan atau pegawai yang akan melakukan perjalanan dinas. Beberapa persyaratan umum yang mungkin dibutuhkan antara lain :\n\n" +
  //       "1. Melengkapi Formulir yang disediakan.\n" +
  //       "2. Melampirkan Surat Perintah.\n" +
  //       //     // "3. Menyertakan bukti reservasi transportasi dan penginapan.\n",
  //       "3. Jika melakukan Reservasi Transportasi atau Penginapan harus menyertekan buktinya.\n",
  //     [
  //       {
  //         body: "Pengajuan SPPD",
  //         // url: "https://forms.gle/VvcViFcBKZdbKpys7",
  //       },
  //     ],
  //     "Pengajuan SPPD",
  //     "Silahkan klik tombol Link di bawah untuk mulai mengisi Formulir pengajuan SPPD atau Ketik *Menu* untuk kembali ke Menu Utama"
  //   );
  // return new Buttons(
  //   "test",
  //   [
  //     // { body: "Test", id: "test-1" },
  //     { body: "Test 2 Call", url: "+9198xxxx" },
  //     { body: "Test 3 URL", url: "https://www.google.com/" },
  //   ],
  //   "title",
  //   "footer"
  // );
  // }
}

module.exports = Sppd;
