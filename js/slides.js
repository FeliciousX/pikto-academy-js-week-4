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
      console.log( custom_block.classList );
    });

    btn_remove_foo.addEventListener( 'click', function( e ) {
      custom_block.classList.remove( 'foo' );
      console.log( custom_block.classList );
    });

    btn_toggle_foo.addEventListener( 'click', function( e ) {
      custom_block.classList.toggle( 'foo' );
      console.log( custom_block.classList );
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

  // slide 6/1
  (function() {
    const btn_add_bar = $( '#add_bar' );
    const btn_remove_bar = $( '#remove_bar' );
    const btn_toggle_bar = $( '#toggle_bar' );
    const custom_block = $( '#custom_bar' );

    btn_add_bar.on( 'click', function( e ) {
      custom_block.addClass( 'bar' );
      console.log( custom_block.attr( 'class' ) );
    });

    btn_remove_bar.on( 'click', function( e ) {
      custom_block.removeClass( 'bar' );
      console.log( custom_block.attr( 'class' ) );
    });

    btn_toggle_bar.on( 'click', function( e ) {
      custom_block.toggleClass( 'bar' );
      console.log( custom_block.attr( 'class' ) );
    });

  })();

  (function() {
    const btn_show = $( '#show_bar' );
    const btn_hide = $( '#hide_bar' );
    const btn_toggle_bar = $( '#toggle_show_bar' );
    const custom_block = $( '#bar_bar' );

    btn_show.on( 'click', function( e ) {
      custom_block.show();
    });

    btn_hide.on( 'click', function( e ) {
      custom_block.hide();
    });

    btn_toggle_bar.on( 'click', function( e ) {
      custom_block.toggle();
    });
  })();

})();