(function() {

  // slide 3/1
  (function() {

    const button = document.getElementById( 'foo' );

    button.addEventListener( 'click', function( e ) {
      console.log( 'Hey', e.currentTarget );
    });

  })();

  // slide 3/2
  (function() {

    const button = document.querySelector( '.foo' );

    button.addEventListener( 'click', function( e ) {
      console.log( 'Hey', e.currentTarget );
    });

  })();

  // slide 3/3
  (function() {

    const input = document.querySelector( '[type="email"]' );

    input.addEventListener( 'change', function( e ) {
      console.log( 'Your email is', e.target.value );
    });

  })();

})();