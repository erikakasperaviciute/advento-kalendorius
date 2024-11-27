document.addEventListener("DOMContentLoaded", () => {
  const days = document.querySelectorAll(".day");
  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modal-title");
  const modalText = document.getElementById("modal-text");
  const modalSubtext = document.getElementById("modal-subtext");
  const modalLink = document.getElementById("modal-link");
  const modalSveikinimas = document.getElementById("modal-sveikinimas");
  const closeModal = document.querySelector(".close");

  const dayData = {
    1: {
      title: "Gruodžio 1",
      text: "Dovanų kuponas parduodamas kasos lange spaudžiant F4.",
      subtext:
        "Plačiau apie dovanų kupono pardavimą laisvalaikio skaitiniams rasite paspaudę mygtuką žemiau.",
      link: "https://limedikauab2.lightning.force.com/lightning/articles/Knowledge/Dovanų-kupono-pardavimas",
    },
    2: {
      title: "Gruodžio 2",
      text: "Dovanų kuponas gali būti ne tik popierinis, klientas gali ateiti ir su skaitmeniniu dovanų kuponu. Jo brūkšninį kodą klientas turi pateikti telefono ekrane.",
      subtext:
        "Plačiau apie dovanų kupono panaudojimą laisvalaikio skaitiniams rasite paspaudę mygtuką žemiau.",
      link: "https://limedikauab2.lightning.force.com/lightning/articles/Knowledge/Dovanų-kupono-panaudojimas",
    },
    3: {
      title: "Gruodžio 3",
      text: "Klientui atėjus su virtualia lojalumo kortele vietoj F12 spauskite CTRL+Q , tuomet programa iškvies kortelės skanavimo langą apeinant banko terminalą ir ant jo nereikės spausti raudono mygtuko :)",
      subtext:
        "Plačiau apie lojalumus ir apie programėlės panaudojimą laisvalaikio skaitiniams rasite paspaudę mygtuką žemiau.",
      link: "https://limedikauab2.lightning.force.com/lightning/articles/Knowledge/Mylimiausia-programėlės-panaudojimo-procesas-kasoje",
    },
    4: {
      title: "Gruodžio 4",
      text: "Išmetus eilutes iš elektroninio užsakymo, jas įtraukti galite paspaudę du kartus su pele ant apačioje atsiradusios eilutės, įvedę kiekį ir paspausdami Enter.",
      subtext:
        "Plačiau apie elektroninius užsakymus laisvalaikio skaitiniams rasite paspaudę mygtuką žemiau.",
      link: "https://www.google.lhttps://limedikauab2.lightning.force.com/lightning/articles/Knowledge/Darbas-su-e-užsakymais",
    },
    5: {
      title: "Gruodžio 5",
      text: "Norint lengviau atrasti trukdantį pajamuotis dokumentą, lengviausia tai daryti per meniu punktus: Dokumentai>Visi>Pirkimai/Dokumentai>Visi>Pardavimai ir paspaudus dešinį pelės klavišą nusifiltruoti senesnius nei 7 d. dokumentus.",
      subtext:
        "Plačiau apie dokumentus, trukdančius pajamuotis laisvalaikio skaitiniams rasite paspaudę mygtuką žemiau.",
      link: "https://limedikauab2.lightning.force.com/lightning/articles/Knowledge/Nesiunčia-prekių-į-sandėlį",
    },
    6: {
      title: "Gruodžio 6",
      text: "Programoje Space (tarpo) klavišo pagalba galima užpildyti datos langelį - einamos dienos data. Mokėjimo sumos langelį - suma be grąžos.",
      subtext: "",
      link: "",
    },
    7: {
      title: "Gruodžio 7",
      text: "Jei užstrigo Kasos ar Vaistų programa ir nepavyksta jos uždaryti per kryžiuką - nebūtina perkrauti kompiuterio. Programą galite išjungti per Task manager (Užduočių tvarkytuvas). Jį išsikviesti galite ant start juostos spaudžiant dešinį pelės klavišą arba klaviatūroje vienu metu spausdami klavišus Ctrl+Alt+Delete.",
      subtext: "Plačiau apie tai rasite paspaudę mygtuką žemiau.",
      link: "https://limedikauab2.lightning.force.com/lightning/articles/Knowledge/Kaip-uždaryti-užstrigusią-programą-be-restart-o",
    },
    8: {
      title: "Gruodžio 8",
      text: "Jei pakeitus kasos juostą kasa nespausdina kvito, galimai užstrigo ankstesnis kvitas, pabandykite jį prasukti spaudžiant Servisas > Anuliuoti kvitą.",
      subtext: "Plačiau apie tai rasite paspaudę mygtuką žemiau.",
      link: "https://limedikauab2.lightning.force.com/lightning/articles/Knowledge/Kasa-nespausdina-kvito",
    },
    9: {
      title: "Gruodžio 9",
      text: "Jei nepavyksta atsidaryti pirkėjo lango - patikrinkite ar įjungtas kasos aparatas (dega tik žalia lemputė) ir ar nepasibaigusi kasos juosta.",
      subtext: "",
      link: "",
    },
    10: {
      title: "Gruodžio 10",
      text: 'Jei brūkšninių kodų skaitytuvas staiga nustojo skenuoti prekes ir tik pypsi - patikrinkite ar klaviatūroje dega "Num lock" lemputė - ar klaviatūra rašo skaičius, jei ne - paspauskite mygtuką "Num lock".',
      subtext: "",
      link: "",
    },
    11: {
      title: "Gruodžio 11",
      text: "Jei kameros transliuoja juodą vaizdą ir jų nepavyksta pasileisti, patikrinkite ar naršyklės lange yra mėlyna e raidelė kairėje pusėje.",
      subtext:
        "Plačiau kaip susitvarkyti nerodančias kameras galite rasti paspaudę mygtuką žemiau.",
      link: "https://limedikauab2.lightning.force.com/lightning/articles/Knowledge/Veiksmai-kai-vaizdo-kameros-transliuoja-juodą-vaizdą",
    },
    12: {
      title: "Gruodžio 12",
      text: 'Jei kasos programoje užsidega raudonas šauktukas - atkreipkite dėmesį - tai reiškia, kad turite išduotų e-receptų be išdavimo numerio. Paspauskite F7 ir pažymėję tokį receptą spauskite mygtuką "Pakartotinis išdavimas",  jei receptas prisidavė - šaunu, jei ne - nedelsiant kreipkitės pagalbos į IT skyrių, nes kol receptas be išdavimo numerio, tol klientas pagal jį gali pirkti vaistus kitur.',
      subtext: "",
      link: "",
    },
    13: {
      title: "Gruodžio 13",
      text: "Jei kasos programoje užsidega geltonas šauktukas - atkreipkite dėmesį - tai reiškia, kad turite nepasirašytų arba vaistininko nepatvirtintų receptų. Receptus rekomenduojame pasirašyti dienos bėgyje. O patvirtinti, kai tik į vaistinę ateina vaistininkas, bet ne vėliau nei mėnuo po išdavimo.",
      subtext: "",
      link: "",
    },
    14: {
      title: "Gruodžio 14",
      text: "Ar žinojote, kad nuo šiol kasos juostas galite rasti ant darbalaukio? Nuorodoje  EKJ_EINAMAS - rasite einamos dienos kasos kvitus. Nuorodoje EKJ_VISI - rasite kasos juostų kopijas pagal datas.",
      subtext: "",
      link: "",
    },
    15: {
      title: "Gruodžio 15",
      text: "Visus nuolaidų kuponus reikia skanuoti per mygtuką KUP.",
      subtext:
        "Kaip naudoti nuolaidų kuponą ir lojalumo kortelę kartu rasite paspaudę mygtuką žemiau.",
      link: "https://limedikauab2.lightning.force.com/lightning/articles/Knowledge/Nuolaidų-kupono-panaudojimas-kasoje",
    },
    16: {
      title: "Gruodžio 16",
      text: 'Ar žinojote, kad yra galimybė nustatyti etiketės kainos įsigaliojimo datą rankiniu būdu, nespausdinant etiketės? Įrašote datą, kuriai turi įsigalioti kaina (kaina nurodytai datai), uždedate varneles ant reikiamų prekių ir spaudžiate dešinį klavišą. Iš kontekstinio meniu pasirenkate“ Fiksuoti naują kainą be spausdinimo“. Rezultate prie prekės stulpelio „Įsigaliojimo kaina“ įsirašo data, kuri buvo nurodyta „Kainos nurodytai datai" laukelyje, taip pat „Dabartinė et. kaina“ prilyginama „Nurodytos dt. kaina“ reikšmei. Taip pat šis veiksmas įsirašo į etikečių spausdinimo istoriją.',
      subtext:
        "Plačiau apie etikečių spausdinimą laisvalaikio skaitiniams galite rasti paspaudę mygtuką žemiau.",
      link: "https://limedikauab2.lightning.force.com/lightning/articles/Knowledge/Etikeciu-spausdinimas",
    },
    17: {
      title: "Gruodžio 17",
      text: "Jei gavote prekę, esančią rezerviniame pirkime, iš skirtingų vaistinių dalimis ir programoje rezervas nepasidengia, atlikite prekės perpajamavimą Vaistų programoje: Dokumentai>Likučių keitimas. Nurašykite prekę iš kelių eilučių ir užpajamuokite visą kiekį vienoje eilutėje.",
      subtext: "Plačiau apie tai pasiskaityti galite paspaudę mygtuką žemiau.",
      link: "https://limedikauab2.lightning.force.com/lightning/articles/Knowledge/Nepasidengia-rezervinis-pirkimas",
    },
    18: {
      title: "Gruodžio 18",
      text: "Jei reikiamos prekės nerandate palyginimų lange, uždėję varnelę ant rankinio parinkimo sąrašą galite praplėsti ir su Ctrl+f nusifiltruoti reikiamą veikliąją medžiagą.",
      subtext: "Plačiau apie tai galite paskaityti paspaudę mygtuką žemiau.",
      link: "https://limedikauab2.lightning.force.com/lightning/articles/Knowledge/Rankinis-e-recepto-analogų-praplėtimas",
    },
    19: {
      title: "Gruodžio 19",
      text: 'Ar žinojote, kad norint padaryti prekės grąžinimą nereceptinei prekei, nereikia atšaukinėti pardavimo? Užtenka susirasti reikiamą kvitą, įeiti į jį, varnele pažymėti norimą grąžinti prekę ir paspaudus dešinį pelės klavišą, pasirinkti "Formuoti grąžinimą".',
      subtext:
        "Plačiau apie tai laisvalaikio skaitiniams galite rasti paspaudę mygtuką žemiau.",
      link: "https://limedikauab2.lightning.force.com/lightning/articles/Knowledge/Kvitų-grąžinimas",
    },
    20: {
      title: "Gruodžio 20",
      text: "Ar žinojote, kad mokėjimo lange galite pakeisti mokėjimo būdą be klaviatūros? Norėdami pereiti iš mokėjimo parinkimo taškelio „Grynais“ į „Kortele“, paspauskite klaviatūroje Ctrl+K, analogiškai jei norite pereiti į Mišrų mokėjimą spauskite Ctrl+M.",
      subtext:
        "Plačiau apie tai laisvalaikio skaitiniams galite rasti paspaudę mygtuką žemiau.",
      link: "",
    },
    21: {
      title: "Gruodžio 21",
      text: 'Norint pakoreguoti kliento duomenis kvitų sąskaitoje faktūroje, kai ji jau perkelta (raudona), pirmiausia turite ant jos atsistoję paspausti dešinį pelės klavišą ir pasirinkti "Atšaukti".',
      subtext: "",
      link: "https://limedikauab2.lightning.force.com/lightning/articles/Knowledge/Kvitų-sąskaitos-faktūros-išrašymas-koregavimas",
    },
    22: {
      title: "Gruodžio 22",
      text: "Ar žinote, kad galite sužinoti kokia bus kompensuojamo vaisto priemoka kai neturite jo sandėlio likučiuose? Tiesiog paspauskite pirkėjo lange F10 ir išsirinkite veikliąją medžiagą.",
      subtext: "Plačiau apie tai galite paskaityti paspaudę mygtuką žemiau.",
      link: "https://limedikauab2.lightning.force.com/lightning/articles/Knowledge/Kompensuojamo-vaisto-priemokos-peržiūra",
    },
    23: {
      title: "Gruodžio 23",
      text: "Nusimušus kasos dokumentų numeracijai nebūtina kiekvieną kartą taisyti numeriukus. Tai galite pasidaryti per Servisas>Nustatymai pasikoreguodami dokumento skaitliuką.",
      subtext: "Plačiau apie tai galite paskaityti paspaudę mygtuką žemiau.",
      link: "https://limedikauab2.lightning.force.com/lightning/articles/Knowledge/Peršokę-kasos-pajamų-ar-išlaidų-orderių-numeriai",
    },
    24: {
      title: "Mielos vaistininkės,",
      text: "Artėjant šventėms norime nuoširdžiai padėkoti už jūsų kasdienį darbą, atsidavimą ir rūpestį, kuris nepaprastai svarbus kiekvienam mūsų. Jūs esate tas pamatas, ant kurio remiasi mūsų sveikata ir gerovė, o jūsų profesionalumas ir šiluma kuria tikrą magiją kiekvienam apsilankančiam vaistinėje. IT skyrius sveikina jus su artėjančiomis Kalėdomis ir Naujaisiais metais! Linkime, kad šios šventės būtų kupinos džiaugsmo, ramybės ir šilumos. Tegul ateinantys metai atneša dar daugiau sėkmės, naujų iššūkių ir laimingų akimirkų, tiek darbe, tiek asmeniniame gyvenime.",
      subtext: "Su šventėmis!",
      sveikinimas: "IT skyrius",
      link: "",
    },
  };

  const today = new Date().getDate();

  const openedDays = JSON.parse(localStorage.getItem("openedDays")) || [];

  openedDays.forEach((dayNumber) => {
    const day = document.querySelector(`.day[data-day='${dayNumber}']`);
    if (day) {
      openDay(day, dayNumber);
    }
  });

  days.forEach((day) => {
    const dayNumber = parseInt(day.dataset.day);
    if (dayNumber <= today) {
      day.addEventListener("click", () => {
        if (dayData[dayNumber]) {
          const { title, text, subtext, link, sveikinimas } =
            dayData[dayNumber];
          modalTitle.textContent = title;
          modalText.textContent = text;
          modalSubtext.textContent = subtext;
          modalSveikinimas.textContent = sveikinimas;

          if (link && link.trim() !== "") {
            modalLink.href = link;
            modalLink.style.display = "block";
          } else {
            modalLink.style.display = "none";
          }

          modal.style.display = "flex";
        }
        if (!day.classList.contains("opened")) {
          openDay(day, dayNumber);

          openedDays.push(dayNumber);
          localStorage.setItem("openedDays", JSON.stringify(openedDays));
        }
      });
    } else {
      day.style.pointerEvents = "none";
      day.style.opacity = "0.5";
    }
  });
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  function openDay(day, dayNumber) {
    day.classList.add("opened");
    day.innerHTML = `<span>${dayNumber}</span><img src="./gift.png">`;
  }
});
