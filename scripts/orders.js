import { orders } from "../data/orders.js";
import { formatcurrency } from "./utils/Money.js";
import { products, LoadProducts } from "../data/products.js";

console.log(products);

let orderGridHTML = "";

orders.forEach((order) => {
  console.log(order.products);
  let orderDetailsgridHTML = "";

  order.products.forEach((product) => {
    products.forEach((findProduct) => {
      if (findProduct.id === product.productId) {
        console.log("mil gaya");
      }
    });

    orderDetailsgridHTML += ` 
        <div class="product-image-container">
            <img
            src="images/products/intermediate-composite-basketball.jpg"
            />
        </div>

        <div class="product-details">
            <div class="product-name">Intermediate Size Basketball</div>
            <div class="product-delivery-date">${product.estimatedDeliveryTime}</div>
            <div class="product-quantity">Quantity: ${product.variation}</div>
            <button class="buy-again-button button-primary">
            <img class="buy-again-icon" src="images/icons/buy-again.png" />
            <span class="buy-again-message">Buy it again</span>
            </button>
        </div>

        <div class="product-actions">
            <a href="tracking.html">
            <button class="track-package-button button-secondary">
                Track package
            </button>
            </a>
        </div>`;
  });

  orderGridHTML += `<div class="order-container">
  <div class="order-header">
    <div class="order-header-left-section">
      <div class="order-date">
        <div class="order-header-label">Order Placed:</div>
        <div>${order.orderTime}</div>
      </div>
      <div class="order-total">
        <div class="order-header-label">Total:</div>
        <div>$${formatcurrency(order.totalCostCents)}</div>
      </div>
    </div>

    <div class="order-header-right-section">
      <div class="order-header-label">Order ID:</div>
      <div>${order.id}</div>
    </div>
  </div>

  <div class="order-details-grid js-order-details-grid">
  ${orderDetailsgridHTML}
  </div>
</div>`;
});

document.querySelector(".js-orders-grid").innerHTML = orderGridHTML;
