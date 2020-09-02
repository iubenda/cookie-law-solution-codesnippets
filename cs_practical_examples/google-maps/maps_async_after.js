<script type="text/plain"  class="_iub_cs_activate" data-iub-purposes="3">
          function initialize() {
              var mapOptions = {
                  zoom: 8,
                  center: new google.maps.LatLng(-34.397, 150.644)
              };
              var map = new google.maps.Map(document.getElementById('map-canvas'),
                      mapOptions);
          }
          function loadScript() {
              var script = document.createElement('script');
              script.type = 'text/javascript';
              script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp' +
                      '&signed_in=true&callback=initialize';
              document.body.appendChild(script);
          }
          loadScript();
          //window.onload = loadScript();
</script>
