<?php
    include 'controlador/conexion.php';

    //consulta para obtener el ultimo id agregado.
    $IdMax1 = "SELECT MAX(idFactura) FROM `factura`;";
    
    $Res1 = mysqli_query($conexion, $IdMax1);
    $columna = mysqli_fetch_array($Res1);

    //Suma de el mayor ID en BD + 1 que es el registro que agregaremos.
    $idMax = $columna['0'] + 1;

    if (strlen($_POST['NameC1']) > 0 ){
        //Datos para Tabla Factura
        $Fecha2 = trim($_POST['Fecha1']);
        $NameC2 = trim($_POST['NameC1']);
        $Nit2  = trim($_POST['Nit1']);
        $Direc2 = trim($_POST['Direc1']);

        $SQL1 = "INSERT INTO `factura` 
                (`idFactura`, `Fecha`, `Nombre_Cliente`, `NIT_Cliente`, `Direccion`, `Total_Venta`) 
                 VALUES (NULL, '$Fecha2', '$NameC2', '$Nit2', '$Direc2', NULL);";
        
        $Res2 = mysqli_query($conexion, $SQL1);

    }
    //este POST recibe el array de productos vendidos.
    $Codigo      = array_values($_POST['Codig']);
    $Descripcion = array_values($_POST['Descr']);
    $Cantidad    = array_values($_POST['Canti']);
    $Precio      = array_values($_POST['Preci']);

    //Este array_map, me selecciona cada indice numerico (o eso espero que haga :D),
    //Y me muestra sus valores con el array_values.
    $Resultado1 = array_values(array_map(function($a1, $a2) {return $a1*$a2;}, $Cantidad, $Precio));

    //Un Ciclo For que mide el tamaño de $Resultado1, con la funcion Sizeof();
    For($i=0;$i<sizeof($Resultado1); $i++){

        $SQL2= "INSERT INTO `detalle_factura_ventas` 
                (`idDetalleVen`, `Codigo_Producto`, `Descripcion`, 
                `FK_Detalle_Factura`, `Cantidad`, `Precio`, `Subtotal`) 
                VALUES 
                (NULL, '$Codigo[$i]', '$Descripcion[$i]', '$idMax', '$Cantidad[$i]', '$Precio[$i]', '$Resultado1[$i]');";
        
        $Res3 = mysqli_query($conexion, $SQL2);
        
        //Funcion array_Sum que nos va sumando los totales de $Resultado1 para saber el Total de la compra
        $Total1 = array_sum($Resultado1);
        $Total2 = 0;
        $Total2 =+ $Total1;
    }
    $SQL3= "UPDATE `factura` SET `Total_Venta` = '$Total2' WHERE `factura`.`idFactura` = $idMax;";
    $Res4 = mysqli_query($conexion, $SQL3);

    $conexion->close();
    header('Location: index.php');
?>