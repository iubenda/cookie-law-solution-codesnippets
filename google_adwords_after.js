callback:{
              onConsentGiven: function(){
                  var t = 1;
                  $('._iub_cs_activate_google_ads').each(function() {
                          var banner = $(this);
                          setTimeout(function(){
                              var client = banner.data('client');
                              var slot = banner.data('slot');
                              var width = banner.data('width');
                              var height = banner.data('height');
                              var adsense_script = '<scr'+'ipt type="text/javascript">\n'
                                      + 'google_ad_client = "'+client+'";\n'
                                      + 'google_ad_slot = "'+slot+'";\n'
                                      + 'google_ad_width = '+width+';\n'
                                      + 'google_ad_height = '+height+';\n'
                                      + '</scr'+'ipt>';
                              var script = document.createElement('script');
                              var ads = document.createElement('ads');
                              var w = document.write;
                              s.setAttribute('type', 'text/javascript');
                              s.setAttribute('src', 'http://pagead2.googlesyndication.com/pagead/show_ads.js');
                              document.write = (function(params) {
                                  ads.innerHTML = params;
                                  document.write = w;
                              });
                              banner.html(adsense_script).append(ads).append(script);
                          }, t);
                          t += 300;
                      });
               }
          }
