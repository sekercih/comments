const yorumlar = [
  {
    id: 1,
    ad: "Ayşe yılmaz",
    meslek: "Developer",
    yorum: "Uygulamayı çok beğendim...",
    resim:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
  },
  {
    id: 2,
    ad: "İsmail Can",
    meslek: "Tester",
    yorum: "Uygulama çok zor.",
    resim:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
  },
  {
    id: 3,
    ad: "Canan Can",
    meslek: "Grafiker",
    yorum: "Tebrikler çok başarılı",
    resim:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
  },
  {
    id: 4,
    ad: "Melis Gel",
    meslek: "Stajer",
    yorum: "Geliştirilmesi gerekiyor.",
    resim:
      "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
  },
];
let index = 0;

const img = document.querySelector(".img");
const isim = document.querySelector(".isim");
const meslek = document.querySelector(".meslek");
const yorum = document.querySelector(".yorum");

const ileri = document.querySelector(".ileri");
const geri = document.querySelector(".geri");
const rastgele = document.querySelector(".random");
degistir(index);

function degistir(index) {
  img.src = yorumlar[index].resim;
  isim.innerHTML = yorumlar[index].ad;
  meslek.innerHTML = yorumlar[index].meslek;
  yorum.innerHTML = yorumlar[index].yorum;
}
degistir(index);

ileri.onclick = arttir;
geri.onclick = azalt;

function arttir() {
  index++;

  if (index == yorumlar.length) {
    index = 0;
  }
  degistir(index);
}

function azalt() {
  index--;

  if (index < 0) {
    index = yorumlar.length - 1;
  }
  degistir(index);
}
const resimci = [
  "https://images.unsplash.com/photo-1583692331507-fc0bd348695d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cG9ydHJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1587148760132-32c339a88983?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBvcnRyZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",

  "https://images.unsplash.com/photo-1589461387574-fa8b7da1306e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBvcnRyZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",

  "https://images.unsplash.com/photo-1562755454-36557c40b18d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHBvcnRyZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",

  "https://images.unsplash.com/photo-1616098055249-3a594c1df11c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fHBvcnRyZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
];
const randomresim = Math.floor(Math.random() * resimci.length);

const ekle = document.querySelector(".ekle");

ekle.onclick = fonks;

function fonks() {
  const isimgir = document.querySelector(".isimgir").value;
  const meslekgir = document.querySelector(".meslekgir").value;
  const yorumgir = document.querySelector(".yorumgir").value;
  let resimgir = document.querySelector(".img").src;
  resimgir = resimci[randomresim];
  console.log(resimgir);

  let yeniYorum = {
    ad: isimgir,
    meslek: meslekgir,
    yorum: yorumgir,
    resim: resimgir,
  };

  yorumlar.push(yeniYorum);
  degistir(yorumlar.length - 1);

  document.querySelector(".sonuc").innerHTML = "YORUMUNUZ EKLENDI";
}
