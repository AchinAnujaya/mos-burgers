const itemListWithCategory = [
  {
    code: "B1001",
    name: "Classic Burger (Large)",
    price: 750.0,
    discount: "-",
    category: "Burgers",
  },
  {
    code: "B1002",
    name: "Classic Burger (Regular)",
    price: 1500.0,
    discount: "15%",
    category: "Burgers",
  },
  {
    code: "B1003",
    name: "Turkey Burger",
    price: 1600.0,
    discount: "-",
    category: "Burgers",
  },
  {
    code: "B1004",
    name: "Chicken Burger (Large)",
    price: 1400.0,
    discount: "-",
    category: "Burgers",
  },
  {
    code: "B1005",
    name: "Chicken Burger (Regular)",
    price: 800.0,
    discount: "20%",
    category: "Burgers",
  },
  {
    code: "B1006",
    name: "Cheese Burger (Large)",
    price: 1000.0,
    discount: "-",
    category: "Burgers",
  },
  {
    code: "B1007",
    name: "Cheese Burger (Regular)",
    price: 600.0,
    discount: "-",
    category: "Burgers",
  },
  {
    code: "B1008",
    name: "Bacon Burger",
    price: 650.0,
    discount: "15%",
    category: "Burgers",
  },
  {
    code: "B1009",
    name: "Shawarma Burger",
    price: 800.0,
    discount: "-",
    category: "Burgers",
  },
  {
    code: "B1010",
    name: "Olive Burger",
    price: 1800.0,
    discount: "-",
    category: "Burgers",
  },
  {
    code: "B1012",
    name: "Double-Cheese Burger",
    price: 1250.0,
    discount: "20%",
    category: "Burgers",
  },
  {
    code: "B1013",
    name: "Crispy Chicken Burger (Regular)",
    price: 1200.0,
    discount: "-",
    category: "Burgers",
  },
  {
    code: "B1014",
    name: "Crispy Chicken Burger (Large)",
    price: 1600.0,
    discount: "10%",
    category: "Burgers",
  },
  {
    code: "B1015",
    name: "Paneer Burger",
    price: 900.0,
    discount: "-",
    category: "Burgers",
  },
  {
    code: "B1016",
    name: "Crispy Chicken Submarine (Large)",
    price: 2000.0,
    discount: "-",
    category: "Submarines",
  },
  {
    code: "B1017",
    name: "Crispy Chicken Submarine (Regular)",
    price: 1500.0,
    discount: "-",
    category: "Submarines",
  },
  {
    code: "B1018",
    name: "Chicken Submarine (Large)",
    price: 1800.0,
    discount: "3%",
    category: "Submarines",
  },
  {
    code: "B1019",
    name: "Chicken Submarine (Regular)",
    price: 1400.0,
    discount: "-",
    category: "Submarines",
  },
  {
    code: "B1020",
    name: "Grinder Submarine",
    price: 2300.0,
    discount: "-",
    category: "Submarines",
  },
  {
    code: "B1021",
    name: "Cheese Submarine",
    price: 2200.0,
    discount: "-",
    category: "Submarines",
  },
  {
    code: "B1022",
    name: "Double Cheese n Chicken Submarine",
    price: 1900.0,
    discount: "16%",
    category: "Submarines",
  },
  {
    code: "B1023",
    name: "Special Horgie Submarine",
    price: 2800.0,
    discount: "-",
    category: "Submarines",
  },
  {
    code: "B1024",
    name: "MOS Special Submarine",
    price: 3000.0,
    discount: "-",
    category: "Submarines",
  },
  {
    code: "B1025",
    name: "Steak Fries (Large)",
    price: 1200.0,
    discount: "-",
    category: "Fries",
  },
  {
    code: "B1026",
    name: "Steak Fries (Medium)",
    price: 600.0,
    discount: "-",
    category: "Fries",
  },
  {
    code: "B1027",
    name: "French Fries (Large)",
    price: 800.0,
    discount: "-",
    category: "Fries",
  },
  {
    code: "B1028",
    name: "French Fries (Medium)",
    price: 650.0,
    discount: "-",
    category: "Fries",
  },
  {
    code: "B1029",
    name: "French Fries (Small)",
    price: 450.0,
    discount: "-",
    category: "Fries",
  },
  {
    code: "B1030",
    name: "Sweet Potato Fries (Large)",
    price: 600.0,
    discount: "-",
    category: "Fries",
  },
  {
    code: "B1031",
    name: "Chicken n Cheese Pasta",
    price: 1600.0,
    discount: "15%",
    category: "Pasta",
  },
  {
    code: "B1032",
    name: "Chicken Penne Pasta",
    price: 1700.0,
    discount: "-",
    category: "Pasta",
  },
  {
    code: "B1033",
    name: "Ground Turkey Pasta Bake",
    price: 2900.0,
    discount: "10%",
    category: "Pasta",
  },
  {
    code: "B1034",
    name: "Creamy Shrimp Pasta",
    price: 2000.0,
    discount: "-",
    category: "Pasta",
  },
  {
    code: "B1035",
    name: "Lemon Butter Pasta",
    price: 1950.0,
    discount: "-",
    category: "Pasta",
  },
  {
    code: "B1036",
    name: "Tagliatelle Pasta",
    price: 2400.0,
    discount: "1%",
    category: "Pasta",
  },
  {
    code: "B1037",
    name: "Baked Ravioli",
    price: 2000.0,
    discount: "1%",
    category: "Pasta",
  },
  {
    code: "B1038",
    name: "Fried Chicken (Small)",
    price: 1200.0,
    discount: "-",
    category: "Chicken",
  },
  {
    code: "B1039",
    name: "Fried Chicken (Regular)",
    price: 2300.0,
    discount: "10%",
    category: "Chicken",
  },
  {
    code: "B1040",
    name: "Fried Chicken (Large)",
    price: 3100.0,
    discount: "5%",
    category: "Chicken",
  },
  {
    code: "B1041",
    name: "Hot Wings (Large)",
    price: 2400.0,
    discount: "-",
    category: "Chicken",
  },
  {
    code: "B1042",
    name: "Devilled Chicken (Large)",
    price: 900.0,
    discount: "-",
    category: "Chicken",
  },
  {
    code: "B1043",
    name: "BBQ Chicken (Regular)",
    price: 2100.0,
    discount: "-",
    category: "Chicken",
  },
  {
    code: "B1044",
    name: "Pepsi (330ml)",
    price: 990.0,
    discount: "5%",
    category: "Beverages",
  },
  {
    code: "B1045",
    name: "Coca-Cola (330ml)",
    price: 1230.0,
    discount: "-",
    category: "Beverages",
  },
  {
    code: "B1046",
    name: "Sprite (330ml)",
    price: 1500.0,
    discount: "3%",
    category: "Beverages",
  },
  {
    code: "B1047",
    name: "Mirinda (330ml)",
    price: 850.0,
    discount: "7%",
    category: "Beverages",
  },
];

