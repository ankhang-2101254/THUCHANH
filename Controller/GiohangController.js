
const giohangModel = require("../Model/giohangModel");

const GiohangController = {
    // Hiển thị giỏ hàng
    showCart: (req, res) => {
        const cart = giohangModel.getCart();
        const total = giohangModel.calculateTotal();
        res.render("giohang", { cart, total });
    },

    // Xử lý thêm sản phẩm vào giỏ hàng
    addItem: (req, res) => {
        const { id, name, price, quantity } = req.body;
        giohangModel.addItem({
            id: parseInt(id),
            name,
            price: parseFloat(price),
            quantity: parseInt(quantity),
        });
        res.redirect("/giohang");
    },

    // Xử lý cập nhật số lượng sản phẩm
    updateQuantity: (req, res) => {
        const { id, quantity } = req.body;
        giohangModel.updateQuantity(parseInt(id), parseInt(quantity));
        res.redirect("/giohang");
    },

    // Xóa một sản phẩm khỏi giỏ hàng
    removeItem: (req, res) => {
        const { id } = req.body;
        giohangModel.removeItem(parseInt(id));
        res.redirect("/giohang");
    },

    // Xóa toàn bộ giỏ hàng
    clearCart: (req, res) => {
        giohangModel.clearCart();
        res.redirect("/giohang");
    },
};

module.exports = GiohangController;