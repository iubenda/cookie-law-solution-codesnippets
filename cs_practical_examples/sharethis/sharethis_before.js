<script type="text/javascript" src="http://w.sharethis.com/button/buttons.js"></script>
 <script>
    stLight.options({
        publisher:'insert-your-key-here'
    });

    stWidget.addEntry({
        "service":"sharethis",
        "element":document.getElementById('button_1'),
        "url":"http://sharethis.com",
        "title":"sharethis",
        "type":"large",
        "text":"ShareThis" ,
        "image":"http://www.softicons.com/download/internet-icons/social-superheros-icons-by-iconshock/png/256/sharethis_hulk.png",
    "summary":"this is description1"
    });

    stWidget.addEntry({
        "service":"sharethis",
        "element":document.getElementById('button_2'),
        "url":"http://sharethis.com/2",
        "title":"sharethis",
        "type":"large",
        "text":"ShareThis" ,
        "image":"http://farm4.static.flickr.com/3571/3427619794_13dae8e979_o.png",
        "summary":"this is description2"
    });

    function addMore(){
        stWidget.addEntry({
            "service":"sharethis",
            "element":document.getElementById('button_3'),
            "url":"http://sharethis.com/3",
            "title":"sharethis",
            "type":"large",
            "text":"ShareThis" ,
            "image":"http://icons.iconarchive.com/icons/iconshock/high-detail-social/256/sharethis-icon.png",
            "summary":"this is description3"
        });
    }
</script>