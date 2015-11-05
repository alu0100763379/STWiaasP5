var expect = chai.expect;

describe("Temperature_Tests", function() {

    it("19C", function() {
        var temp = new Temperatura(19,"C");
        expect(temp.get_num()).to.equal(19);
        expect(temp.get_tipo()).to.equal("C");
    });
    it("67F", function() {
        var temp = new Temperatura(67,"F");
        expect(temp.get_num()).to.equal(67);
        expect(temp.get_tipo()).to.equal("F");
    });
    it("273.1K", function() {
        var temp = new Temperatura(273.1,"K");
        expect(temp.get_num()).to.equal(273.1);
        expect(temp.get_tipo()).to.equal("K");
    });
    it("32F = 0C", function() {
      var temp = new Temperatura();
      temp.set_num(32);
      temp.set_tipo("F");
      var resultado = temp.convert_farenheit_to_celsius();
      expect(resultado).to.equal(0);
    });
    it("0C = 273.15K", function() {
      var temp = new Temperatura();
      temp.set_num(0);
      temp.set_tipo("C");
      var resultado = temp.convert_celsius_to_kelvin();
      expect(resultado).to.equal(273.15);
    });
    it("273.15K = 32F", function() {
      var temp = new Temperatura();
      temp.set_num(273.15);
      temp.set_tipo("K");
      var resultado = temp.convert_kelvin_to_farenheit();
      expect(resultado).to.equal(32);
    });
    it("0C = 32F", function() {
      var temp = new Temperatura();
      temp.set_num(0);
      temp.set_tipo("C");
      var resultado = temp.convert_celsius_to_farenheit();
      expect(resultado).to.equal(32);
    });
    it("32F = 273.15K", function() {
      var temp = new Temperatura();
      temp.set_num(32);
      temp.set_tipo("F");
      var resultado = temp.convert_farenheit_to_kelvin();
      expect(resultado).to.equal(273.15);
    });
    it("273.15K = 0C", function() {
      var temp = new Temperatura();
      temp.set_num(273.15);
      temp.set_tipo("K");
      var resultado = temp.convert_kelvin_to_celsius();
      expect(resultado).to.equal(0);
    });
    it("5X = ERROR", function() {
        window.onload = function() {
         var temp = new Temperatura(5,"X");
         calculate();
         expect(fin.innerHTML).to.match("/ERROR/");
        }
    });
});
describe("Tests_Sinon", function() {

  it("25F", function() {
    var temp = new Temperatura();
    temp.set_num(25);
    temp.set_tipo("F");

    var callback = sinon.spy();
    callback(temp.get_num());

    expect(callback.called).to.be.true;
    expect(callback.calledOnce).to.be.true;
    expect(callback.firstCall.calledWith(25)).to.be.true;
    expect(callback.firstCall.calledWith(sinon.match.number)).to.be.true;
    expect(temp.get_num()).to.equal(25);
    expect(temp.get_tipo()).to.equal("F");
  });

it("42C", function() {
    var temp = new Temperatura();
    temp.set_num(42);
    temp.set_tipo("C");

    var callback = sinon.spy();
    callback(temp.get_num());

    expect(callback.called).to.be.true;
    expect(callback.calledOnce).to.be.true;
    expect(callback.firstCall.calledWith(42)).to.be.true;
    expect(callback.firstCall.calledWith(sinon.match.number)).to.be.true;
    expect(temp.get_num()).to.equal(42);
    expect(temp.get_tipo()).to.equal("C");
  });
  
    
  it("273.15K", function() {
    var temp = new Temperatura();
    temp.set_num(273.15);
    temp.set_tipo("F");

    var callback = sinon.spy();
    callback(temp.get_num());

    expect(callback.called).to.be.true;
    expect(callback.calledOnce).to.be.true;
    expect(callback.firstCall.calledWith(273.15)).to.be.true;
    expect(callback.firstCall.calledWith(sinon.match.number)).to.be.true;

  }); 

});
