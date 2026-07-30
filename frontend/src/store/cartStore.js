import { create } from 'zustand';

export const useCartStore = create((set, get) => ({
  items: [],

  // Add item to cart
  addItem: (product) => {
    set((state) => {
      const existingItem = state.items.find(
        (item) =>
          item.id === product.id &&
          item.size === product.size
      );

      if (existingItem) {
        return {
          items: state.items.map((item) =>
            item.id === product.id &&
            item.size === product.size
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                }
              : item
          ),
        };
      }

      return {
        items: [
          ...state.items,
          {
            ...product,
            quantity: 1,
          },
        ],
      };
    });
  },

  // Remove item completely
  removeItem: (id, size) => {
    set((state) => ({
      items: state.items.filter(
        (item) => !(item.id === id && item.size === size)
      ),
    }));
  },

  // Increase quantity
  increaseQuantity: (id, size) => {
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id && item.size === size
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ),
    }));
  },

  // Decrease quantity
  decreaseQuantity: (id, size) => {
    set((state) => ({
      items: state.items
        .map((item) =>
          item.id === id && item.size === size
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0),
    }));
  },

  // Total price
  getTotalPrice: () => {
    return get().items.reduce(
      (total, item) =>
        total + item.price * item.quantity,
      0
    );
  },

  // Total cart item count
  getItemCount: () => {
    return get().items.reduce(
      (total, item) => total + item.quantity,
      0
    );
  },

  // Clear cart
  clearCart: () => {
    set({ items: [] });
  },
}));