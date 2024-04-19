const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const manga = button.dataset.manga;
        const mangaItem = cartItems.find(item => item.manga === manga);

        if (mangaItem) {
            mangaItem.quantity++;
        } else {
            cartItems.push({ manga, quantity: 1 });
        }

        updateCart();
    });
});

function updateCart() {
    cartItemsElement.innerHTML = '';
    let total = 0;

    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.quantity} x Manga ${item.manga} - $19.99`;
        cartItemsElement.appendChild(li);
        total += item.quantity * 19.99;
    });

    cartTotalElement.textContent = `Total: $${total.toFixed(2)}`;
    checkoutButton.disabled = total === 0;

    sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
}

const storedCartItems = sessionStorage.getItem('cartItems');
if (storedCartItems) {
    cartItems = JSON.parse(storedCartItems);
    updateCart();
}

checkoutButton.addEventListener('click', () => {
    alert('Obrigado pela sua compra!');
    sessionStorage.removeItem('cartItems');
    cartItems = [];
    updateCart();
});

document.getElementById('link-generos').addEventListener('click', function() {
    var generosSection = document.getElementById('generos');
    if (generosSection.style.display === 'none') {
        generosSection.style.display = 'block';
    } else {
        generosSection.style.display = 'none';
    }
});

