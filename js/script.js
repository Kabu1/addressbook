//Business logic
function Contact(first, last, address, city){
    this.firstName = first;
    this.lastName = last;
    this.address = address;
    this.city = city;
}
Contact.prototype.fullName = function() {
    return this.firstName + " " + this.lastName;
  }


//user interface logic
$(document).ready(function(){
    $("#new-contact").submit(function(event){
        var inputFirstName = $("input#new-first-name").val();
        var inputLastName = $("input#new-last-name").val();

        var newContact = new Contact(inputFirstName, inputLastName);

        $("ul#contacts").append("<li><span class ='contact'>" + newContact.fullName() + "</span></li>")

        $("input#new-first-name").val("");
        $("input#new-last-name").val("");

        $(".contact").last().click(function() {
            $("#show-contact").show();
            $("#show-contact h2").text(newContact.firstName, newContact.lastName);
            $(".first-name").text(newContact.firstName);
            $(".last-name").text(newContact.lastName);
          }); 
    
        event.preventDefault();
    });
});