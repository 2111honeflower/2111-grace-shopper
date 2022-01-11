const {expect} = require('chai')
const { db, models: { Cart } } = require('../index')

describe ("Cart Model", () =>{
  before(() => db.sync({ force: true }));
  afterEach(() => db.sync({ force: true }));

    it("has fields movieCount, totalPrice, shippingPrice, address, status", async () => {
      const cart = await Cart.create({
        movieCount: 2,
        totalPrice: 45.95,
        shippingPrice: 7.98,
        address: "123 Test Ave. Chicago, IL 60606",
        status: "Placed"
      });
      expect(cart.movieCount).to.equal(2);
      expect(cart.totalPrice).to.equal(45.95);
      expect(cart.shippingPrice).to.equal(7.99);
      expect(cart.address).to.equal("123 Test Ave. Chicago, IL 60606");
      expect(parseFloat(cart.status)).to.equal("Placed");
    });

    it("defaults movieCount, totalPrice, shippingPrice, and status if left blank", () => {
      const cart = cart.build({});
      expect(cart.movieCount).to.equal(0);
      expect(cart.totalPrice).to.equal(0);
      expect(cart.shippingPrice).to.equal(5.99);
      expect(cart.status).to.equal('Open');
    });
  });
