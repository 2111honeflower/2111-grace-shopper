const {expect} = require('chai')
const { db, models: { Cart } } = require('../index')
//const seed = require('../../../script/seed');

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

    // it("requires firstName, lastName, email", async () => {
    //   const student = Student.build();
    //   try {
    //     await student.validate();
    //     throw Error(
    //       "validation should have failed without firstName, lastName, email"
    //     );
    //   } catch (err) {
    //     expect(err.message).to.contain("firstName cannot be null");
    //     expect(err.message).to.contain("lastName cannot be null");
    //     expect(err.message).to.contain("email cannot be null");
    //   }
    // });

    // it("firstName, lastName, email cannot be empty", async () => {
    //   const student = Student.build({
    //     firstName: "",
    //     lastName: "",
    //     email: ""
    //   });
    //   try {
    //     await student.validate();
    //     throw Error(
    //       "validation should have failed with empty name and address"
    //     );
    //   } catch (err) {
    //     expect(err.message).to.contain("Validation notEmpty on firstName");
    //     expect(err.message).to.contain("Validation notEmpty on lastName");
    //     expect(err.message).to.contain("Validation notEmpty on email");
    //   }
    // });

    // it("*** email must be a valid email", async () => {
    //   const student = Student.build({
    //     firstName: "Krista",
    //     lastName: "Naso",
    //     email: "notAnEmail"
    //   });
    //   try {
    //     await student.validate();
    //     throw Error(
    //       "validation should have failed with invalid email"
    //     );
    //   } catch (err) {
    //     console.log(err.message)
    //     expect(err.message).to.contain("Validation isEmail on email");
    //   }
    // });

    // it("gpa must be a float between 0.0 and 4.0", async () => {
    //   const student = {
    //     firstName: "Sally",
    //     lastName: "Ride",
    //     email: "sallyride@nasa.gov",
    //     gpa: 4.1
    //   };
    //   const overachiever = Student.build(student);
    //   try {
    //     await overachiever.save();
    //     throw Error("validation should have failed with too high gpa");
    //   } catch (err) {
    //     expect(err.message).to.contain("Validation max on gpa");
    //   }
    //   student.gpa = -1;
    //   const underachiever = Student.build(student);
    //   try {
    //     await underachiever.validate();
    //     throw Error("validation should have failed with too low gpa");
    //   } catch (err) {
    //     expect(err.message).to.contain("Validation min on gpa");
    //   }
    // });

    // it("default imageUrl if left blank", () => {
    //   const student = Student.build({
    //     firstName: "",
    //     lastName: "",
    //     email: ""
    //   });
    //   expect(student.imageUrl).to.be.a("string");
    //   expect(student.imageUrl.length).to.be.greaterThan(1);
    // });
  });
