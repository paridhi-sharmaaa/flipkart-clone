import express from 'express';
import Cart from '../models/Cart.js';

const router = express.Router();

// Get Cart
router.get('/:userId', async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId });
    res.status(200).json(cart?.items || []);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
});

// Add to Cart
router.post('/', async (req, res) => {
  try {
    const { userId, product } = req.body;
    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = new Cart({ userId, items: [product] });
    } else {
      const existingItem = cart.items.find(item => item.productId === product.productId);
      existingItem ? existingItem.quantity += 1 : cart.items.push(product);
    }

    await cart.save();
    res.status(200).json(cart.items);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
});

// Remove from Cart
router.delete('/:userId/:itemId', async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId });
    if (!cart) return res.status(404).json({ message: 'Cart not found' });

    cart.items = cart.items.filter(item => item.productId !== req.params.itemId);
    await cart.save();
    res.status(200).json(cart.items);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
});

export default router;