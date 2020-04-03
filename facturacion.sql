-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3308
-- Tiempo de generación: 03-04-2020 a las 04:45:26
-- Versión del servidor: 8.0.18
-- Versión de PHP: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `facturacion`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalle_factura_ventas`
--

DROP TABLE IF EXISTS `detalle_factura_ventas`;
CREATE TABLE IF NOT EXISTS `detalle_factura_ventas` (
  `idDetalleVen` int(11) NOT NULL AUTO_INCREMENT,
  `Codigo_Producto` varchar(8) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Descripcion` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `FK_Detalle_Factura` int(11) NOT NULL,
  `Cantidad` int(4) NOT NULL,
  `Precio` decimal(7,2) NOT NULL,
  `Subtotal` decimal(7,2) NOT NULL,
  PRIMARY KEY (`idDetalleVen`),
  KEY `FK_Detalle_Factura` (`FK_Detalle_Factura`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `factura`
--

DROP TABLE IF EXISTS `factura`;
CREATE TABLE IF NOT EXISTS `factura` (
  `idFactura` int(11) NOT NULL AUTO_INCREMENT,
  `Fecha` date NOT NULL,
  `Nombre_Cliente` varchar(255) NOT NULL,
  `NIT_Cliente` varchar(128) NOT NULL,
  `Direccion` varchar(255) NOT NULL,
  `Total_Venta` decimal(7,2) DEFAULT NULL,
  PRIMARY KEY (`idFactura`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `factura`
--

INSERT INTO `factura` (`idFactura`, `Fecha`, `Nombre_Cliente`, `NIT_Cliente`, `Direccion`, `Total_Venta`) VALUES
(0, '2020-04-01', 'C/F', 'C/F', 'Ciudad', '0.00');

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `detalle_factura_ventas`
--
ALTER TABLE `detalle_factura_ventas`
  ADD CONSTRAINT `FK_Detalle_Factura` FOREIGN KEY (`FK_Detalle_Factura`) REFERENCES `factura` (`idFactura`) ON DELETE RESTRICT ON UPDATE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
