
$(document).ready(function() {
    
    
    
    $('#collage_1').on('mouseenter', function(){
        $("#collage_1").animate({
          height: '45%',
          width: '45%'
        }, "fast");
        
        $("#collage_2").animate({
          height: '19%',
          width: '19%'
        }, "fast");
    
        $("#collage_3").animate({
          height: '40%',
          width: '40%'
        }, "fast");
         }); 
        
    $('#collage_1').on('mouseleave', function(){
        $("#collage_1").animate({
          height: '30%',
          width: '30%'
        }, "fast");
        
        $("#collage_2").animate({
          height: '25%',
          width: '25%'
        }, "fast");
        
        $("#collage_3").animate({
          height: '45%',
          width: '45%'
        }, "fast");
         }); 
        
     $('#collage_2').on('mouseenter', function(){
        $("#collage_1").animate({
          height: '21%',
          width: '21%'
        }, "fast");
         
        $("#collage_2").animate({
          height: '45%',
          width: '45%'
        }, "fast");
         
         $("#collage_3").animate({
          height: '36%',
          width: '36%'
        }, "fast"); 
         }); 
        
    $('#collage_2').on('mouseleave', function(){
        $("#collage_1").animate({
          height: '30%',
          width: '30%'
        }, "fast");
        
        $("#collage_2").animate({
          height: '25%',
          width: '25%'
        }, "fast");
        
        $("#collage_3").animate({
          height: '45%',
          width: '45%'
        }, "fast");
         }); 
        
    $('#collage_3').on('mouseenter', function(){
        $("#collage_1").animate({
          height: '21%',
          width: '21%'
        }, "fast");
        
        $("#collage_2").animate({
          height: '19%',
          width: '19%'
        }, "fast");
        
        $("#collage_3").animate({
          height: '60%',
          width: '60%'
        }, "fast");
         }); 
        
    $('#collage_3').on('mouseleave', function(){
        $("#collage_1").animate({
          height: '30%',
          width: '30%'
        }, "fast");
        
        $("#collage_2").animate({
          height: '25%',
          width: '25%'
        }, "fast");
        
        $("#collage_3").animate({
          height: '45%',
          width: '45%'
        }, "fast");
         }); 
        
    
    

    
    function actualiza()
    {$("#sub1").text(($("#cant_uno").val()*115)+" euros ");
    
    }
                          
    $("#botoncomprobar").click(function(){  
            var subtotal1=0;
            var subtotal2=0;
            var subtotal3=0;
            var subtotal4=0
            var total_compra=0;

                subtotal1=$("#cant_uno").val();
                $("#sub1").text((subtotal1 *115) + " euros");
        

                subtotal2=$("#cant_dos").val();
                $("#sub2").text((subtotal2 *130) + " euros");

        
                subtotal3=$("#cant_tres").val();
                $("#sub3").text((subtotal3 *120) + " euros");
        
                subtotal4=$("#cant_cuatro").val();
                $("#sub4").text((subtotal4 *10) + " euros");

        if(subtotal1>0||subtotal2>0||subtotal3>0||subtotal4>0)
           
          {
                total_compra = subtotal1*115 +subtotal2*130 +subtotal3*120 +subtotal4*10    ;
                $("#total").text(total_compra);
        
            if( $('#cajaespecial').is(':checked') )
                {
                        total_compra = total_compra+5
                }

                            $("#total").text(total_compra);

            if (total_compra<250)
                {
                        total_compra = total_compra+15
                }

                            $("#total").text(total_compra);
         }

 else
            {
               alert("tu carrito esta vacío") 
            }
                 
    });

});