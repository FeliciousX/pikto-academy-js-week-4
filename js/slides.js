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

  // slide 4/1
  (function() {
    const btn_add_foo = document.querySelector( '#add_foo' );
    const btn_remove_foo = document.querySelector( '#remove_foo' );
    const btn_toggle_foo = document.querySelector( '#toggle_foo' );
    const custom_block = document.getElementById( 'custom' );

    btn_add_foo.addEventListener( 'click', function( e ) {
      custom_block.classList.add( 'foo' );
    });

    btn_remove_foo.addEventListener( 'click', function( e ) {
      custom_block.classList.remove( 'foo' );
    });

    btn_toggle_foo.addEventListener( 'click', function( e ) {
      custom_block.classList.toggle( 'foo' );
    });
  })();

  // slide 5/3
  (function() {

    const button = $( '#bar' );

    button.on( 'click', function( e ) {
      console.log( 'Hey', e.currentTarget );
    });

  })();

  // slide 5/4
  (function() {
    const button = $( '.bar' );

    button.on( 'click', function( e ) {
      console.log( 'Hey', e.currentTarget );
    });
  })();

  // slide 5/5
  (function() {

    const input = $( '[type="text"]' );

    input.on( 'change', function( e ) {
      console.log( 'Your text is', e.target.value );
    });
  })();

})();