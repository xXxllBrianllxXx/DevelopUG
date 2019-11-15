-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-11-2019 a las 23:07:33
-- Versión del servidor: 10.1.36-MariaDB
-- Versión de PHP: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `hotel`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `agents`
--

CREATE TABLE `agents` (
  `id` int(11) NOT NULL,
  `user` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `pass` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `token` text COLLATE utf8_spanish_ci,
  `name` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `agents`
--

INSERT INTO `agents` (`id`, `user`, `pass`, `token`, `name`) VALUES
(1, 'brian', '12345', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbkRhdGEiOnsidXNlciI6ImJyaWFuIiwicGFzcyI6IjEyMzQ1In0sImlhdCI6MTU3MzczMzg3MX0.92otqOCZzEdXYnF4SzR_g9xw_1ofTfEcqSgWReqvf-M', 'Brian R');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `city`
--

CREATE TABLE `city` (
  `id` int(11) NOT NULL,
  `name` varchar(150) COLLATE utf8_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `city`
--

INSERT INTO `city` (`id`, `name`) VALUES
(1, 'Medellin'),
(2, 'Bogota'),
(3, 'Cali'),
(4, 'Barranquilla'),
(5, 'Cartagena');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contact`
--

CREATE TABLE `contact` (
  `id` int(11) NOT NULL,
  `name` varchar(150) COLLATE utf8_spanish_ci DEFAULT NULL,
  `phone` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `contact`
--

INSERT INTO `contact` (`id`, `name`, `phone`) VALUES
(1, 'Contact uno', 1111111111),
(2, 'Contact dos', 2147483647),
(3, 'Contact tres', 2147483647),
(4, 'Contact cuatro', 2147483647),
(5, 'Contact cinco', 2147483647),
(6, 'Contact seis', 2147483647),
(7, 'Contact siete', 2147483647),
(8, 'Contact ocho', 2147483647),
(9, 'Contact nueve', 2147483647),
(10, 'Contact diez', 1010101010),
(11, 'bartolome', 0),
(12, 'yayaya', 12345),
(13, 'yayaya', 12345),
(14, 'papapa', 321),
(15, 'papapa', 321),
(16, 'asd', 0),
(17, 'vbnvbn', 456456),
(18, 'vbnvbn', 456456),
(19, 'asd', 0),
(20, 'asd', 0),
(21, 'asd', 0),
(22, 'tyu', 987),
(23, 'tyu', 987),
(24, 'asd', 0),
(25, 'qwe', 98),
(26, 'qwe', 98),
(27, 'william', 2147483647),
(28, 'asd', 5198198),
(29, 'asd', 7849515),
(30, 'asd', 5198198),
(31, 'asd', 7849515),
(32, 'william', 2147483647),
(33, '456456', 456456),
(34, 'papaye 2', 466787);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `gender`
--

CREATE TABLE `gender` (
  `id` int(11) NOT NULL,
  `name` varchar(20) COLLATE utf8_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `gender`
--

INSERT INTO `gender` (`id`, `name`) VALUES
(1, 'Masculino'),
(2, 'Femenino');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `hotels`
--

CREATE TABLE `hotels` (
  `id` int(11) NOT NULL,
  `name` varchar(150) COLLATE utf8_spanish_ci DEFAULT NULL,
  `state` int(1) DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `hotels`
--

INSERT INTO `hotels` (`id`, `name`, `state`) VALUES
(1, 'Hotel 1', 1),
(2, 'Hotel 2', 1),
(3, 'Hotel 3', 1),
(4, 'Hotel 4', 1),
(5, 'Hotel 5', 1),
(6, 'Hotel 6', 1),
(7, 'Hotel 7', 0),
(8, 'Hotel 8', 1),
(9, 'Hotel 9', 0),
(10, 'Hotel 10', 1),
(11, 'hotel 11', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `hotel_room`
--

CREATE TABLE `hotel_room` (
  `id` int(11) NOT NULL,
  `id_hotel` int(11) DEFAULT NULL,
  `id_room` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `hotel_room`
--

INSERT INTO `hotel_room` (`id`, `id_hotel`, `id_room`) VALUES
(6, 2, 6),
(7, 2, 7),
(8, 2, 8),
(9, 2, 9),
(10, 2, 10),
(11, 3, 1),
(12, 3, 2),
(13, 3, 3),
(14, 3, 4),
(15, 3, 5),
(16, 4, 6),
(17, 4, 7),
(18, 4, 8),
(19, 4, 9),
(20, 4, 10),
(21, 5, 1),
(22, 5, 2),
(23, 5, 3),
(24, 5, 4),
(25, 5, 5),
(26, 6, 6),
(27, 6, 7),
(28, 6, 8),
(29, 6, 9),
(30, 6, 10),
(113, 1, 1),
(114, 1, 3),
(115, 1, 5),
(116, 1, 7),
(117, 1, 9),
(118, 9, 1),
(119, 9, 2),
(120, 9, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reservations`
--

CREATE TABLE `reservations` (
  `id` int(11) NOT NULL,
  `date_create` date DEFAULT NULL,
  `date_start` date DEFAULT NULL,
  `date_end` date DEFAULT NULL,
  `people` int(11) DEFAULT NULL,
  `id_city` int(11) DEFAULT NULL,
  `id_hotel_room` int(11) DEFAULT NULL,
  `id_contact` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `reservations`
--

INSERT INTO `reservations` (`id`, `date_create`, `date_start`, `date_end`, `people`, `id_city`, `id_hotel_room`, `id_contact`) VALUES
(4, '2019-11-12', '2019-11-11', '2019-12-21', 10, 1, 6, 1),
(5, '2019-11-12', '2019-11-12', '2019-12-22', 20, 2, 7, 2),
(6, '2019-11-12', '2019-11-13', '2019-12-23', 30, 3, 8, 3),
(7, '2019-11-12', '2019-11-14', '2019-12-24', 40, 4, 9, 4),
(8, '2019-11-12', '2019-11-15', '2019-12-25', 50, 5, 10, 5),
(9, '2019-11-12', '2019-11-16', '2019-12-26', 60, 1, 11, 6),
(10, '2019-11-12', '2019-11-17', '2019-12-27', 70, 2, 12, 7),
(11, '2019-11-12', '2019-11-18', '2019-12-28', 80, 3, 13, 8),
(12, '2019-11-12', '2019-11-19', '2019-12-29', 90, 4, 14, 9),
(13, '2019-11-12', '2019-11-10', '2019-12-10', 5, 5, 15, 10),
(14, '2019-11-12', '2019-11-11', '2019-12-21', 10, 1, 16, 1),
(15, '2019-11-12', '2019-11-12', '2019-12-22', 20, 2, 17, 2),
(16, '2019-11-12', '2019-11-13', '2019-12-23', 30, 3, 18, 3),
(17, '2019-11-12', '2019-11-14', '2019-12-24', 40, 4, 19, 4),
(18, '2019-11-12', '2019-11-15', '2019-12-25', 50, 5, 20, 5),
(19, '2019-11-12', '2019-11-16', '2019-12-26', 60, 1, 21, 6),
(20, '2019-11-12', '2019-11-17', '2019-12-27', 70, 2, 22, 7),
(21, '2019-11-12', '2019-11-18', '2019-12-28', 80, 3, 23, 8),
(22, '2019-11-12', '2019-11-19', '2019-12-29', 90, 4, 24, 9),
(23, '2019-11-12', '2019-11-10', '2019-12-10', 5, 5, 25, 10),
(25, '2019-11-14', '2019-11-14', '2019-11-14', 1, 1, 118, 25),
(26, '2019-11-14', '2019-11-14', '2019-11-14', 1, 1, 118, 26),
(27, '2019-11-14', '2019-11-14', '2019-11-14', 3, 1, 16, 29),
(28, '2019-11-14', '2019-11-14', '2019-11-14', 3, 1, 16, 29),
(29, '2019-11-14', '2019-11-14', '2019-11-14', 3, 1, 16, 29),
(30, '2019-11-14', '2019-11-14', '2019-11-14', 3, 1, 16, 32),
(31, '2019-11-14', '2019-11-14', '2019-11-14', 3, 1, 16, 32),
(32, '2019-11-14', '2019-11-14', '2019-11-14', 3, 1, 16, 32),
(33, '2019-11-14', '2019-11-14', '2019-11-14', 2, 1, 113, 34),
(34, '2019-11-14', '2019-11-14', '2019-11-14', 2, 1, 113, 34);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reservation_detail`
--

CREATE TABLE `reservation_detail` (
  `id` int(11) NOT NULL,
  `name` varchar(150) COLLATE utf8_spanish_ci DEFAULT NULL,
  `last_name` varchar(150) COLLATE utf8_spanish_ci DEFAULT NULL,
  `birth` date DEFAULT NULL,
  `id_gender` int(11) DEFAULT NULL,
  `number_doc` varchar(20) COLLATE utf8_spanish_ci DEFAULT NULL,
  `email` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `phone` int(11) DEFAULT NULL,
  `id_reservation` int(11) DEFAULT NULL,
  `id_type_doc` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `reservation_detail`
--

INSERT INTO `reservation_detail` (`id`, `name`, `last_name`, `birth`, `id_gender`, `number_doc`, `email`, `phone`, `id_reservation`, `id_type_doc`) VALUES
(1, 'pepito 1', 'perez 1', '1995-10-16', 1, '1047971220', 'email.prueba@gmail.com', 2147483647, 4, 1),
(2, 'pepito 2', 'perez 2', '1992-10-16', 2, '2222222222', 'email.prueba@gmail.com', 2147483647, 5, 2),
(3, 'pepito 3', 'perez 3', '1993-10-16', 1, '3333333333', 'email.prueba@gmail.com', 2147483647, 6, 3),
(4, 'pepito 4', 'perez 4', '1994-10-16', 2, '4444444444', 'email.prueba@gmail.com', 2147483647, 7, 1),
(5, 'pepito 5', 'perez 5', '1995-10-16', 1, '5555555555', 'email.prueba@gmail.com', 2147483647, 8, 2),
(6, 'pepito 6', 'perez 6', '1996-10-16', 2, '6666666666', 'email.prueba@gmail.com', 2147483647, 9, 3),
(7, 'pepito 7', 'perez 7', '1997-10-16', 1, '7777777777', 'email.prueba@gmail.com', 2147483647, 10, 1),
(8, 'pepito 8', 'perez 8', '1998-10-16', 2, '8888888888', 'email.prueba@gmail.com', 2147483647, 11, 2),
(9, 'pepito 9', 'perez 9', '1999-10-16', 1, '9999999999', 'email.prueba@gmail.com', 2147483647, 12, 3),
(10, 'pepito 10', 'perez 10', '0000-00-00', 2, '1010101010', 'email.prueba@gmail.com', 2147483647, 13, 1),
(11, 'pepito 2', 'perez 2', '1992-10-16', 1, '2222222222', 'email.prueba@gmail.com', 2147483647, 5, 2),
(12, 'pepito 3', 'perez 3', '1993-10-16', 1, '3333333333', 'email.prueba@gmail.com', 2147483647, 6, 3),
(13, 'pepito 4', 'perez 4', '1994-10-16', 1, '4444444444', 'email.prueba@gmail.com', 2147483647, 7, 1),
(14, 'pepito 5', 'perez 5', '1995-10-16', 1, '5555555555', 'email.prueba@gmail.com', 2147483647, 8, 2),
(15, 'pepito 6', 'perez 6', '1996-10-16', 1, '6666666666', 'email.prueba@gmail.com', 2147483647, 9, 3),
(16, 'pepito 7', 'perez 7', '1997-10-16', 1, '7777777777', 'email.prueba@gmail.com', 2147483647, 10, 1),
(17, 'pepito 8', 'perez 8', '1998-10-16', 1, '8888888888', 'email.prueba@gmail.com', 2147483647, 11, 2),
(18, 'pepito 9', 'perez 9', '1999-10-16', 1, '9999999999', 'email.prueba@gmail.com', 2147483647, 12, 3),
(19, 'pepito 10', 'perez 10', '0000-00-00', 1, '1010101010', 'email.prueba@gmail.com', 2147483647, 13, 1),
(20, 'pepito 2', 'perez 2', '1992-10-16', 2, '2222222222', 'email.prueba@gmail.com', 2147483647, 5, 2),
(21, 'pepito 3', 'perez 3', '1993-10-16', 2, '3333333333', 'email.prueba@gmail.com', 2147483647, 6, 3),
(22, 'pepito 4', 'perez 4', '1994-10-16', 2, '4444444444', 'email.prueba@gmail.com', 2147483647, 7, 1),
(23, 'pepito 5', 'perez 5', '1995-10-16', 2, '5555555555', 'email.prueba@gmail.com', 2147483647, 8, 2),
(24, 'pepito 6', 'perez 6', '1996-10-16', 2, '6666666666', 'email.prueba@gmail.com', 2147483647, 9, 3),
(25, 'pepito 7', 'perez 7', '1997-10-16', 2, '7777777777', 'email.prueba@gmail.com', 2147483647, 10, 1),
(26, 'pepito 8', 'perez 8', '1998-10-16', 2, '8888888888', 'email.prueba@gmail.com', 2147483647, 11, 2),
(27, 'pepito 9', 'perez 9', '1999-10-16', 2, '9999999999', 'email.prueba@gmail.com', 2147483647, 12, 3),
(28, 'pepito 10', 'perez 10', '0000-00-00', 2, '1010101010', 'email.prueba@gmail.com', 2147483647, 13, 1),
(29, 'asdsadasdsad', 'asdasdadasdasd', '2019-11-01', 2, '6216159', 'asd', 59951, 32, 1),
(30, 'asd', 'asd', '2019-11-15', 2, '4569871', 'asd', 25631478, 32, 2),
(31, 'brian', 'brian', '2019-11-01', 1, '1047971220', 'brian@brian.com', 2147483647, 32, 1),
(32, 'papaya', 'papaya', '2019-11-01', 2, '45456', '456456', 456456, 34, 1),
(33, 'papaye', 'papaye', '2019-11-08', 2, '5416516', 'papaye', 45358, 34, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rooms`
--

CREATE TABLE `rooms` (
  `id` int(11) NOT NULL,
  `name` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `cost` int(11) DEFAULT '0',
  `tax` int(11) DEFAULT '0',
  `location` int(11) DEFAULT NULL,
  `state` int(11) DEFAULT '1',
  `id_type` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `rooms`
--

INSERT INTO `rooms` (`id`, `name`, `cost`, `tax`, `location`, `state`, `id_type`) VALUES
(1, 'Habitaciòn 1', 1000, 19, 1, 1, 4),
(2, 'Habitaciòn 222', 222, 222, 2, 0, 4),
(3, 'Habitaciòn 3', 3000, 19, 3, 1, 3),
(4, 'Habitaciòn 4', 4000, 19, 4, 1, 4),
(5, 'Habitaciòn 5', 5000, 19, 5, 1, 1),
(6, 'Habitaciòn 6', 6000, 19, 1, 1, 2),
(7, 'Habitaciòn 7', 7000, 19, 2, 1, 3),
(8, 'Habitaciòn 8', 8000, 19, 3, 1, 4),
(9, 'Habitaciòn 9', 9000, 19, 4, 1, 1),
(10, 'Habitaciòn 10', 10000, 19, 5, 1, 2),
(11, '123', 123, 123, 1, 1, 4),
(12, '11111', 11111, 11111, 2, 1, 2),
(13, 'bars', 1000, 5, 3, 1, 3),
(14, 'barsta', 5000, 5, 3, 1, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `types`
--

CREATE TABLE `types` (
  `id` int(11) NOT NULL,
  `name` varchar(50) COLLATE utf8_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `types`
--

INSERT INTO `types` (`id`, `name`) VALUES
(1, 'Sencilla'),
(2, 'Normal'),
(3, 'Doble'),
(4, 'Grupal');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `type_doc`
--

CREATE TABLE `type_doc` (
  `id` int(11) NOT NULL,
  `name` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `type_doc`
--

INSERT INTO `type_doc` (`id`, `name`) VALUES
(1, 'Cedula de ciudadania'),
(2, 'Cedula de extranjeria'),
(3, 'Tarjeta de identidad');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `agents`
--
ALTER TABLE `agents`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `city`
--
ALTER TABLE `city`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `gender`
--
ALTER TABLE `gender`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `hotels`
--
ALTER TABLE `hotels`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `hotel_room`
--
ALTER TABLE `hotel_room`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_hotel` (`id_hotel`),
  ADD KEY `fk_room` (`id_room`);

--
-- Indices de la tabla `reservations`
--
ALTER TABLE `reservations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_id_city` (`id_city`),
  ADD KEY `fk_id_contact` (`id_contact`),
  ADD KEY `fk_id_hotel_room` (`id_hotel_room`);

--
-- Indices de la tabla `reservation_detail`
--
ALTER TABLE `reservation_detail`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_id_type_doc` (`id_type_doc`),
  ADD KEY `fk_id_reservation` (`id_reservation`);

--
-- Indices de la tabla `rooms`
--
ALTER TABLE `rooms`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_type` (`id_type`),
  ADD KEY `fk_location` (`location`);

--
-- Indices de la tabla `types`
--
ALTER TABLE `types`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `type_doc`
--
ALTER TABLE `type_doc`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `agents`
--
ALTER TABLE `agents`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `city`
--
ALTER TABLE `city`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `contact`
--
ALTER TABLE `contact`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT de la tabla `gender`
--
ALTER TABLE `gender`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `hotels`
--
ALTER TABLE `hotels`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `hotel_room`
--
ALTER TABLE `hotel_room`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=121;

--
-- AUTO_INCREMENT de la tabla `reservations`
--
ALTER TABLE `reservations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT de la tabla `reservation_detail`
--
ALTER TABLE `reservation_detail`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT de la tabla `rooms`
--
ALTER TABLE `rooms`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `types`
--
ALTER TABLE `types`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `type_doc`
--
ALTER TABLE `type_doc`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `hotel_room`
--
ALTER TABLE `hotel_room`
  ADD CONSTRAINT `fk_hotel` FOREIGN KEY (`id_hotel`) REFERENCES `hotels` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_room` FOREIGN KEY (`id_room`) REFERENCES `rooms` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `reservations`
--
ALTER TABLE `reservations`
  ADD CONSTRAINT `fk_id_city` FOREIGN KEY (`id_city`) REFERENCES `city` (`id`),
  ADD CONSTRAINT `fk_id_contact` FOREIGN KEY (`id_contact`) REFERENCES `contact` (`id`),
  ADD CONSTRAINT `fk_id_hotel_room` FOREIGN KEY (`id_hotel_room`) REFERENCES `hotel_room` (`id`);

--
-- Filtros para la tabla `reservation_detail`
--
ALTER TABLE `reservation_detail`
  ADD CONSTRAINT `fk_id_reservation` FOREIGN KEY (`id_reservation`) REFERENCES `reservations` (`id`),
  ADD CONSTRAINT `fk_id_type_doc` FOREIGN KEY (`id_type_doc`) REFERENCES `type_doc` (`id`);

--
-- Filtros para la tabla `rooms`
--
ALTER TABLE `rooms`
  ADD CONSTRAINT `fk_location` FOREIGN KEY (`location`) REFERENCES `city` (`id`),
  ADD CONSTRAINT `fk_type` FOREIGN KEY (`id_type`) REFERENCES `types` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
