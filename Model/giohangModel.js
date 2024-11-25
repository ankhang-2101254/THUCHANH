class GiohangModel {
    constructor() {
        this.cart = []; // Danh sách sản phẩm trong giỏ hàng
    }

    // Lấy toàn bộ giỏ hàng
    getCart() {
        return this.cart;
    }

    // Thêm sản phẩm vào giỏ hàng
    addItem(product) {
        const existingItem = this.cart.find((item) => item.id === product.id);
        if (existingItem) {
            existingItem.quantity += product.quantity;
        } else {
            this.cart.push(product);
        }
    }

    // Cập nhật số lượng sản phẩm
    updateQuantity(productId, quantity) {
        const item = this.cart.find((item) => item.id === productId);
        if (item) {
            item.quantity = quantity > 0 ? quantity : 1; // Đảm bảo số lượng không nhỏ hơn 1
        }
    }

    // Xóa một sản phẩm khỏi giỏ hàng
    removeItem(productId) {
        this.cart = this.cart.filter((item) => item.id !== productId);
    }

    // Tính tổng giá trị giỏ hàng
    calculateTotal() {
        return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
    }

    // Xóa toàn bộ giỏ hàng
    clearCart() {
        this.cart = [];
    }
}

module.exports = new GiohangModel();
