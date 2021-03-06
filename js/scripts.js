function Contact(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.addresses = [];
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var newContact = new Contact(inputtedFirstName, inputtedLastName);

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    $("input#new-first-name").val(""); //what is this doing? why the quotes?
    $("input#new-last-name").val("");

    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact").text(newContact.fullName());
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
    });
  });
});
