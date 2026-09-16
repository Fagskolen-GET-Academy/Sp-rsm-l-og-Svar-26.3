let person = {
  fornavn: "Ola",
  etternavn: "Nordmann",
  alder: 30
}


console.log(person["fornavn"])

let adr = {
  by: "Oslo",
  gate: "Storgata",
  gatenummer: 14,
  postnummer: "0001"
}

person.adresse = adr;

console.log(person["adresse"]["by"]);

let person2 = {
  fornavn: "Per",
  hilsen: function() {
    console.log(`Hei, Jeg heter ${this.fornavn}`)
  }
}

person2.hilsen();

function Person(fornavn, etternavn, alder) {
  this.fornavn = fornavn,
  this.etternavn = etternavn,
  this.alder = alder,
  this.hilsen = function() {
    console.log(`Hei, Jeg heter ${this.fornavn}`)
  }
}

let person3 = new Person("Silje", "Hansen", 40);
console.log(person3);