const cartList = [
  {
    code: "B1001",
    name: "Classic Burger (Large)",
    price: 750.0,
    discount: "-",
    category: "Burgers",
    quantity: 1,
  },
  {
    code: "B1002",
    name: "Classic Burger (Regular)",
    price: 1500.0,
    discount: "15%",
    category: "Burgers",
    quantity: 1,
  },
  {
    code: "B1003",
    name: "Turkey Burger",
    price: 1600.0,
    discount: "-",
    category: "Burgers",
    quantity: 1,
  },
];

//------------------------FUNCTIONS RELATED TO STORE HTML----------------------------
function createItemCard(item) {
  const imageUrl = "placeholder.jpg";
  return `
    <div class="col-lg-3 col-md-4 mb-3 col-sm-6">
      <div class="card">
        <div class="card-body">
          <img src="${imageUrl}" class="card-img-top" alt="${item.name}">
          <h6 class="card-title">${item.name}</h6>
          <h6 class="card-title">${item.code}</h6>
          <p class="card-text">Category: ${item.category}</p>
          <p class="card-text">Price: ${item.price.toFixed(2)}</p>
          <p class="card-text">Discount: ${item.discount}</p>
          <a href="#" class="btn btn-dark">Add</a>
          <a href="#" class="btn btn-secondary">Edit</a>
        </div>
      </div>
    </div>
  `;
}
function showItems() {
  const itemContainer = document.getElementById("itemContainer");

  // Clear previous items
  itemContainer.innerHTML = "";

  itemListWithCategory.forEach((item) => {
    const cardHtml = createItemCard(item);
    itemContainer.innerHTML += cardHtml;
  });
}

