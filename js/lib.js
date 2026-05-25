const productList =[
    
  {
    id: "1",
    name: "Cua to",
    price: "250k/kg",
    image: "../assets/images/cui.jpg",
    productlink: "product-detail.html",
    desc :"là con cua."
  },
  {
    id: "2",
    name: "Tôm sú Cà Mau",
    price: "350k/kg",
    image: "../assets/images/tom-su.jpg",
    productlink: "product-detail.html",
    desc:"là con tôm to"
  },
  {
    id: "3",
    name: "Mực ống tươi",
    price: "280k/kg",
    image: "../assets/images/cuicui.jpg",
    productlink: "product-detail.html",
    desc:"là con mực ống"
  },
  {
    id: "4",
    name: "Ghẹ xanh loại 1",
    price: "450k/kg",
    image: "../assets/images/ghe-xanh.jpg",
    productlink: "product-detail.html",
    desc:"rang me ăn ngon"
  },
  {
    id: "5",
    name: "Hàu sữa",
    price: "45k/kg",
    image: "../assets/images/hao-sua.jpg",
    productlink: "product-detail.html",
    desc:"siêu kẽm"
  },
  {
    id: "6",
    name: "Bạch tuộc",
    price: "180k/kg",
    image: "../assets/images/bach-tuoc.jpg",
    productlink: "product-detail.html",
    desc:"ăn khá ngon"
  },
  {
    id: "7",
    name: "Ốc hương",
    price: "320k/kg",
    image: "../assets/images/oc-huong.jpg",
    productlink: "product-detail.html",
    desc:"bổ"
  },
  {
    id: "8",
    name: "Cá mú đỏ",
    price: "420k/kg",
    image: "../assets/images/ca-mu.jpg",
    productlink: "product-detail.html",
    desc:"chưa ăn nên ko bt sao"
  },
  {
    id: "9",
    name: "Tôm hùm xanh",
    price: "850k/kg",
    image: "../assets/images/tom-hum.jpg",
    productlink: "product-detail.html",
    desc:"giá cao lắm"
  },
  {
    id: "10",
    name: "Nghêu biển",
    price: "60k/kg",
    image: "../assets/images/ngheu.jpg",
    productlink: "product-detail.html",
    desc:"tươi"
  }
];

function addProduct (id, name, price, image, hyperLink)
{
// Tạo một product item
//1. Tao khung chua 1 item
const productItem = document.createElement("div");
productItem.setAttribute("class", "product-item col m-2");

//2. Tạo khung chứa hình
const productImage = document.createElement("div"); 
productImage.setAttribute("class", "product-image h-75 ratio ratio-1x1 overflow-hidden");

//3. Tạo đối tượng hình ảnh
const Image = document.createElement("img");
Image.setAttribute("src", image);
Image.setAttribute("alt", name);
Image.setAttribute("class", "img-fluid object-fit-cover h-100");
//4. Gán hình vào khung
productImage.appendChild(Image);

//5. Tạo khung chứa thông tin
const productInfo = document.createElement("div");
productInfo.setAttribute("class", "product-info h25 text-center");

// Tạo paragraph 1
const productName = document.createElement("p");
const productNameText = document.createTextNode(name);
productName.appendChild(productNameText);

// Tạo paragraph 2
const productPrice = document.createElement("p");
const productPriceText = document.createTextNode(price);
productPrice.appendChild(productPriceText);
//link
const productLink = document.createElement("a");
const productLinkText = document.createTextNode("Xem chi tiết");
productLink.appendChild(productLinkText);
productLink.setAttribute("href", hyperLink+"?id="+id);
productLink.setAttribute("class","btn btn-info")
//gắn vào

productInfo.appendChild(productName);
productInfo.appendChild(productPrice);
productInfo.appendChild(productLink);
//gắn tt vào
productItem.appendChild(productImage);
productItem.appendChild(productInfo);

//end game
document.getElementById("product-list").appendChild(productItem);

}