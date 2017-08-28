$(function(){
  $(".openBtn").click(function(){
    $($(this).next(".textArea")).animate(
      {height: "toggle", opacity: "toggle"},
      "nomal"
    );
  });
});