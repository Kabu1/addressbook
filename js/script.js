//Business logic
function Contact(first, last, address, city){
    this.firstName = first;
    this.lastName = last;
    this.address = address;
    this.city = city;
}
Contact.prototype.fullDetails = function() {
    return this.firstName + " " + this.lastName+ " " + this.address + " "+ this.city;
  }


//user interface logic
$(document).ready(function(){
    $("#new-contact").submit(function(event){
        var inputFirstName = $("input#new-first-name").val();
        var inputLastName = $("input#new-last-name").val();
        var inputAddress= $("input#address").val();
        var inputCity = $("input#city").val();


        var newContact = new Contact(inputFirstName, inputLastName,inputAddress, inputCity);

        $("ul#contacts").append("<li><span class ='contact'>" + newContact.firstName + " " +newContact.lastName + "</span> </li>")

        $("input#new-first-name").val("");
        $("input#new-last-name").val("");
        $("input#address").val("");
        $("input#city").val("");

        $(".contact").last().click(function() {
            $("#show-contact").show();
            $("#show-contact h2").text(newContact.firstName);
            $(".first-name").text(newContact.firstName);
            $(".last-name").text(newContact.lastName);
            $(".address").text(newContact.address);
            $(".city").text(newContact.city);

          }); 
    
        event.preventDefault();
    });
});