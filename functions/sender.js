
// POST
$.ajax({
  type: "POST",
  url: "some.php",
  data: { user_id: user_id, value: value }
}).done(function( msg ) {
  alert( "Data Saved: " + msg );
});

// GET
$.ajax({
  type: "GET",
  url: "some.php",
  data: { name: user_id, value: value }
}).done(function( msg ) {
  alert( "Data Saved: " + msg );
});

