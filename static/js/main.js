MEMES = [
  "/hotspicyme.me/static/img/20years.gif",
  "/hotspicyme.me/static/img/anondrag.gif",
  "/hotspicyme.me/static/img/backstreet.gif",
  "/hotspicyme.me/static/img/blake.gif",
  "/hotspicyme.me/static/img/boombox.gif",
  "/hotspicyme.me/static/img/burnoutparadise.gif",
  "/hotspicyme.me/static/img/dealwithit.gif",
  "/hotspicyme.me/static/img/eyebrows.gif",
  "/hotspicyme.me/static/img/callan.gif",
  "/hotspicyme.me/static/img/chocolatefrosting.gif",
  "/hotspicyme.me/static/img/curran.jpg",
  "/hotspicyme.me/static/img/flyingtim.gif",
  "/hotspicyme.me/static/img/giosolder.gif",
  "/hotspicyme.me/static/img/hammer1.gif",
  "/hotspicyme.me/static/img/hangouts.jpg",
  "/hotspicyme.me/static/img/jamesballpit.jpg",
  "/hotspicyme.me/static/img/jamesfreelancer.jpg",
  "/hotspicyme.me/static/img/jamespaper.jpg",
  "/hotspicyme.me/static/img/jamesunimpressed.jpg",
  "/hotspicyme.me/static/img/kneecappingnicky.jpg",
  "/hotspicyme.me/static/img/nickyreneedance.gif",
  "/hotspicyme.me/static/img/nyan.gif",
  "/hotspicyme.me/static/img/octotim.gif",
  "/hotspicyme.me/static/img/secretabby.gif",
  "/hotspicyme.me/static/img/smeritymurder.gif",
  "/hotspicyme.me/static/img/thomasmouse.jpg",
  "/hotspicyme.me/static/img/timnewspaper.jpg",
  "/hotspicyme.me/static/img/winkben.jpg",
  "/hotspicyme.me/static/img/wrongdoing.jpg",
  
  // NCSS 2017
  
  "/hotspicyme.me/static/img/alex_ok_hand.gif",
  "/hotspicyme.me/static/img/brownian.gif",
  "/hotspicyme.me/static/img/dabbingintensifies.gif",
  "/hotspicyme.me/static/img/horsejames.gif",
  "/hotspicyme.me/static/img/jameswave.gif",
  "/hotspicyme.me/static/img/nikkicrowd.gif",
  "/hotspicyme.me/static/img/opendoor.gif",
  "/hotspicyme.me/static/img/owendab.gif",
  "/hotspicyme.me/static/img/owenpoint.gif",
  "/hotspicyme.me/static/img/samdance.gif",
  "/hotspicyme.me/static/img/samdoot.gif",
  "/hotspicyme.me/static/img/sandrapoint.gif",
  "/hotspicyme.me/static/img/smerityshuffle.gif",
  "/hotspicyme.me/static/img/snake.gif",
  "/hotspicyme.me/static/img/superdab.gif",
  "/hotspicyme.me/static/img/timrun.gif",
  "/hotspicyme.me/static/img/verysmart.gif",
  "/hotspicyme.me/static/img/vrplanes.gif",
];

var oldMeme = -1;

$(document).ready(function() {
  ({
    selectMeme: function () {
      var meme_count = MEMES.length;
      var i;
      while (true) {
        console.log(oldMeme, i);
        i = Math.floor(Math.random() * meme_count);
        if (i != oldMeme) {
          oldMeme = i;
          break;
        }
      }
      var meme = MEMES[i];
      $(".meme-inner").html("<img class='meme-thing' src='" + meme + "' />").click(this.selectMeme);
      return false;
    },
    setup: function() {
      this.selectMeme();
      $(".another").click(this.selectMeme);

      // nothing to see here.
      var codes = [109, 101, 109, 101, 115];
      var pos = 0;

      document.addEventListener('keypress', function(e) {
          console.log(e);
        // grumble grumble KeyboardEvent is such a mess grumble.
        var key = e.keyCode || e.charCode;
        if (key == codes[pos]) {
          pos++;
        } else {
          pos = 0;
        }

        if (pos == codes.length) {
          document.documentElement.classList.add('extraspice');
        }
      });
      return false;
    }
  }).setup();

});
