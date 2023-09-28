// export const cartService = {
//   async add(user, product, quantity) {
//     let cartItem = await strapi.query('cart-item').findOne({ user, product });

//     if (cartItem) {
//       cartItem = await strapi.query('cart-item').update({ id: cartItem.id }, { quantity: cartItem.quantity + quantity });
//     } else {
//       cartItem = await strapi.query('cart-item').create({ user, product, quantity });
//     }

//     return cartItem;
//   },

//   async get(user) {
//     return await strapi.query('cart').findOne({ user });
//   },

//   async update(user, product, quantity) {
//     const cartItem = await strapi.query('cart-item').findOne({ user, product });

//     if (!cartItem) {
//       throw new Error('Cart item not found');
//     }

//     return await strapi.query('cart-item').update({ id: cartItem.id }, { quantity });
//   },

//   async remove(user, product) {
//     const cartItem = await strapi.query('cart-item').findOne({ user, product });

//     if (!cartItem) {
//       throw new Error('Cart item not found');
//     }

//     return await strapi.query('cart-item').delete({ id: cartItem.id });
//   },

//   async empty(user) {
//     const cartItems = await strapi.query('cart-item').find({ user });

//     for (const item of cartItems) {
//       await strapi.query('cart-item').delete({ id: item.id });
//     }

//     return { message: 'Cart emptied successfully' };
//   },
// };

