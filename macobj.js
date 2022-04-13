const macObj = {
  name: "Mac Book Air 13-inch",
  ram: [
    {
      ramSize: 8,
      active: true,
      memory: [
        {
          no: 1,
          active: true,
          size: 256,
          price: 12000000,
        },
        {
          no: 2,
          active: true,
          size: 512,
          price: 15000000,
        },
      ],
    },
    {
      ramSize: 16,
      active: false,
      memory: [
        {
          active: false,
          size: 256,
          price: 17000000,
        },
        {
          active: false,
          size: 512,
          price: 20000000,
        },
        {
          active: false,
          size: 1024,
          price: 21000000,
        },
      ],
    },
  ],
  colors: [
    {
      name: "Gold",
      img: "",
    },

    {
      name: "Silver",
      img: "",
    },

    {
      name: "Gray",
      img: "",
    },
  ],
};

// ?Creating Ram size
let ramN = document.querySelector(".Ram");
let xotira = document.querySelector(".xotira");
let ranglar = document.querySelector(".ranglar");
let colorBtns = document.querySelector(".ranglar button");

macObj.ram.forEach((item) => {
  if (item.active == true) {
    ramN.innerHTML += `
      <button class="ram-btn active" id=${item.ramSize}>${item.ramSize}GB</button>
      `;
  } else {
    ramN.innerHTML += `
      <button class="ram-btn" id=${item.ramSize}>${item.ramSize}GB</button>
      `;
  }

  item.memory.forEach((it) => {
    if (it.active == true) {
      xotira.innerHTML += `
        <button class="gb8-btn" id=${it.size}>${it.size} GB</button>
      `;
    }
  });
});

// ?Price Change
let gb8Btns = document.querySelectorAll(".gb8-btn");
let narxi = document.querySelector(".narxi");


macObj.ram.forEach((it) => {
  gb8Btns.forEach((item) => {
    item.addEventListener("click", (e) => {
      let target = e.currentTarget;
      gb8Btns.forEach((last) => {
        last.classList.remove("active");
        if (target.id == 256) {
          
          it.memory.forEach(som => {
            if (som.no == 1) {
              narxi.innerHTML = som.price
            }
          })
        } else if (target.id == 512) {
          it.memory.forEach(som => {
            narxi.innerHTML = ''
            if (som.no == 2) {
              narxi.innerHTML = som.price
            }
          })
        }
      });
    });
  });
});

let rumBtn = document.querySelectorAll(".ram-btn");

macObj.ram.forEach((item) => {
  rumBtn.forEach((itemBtn) => {
    itemBtn.addEventListener("click", (e) => {
      rumBtn.forEach((item2) => {
        item2.classList.remove("active");
        if (e.currentTarget.id == 16) {
          xotira.innerHTML = "";
          item.memory.forEach((it) => {
            if (it.active == false) {
              xotira.innerHTML += `
              <button class="ram-btn">${it.size} GB</button>
              `;
            }
          });
          e.currentTarget.classList.add("active");
        } else if (e.currentTarget.id == 8) {
          e.currentTarget.classList.add("active");
          xotira.innerHTML = "";
          item.memory.forEach((it) => {
            if (it.active == true) {
              xotira.innerHTML += `
              <button class="">${it.size} GB</button>
            `;
            }
          });
        }
      });
    });
  });
});


// ?Btn +-
let count = 1;
let plus = document.querySelector('.plus')
let minus = document.querySelector('.minus')
let num = document.querySelector('.num')

plus.addEventListener('click', () => {
  count++
  num.innerHTML = count
})

minus.addEventListener('click', () => {
  count--
  num.innerHTML = count
  if (count == 0) {
    minus.setAttribute('disabled', 'disabled')
  } else if(count < 0){
    minus.removeAttribute('disabled')
  }
})