document.addEventListener('DOMContentLoaded', () => {
	const products = document.querySelectorAll('.product');
	const cartProductsContainer = document.querySelector('.cart__products');

	products.forEach((product) => {
		const quantityValue = product.querySelector('.product__quantity-value');
		const controls = product.querySelectorAll('.product__quantity-control');

		controls.forEach((control) => {
			control.addEventListener('click', () => {
				let currentQuantity = parseInt(quantityValue.textContent, 10);

				if (control.classList.contains('product__quantity-control_inc')) {
					quantityValue.textContent = currentQuantity + 1;
				} else if (control.classList.contains('product__quantity-control_dec') && currentQuantity > 1) {
					quantityValue.textContent = currentQuantity - 1;
				}
			});
		});

		const addToCartButton = product.querySelector('.product__add');
		addToCartButton.addEventListener('click', () => {
			const productId = product.dataset.id;
			const productImageSrc = product.querySelector('.product__image').src;
			const quantity = parseInt(quantityValue.textContent, 10);

			let cartProduct = cartProductsContainer.querySelector(`.cart__product[data-id="${productId}"]`);

			if (cartProduct) {
				const cartProductCount = cartProduct.querySelector('.cart__product-count');
				cartProductCount.textContent = parseInt(cartProductCount.textContent, 10) + quantity;
			} else {
				const cartProductMarkup = `
            <div class="cart__product" data-id="${productId}">
              <img class="cart__product-image" src="${productImageSrc}">
              <div class="cart__product-count">${quantity}</div>
            </div>
          `;
				cartProductsContainer.insertAdjacentHTML('beforeend', cartProductMarkup);
			}
		});
	});
});
  