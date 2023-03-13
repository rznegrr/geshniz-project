let cart = {
  items: [],
  total: 0,
};

const products = [
  {
    id: 1,
    name: "بمب برگر",
    image: "./img/brger.jpg",
    price: "200,000",
    offPrice: "300,000",
    calcPrice: 200000,
    offSell: "%7",
    detail: "همبرگر + ژامبون گوشت + ژامبون مرغ + قارچ + سس فرانسوی + نوشابه",
    category: "Burger",
  },
  {
    id: 2,
    name: "کباب نگینی",
    image: "./img/kbbngini.jpg",
    price: "300,000",
    calcPrice: 300000,
    offPrice: "",
    offSell: "",
    detail: " 2 سیخ کوبیده نگینی + 2 سیخ جوجه + ماست + سالاد + نوشابه",
    category: "Barbecue",
  },
  {
    id: 3,
    name: "چلو مرغ",
    image: "./img/morq.jpg",
    calcPrice: 250000,
    price: "250.000",
    offSell: "",
    offPrice: "",
    category: "Barbecue",
    detail: "2 عدد ران مرغ + 250 گرم سینه مرغ + سالاد + نوشابه + دوغ",
  },
  {
    id: 4,
    name: "سینی کباب",
    image: "./img/sinikbb.jpg",
    calcPrice: 500000,
    price: "500.000",
    offPrice: "600,000",
    category: "Barbecue",
    offSell: "%15",
    detail: "6 سیخ کوبیده + 6 سیخ جوجه + 6 گوجه + پیاز + ماست",
  },
  {
    id: 5,
    name: "کباب بناب",
    image: "./img/bonab.jpg",
    price: "280.000",
    calcPrice: 280000,
    offSell: "",
    category: "Barbecue",
    offPrice: "",
    detail:
      "دو سیخ کباب بناب + دوغ + سالاد + برنج ایرانی تازه + نوشابه + 2 سیخ گوجه",
  },
  {
    id: 6,
    name: "فیله مرغ سخاری",
    image: "./img/morqsokhari.jpg",
    calcPrice: 310000,
    price: "310.000",
    offSell: "",
    category: "Barbecue",
    offPrice: "",
    detail: "5 تکه سینه مرغ سوخاری + سالاد + سبزی",
  },
  {
    id: 7,
    name: "مخصوص سر آشپز",
    image: "./img/mkhsoscheaf.jpg",
    calcPrice: 370000,
    price: "370.000",
    offSell: "",
    category: "Barbecue",
    offPrice: "",
    detail: "سیخ کباب مخصوص سر آشپز + 8 سیخ گوجه + ماست و 8 نوشیدنی رایگان",
  },
  {
    id: 8,
    name: "کباب تابه ای",
    image: "./img/tabei.jpg",
    calcPrice: 245000,
    price: "245.000",
    offPrice: "270.000",
    category: "Barbecue",
    offSell: "%5",
    detail:
      "4 عدد کباب تابه ای + هر کباب 250 گرم گوشت گوسفندی + سس مخصوص سر آشپز",
  },
  {
    id: 9,
    name: "سالاد سزار",
    image: "./img/sezar.jpg",
    calcPrice: 80000,
    price: "88.000",
    offPrice: "",
    category: "Appetizer",
    offSell: "",
    detail: "کاهو + سینه مرغ + قارچ + نون باگت + سس مخصوص",
  },
  {
    id: 10,
    name: "کشک و بادمجان",
    image: "./img/kashk-bademjan-photokade-com-1.jpg",
    price: "82.000",
    calcPrice: 82000,
    offPrice: "",
    category: "Appetizer",
    offSell: "",
    detail: "بادمجان + سیر + پیازداغ + کشک",
  },
  {
    id: 11,
    name: "پان اسپانیا",
    image: "./img/pan.jpg",
    calcPrice: 60000,
    price: "60.000",
    offSell: "",
    category: "Dessert",
    offPrice: "",
    detail: "شیر + گردو + خامه + کره + موز",
  },
  {
    id: 12,
    name: "پاناکوتا",
    image: "./img/pomegranate-panna-cotta.jpg",
    offSell: "",
    calcPrice: 40000,
    offPrice: "",
    category: "Dessert",
    price: "40.000",
    detail: "شیر + خامه + ژلاتین + سس میوه",
  },
  {
    id: 13,
    name: "نوشابه خانواده",
    image: "./img/1611832941coca-cola.jpg",
    calcPrice: 20000,
    price: "20.000",
    offSell: "",
    category: "Beverages",
    offPrice: "",
    detail: "نوشابه 1.5 لیتری خانواده",
  },
];

