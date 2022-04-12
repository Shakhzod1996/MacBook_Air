let arr = [
  {
    id: 1,
    name: "MacBook Air 13-inchM",
    ram: 8,
    xotira: [
      {
        xotira: "256GB",
        price: "12 497 000 sum",
      },

      {
        xotira: "512GB",
        price: "15 066 000 sum",
      },
    ],
    ranglar: ["TILLA RANG", "KUMUSH RANG", "KOSMIK KULRANG"],
  },

  {
    id: 2,
    name: "MacBook Air 13-inchM",
    ram: 16,
    xotira: [
      {
        xotira: "256GB",
        price: "16 935 000 sum sum",
      },

      {
        xotira: "512GB",
        price: "19 270 500 sum",
      },

      {
        xotira: "1TR",
        price: "20 438 500 sum",
      },
    ],
    ranglar: ["TILLA RANG", "KUMUSH RANG", "KOSMIK KULRANG"],
  },
];



// ? Adding to Place
// ?Adding RAM

let rightSec = document.querySelector('.right-sec')

  rightSec.innerHTML += `
  <div>
  <h1>${arr[0].name} <br>M!/${arr[0].ram}/${arr[0].xotira[0].xotira} Gold</h1>
  <div class="Ram">
    <h5>Ram</h5>
    <button class="ram-btn active">${arr[0].ram}GB</button>
    <button class="ram-btn">${arr[1].ram}GB</button>
  </div>

  
  <div class='xotira-main'>
  <h5 style="margin-top: 30px;">Xotira Hajmi</h5>
    <div class="xotira">
      <button class="active">${arr[0].xotira[0].xotira}</button>
      <button>${arr[0].xotira[1].xotira}</button>
    </div>

    <h5 class="rang">Ranglar</h5>
    <div class="ranglar">
      <button class="active">
        <div class="tilla"></div>
        ${arr[0].ranglar[0]}
      </button>
  
      <button>
        <div class="kumush"></div>
        ${arr[0].ranglar[1]}
      </button>
  
      <button>
        <div class="kosmik"></div>
        ${arr[0].ranglar[2]}
      </button>
    </div>
  
    <div class="soni">
      <button>+</button>
      <p>1</p>
      <button>-</button>
    </div>
    <div class="narxi">
      ${arr[0].xotira[0].price}
    </div>

  </div>
  
  <div class="savatga-qushish">
    <button class="savat">Savatga qushish</button>
    <button>Taqqoslash</button>
  </div>
</div>
  `


let ramBtn = document.querySelectorAll(".ram-btn");
let xotiraMain = document.querySelector(".xotira-main");

ramBtn[0].addEventListener("click", () => {
  ramBtn[0].classList.add("active");
  ramBtn[1].classList.remove("active");
});

ramBtn[1].addEventListener("click", () => {
  xotiraMain.innerHTML = ''
  ramBtn[1].classList.add("active");
  ramBtn[0].classList.remove("active");

});
