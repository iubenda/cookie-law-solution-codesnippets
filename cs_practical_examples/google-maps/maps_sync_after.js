<script src="http://maps.googleapis.com/maps/api/js?v=3.exp"></script>
      <script type="text/plain" class="_iub_cs_activate" data-iub-purposes="3">
        var map;
        function initialize() {
              var mapOptions = {
                  zoom: 8,
                  center: new google.maps.LatLng(-34.397, 150.644)
              };
              map = new google.maps.Map(document.getElementById('googleMap'),
                      mapOptions);
        }
        initialize();
        //google.maps.event.addDomListener(window, 'load', initialize);
        </script>
