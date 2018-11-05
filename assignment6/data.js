$("button#get_data").click(function() {
       var items = [];
       var i = 0;
       var airtable_read_endpoint = "https://api.airtable.com/v0/appLS27z0VKDfU7Ca/ALL%20MAC%20LIPSTICKS?api_key=keyMdNcOcmTFobuDZ";
       var dataSet = [];
       $.getJSON(airtable_read_endpoint, function(result) {
              $.each(result.records, function(key,value) {
                  items = [];
                      items.push(value.fields.Name);
                      items.push(value.fields.Price);
                      items.push(value.fields.Color_Scheme);
                      items.push(value.fields.Score_on_official_website);
                      items.push(value.fields.Personal_preference);
                      items.push(value.fields.If_it_fits_on_yellow_skin);
                      dataSet.push(items);
               }); // end .each
            $("#example").DataTable( {
                data: dataSet,
                retrieve: true,
                columns: [
                    { title: "Name",
                      defaultContent:""},
                    { title: "Price",
                      defaultContent:"" },
                    { title: "Color_Scheme",
                      defaultContent:""},
                      { title: "Score_on_official_website",
                        defaultContent:""},
                        { title: "Personal_preference",
                            defaultContent:""},
                            { title: "If_it_fits_on_yellow_skin",
                                defaultContent:""},

                  ]
                              } );
                         }); // end .getJSON
                      }); // end button