//? data hunt for menu tabs
addEvent("[data-hunt]", "click", navMenu);
function navMenu() {
  if(this.classList.contains("active"))return
  let buttons = document.querySelectorAll("[data-hunt]");
  buttons.forEach(e=>e.classList.remove("active"))
  this.classList.add("active")
  let baiter = document.querySelectorAll("[data-bait]");
  baiter.forEach((n) => n.classList.add("hidden"));
  let hunter = this.getAttribute("data-hunt");
  let target = document.querySelectorAll(`[data-bait="${hunter}"]`);
  target.forEach((item)=>{
    item.classList.remove("hidden");
  })
  if(hunter === "all"){
    renderProducts()
  }
}


//? show products
const renderProducts = () => {
  const productDiv = document.querySelector(".showProduct");
  productDiv.innerHTML = "";
  products.map((items, index) => {
    productDiv.innerHTML += `
    <div
      class="md:col-span-6 col-span-12 2xl:col-span-4 lg:mt-5 mr-5 mt-5 r-handy md:mx-3 box-border lg:h-40" data-bait=${items.category}
    >
    <div class="grid grid-cols-12 bg-white py-2 shadow-md rounded-xl lg:h-36 lg:w-80 box-border md:pr-3 relative">
      <div
        class="col-span-4 lg:col-span-3 lg:w-20 lg:h-20 mt-5 w-24 h-24 md:w-28 md:my-2 lg:mt-5 md:mr-2 mx-auto product-img"
      >
        <img
          src=${items.image}
          class="rounded-xl showLarger"
          alt="prodcut-image"
        />
      </div>
      <div
        class="col-span-8 md:col-span-12 lg:col-span-9 md:pr-2 product-info lg:mr-4 mt-5 ml-2"
      >
      <span class="offsell h-6 text-xs text-white md:top-5 lg:top-7 hidden">${items.offSell}</span>
        <div>
          <h5 class="font-semibold cursor-pointer">${items.name}</h5>
          <p
            class="font-light text-gray-400 text-sm mt-2 truncate pro-detail"
          >
            ${items.detail}
          </p>
        </div>
        <div class="flex justify-between mt-5">
          <span class="text-sm w-24 special">
            ${items.price} تومان 
          </span>
          <div
            class="overflow-hidden flex add-cart-box justify-between ml-1"
            >
            <button class="plus cursor-pointer"
            onclick="addToCart(${index},this)"
            >
              <svg
                fill="none"
                height="22"
                viewBox="0 0 18 27"
                width="22"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  fill="var(--mainOrange)"
                  height="11.8182"
                  rx="1.18182"
                  width="2.36364"
                  x="11.8182"
                  y="7.09094"
                ></rect>
                <rect
                  fill="var(--mainOrange)"
                  height="11.8182"
                  rx="1.18182"
                  transform="rotate(90 18.9091 11.8182)"
                  width="2.36364"
                  x="18.9091"
                  y="11.8182"
                ></rect>
              </svg>
            </button>
            <input
              class="input-basket text-center"
              data-useritem="21"
              id="myinput"
              readonly="readonly"
              type="number"
              value="0"
            />
            <button class="minus cursor-pointer"
            onclick="removeFromCart('${items.name}',this)">
              <svg
                fill="none"
                height="22"
                viewBox="0 0 22 22"
                width="22"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  fill="var(--mainOrange)"
                  height="10"
                  rx="1"
                  transform="rotate(90 16 10)"
                  width="2"
                  x="16"
                  y="10"
                ></rect>
              </svg>
            </button>
          </div>
        </div>
       </div>
      </div>`;

    });
};

