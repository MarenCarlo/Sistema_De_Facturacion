<!DOCTYPE html>
<html lang="es">
    <head>

        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="icon" type="image/png" href="media/icon.png" />
        <title>.:La Zacapaneca:.</title>
        
        <link href="css/bootstrap.css" type="text/css" rel="stylesheet" media="screen,projection"/>
        <link href="css/estilos.css" rel="stylesheet" type="text/css"/>

        <script type="text/javascript" src="js/jquery-3.4.1.min.js"></script>
        <script type="text/javascript" src="js/bootstrap.js"></script>
        <script type="text/javascript" src="js/crearcampos.js"></script>

    </head>
    <body>

    <header>
            <nav class="navbar center fixed-top navbar-expand-xl navbar-dark bg-info">
                <a id="LogoX" class="navbar-brand" href="#">.:Facturacion:.</a>
            </nav>
        </header>

        <br>
        <br>

        <div id="DIV1" class="container">
            <section class="container">
                <br>
                <div class="row pt-2">

                    <div class="col-9 cuadrolista">
                        <?php include 'FacturaForm.php'; ?>
                    </div>

                    <div id="DIV2" class="col-3">
                        <?php include 'FacturasAgregadas.php'; ?>
                    </div>  

                </div>
                
            </section>
        </div>

        <footer id="Foot1">
            <nav class="navbar navbar-expand-xl navbar-dark bg-info">
                <a id="LogoX" class="navbar-brand" href="#">.:Facturacion:.</a>
                <hr/>
            </nav>
            <nav class="navbar navbar-expand-xl navbar-dark bg-info">
                <div class="mx-auto" style="width: 130px;">
                    <h6 style="color: #FFF">#NoSalgasDeCasa</h6>
                </div>      
            </nav>
        </footer>
        
    </body>
</html>
