"use strict";

const langEl = document.querySelector(".language-bar");
const link = document.querySelectorAll(".language");
const navbarTit = document.querySelector(".navbar-title");
const btnEnter = document.querySelector(".btn-toenter");
const menuNav = document.querySelector(".menu-nav");
const menuLink = document.querySelectorAll(".menu-link");
const h3teg = document.querySelectorAll(".shop_title");
const shopPrag = document.getElementById("shop_prag");
const textTitle = document.getElementById("text_title_prag");
const textTitleDesc = document.getElementById("textTitleDesc");
const haadTitle = document.querySelector(".head_title");
const btnAll = document.querySelector(".btn-all");
const btnOn = document.querySelector(".btn-on");
const info = document.getElementById("info");

const data = {
  rus: {
    title: "NAMANGANLIKLAR 24",
    btnToEnter: "Войти",
    menu0: "Главное",
    menu1: "Интересное",
    menu2: "Экономика",
    menu3: "Политика",
    menu4: "Общество",
    menu5: "Технологии",
    menu6: "Спорт",
    menu7: "Культура",
    menu8: "Происшествия",
    menu9: "Наука",
    shoppingTitle0:
      "Кандидат на пост канцлера ФРГ Шольц назвал условия коалиционного соглашения",
    shoppingTitle1:
      "Ученые доказали экспериментальным путем пользу покровных культур",
    shoppingTitle2:
      "Baidu запустила публичный сервис роботакси Apollo Go в Шанхае",
    shoppingTitle3:
      "Стали известны ёмкости аккумуляторов всех моделей iPhone 13",
    shoppingTitle4:
      "Nature: ученые смогли доказать природное происхождение коронавируса SARS-CoV-2",
    shoppingTitle5:
      "Китайская марка JAC повысила цены на лифтбек и пикап в России",
    shoppingDesc:
      "Лидер Социал-демократической партии Германии (СДПГ) и кандидат на должность...",
    shppingParag: "ИА Красная Весна 15:55",
    news: "Хотите быть в курсе свежих новостей?  Включите уведомления!",
    btnOn: "Включит ",
    headTitle: "В мире",
    worldBigTitle:
      "Китайский Чунцин запустил чартерный рейс для студентов до Британии",
    worldBigDesc:
      "Чартерный рейс с 244 китайскими студентами вылетел из города центрального подчинения Чунцина на юго-западе Китая в британский Манчестер...",

    btnAll: "Показать ещё ",
    footerParag:
      "Воспроизводство, копирование, использование информации с сайта «NAMANGANLIKLAR24.UZ» возможно только с предварительного письменного разрешения редакции.",
  },
  uzb: {
    title: "NAMANGANLIKLAR 24",
    btnToEnter: "Kirish",
    menu0: "Asosiy",
    menu1: "Qiziqzrli",
    menu2: "Iqtisodiyot",
    menu3: "Siyosat",
    menu4: "Jamiyat",
    menu5: "Технологии",
    menu6: "Texnologiya",
    menu7: "Madaniyat",
    menu8: "Hodisalar",
    menu9: "Fan",
    shoppingTitle0:
      "Germaniya kansleri lavozimiga nomzod Scholz koalitsiya kelishuvi shartlarini chaqirdi",
    shoppingTitle1:
      "Olimlar qopqoqli ekinlarning foydasini eksperimental ravishda isbotladilar",
    shoppingTitle2:
      "Baidu kompaniyasi Shanxayda Apollo Go jamoat robotli taksi xizmatini ishga tushirdi",
    shoppingTitle3:
      "Barcha iPhone 13 modellarining akkumulyator sig‘imlari ma’lum bo‘ldi",
    shoppingTitle4:
      "Tabiat: olimlar SARS-CoV-2 koronavirusining tabiiy kelib chiqishini isbotlay olishdi",
    shoppingTitle5:
      "Xitoyning JAC brendi Rossiyada liftbek va pikap narxlarini oshirdi",
    shoppingDesc:
      "Germaniya Sotsial-demokratik partiyasi (SPD) rahbari va nomzodi...",
    shppingParag: "IA Qizil bahor 15:55",
    news: "Eng so'nggi yangiliklardan xabardor bo'lishni xohlaysizmi? Bildirishnomalarni yoqing!",
    btnOn: "Yoqiladi ",
    headTitle: "Dunyoda",
    worldBigTitle:
      "Xitoyning Chongqing shahrida talabalar uchun Britaniyaga charter reys yo‘lga qo‘yildi",
    worldBigDesc:
      "244 nafar xitoylik talaba boʻlgan charter reysi Xitoyning janubi-gʻarbidagi Chongqing markaziy hukumati shahridan Buyuk Britaniyaning Manchester shahriga joʻnab ketdi...",
    btnAll: "Ko'proq ko'rsatish ",
    footerParag:
      "«NAMANGANLIKLAR24.UZ» sayti maʼlumotlarini koʻpaytirish, nusxalash, foydalanish faqat tahririyatning yozma ruxsati bilan amalga oshiriladi.",
  },
};

link.forEach((el) => {
  el.addEventListener("click", () => {
    langEl.querySelector(".active").classList.remove("active");
    el.classList.add("active");

    const attr = el.getAttribute("language");
    navbarTit.textContent = data[attr].title;
    btnEnter.textContent = data[attr].btnToEnter;
    menuLink[0].textContent = data[attr].menu0;
    menuLink[1].textContent = data[attr].menu1;
    menuLink[2].textContent = data[attr].menu2;
    menuLink[3].textContent = data[attr].menu3;
    menuLink[4].textContent = data[attr].menu4;
    menuLink[5].textContent = data[attr].menu5;
    menuLink[6].textContent = data[attr].menu6;
    menuLink[7].textContent = data[attr].menu7;
    menuLink[8].textContent = data[attr].menu8;
    menuLink[9].textContent = data[attr].menu9;
    h3teg[0].textContent = data[attr].shoppingTitle0;
    h3teg[1].textContent = data[attr].shoppingTitle1;
    h3teg[2].textContent = data[attr].shoppingTitle2;
    h3teg[3].textContent = data[attr].shoppingTitle3;
    h3teg[4].textContent = data[attr].shoppingTitle4;
    h3teg[5].textContent = data[attr].shoppingTitle5;
    shopPrag.textContent = data[attr].shoppingDesc;
    textTitle.textContent = data[attr].worldBigTitle;
    textTitleDesc.textContent = data[attr].news;
    haadTitle.textContent = data[attr].headTitle;
    btnAll.textContent = data[attr].btnAll;
    btnOn.textContent = data[attr].btnOn;
    info.textContent = data[attr].footerParag;
  });
});
