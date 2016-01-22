describe('Contact', function() {
  it("creates a new contact with the given properties", function() {
      var testContact = new Contact("Betty", "Boop");
      expect(testContact.firstName).to.equal("Betty");
      expect(testContact.lastName).to.equal("Boop");
      expect(testContact.addresses).to.eql([]);
  });
});
