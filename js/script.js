console.log("Lauren's Portfolio Site")

function menuToggle() {
  var x = document.getElementById('myNavtoggle');
  if (x.className === 'navtoggle') {
    x.className += ' responsive';
  } else {
    x.className = 'navtoggle';
  }
  $('.has-sub').click( function() {
      e.preventDefault();
      $(this).parent().toggleClass('tap');
  });
}
