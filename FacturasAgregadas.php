<?php
    include 'controlador/conexion.php';
?>
<ul class="list-group lista">

    <center>
    <div class="form-group">
        <h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Facturas Agregadas</font></font></h3>
        <br>
        <?php
            $SQL1 = "SELECT * FROM `factura` WHERE idFactura NOT IN (0)";

            $resultado = mysqli_query($conexion, $SQL1) or die ( "Algo ha ido mal en la consulta a la base de datos");
        ?>
        <select class="form-control form-control-sm" id="exampleFormControlSelect1">
            <option selected><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">--Seleccione La Factura que desea ver--</font></font></option>
            <?php
                while ($columna = mysqli_fetch_array($resultado)){
            
                    echo '<option><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">'.$columna['0'].' - '.$columna['2'].'</font></font></option>';
            
                }
            ?>
        </select>
    </div>
    </center>

</ul>
<?php
    $conexion->close();
?>