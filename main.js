const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const menuShoppingCartIcon = document.querySelector('.navbar-shopping-cart');
const producDetailCloseIcon=document.querySelector('.product-detail-close');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const producDetailContainer = document.querySelector('#productDetail');
const cardContainer = document.querySelector('.cards-container');
menuEmail.addEventListener('click', () => {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    const isProductDetailClosed = producDetailContainer.classList.contains('inactive'); 
    if(!isProductDetailClosed){
        producDetailContainer.classList.add('inactive');
    }
    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive');
});
menuHamIcon.addEventListener('click', () => {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    const isProductDetailClosed = producDetailContainer.classList.contains('inactive'); 
    if(!isProductDetailClosed){
        producDetailContainer.classList.add('inactive');
    }
    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive')
    }
    mobileMenu.classList.toggle('inactive');
});
menuShoppingCartIcon.addEventListener('click', () => {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isProductDetailClosed = producDetailContainer.classList.contains('inactive');
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    } 
    if(!isProductDetailClosed){
        producDetailContainer.classList.add('inactive');
    }
    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }
    shoppingCartContainer.classList.toggle('inactive');
});
producDetailCloseIcon.addEventListener('click', () => {
    producDetailContainer.classList.add('inactive')
});
const productList = [];
productList.push({
    name: 'Monky fachero',
    price: 300,
    image: 'https://i.pinimg.com/736x/5d/16/cd/5d16cd4b1568c1628689360f306ecb62.jpg'
});
productList.push({
    name: 'Monky fachero',
    price: 300,
    image: 'https://i.pinimg.com/736x/bf/db/08/bfdb0852163ac36468dbe39b00601e34.jpg'
});
productList.push({
    name: 'Monky fachero',
    price: 300,
    image: 'https://wallpaperaccess.com/full/8054300.jpg'
});
productList.push({
    name: 'Monky fachero',
    price: 300,
    image: 'https://stockse.com.br/wp-content/uploads/2022/03/picrew-monkey.jpg'
});
productList.push({
    name: 'Monky fachero',
    price: 300,
    image: 'https://static.techspot.com/images2/news/bigimage/2021/09/2021-09-10-image-18.jpg'
});
productList.push({
    name: 'Monky fachero',
    price: 300,
    image: 'https://i.pinimg.com/736x/5d/16/cd/5d16cd4b1568c1628689360f306ecb62.jpg'
});
productList.push({
    name: 'Monky fachero',
    price: 300,
    image: 'https://i.pinimg.com/736x/bf/db/08/bfdb0852163ac36468dbe39b00601e34.jpg'
});
productList.push({
    name: 'Monky fachero',
    price: 300,
    image: 'https://wallpaperaccess.com/full/8054300.jpg'
});
productList.push({
    name: 'Monky fachero',
    price: 300,
    image: 'https://stockse.com.br/wp-content/uploads/2022/03/picrew-monkey.jpg'
});
productList.push({
    name: 'Monky fachero',
    price: 300,
    image: 'https://static.techspot.com/images2/news/bigimage/2021/09/2021-09-10-image-18.jpg'
});
function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click',() =>{
        desktopMenu.classList.add('inactive');
        shoppingCartContainer.classList.add('inactive');
        producDetailContainer.classList.remove('inactive');
        });
        
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;

        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', "./iconos/Platzi_YardSale_Icons/bt_add_to_cart.svg")

        productInfoFigure.appendChild(productImgCart);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        cardContainer.appendChild(productCard);
    }
}
renderProducts(productList);