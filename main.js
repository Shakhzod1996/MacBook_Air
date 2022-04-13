// ?Creating Ram size
let ramN = document.querySelector(".Ram");
let xotira = document.querySelector(".xotira");
let ranglar = document.querySelector(".ranglar");
let colorBtns = document.querySelector(".ranglar button");
let narxi = document.querySelector(".narxi");

narxi.innerHTML = 0;
// ?Asosiy 8 16 32 GB buttonlarni yasash
function addBtnRun(macObj) {
  ramN.innerHTML = "";
  xotira.innerHTML = "";
  macObj.ram.forEach((item) => {
    let btnRam = document.createElement("button");
    btnRam.classList.add("btns");
    btnRam.id = item.ramSize;
    if (item.active) {
      btnRam.classList.add("active");
      item.memory.forEach((element) => {
        let btnXotira = document.createElement("button");
        btnXotira.classList.add("btns");
        btnXotira.id = element.size;
        btnXotira.innerHTML = `${element.size}GB`;
        if (element.active) {
          btnXotira.classList.add("active");
        }
        xotira.appendChild(btnXotira);
      });
    }
    btnRam.innerHTML = `${item.ramSize}GB`;
    ramN.appendChild(btnRam);
  });
}

addBtnRun(macObj);

// ? Ram Buttonlardagi bosilgandagi holat
function ramBtn(macObj) {
  ramN.addEventListener("click", (e) => {
    macObj.ram.forEach((element) => {
      element.active = false;
      if (element.ramSize == e.target.id) {
        element.active = true;
        console.log(element.active);
      }
    });
    addBtnRun(macObj);
    priceTotal(macObj);
  });
}
ramBtn(macObj);

// ?Narx bilan ishlash
function priceTotal(obj) {
  obj.ram.forEach((item) => {
    if (item.active) {
      item.memory.forEach((element) => {
        if (element.active) {
          narxi.innerHTML = element.price;
        }
      });
    }
  });
}

// ?XOtira Buttonlariga bosilganlikdagi holat
function xotireBtn(macObj) {
  xotira.addEventListener("click", (e) => {
    macObj.ram.forEach((element) => {
      element.memory.forEach((item) => {
        item.active = false;
        if (item.size == e.target.id) {
          item.active = true;
        }
      });
    });
    addBtnRun(macObj);
    priceTotal(macObj);
  });
}
xotireBtn(macObj);

// ?Rasmlar bilan ishlash
let SlideImgContainer = document.querySelector(".img-slide");
let botomImage = document.querySelector(".bottom-im-slider");

let imgCount = 0
let imgCom = 'img'
macObj.colors.forEach((item) => {
  if (item.active) {
    item.img.forEach((element, index, main) => {
      imgCount++
      SlideImgContainer.innerHTML += `
        <img src=${element} alt='img'>
      `;
      botomImage.innerHTML += `
      <img src=${element} id=${imgCom + imgCount} alt='img'>
      `
    });
  }
});

let imgsId1 = document.querySelector('#img1')
let imgsId2 = document.querySelector('#img2')
let imgsId3 = document.querySelector('#img3')
let imgsId4 = document.querySelector('#img4')
let imgsId5 = document.querySelector('#img5')



imgsId1.classList.add('active')
// ?Moving Slider
botomImage.addEventListener('click', (e) => {
  if (e.target.id == 'img2') {
    SlideImgContainer.style.transform = 'translateX(-350px)'
    imgsId2.classList.add('active')
    imgsId1.classList.remove('active')
    imgsId3.classList.remove('active')
    imgsId4.classList.remove('active')
    imgsId5.classList.remove('active')
  } else if (e.target.id == 'img3') {
    SlideImgContainer.style.transform = 'translateX(-700px)'
    imgsId2.classList.remove('active')
    imgsId1.classList.remove('active')
    imgsId3.classList.add('active')
    imgsId4.classList.remove('active')
    imgsId5.classList.remove('active')
  } else if (e.target.id == 'img4') {
    SlideImgContainer.style.transform = 'translateX(-1050px)'
    imgsId2.classList.remove('active')
    imgsId1.classList.remove('active')
    imgsId3.classList.remove('active')
    imgsId4.classList.add('active')
    imgsId5.classList.remove('active')
  } else if (e.target.id == 'img5') {
    SlideImgContainer.style.transform = 'translateX(-1400px)'
    imgsId2.classList.remove('active')
    imgsId1.classList.remove('active')
    imgsId3.classList.remove('active')
    imgsId4.classList.remove('active')
    imgsId5.classList.add('active')
  } else {
    SlideImgContainer.style.transform = 'translateX(0)'
    imgsId2.classList.remove('active')
    imgsId1.classList.add('active')
    imgsId3.classList.remove('active')
    imgsId4.classList.remove('active')
    imgsId5.classList.remove('active')
  }
})


// ? Rangli Buttonlarni joylash
let btnsContainer = document.querySelector(".btns-color");
let count1 = 0;
let sum = "one";

function ranglarBtn(macObj) {
  macObj.colors.forEach((item) => {
    count1++;

    let div = document.createElement("div");
    div.id = sum + count1;
    let colorBtn = document.createElement("button");
    colorBtn.classList.add("btns");
    colorBtn.innerHTML = item.name;

    colorBtn.appendChild(div);
    btnsContainer.appendChild(colorBtn);
  });
}
ranglarBtn(macObj);

// ?Btn +-
let count = 1;
let plus = document.querySelector(".plus");
let minus = document.querySelector(".minus");
let num = document.querySelector(".num");

plus.addEventListener("click", () => {
  count++;
  num.innerHTML = count;
  minus.removeAttribute("disabled", "disabled");
});

minus.addEventListener("click", () => {
  count--;
  num.innerHTML = count;
  if (count == 0) {
    minus.setAttribute("disabled", "disabled");
  }
});
