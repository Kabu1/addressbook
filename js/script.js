//Business logic
function Contact(first, last, address, city){
    this.firstName = first;
    this.lastName = last;
    this.address = address;
    this.city = city;
}


//user interface logic
$(document).ready(function(){
    $("#new-contact").submit(function(event){
        var inputFirstName = $("input#new-first-name").val();
        var inputLastName = $("input#new-last-name").val();

        var newContact = new Contact(inputFirstName, inputLastName);

        $("ul#contacts").append("<li><span class ='contact'>" + newContact.firstName + "</span></li>")

        $("input#new-first-name").val("");
        $("input#new-last-name").val("");

        event.preventDefault();
    });
});