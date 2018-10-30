$("button#get_data").click(function() {
       var items = [];
       var i = 0;
       var airtable_read_endpoint = "https://api.airtable.com/v0/appLS27z0VKDfU7Ca/SUBSTITUTE?maxRecords=3&view=Grid%20view" \
-H "Authorization: Bearer keypu3fH9W07tffvh";
       var dataSet = [];
       $.getJSON(airtable_read_endpoint, function(result) {
              $.each(result.records, function(key,value) {
                  items = [];
                      items.push(value.fields.Name);
                      items.push(value.fields.Similar_MAC_lipsticks);
                      items.push(value.fields.brand);
                      items.push(value.fields.Substitutes_score);
                      items.push(value.fields.MAC_score);
                      items.push(value.fields.price);
                      dataSet.push(items);
               }); // end .each
            $('#example').DataTable( {
                data: dataSet,
                retrieve: true,
                columns: [
                    { title: "Name",
                      defaultContent:""},
                    { title: "SIMILAR MAC LIPSTICK",
                      defaultContent:"" },
                    { title: "brand",
                      defaultContent:""},
                      { title: "Substitutes_score",
                        defaultContent:""},
                        { title: "MAC_score",
                            defaultContent:""},
                      { title: "price",
                    defaultContent:""},

                ]
            } );
