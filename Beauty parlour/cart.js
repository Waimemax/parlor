    const cartItems = [];
    const cartContainer = document.getElementById("cartItems");
    const totalAmountEl = document.getElementById("totalAmount");

    function addToCart(name, price) {
        cartItems.push({ name, price });
        renderCart();
    }

    function removeFromCart(index) {
        cartItems.splice(index, 1);
        renderCart();
    }

    function renderCart() {
        cartContainer.innerHTML = "";
        let total = 0;

        cartItems.forEach((item, index) => {
            total += item.price;

            const div = document.createElement("div");
            div.className = "cart-item";
            div.innerHTML = `
                <span>${item.name}</span>
                <span>KES ${item.price}</span>
                <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
            `;
            cartContainer.appendChild(div);
        });

        totalAmountEl.textContent = total;
    }