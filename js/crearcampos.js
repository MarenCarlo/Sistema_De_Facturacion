$(document).ready(function(){
    var maxField = 9; //Input fields increment limitation
    var addButton = $('.add_button'); //Add button selector
    var wrapper1 = $('.field_wrapper'); //Input field wrapper
    var x = 1; //Initial field counter is 1

    $('#BOT1').click(function() {
        var importe_total = 0
          $(".amt").each(
            function(index, value) {
              if ( $.isNumeric( $(this).val() ) ){
              importe_total = importe_total + eval($(this).val());
              //console.log(importe_total);
              }
            }
          );
              $("#Tota1").val(importe_total);
    });
    $(document).on('click', '.remove_button', function() {
        var importe_total = 0
          $(".amt").each(
            function(index, value) {
              if ( $.isNumeric( $(this).val() ) ){
              importe_total = importe_total + eval($(this).val());
              //console.log(importe_total);
              }
            }
          );
              $("#Tota1").val(importe_total);
    });

    $(document).on('keyup', '#Cant1', function() {
        var importe_total = 0
          $(".amt").each(
            function(index, value) {
              if ( $.isNumeric( $(this).val() ) ){
              importe_total = importe_total + eval($(this).val());
              //console.log(importe_total);
              }
            }
          );
              $("#Tota1").val(importe_total);
    });
    $(document).on('keyup', '#PreU1',function() {
        var importe_total = 0
          $(".amt").each(
            function(index, value) {
              if ( $.isNumeric( $(this).val() ) ){
              importe_total = importe_total + eval($(this).val());
              //console.log(importe_total);
              }
            }
          );
              $("#Tota1").val(importe_total);
    });
    $(document).on('change', '#Cant1',function() {
        var importe_total = 0
          $(".amt").each(
            function(index, value) {
              if ( $.isNumeric( $(this).val() ) ){
              importe_total = importe_total + eval($(this).val());
              //console.log(importe_total);
              }
            }
          );
              $("#Tota1").val(importe_total);
    });
    $(document).on('change', '#PreU1',function() {
        var importe_total = 0
          $(".amt").each(
            function(index, value) {
              if ( $.isNumeric( $(this).val() ) ){
              importe_total = importe_total + eval($(this).val());
              //console.log(importe_total);
              }
            }
          );
              $("#Tota1").val(importe_total);
    });

    $(addButton).click(function(){ //Once add button is clicked
        if(x < maxField){ //Check maximum number of input fields
            x++; //Increment field counter
            var fieldHTML = "<div class='form-row field_wrapper'><div class='form-row'><div class='form-group col-sm-2'><input name='Codig[]' type='text' class='form-control form-control-sm' placeholder='Codigo P.'/></div><div class='form-group col-sm-3'><input name='Descr[]' type='text' class='form-control form-control-sm' placeholder='Descripcion'/></div><div class='form-group col-sm-2'><input min='0' id='Cant"+x+"' name='Canti[]' type='number' class='form-control form-control-sm' placeholder='Cantidad'/></div><div class='form-group col-sm-2'><input min='0' id='PreU"+x+"' name='Preci[]' type='number' class='form-control form-control-sm' step='.01' placeholder='Precio'/></div> <div class='form-group col-sm-2'><input readonly min='0' id='SubT"+x+"' name='Subto[]' type='number' class='form-control form-control-sm amt' step='.01' placeholder='Sub Tot.'/></div><div class='form-group col-sm-1'><button id='BOT2' type='button' class='btn-sm btn-outline-danger remove_button'>-</button></div></div></div>"; //New input field html 

            $(wrapper1).append(fieldHTML); // Add field html 

            $(document).on('click','#BOT1',function() {
                if($('#SubT'+x+'').val()<1){
                    $('#BOT1').prop('disabled', true);
                }
            });

            $(document).on('keyup', '#Cant'+x+'', function() {
                var importe_total = 0
                $(".amt").each(
                    function(index, value) {
                    if ( $.isNumeric( $(this).val() ) ){
                    importe_total = importe_total + eval($(this).val());
                    //console.log(importe_total);
                    }
                    }
                );
                    $("#Tota1").val(importe_total);
            });
            $(document).on('keyup', '#PreU'+x+'',function() {
                var importe_total = 0
                $(".amt").each(
                    function(index, value) {
                    if ( $.isNumeric( $(this).val() ) ){
                    importe_total = importe_total + eval($(this).val());
                    //console.log(importe_total);
                    }
                    }
                );
                    $("#Tota1").val(importe_total);
            });
            $(document).on('change', '#Cant'+x+'',function() {
                var importe_total = 0
                $(".amt").each(
                    function(index, value) {
                    if ( $.isNumeric( $(this).val() ) ){
                    importe_total = importe_total + eval($(this).val());
                    //console.log(importe_total);
                    }
                    }
                );
                    $("#Tota1").val(importe_total);
            });
            $(document).on('change', '#PreU'+x+'',function() {
                var importe_total = 0
                $(".amt").each(
                    function(index, value) {
                    if ( $.isNumeric( $(this).val() ) ){
                    importe_total = importe_total + eval($(this).val());
                    //console.log(importe_total);
                    }
                    }
                );
                    $("#Tota1").val(importe_total);
            });
            
        }
        
    });
    $(wrapper1).on('click', '.remove_button', function(e){ //Once remove button is clicked
        e.preventDefault();
        $(this).parent('div').parent('div').remove(); //Remove field html
        x--; //Decrement field counter

    });

    

    //-----------------------------------------------

    $(document).on('click','#Cant1', function() {
        var CAN1 = $('#Cant1').val();
        var TOT1 = $('#PreU1').val();

        if($('#SubT1').val()<1){
            $('#BOT1').prop('disabled', true);
        }
        if($('#Cant1').val()>=1){
            $('#SubT1').val(CAN1*TOT1);

            if($('#SubT1').val()>=1){
                $('#BOT1').prop('disabled', false);
            }
        }
    });
    $(document).on('click','#PreU1', function() {
        var CAN1 = $('#Cant1').val();
        var TOT1 = $('#PreU1').val();

        if($('#SubT1').val()<1){
            $('#BOT1').prop('disabled', true);
        }
        if($('#Cant1').val()>=1){
            $('#SubT1').val(CAN1*TOT1);

            if($('#SubT1').val()>=1){
                $('#BOT1').prop('disabled', false);
            }
        }
    });

    $(document).on('click','#Cant2', function() {
        var CAN1 = $('#Cant2').val();
        var TOT1 = $('#PreU2').val();

        if($('#SubT2').val()<1){
            $('#BOT1').prop('disabled', true);
        }
        if($('#Cant2').val()>=1){
            $('#SubT2').val(CAN1*TOT1);

            if($('#SubT2').val()>=1){
                $('#BOT1').prop('disabled', false);
            }
        }
    });
    $(document).on('click','#PreU2', function() {
        var CAN1 = $('#Cant2').val();
        var TOT1 = $('#PreU2').val();

        if($('#SubT2').val()<1){
            $('#BOT1').prop('disabled', true);
        }
        if($('#Cant2').val()>=1){
            $('#SubT2').val(CAN1*TOT1);

            if($('#SubT2').val()>=1){
                $('#BOT1').prop('disabled', false);
            }
        }
    });

    $(document).on('click','#Cant3', function() {
        var CAN1 = $('#Cant3').val();
        var TOT1 = $('#PreU3').val();

        if($('#SubT3').val()<1){
            $('#BOT1').prop('disabled', true);
        }
        if($('#Cant3').val()>=1){
            $('#SubT3').val(CAN1*TOT1);

            if($('#SubT3').val()>=1){
                $('#BOT1').prop('disabled', false);
            }
        }
    });
    $(document).on('click','#PreU3', function() {
        var CAN1 = $('#Cant3').val();
        var TOT1 = $('#PreU3').val();

        if($('#SubT3').val()<1){
            $('#BOT1').prop('disabled', true);
        }
        if($('#Cant3').val()>=1){
            $('#SubT3').val(CAN1*TOT1);

            if($('#SubT3').val()>=1){
                $('#BOT1').prop('disabled', false);
            }
        }
    });

    $(document).on('click','#Cant4', function() {
        var CAN1 = $('#Cant4').val();
        var TOT1 = $('#PreU4').val();

        if($('#SubT4').val()<1){
            $('#BOT1').prop('disabled', true);
        }
        if($('#Cant4').val()>=1){
            $('#SubT4').val(CAN1*TOT1);

            if($('#SubT4').val()>=1){
                $('#BOT1').prop('disabled', false);
            }
        }
    });
    $(document).on('click','#PreU4', function() {
        var CAN1 = $('#Cant4').val();
        var TOT1 = $('#PreU4').val();

        if($('#SubT4').val()<1){
            $('#BOT1').prop('disabled', true);
        }
        if($('#Cant4').val()>=1){
            $('#SubT4').val(CAN1*TOT1);

            if($('#SubT4').val()>=1){
                $('#BOT1').prop('disabled', false);
            }
        }
    });

    $(document).on('click','#Cant5', function() {
        var CAN1 = $('#Cant5').val();
        var TOT1 = $('#PreU5').val();

        if($('#SubT5').val()<1){
            $('#BOT1').prop('disabled', true);
        }
        if($('#Cant5').val()>=1){
            $('#SubT5').val(CAN1*TOT1);

            if($('#SubT5').val()>=1){
                $('#BOT1').prop('disabled', false);
            }
        }
    });
    $(document).on('click','#PreU5', function() {
        var CAN1 = $('#Cant5').val();
        var TOT1 = $('#PreU5').val();

        if($('#SubT5').val()<1){
            $('#BOT1').prop('disabled', true);
        }
        if($('#Cant5').val()>=1){
            $('#SubT5').val(CAN1*TOT1);

            if($('#SubT5').val()>=1){
                $('#BOT1').prop('disabled', false);
            }
        }
    });

    $(document).on('click','#Cant6', function() {
        var CAN1 = $('#Cant6').val();
        var TOT1 = $('#PreU6').val();

        if($('#SubT6').val()<1){
            $('#BOT1').prop('disabled', true);
        }
        if($('#Cant6').val()>=1){
            $('#SubT6').val(CAN1*TOT1);

            if($('#SubT6').val()>=1){
                $('#BOT1').prop('disabled', false);
            }
        }
    });
    $(document).on('click','#PreU6', function() {
        var CAN1 = $('#Cant6').val();
        var TOT1 = $('#PreU6').val();

        if($('#SubT6').val()<1){
            $('#BOT1').prop('disabled', true);
        }
        if($('#Cant6').val()>=1){
            $('#SubT6').val(CAN1*TOT1);

            if($('#SubT6').val()>=1){
                $('#BOT1').prop('disabled', false);
            }
        }
    });

    $(document).on('click','#Cant7', function() {
        var CAN1 = $('#Cant7').val();
        var TOT1 = $('#PreU7').val();

        if($('#SubT7').val()<1){
            $('#BOT1').prop('disabled', true);
        }
        if($('#Cant7').val()>=1){
            $('#SubT7').val(CAN1*TOT1);

            if($('#SubT7').val()>=1){
                $('#BOT1').prop('disabled', false);
            }
        }
    });
    $(document).on('click','#PreU7', function() {
        var CAN1 = $('#Cant7').val();
        var TOT1 = $('#PreU7').val();

        if($('#SubT7').val()<1){
            $('#BOT1').prop('disabled', true);
        }
        if($('#Cant7').val()>=1){
            $('#SubT7').val(CAN1*TOT1);

            if($('#SubT7').val()>=1){
                $('#BOT1').prop('disabled', false);
            }
        }
    });

    $(document).on('click','#Cant8', function() {
        var CAN1 = $('#Cant8').val();
        var TOT1 = $('#PreU8').val();

        if($('#SubT8').val()<1){
            $('#BOT1').prop('disabled', true);
        }
        if($('#Cant8').val()>=1){
            $('#SubT8').val(CAN1*TOT1);

            if($('#SubT8').val()>=1){
                $('#BOT1').prop('disabled', false);
            }
        }
    });
    $(document).on('click','#PreU8', function() {
        var CAN1 = $('#Cant8').val();
        var TOT1 = $('#PreU8').val();

        if($('#SubT8').val()<1){
            $('#BOT1').prop('disabled', true);
        }
        if($('#Cant8').val()>=1){
            $('#SubT8').val(CAN1*TOT1);

            if($('#SubT8').val()>=1){
                $('#BOT1').prop('disabled', false);
            }
        }
    });

    $(document).on('click','#Cant9', function() {
        var CAN1 = $('#Cant9').val();
        var TOT1 = $('#PreU9').val();

        if($('#SubT9').val()<1){
            $('#BOT1').prop('disabled', true);
        }
        if($('#Cant9').val()>=1){
            $('#SubT9').val(CAN1*TOT1);

            if($('#SubT9').val()>=1){
                $('#BOT1').prop('disabled', false);
            }
        }
    });
    $(document).on('click','#PreU9', function() {
        var CAN1 = $('#Cant9').val();
        var TOT1 = $('#PreU9').val();

        if($('#SubT9').val()<1){
            $('#BOT1').prop('disabled', true);
        }
        if($('#Cant9').val()>=1){
            $('#SubT9').val(CAN1*TOT1);

            if($('#SubT9').val()>=1){
                $('#BOT1').prop('disabled', false);
            }
        }
    });

    $(document).on('click','#Cant10', function() {
        var CAN1 = $('#Cant10').val();
        var TOT1 = $('#PreU10').val();

        if($('#SubT10').val()<1){
            $('#BOT1').prop('disabled', true);
        }
        if($('#Cant10').val()>=1){
            $('#SubT10').val(CAN1*TOT1);

            if($('#SubT10').val()>=1){
                $('#BOT1').prop('disabled', false);
            }
        }
    });
    $(document).on('click','#PreU10', function() {
        var CAN1 = $('#Cant10').val();
        var TOT1 = $('#PreU10').val();

        if($('#SubT10').val()<1){
            $('#BOT1').prop('disabled', true);
        }
        if($('#Cant10').val()>=1){
            $('#SubT10').val(CAN1*TOT1);

            if($('#SubT10').val()>=1){
                $('#BOT1').prop('disabled', false);
            }
        }
    });

    //-----------------------------------------------

    $(document).on('keyup','#Cant1', function() {
        var CAN1 = $('#Cant1').val();
        var TOT1 = $('#PreU1').val();

        if($('#SubT1').val()<1){
            $('#BOT1').prop('disabled', true);
        }
        if($('#Cant1').val()>=1){
            $('#SubT1').val(CAN1*TOT1);

            if($('#SubT1').val()>=1){
                $('#BOT1').prop('disabled', false);;
            }
        }
    });
    $(document).on('keyup','#PreU1', function() {
        var CAN1 = $('#Cant1').val();
        var TOT1 = $('#PreU1').val();

        if($('#SubT1').val()<1){
            $('#BOT1').prop('disabled', true);
        }
        if($('#Cant1').val()>=1){
            $('#SubT1').val(CAN1*TOT1);

            if($('#SubT1').val()>=1){
                $('#BOT1').prop('disabled', false);;
            }
        }
    });

    $(document).on('keyup','#Cant2', function() {
        var CAN1 = $('#Cant2').val();
        var TOT1 = $('#PreU2').val();

        if($('#SubT2').val()<1){
            $('#BOT1').prop('disabled', true);
        }
        if($('#Cant2').val()>=1){
            $('#SubT2').val(CAN1*TOT1);

            if($('#SubT2').val()>=1){
                $('#BOT1').prop('disabled', false);;
            }
        }
    });
    $(document).on('keyup','#PreU2', function() {
        var CAN1 = $('#Cant2').val();
        var TOT1 = $('#PreU2').val();

        if($('#SubT2').val()<1){
            $('#BOT1').prop('disabled', true);
        }
        if($('#Cant2').val()>=1){
            $('#SubT2').val(CAN1*TOT1);

            if($('#SubT2').val()>=1){
                $('#BOT1').prop('disabled', false);;
            }
        }
    });

    $(document).on('keyup','#Cant3', function() {
        var CAN1 = $('#Cant3').val();
        var TOT1 = $('#PreU3').val();

        if($('#SubT3').val()<1){
            $('#BOT1').prop('disabled', true);
        }
        if($('#Cant3').val()>=1){
            $('#SubT3').val(CAN1*TOT1);

            if($('#SubT3').val()>=1){
                $('#BOT1').prop('disabled', false);;
            }
        }
    });
    $(document).on('keyup','#PreU3', function() {
        var CAN1 = $('#Cant3').val();
        var TOT1 = $('#PreU3').val();

        if($('#SubT3').val()<1){
            $('#BOT1').prop('disabled', true);
        }
        if($('#Cant3').val()>=1){
            $('#SubT3').val(CAN1*TOT1);

            if($('#SubT3').val()>=1){
                $('#BOT1').prop('disabled', false);;
            }
        }
    });

    $(document).on('keyup','#Cant4', function() {
        var CAN1 = $('#Cant4').val();
        var TOT1 = $('#PreU4').val();

        if($('#SubT4').val()<1){
            $('#BOT1').prop('disabled', true);
        }
        if($('#Cant4').val()>=1){
            $('#SubT4').val(CAN1*TOT1);

            if($('#SubT4').val()>=1){
                $('#BOT1').prop('disabled', false);;
            }
        }
    });
    $(document).on('keyup','#PreU4', function() {
        var CAN1 = $('#Cant4').val();
        var TOT1 = $('#PreU4').val();

        if($('#SubT4').val()<1){
            $('#BOT1').prop('disabled', true);
        }
        if($('#Cant4').val()>=1){
            $('#SubT4').val(CAN1*TOT1);

            if($('#SubT4').val()>=1){
                $('#BOT1').prop('disabled', false);;
            }
        }
    });

    $(document).on('keyup','#Cant5', function() {
        var CAN1 = $('#Cant5').val();
        var TOT1 = $('#PreU5').val();

        if($('#SubT5').val()<1){
            $('#BOT1').prop('disabled', true);
        }
        if($('#Cant5').val()>=1){
            $('#SubT5').val(CAN1*TOT1);

            if($('#SubT5').val()>=1){
                $('#BOT1').prop('disabled', false);;
            }
        }
    });
    $(document).on('keyup','#PreU5', function() {
        var CAN1 = $('#Cant5').val();
        var TOT1 = $('#PreU5').val();

        if($('#SubT5').val()<1){
            $('#BOT1').prop('disabled', true);
        }
        if($('#Cant5').val()>=1){
            $('#SubT5').val(CAN1*TOT1);

            if($('#SubT5').val()>=1){
                $('#BOT1').prop('disabled', false);;
            }
        }
    });

    $(document).on('keyup','#Cant6', function() {
        var CAN1 = $('#Cant6').val();
        var TOT1 = $('#PreU6').val();

        if($('#SubT6').val()<1){
            $('#BOT1').prop('disabled', true);
        }
        if($('#Cant6').val()>=1){
            $('#SubT6').val(CAN1*TOT1);

            if($('#SubT6').val()>=1){
                $('#BOT1').prop('disabled', false);;
            }
        }
    });
    $(document).on('keyup','#PreU6', function() {
        var CAN1 = $('#Cant6').val();
        var TOT1 = $('#PreU6').val();

        if($('#SubT6').val()<1){
            $('#BOT1').prop('disabled', true);
        }
        if($('#Cant6').val()>=1){
            $('#SubT6').val(CAN1*TOT1);

            if($('#SubT6').val()>=1){
                $('#BOT1').prop('disabled', false);;
            }
        }
    });

    $(document).on('keyup','#Cant7', function() {
        var CAN1 = $('#Cant7').val();
        var TOT1 = $('#PreU7').val();

        if($('#SubT7').val()<1){
            $('#BOT1').prop('disabled', true);
        }
        if($('#Cant7').val()>=1){
            $('#SubT7').val(CAN1*TOT1);

            if($('#SubT7').val()>=1){
                $('#BOT1').prop('disabled', false);;
            }
        }
    });
    $(document).on('keyup','#PreU7', function() {
        var CAN1 = $('#Cant7').val();
        var TOT1 = $('#PreU7').val();

        if($('#SubT7').val()<1){
            $('#BOT1').prop('disabled', true);
        }
        if($('#Cant7').val()>=1){
            $('#SubT7').val(CAN1*TOT1);

            if($('#SubT7').val()>=1){
                $('#BOT1').prop('disabled', false);;
            }
        }
    });

    $(document).on('keyup','#Cant8', function() {
        var CAN1 = $('#Cant8').val();
        var TOT1 = $('#PreU8').val();

        if($('#SubT8').val()<1){
            $('#BOT1').prop('disabled', true);
        }
        if($('#Cant8').val()>=1){
            $('#SubT8').val(CAN1*TOT1);

            if($('#SubT8').val()>=1){
                $('#BOT1').prop('disabled', false);;
            }
        }
    });
    $(document).on('keyup','#PreU8', function() {
        var CAN1 = $('#Cant8').val();
        var TOT1 = $('#PreU8').val();

        if($('#SubT8').val()<1){
            $('#BOT1').prop('disabled', true);
        }
        if($('#Cant8').val()>=1){
            $('#SubT8').val(CAN1*TOT1);

            if($('#SubT8').val()>=1){
                $('#BOT1').prop('disabled', false);;
            }
        }
    });

    $(document).on('keyup','#Cant9', function() {
        var CAN1 = $('#Cant9').val();
        var TOT1 = $('#PreU9').val();

        if($('#SubT9').val()<1){
            $('#BOT1').prop('disabled', true);
        }
        if($('#Cant9').val()>=1){
            $('#SubT9').val(CAN1*TOT1);

            if($('#SubT9').val()>=1){
                $('#BOT1').prop('disabled', false);;
            }
        }
    });
    $(document).on('keyup','#PreU9', function() {
        var CAN1 = $('#Cant9').val();
        var TOT1 = $('#PreU9').val();

        if($('#SubT9').val()<1){
            $('#BOT1').prop('disabled', true);
        }
        if($('#Cant9').val()>=1){
            $('#SubT9').val(CAN1*TOT1);

            if($('#SubT9').val()>=1){
                $('#BOT1').prop('disabled', false);;
            }
        }
    });

    $(document).on('keyup','#Cant10', function() {
        var CAN1 = $('#Cant10').val();
        var TOT1 = $('#PreU10').val();

        if($('#SubT10').val()<1){
            $('#BOT1').prop('disabled', true);
        }
        if($('#Cant10').val()>=1){
            $('#SubT10').val(CAN1*TOT1);

            if($('#SubT10').val()>=1){
                $('#BOT1').prop('disabled', false);;
            }
        }
    });
    $(document).on('keyup','#PreU10', function() {
        var CAN1 = $('#Cant10').val();
        var TOT1 = $('#PreU10').val();

        if($('#SubT10').val()<1){
            $('#BOT1').prop('disabled', true);
        }
        if($('#Cant10').val()>=1){
            $('#SubT10').val(CAN1*TOT1);

            if($('#SubT10').val()>=1){
                $('#BOT1').prop('disabled', false);;
            }
        }
    });
});