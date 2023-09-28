// import cartService from '../services/cart';

// module.exports = {
//   async add(ctx) {
//     const { product, quantity } = ctx.request.body;
//     const user = ctx.state.user.id;

//     const updatedCart = await cartService.add(user, product, quantity);

//     ctx.send(updatedCart);
//   },

//   async get(ctx) {
//     const user = ctx.state.user.id;

//     const cart = await cartService.cart.get(user);

//     ctx.send(cart);
//   },

//   async update(ctx) {
//     const { product, quantity } = ctx.request.body;
//     const user = ctx.state.user.id;

//     const updatedCart = await cartService.update(user, product, quantity);

//     ctx.send(updatedCart);
//   },

//   async remove(ctx) {
//     const { product } = ctx.request.body;
//     const user = ctx.state.user.id;

//     const updatedCart = await cartService.remove(user, product);

//     ctx.send(updatedCart);
//   },

//   async empty(ctx) {
//     const user = ctx.state.user.id;

//     const updatedCart = await cartService.empty(user);

//     ctx.send(updatedCart);
//   },
// };
