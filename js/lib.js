const productList =[
    
  {
    id: "1",
    name: "Cua to",
    price: "250k/kg",
    image: "assets/images/cui.jpg",
    productlink: "html/product-detail.html",
    desc :"Thịt cua chắc nịch, ngọt thơm tự nhiên, mang đậm hương vị biển cả."
  },
  {
    id: "2",
    name: "Tôm sú Cà Mau",
    price: "350k/kg",
    image: "assets/images/tom-su.jpg",
    productlink: "html/product-detail.html",
    desc:"Tôm sú sinh thái chuẩn xịn, size khủng, thịt dai ngọt và cực kỳ giàu dinh dưỡng."
  },
  {
    id: "3",
    name: "Mực ống tươi",
    price: "280k/kg",
    image: "assets/images/cuicui.jpg",
    productlink: "html/product-detail.html",
    desc:"Mực ống tươi sống, thịt mềm mọng, có hương vị đặc trưng của biển cả."
  },
  {
    id: "4",
    name: "Ghẹ xanh loại 1",
    price: "450k/kg",
    image: "assets/images/ghe-xanh.jpg",
    productlink: "html/product-detail.html",
    desc:"Ghẹ xanh loại 1, thịt chắc, ngọt và có hương vị đặc trưng của biển cả."
  },
  {
    id: "5",
    name: "Hàu sữa",
    price: "45k/kg",
    image: "assets/images/hao-sua.jpg",
    productlink: "html/product-detail.html",
    desc:"Hàu sữa béo múp, tươi rói, chứa hàm lượng kẽm dồi dào giúp bồi bổ sức khỏe tuyệt vời."
  },
  {
    id: "6",
    name: "Bạch tuộc",
    price: "180k/kg",
    image: "assets/images/bach-tuoc.jpg",
    productlink: "html/product-detail.html",
    desc:"Bạch tuộc tươi xanh, râu to giòn dai, mang đến trải nghiệm ẩm thực vô cùng hấp dẫn."
  },
  {
    id: "7",
    name: "Ốc hương",
    price: "320k/kg",
    image: "assets/images/oc-huong.jpg",
    productlink: "html/product-detail.html",
    desc:"Đệ nhất ốc biển với thịt giòn ngọt, tỏa hương thơm tự nhiên quyến rũ ngay từ khi chế biến."
  },
  {
    id: "8",
    name: "Cá mú đỏ",
    price: "420k/kg",
    image: "assets/images/ca-mu.jpg",
    productlink: "html/product-detail.html",
    desc:"Đặc sản biển sâu cao cấp, thịt cá trắng ngần, dai ngọt, là linh hồn của những bữa tiệc sang trọng."
  },
  {
    id: "9",
    name: "Tôm hùm xanh",
    price: "850k/kg",
    image: "assets/images/tom-hum.jpg",
    productlink: "html/product-detail.html",
    desc:"Vua của các loại hải sản với thớ thịt săn chắc, ngọt lịm, nâng tầm đẳng cấp cho mọi bàn tiệc."
  },
  {
    id: "10",
    name: "Nghêu biển",
    price: "60k/kg",
    image: "assets/images/ngheu.jpg",
    productlink: "html/product-detail.html",
    desc:"Nghêu sống mập nước, ngọt thanh mát lành, lựa chọn lý tưởng cho tô canh giải nhiệt ngày hè."
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