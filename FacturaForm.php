<div class="detalles">
    <?php
        include 'controlador/conexion.php';
    ?>

    <center>
    <div class="cuadros">
        <h3>Factura</h3>
        
    </div>
    </center>

    <div class="formulariodetalle">

        <form action="AgregarCampo.php" method="POST">
            <br>

            <div class="form-row">
                <div class="form-group col">
                    <label for="inputEmail4">No. Factura</label>
                    <?php
                        $IdMax2 = "SELECT MAX(idFactura) FROM `factura`;";
    
                        $Res1 = mysqli_query($conexion, $IdMax2);
                        $columna = mysqli_fetch_array($Res1);
                        $IdMax3 = $columna['0'] + 1;

                        echo '<input readonly name"FactN1" type="text" class="form-control form-control-sm" value="'.$IdMax3.'"/>';
                    ?>
                    
                </div>
                <div class="form-group col">
                    
                </div>
                <div class="form-group col">
                    
                </div>
                <div class="form-group col">
                    <label for="inputEmail4">Fecha</label>
                    <input readonly required name="Fecha1" id="fechaActual" type="date" class="form-control form-control-sm" value=""/>
                </div>
            </div>

            <div class="form-row">
                <div class="form-group col-md-9">
                    <label for="inputEmail4">Cliente</label>
                    <input required name="NameC1" type="text" class="form-control form-control-sm" value="">
                </div>
                <div class="form-group col-md-3">
                    <label for="inputPassword4">NIT</label>
                    <input required name="Nit1" type="text" class="form-control form-control-sm" value="">
                </div>
            </div>

            <div class="form-group">
                <label for="telefono"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Direccion</font></font></label>
                <input required name="Direc1" type="text" class="form-control form-control-sm" id="telefono">
            </div>
            <hr>

            <center>
                <label><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Productos Vendidos</font></font></label>
            </center>
            
            <div class="container">
                <div class="form-row field_wrapper">
                    <div class="form-group col-sm-2">
                        <input name="Codig[]" type="text" class="form-control form-control-sm" placeholder="Codigo P."/>
                    </div>
                    <div class="form-group col-sm-3">
                        <input name="Descr[]" type="text" class="form-control form-control-sm" placeholder="Descripcion"/>
                    </div>
                    <div class="form-group col-sm-2">
                        <input min="0" id="Cant1" name="Canti[]" type="number" class="form-control form-control-sm" placeholder="Cantidad"/>
                    </div>
                    <div class="form-group col-sm-2">
                        <input min="0" id="PreU1" name="Preci[]" type="number" class="form-control form-control-sm" step='.01' placeholder="Precio"/>
                    </div>
                    <div class="form-group col-sm-2">
                        <input readonly min="0" id="SubT1" name="SubT1[]" type="number" class="form-control form-control-sm amt" step='.01' placeholder="Sub Tot."/>
                    </div>
                    <div class="form-group col-sm-1">
                        <button disabled id="BOT1" type="button" class="btn-sm btn-outline-success add_button">+</button>
                    </div>
                    
                </div>
            </div>
            
            <hr>

            <div class="form-row">
                <div class="form-group col">
                </div>
                <div class="form-group col">
                    
                </div>
                <div class="form-group col">
                    
                </div>
                <div class="form-group col">
                    <label for="inputEmail4">Total Venta</label>
                    <input readonly id="Tota1" type="number" class="form-control form-control-sm" step='.01' min="0" value=""/>
                </div>
            </div>
            <center>
                <input type="submit" value="Imprimir" class="btn btn-success"/>  
            </center>
        </form>
    </div>
</div>
<script type="text/javascript">
    window.onload = function(){
        var fecha = new Date(); //Fecha actual
        var mes = fecha.getMonth()+1; //obteniendo mes
        var dia = fecha.getDate(); //obteniendo dia
        var ano = fecha.getFullYear(); //obteniendo año
        if(dia<10)
            dia='0'+dia; //agrega cero si el menor de 10
        if(mes<10)
            mes='0'+mes //agrega cero si el menor de 10
        document.getElementById('fechaActual').value=ano+"-"+mes+"-"+dia;
    }
</script>
<?php
    $conexion->close();
?>