// "// Shared config for the invitation landing page

// import portrait from "../assets/images/bapa.jpeg"
import husband from "../assets/images/bapa.jpeg";
import wife from "../assets/images/mamah.jpeg";
import heroBg from "../assets/images/bg2.png"
export const INVITATION = {
  pilgrim: {
    husband: "Nandang Sutarna bin Bpk.Eman",
    wife: "Ika Fitriah binti Bpk.H.Ading Koswara",
    address: "Kp.cembul 001/006 Des.Rancamanyar Kec.Baleendah Kab.Bandung",
    parents: {
      husband: "Bpk. Eman",
      wife: "Bpk. H. Ading Koswara",
    },
  },
  event: {
    title: "Tasyakuran Haji",
    subtitle: "Walimatus Safar",
    tagline:
      "Sebagai ungkapan rasa syukur atas keberangkatan ke Tanah Suci",
    // date in ISO — far enough to compute countdown
    dateISO: "2026-04-26T10:00:00+07:00",
    dateText: "Ahad, 26 April 2026",
    timeText: "Pukul 09:30 WIB — Selesai",
    location: "Kediaman H Ading Koswara(Alm)",
    address: "Kediaman H.Ading Koswara(Alm) Kp.cembul 001/006 Des.Rancamanyar Kec.Baleendah Kab.Bandung",
    mapsEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2026.1669341701536!2d107.58985969537937!3d-6.987525257757809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e9001aa1129d%3A0x1302e29f84a9bb06!2sRumah%20Bandung!5e0!3m2!1sid!2sid!4v1776619159971!5m2!1sid!2sid",
    // dressCode: "Busana Muslim (Nuansa Putih / Krem / Hijau)",
  },
  rundown: [
    { time: "09.30", title: "Pembukaan", desc: "Dipimpin oleh Ust.Dede Mulyana" },
    { time: "10.15", title: "Pembacaan Ayat Suci Al-Qur'an", desc: "Tilawah dari Qari undangan" },
    // { time: "10.30", title: "Sambutan Keluarga", desc: "Ungkapan syukur" },
    { time: "10.30", title: "Tausiyah", desc: "Dipimpin oleh Ust.Kamaludin" },
    { time: "11.30", title: "Penutup & Doa penutup", desc: "Dipimpin oleh Ust.Supriatna" },
    { time: "11.30", title: "Mushafahah", desc: "Santap siang bersama undangan" },
  ],
  // Placeholder Islamic nasheed (royalty-free instrumental)
  audioUrl:
    "https://cdn.pixabay.com/download/audio/2022/11/17/audio_febc508520.mp3?filename=islamic-meditation-background-124335.mp3",
};

export const GALLERY = [
  {
    url: "https://images.unsplash.com/photo-1770786106021-52580470e31e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwzfHxtZWNjYSUyMGthYWJhJTIwcGlsZ3JpbXxlbnwwfHx8fDE3NzY2MDk2NTF8MA&ixlib=rb-4.1.0&q=85",
    caption: "Tawaf di Ka'bah",
  },
  {
    url: "https://images.pexels.com/photos/29102893/pexels-photo-29102893.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    caption: "Pintu Ka'bah yang Mulia",
  },
  {
    url: "https://images.pexels.com/photos/34498854/pexels-photo-34498854.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    caption: "Lautan Jamaah di Mekkah",
  },
  {
    url: "https://images.unsplash.com/photo-1542562460-67f4b9aa9a25?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNTl8MHwxfHNlYXJjaHwyfHxpbmRvbmVzaWFuJTIwbXVzbGltJTIwZmFtaWx5JTIwZ2F0aGVyaW5nfGVufDB8fHx8MTc3NjYwOTY1MXww&ixlib=rb-4.1.0&q=85",
    caption: "Kehangatan Keluarga",
  },
];

export const IMAGES = {
  heroBg,
  husband,
  wife,
    // "https://static.prod-images.emergentagent.com/jobs/530620e5-5113-4f82-8757-1af68766575b/images/d815f9d9bf3fc47dff85b0e95c529e320e3b6602655d93d38084923206d022dc.png",
  patternCream:
    "https://static.prod-images.emergentagent.com/jobs/530620e5-5113-4f82-8757-1af68766575b/images/973df3fa01708752d7337a149e5938dd75ae7842fc1449ec063675c40e87e97e.png",
};
