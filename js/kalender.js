const bulanTahun = document.getElementById("bulanTahun");
const kalender = document.getElementById("kalender");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const todayBtn = document.getElementById("todayBtn");

let tanggalSekarang = new Date();

const namaBulan = [
  "Januari","Februari","Maret","April",
  "Mei","Juni","Juli","Agustus",
  "September","Oktober","November","Desember"
];

function renderKalender(){

  kalender.innerHTML = "";

  const tahun = tanggalSekarang.getFullYear();
  const bulan = tanggalSekarang.getMonth();

  bulanTahun.innerHTML = `${namaBulan[bulan]} ${tahun}`;

  const firstDay = new Date(tahun,bulan,1).getDay();
  const lastDate = new Date(tahun,bulan + 1,0).getDate();

  // KOSONG SEBELUM TANGGAL 1

  for(let i=0; i<firstDay; i++){

    const kosong = document.createElement("div");
    kosong.classList.add("tanggal","nonaktif");

    kalender.appendChild(kosong);
  }

  // TANGGAL

  for(let i=1; i<=lastDate; i++){

    const tanggal = document.createElement("div");
    tanggal.classList.add("tanggal");

    tanggal.innerHTML = i;

    // HARI INI

    const today = new Date();

    if(
      i === today.getDate() &&
      bulan === today.getMonth() &&
      tahun === today.getFullYear()
    ){
      tanggal.classList.add("active");
    }

    // EVENT CONTOH

    if(i === 6){

      tanggal.classList.add("event");

      tanggal.innerHTML += `
        <div class="event-box">
          13:00 • Suranto & Aprilia
        </div>
      `;
    }

    if(i === 16){

      tanggal.classList.add("event");

      tanggal.innerHTML += `
        <div class="event-box">
          08:00 • Jhonny & Arfa
        </div>
      `;
    }

    if(i === 23){

      tanggal.classList.add("event");

      tanggal.innerHTML += `
        <div class="event-box">
          09:00 • Risa & Desta
        </div>
      `;
    }

    kalender.appendChild(tanggal);
  }

}

renderKalender();

/* PREV */

prevBtn.addEventListener("click",()=>{

  tanggalSekarang.setMonth(
    tanggalSekarang.getMonth() - 1
  );

  renderKalender();

});

/* NEXT */

nextBtn.addEventListener("click",()=>{

  tanggalSekarang.setMonth(
    tanggalSekarang.getMonth() + 1
  );

  renderKalender();

});

/* TODAY */

todayBtn.addEventListener("click",()=>{

  tanggalSekarang = new Date();

  renderKalender();

});

//faq
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

  const question = item.querySelector(".faq-question");

  question.addEventListener("click",()=>{

    item.classList.toggle("active");

  });

});



//efek blur navbar
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

  if(window.scrollY > 50){

    navbar.classList.add("scrolled");

  }else{

    navbar.classList.remove("scrolled");

  }

});

function toggleSearch(){

  const popup =
  document.getElementById("searchPopup");

  if(popup.style.display === "block"){
    popup.style.display = "none";
  }else{
    popup.style.display = "block";
  }

}

function searchText(){

  let keyword =
  document.getElementById("searchInput")
  .value
  .toLowerCase();

  let content =
  document.body.innerText
  .toLowerCase();

  if(content.includes(keyword)){

    alert(
      "Kata '" +
      keyword +
      "' ditemukan di halaman."
    );

  }else{

    alert(
      "Kata '" +
      keyword +
      "' tidak ditemukan."
    );

  }

}

function toggleMenu(){

    const menu =
    document.getElementById("mobileMenu");

    menu.classList.toggle("show");

}