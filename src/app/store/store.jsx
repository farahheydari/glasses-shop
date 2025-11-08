import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

const useShop = create(
    persist(
        (set, get) => ({
            basket: [],

            updateBasket: (recData) => {
                if (!recData || !recData.id) return;

                const existingItem = get().basket.find(item => item.id === recData.id);

                if (existingItem) {
                    set((state) => ({
                        basket: state.basket.map(item =>
                            item.id === recData.id
                                ? { ...item, quantity: item.quantity + 1 }
                                : item
                        )
                    }));
                } else {
                    set((state) => ({
                        basket: [...state.basket, { ...recData, quantity: 1 }]
                    }));
                }
            },

            Del: (id) => {
                set((state) => ({ basket: state.basket.filter(item => item.id !== id) }));
            },

            plus: (id) => {
                set((state) => ({
                    basket: state.basket.map(item =>
                        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
                    )
                }));
            },

            Minus: (id) => {
                set((state) => {
                    const updatedBasket = state.basket
                        .map(item =>
                            item.id === id
                                ? { ...item, quantity: item.quantity - 1 }
                                : item
                        )
                        .filter(item => item.quantity > 0);

                    return { basket: updatedBasket };
                });
            },
        }),
        {
            name: 'basket-storage',
            storage: createJSONStorage(() => localStorage),
        }
    )
);

export default useShop;
