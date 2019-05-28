// function removeTransition(e) {
//   if (e.propertyName !== 'transform') return;
//   e.target.classList.remove('playing');
// }
//
// function playSound(e) {
//
//   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//   const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
//   if (!audio) return;
//
//   key.classList.add('playing');
//
//   audio.currentTime = 0;
//   audio.play();
//
// }
// const keys = Array.from(document.querySelectorAll('.key'));
// keys.forEach(key => key.addEventListener('transitionend', removeTransition));
//
//
// window.addEventListener('keydown', playSound);
//
// window.addEventListener('keydown', function(e){
//   e.preventDefault();
// });


audioPlayer();

function audioPlayer(){
  var currentSong = 0;
  $("#audioPlayer")[0].src = $("#playlist li a")[0];
  $("#audioPlayer")[0].play();
  $("#playlist li a").click(function(e){
    e.preventDefault();
  $("#audioPlayer")[0].src = this;
  $("#audioPlayer")[0].play();
  $("#playlist li").removeClass("current-song");
    currentSong = $(this).parent().index();
    $(this).parent.addClass("current-song");
  });

  $("#audioPlayer")[0].addEventListener("ended", function(){
    currentSong++;
    if(currentSong == $("#playlist li a").length)
        currentSong = 0;
        $("#playlist li").removeClass("current-song");
        $("#playlist li:eq("+currentSong+")").addClass("current-song");
        $("#audioPlayer")[0].src = $("#playlist li a")[currentSong].href;
        $("#audioPlayer")[0].play();
  });

}
