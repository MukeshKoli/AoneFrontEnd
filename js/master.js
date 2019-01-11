 $(document).ready(function() {

       var $rows = $('table tbody tr');
       $("#monFilter, #compFilter, #statFilter").change(function() {

           var val = '^(?=.*\\b' + $.trim($(this).val()).split(/\s+/).join('\\b)(?=.*\\b') + ').*$',
               reg = RegExp(val, 'i'),
               text;
           if ($(this).val() !== 'All') {
             
               $rows.show().filter(function() {
                   text = $(this).text().replace(/\s+/g, ' ');
                   return !reg.test(text);
               }).hide();
             
           } else {
               $rows.show();
           }
       });
   });