//********************************************************************************** */
//------------------------FUNCTIONS RELATED TO ORDER HTML----------------------------

const tableHeader = `
  <thead>
    <tr>
      <th>Code</th>
      <th>Name</th>
      <th>Price</th>
      <th>Discount</th>
      <th>Qty</th>
    </tr>
  </thead>
`;

function generateRowHTML(item) {
  return `
    <tr>
      <td>${item.code}</td>
      <td>${item.name}</td>
      <td>${item.price}</td>
      <td>${item.discount}</td>
      <td>
        <input type="number" min="0" max="99" value="1" class="form-control" style="width: 60px;">
      </td>
      <td>
        <button class="btn btn-success btn-sm" onclick="addItem('${item.code}')">Add</button>
      </td>
    </tr>
  `;
}

// Function to generate the entire item list table
function generateItemListTable(itemList) {
  const rowsHTML = itemList.map(generateRowHTML).join("");

  return `
    <table class="table table-striped">
      ${tableHeader}
      <tbody>
        ${rowsHTML}
      </tbody>
    </table>
  `;
}
// search button
function orderDisplay() {
  var itemListContainer = document.getElementById("display-table");
  itemListContainer.innerHTML = generateItemListTable(itemListWithCategory);
}
//======================================================================================
const cartHeader = `
  <thead>
    <tr>
      <th>#</th>
      <th>Code</th>
      <th>Name</th>
      <th>Price</th>
      <th>. % </th>
      <th>Qty</th>
      <th>Total</th>
      <th></th>
    </tr>
  </thead>
`;

function generateCartRowHTML(cartItem, index) {
  return `
    <tr>
     <td>${index + 1}</td>
      <td>${cartItem.code}</td>
      <td>${cartItem.name}</td>
      <td>${cartItem.price}</td>
      <td>${cartItem.discount}</td>
      <td>${cartItem.quantity}</td> 
      <td>${cartItem.price * cartItem.quantity}</td> 
      <td>
      <button class="btn btn-danger btn-sm" onclick="deleteCartItem(${index})">

        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
</svg>
        </button>
      </td>
    </tr>
  `;
}

function generateCartTable(cartList) {
  const cartRowsHTML = cartList.map(generateCartRowHTML).join(""); // Corrected variable name

  return `
    <table class="table table-striped">
      ${cartHeader}
      <tbody>
        ${cartRowsHTML}
      </tbody>
    </table>
  `;
}
function deleteCartItem(index) {
  cartList.splice(index, 1);
  updateCartTable();
}

function updateCartTable() {
  var cartListContainer = document.getElementById("cart-table");
  cartListContainer.innerHTML = generateCartTable(cartList);
}

var cartListContainer = document.getElementById("cart-table");
if (cartListContainer) {
  cartListContainer.innerHTML = generateCartTable(cartList);
}

//************************************************************************************ */
//------------------------FUNCTIONS RELATED TO ORDER HTML----------------------------

// button cllaing

// showall store management
const showButton = document.getElementById("showButton");
if (showButton) {
  showButton.addEventListener("click", showItems);
}

// serach order management
const ordSearchBtn = document.getElementById("ord-search-btn");
if (ordSearchBtn) {
  ordSearchBtn.addEventListener("click", orderDisplay);
}

// export default itemListWithCategory;
