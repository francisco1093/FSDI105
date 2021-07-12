$(function(){
    "use-strict",
    $("#hair").on("click",function(){
        $("#service").text("Hair-Cut");
        $("#imgService").attr("src","img/dog-haircut.jpeg");
        $("#description").text("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, soluta nostrum! Error cumque impedit, rem quam eveniet quidem et vel id laudantium pariatur in earum veniam distinctio labore, obcaecati tempore.")
    });
    $("#shower").on("click",function(){
        $("#service").text("Shower");
        $("#imgService").attr("src","img/shower-pet.jpg");
        $("#description").text("Saepe, soluta nostrum! Error cumque impedit, rem quam eveniet quidem et vel id laudantium pariatur in earum veniam distinctio labore, obcaecati tempore.")
    
    });
    $("#full").on("click",function(){
        $("#service").text("Full-Service");
        $("#imgService").attr("src","img/full.jpg");
        $("#description").text("amet consectetur adipisicing elit. Saepe, soluta nostrum! Error cumque impedit, rem quam eveniet quidem et vel id laudantium pariatur in earum veniam distinctio labore, obcaecati tempore.")
    
    });
});