const renderCartItems = () => {
  const cartDiv = document.querySelector("#cartContent");
  const totalPriceEl = document.querySelector("#totalPrice");
  cartDiv.innerHTML = "";
  let totalPrice = 0;

  cart.items.forEach((item) => {
    totalPrice += item.total;
    cartDiv.innerHTML += `
    <div
       class="bg-white py-2 shadow-md rounded-xl lg:h-36 xl:w-60 box-border md:pr-1 relative mb-1"
     >
    <div
    class="md:pr-4 product-info mt-5 ml-2"
     >  
    <div>
      <p class="font-semibold cursor-pointer text-right">
      ${item.name}
      </p>
      <p class="font-light text-gray-400 text-xs mt-3 truncate">
       ${item.detail}
      </p>
    </div>
    <div class="flex justify-between mt-6">
      <span class="text-sm special flex flex-col">
        ${item.price} تومان
      </span>
      <div class="ml-2">${item.qty}</div>
  </div>
  </div>`;
  });

  totalPriceEl.innerHTML = `${totalPrice} تومان`;
};

//? plus btn add in basket
const addToCart = (productIndex, elem) => {
  elem.nextElementSibling.value++;
  elem.closest("div").classList.add("addWidth");

  const product = products[productIndex];
  let existingProduct = false;

  let newCartItems = cart.items.reduce((state, item) => {
    if (item.name === product.name) {
      existingProduct = true;
      console.log(totalPrice);
      const newItems = {
        ...item,
        qty: item.qty + 1,
        total: (item.qty + 1) * item.calcPrice,
      };

      return [...state, newItems];
    }

    return [...state, item];
  }, []);

  if (!existingProduct) {
    newCartItems.push({
      ...product,
      qty: 1,
      total:product.calcPrice,
    });
  }

  cart = {
    ...cart,
    items: newCartItems,
  };
  renderCartItems();
};

//? minus btn remove from basket
const removeFromCart = (productName, elem) => {
  elem.previousElementSibling.value--;
  if (elem.previousElementSibling.value == 0) {
    elem.closest("div").classList.remove("addWidth");
  }

  let newCartItems = cart.items.reduce((state, item) => {
    if (item.name === productName) {
      const newItems = {
        ...item,
        qty: item.qty - 1,
        total: (item.qty - 1) * item.calcPrice,
      };
      if (newItems.qty > 0) {
        return [...state, newItems];
      } else {
        return state;
      }
    }

    return [...state, item];
  }, []);

  cart = {
    ...cart,
    items: newCartItems,
  };

  renderCartItems();
};

renderProducts();
renderCartItems();

//? data give for panel tabs
addEvent("[data-want]", "click", panelmenu);
function panelmenu() {
  let baiter = document.querySelectorAll("[data-give]");
  baiter.forEach((n) => n.classList.add("hidden"));
  let hunter = this.getAttribute("data-want");
  let target = document.querySelector(`[data-give="${hunter}"]`);
  target.classList.remove("hidden");
}

//? show panel func
let panel = document.querySelector("[data-king]");
panel.addEventListener("click", showPanel);
function showPanel() {
  let king = this.getAttribute("data-king");
  let minister = this.getAttribute("data-minister");
  document.querySelector(`[data-slave = "${king}"]`).classList.toggle(minister);
}

//? hide panel func
let hidePanel = document.querySelector("[data-kill]");
hidePanel.addEventListener("click", removePanel);
function removePanel() {
  let kill = this.getAttribute("data-kill");
  let minister = this.getAttribute("data-minister");
  document.querySelector(`[data-slave = "${kill}"]`).classList.toggle(minister);
}

//* function
function addEvent(selector, event, callback) {
  let element = document.querySelectorAll(selector);
  element.forEach(function (value) {
    value.addEventListener(event, callback);
  });
}
