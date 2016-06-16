/* 
 * Copyright (C) 2016 Alan
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
/**
 * Author:  Alan
 * Created: 16-jun-2016
 */

-- phpMyAdmin SQL Dump
-- version 4.4.10
-- http://www.phpmyadmin.net
--
-- Servidor: localhost:8889
-- Tiempo de generación: 16-06-2016 a las 20:33:00
-- Versión del servidor: 5.5.42
-- Versión de PHP: 7.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Base de datos: `Reef`
--
CREATE DATABASE IF NOT EXISTS `Reef` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `Reef`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `CatBalq`
--

CREATE TABLE `CatBalq` (
  `id` int(10) unsigned NOT NULL,
  `nombre` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `CatBalq`
--

INSERT INTO `CatBalq` (`id`, `nombre`) VALUES
(1, 'Pálido'),
(2, 'Parcialmente blanqueado'),
(3, 'Blanqueado');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Enfermedad`
--

CREATE TABLE `Enfermedad` (
  `id` int(10) unsigned NOT NULL,
  `nombre` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `Enfermedad`
--

INSERT INTO `Enfermedad` (`id`, `nombre`) VALUES
(1, 'Banda negra'),
(2, 'Banda amarilla'),
(3, 'Banda roja'),
(4, 'Banda blanca'),
(5, 'Plaga blanca'),
(6, 'Hiperplasmia'),
(7, 'Mordidas de pez loro'),
(8, 'Mordida de damisela'),
(9, 'Línea oscura'),
(10, 'Mancha oscura'),
(11, 'Salud comprometida'),
(12, 'Necrosis'),
(13, 'Lesión por aletas'),
(14, 'Lesión no identificada'),
(15, 'Mancha amarilla');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Especie`
--

CREATE TABLE `Especie` (
  `id` int(10) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `TipCoral_id` int(10) unsigned DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `Especie`
--

INSERT INTO `Especie` (`id`, `nombre`, `TipCoral_id`) VALUES
(1, 'Acropora cervicornis', 2),
(2, 'Acropora palmata', 1),
(3, 'Acropora prolifera', NULL),
(4, 'Acropora sp.', 9),
(5, 'Agaricia agaricites', 7),
(6, 'Agaricia fragilis', 7),
(7, 'Agaricia grahamae', 7),
(8, 'Agaricia humilis', 7),
(9, 'Agaricia lamarcki', 7),
(10, 'Agaricia sp.', 7),
(11, 'Agaricia tenuifolia', 8),
(12, 'Agaricia undata', 7),
(13, 'Colpophyllia natans', 4),
(14, 'Dendrogyra cylindrus', 4),
(15, 'Diadema antillarum', NULL),
(16, 'Dichocoenia stokesii', 4),
(17, 'Diploria clivosa', 4),
(18, 'Diploria labyrinthiformis', 4),
(19, 'Diploria sp.', 4),
(20, 'Diploria strigosa', 4),
(21, 'Eusmilia fastigiata', 4),
(22, 'Favia fragum', 4),
(23, 'Helioceris cucullata', 7),
(24, 'Isophyllastrea rigida', 4),
(25, 'Isophyllia sinuosa', 4),
(26, 'Madracis decactis', 6),
(27, 'Madracis formosa', 6),
(28, 'Madracis mirabillis', 6),
(29, 'Madracis pharensis', 6),
(30, 'Madracis sp.', 6),
(31, 'Manicina areolata', 4),
(32, 'Meandrina meandrites', 4),
(33, 'Millepora alcicornis', 10),
(34, 'Millepora complanata', 10),
(35, 'Millepora sp.', 10),
(36, 'Montastraea annularis', 5),
(37, 'Montastraea cavernosa', 5),
(38, 'Montastraea faveolata', 5),
(39, 'Montastraea franksi', 5),
(40, 'Montastraea sp.', 5),
(41, 'Mussa angulosa', 11),
(42, 'Mycetophyllia aliciae', 4),
(43, 'Mycetophyllia ferox', 4),
(44, 'Mycetophyllia lamarckiana', 4),
(45, 'Mycetophyllia reesi', 4),
(46, 'Mycetophyllia sp.', 4),
(47, 'Oculina varicosa', 11),
(48, 'Porites astreoides', 6),
(49, 'Porites divaricata', 6),
(50, 'Porites furcata', 6),
(51, 'Porites porites', 6),
(52, 'Porites sp.', 6),
(53, 'Scolymia sp.', 11),
(54, 'Siderastrea radians', 3),
(55, 'Siderastrea siderea', 3),
(56, 'Siderastrea sp.', 3),
(57, 'Solenastrea bournoni', 12),
(58, 'Solenastrea hyades', 12),
(59, 'Stephanocoenia intersepts', 12);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Foto`
--

CREATE TABLE `Foto` (
  `id` bigint(8) unsigned NOT NULL,
  `Post_id` bigint(8) unsigned NOT NULL,
  `ruta` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Observador`
--

CREATE TABLE `Observador` (
  `id` int(10) unsigned NOT NULL,
  `nombre` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `Observador`
--

INSERT INTO `Observador` (`id`, `nombre`) VALUES
(1, 'Jorge Cruz'),
(2, 'Alan Espinosa'),
(3, 'Baruch Figueroa');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Perfil`
--

CREATE TABLE `Perfil` (
  `id` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `Perfil`
--

INSERT INTO `Perfil` (`id`, `nombre`) VALUES
(1, 'Usuario Registrado'),
(2, 'Administrador');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Post`
--

CREATE TABLE `Post` (
  `id` bigint(8) unsigned NOT NULL,
  `Usuario_id` int(10) NOT NULL,
  `Observador_id` int(10) unsigned NOT NULL,
  `TipCoral_id` int(10) unsigned NOT NULL,
  `Especie_id` int(10) NOT NULL,
  `Sector_id` int(10) unsigned NOT NULL,
  `SubSector_id` int(10) unsigned NOT NULL,
  `fecha_tiempo` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `comentarios` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `Post`
--

INSERT INTO `Post` (`id`, `Usuario_id`, `Observador_id`, `TipCoral_id`, `Especie_id`, `Sector_id`, `SubSector_id`, `fecha_tiempo`, `comentarios`) VALUES
(1, 1, 2, 7, 8, 1, 2, '2016-06-14 05:00:00', 'esta baliendo berga la bida'),
(2, 2, 1, 7, 9, 2, 5, '2016-06-15 21:07:44', 'que mal pedo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Post_has_CatBalq`
--

CREATE TABLE `Post_has_CatBalq` (
  `Post_id` bigint(8) unsigned NOT NULL,
  `CatBalq_id` int(10) unsigned NOT NULL,
  `por` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `Post_has_CatBalq`
--

INSERT INTO `Post_has_CatBalq` (`Post_id`, `CatBalq_id`, `por`) VALUES
(1, 1, 5),
(1, 2, 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Post_has_Enfermedad`
--

CREATE TABLE `Post_has_Enfermedad` (
  `Post_id` bigint(8) unsigned NOT NULL,
  `Enfermedad_id` int(10) unsigned NOT NULL,
  `por` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `Post_has_Enfermedad`
--

INSERT INTO `Post_has_Enfermedad` (`Post_id`, `Enfermedad_id`, `por`) VALUES
(1, 3, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Sector`
--

CREATE TABLE `Sector` (
  `id` int(10) unsigned NOT NULL,
  `nombre` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `Sector`
--

INSERT INTO `Sector` (`id`, `nombre`) VALUES
(1, 'Isla Contoy'),
(2, 'Arrecife Islache'),
(3, 'Arrecife el Cabezo'),
(4, 'Punta Nizuc'),
(5, 'Yalku'),
(6, 'Media Luna'),
(7, 'Akumal Norte'),
(8, 'Akumal Sur'),
(9, 'Bahía Príncipe'),
(10, 'Chemuyil'),
(11, 'Xcacel-Xcacelito'),
(12, 'La Esperanza');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `SubSector`
--

CREATE TABLE `SubSector` (
  `id` int(10) unsigned NOT NULL,
  `Sector_id` int(10) unsigned NOT NULL,
  `nombre` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `SubSector`
--

INSERT INTO `SubSector` (`id`, `Sector_id`, `nombre`) VALUES
(1, 1, 'Sector1'),
(2, 1, 'Sector2'),
(3, 1, 'Sector3'),
(4, 2, 'Sector1'),
(5, 2, 'Sector2'),
(6, 2, 'Sector3'),
(7, 3, 'Sector1'),
(8, 4, 'Sector1');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `TipCoral`
--

CREATE TABLE `TipCoral` (
  `id` int(10) unsigned NOT NULL,
  `nombre` varchar(45) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `TipCoral`
--

INSERT INTO `TipCoral` (`id`, `nombre`) VALUES
(1, 'Cuerno de alce'),
(2, 'Cuerno de ciervo'),
(3, 'Bola ponchada'),
(4, 'Cerebro'),
(5, 'Montaña'),
(6, 'Dedo'),
(7, 'Plato'),
(8, 'Lechuga'),
(9, 'Ramificado'),
(10, 'Coral de Fuego'),
(11, 'Flor'),
(12, 'Coral Sonrojado');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Usuario`
--

CREATE TABLE `Usuario` (
  `id` int(10) NOT NULL COMMENT 'Para tipoU:   1 = Administrador, 2 = Usuario ',
  `fecha` date NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `apellido` varchar(45) DEFAULT NULL,
  `mail` varchar(45) NOT NULL,
  `pass` varchar(45) NOT NULL,
  `Perfil_id` int(11) NOT NULL,
  `token` varchar(100) DEFAULT NULL,
  `tiempo_token` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `Usuario`
--

INSERT INTO `Usuario` (`id`, `fecha`, `nombre`, `apellido`, `mail`, `pass`, `Perfil_id`, `token`, `tiempo_token`) VALUES
(1, '2016-06-13', 'Alan', 'Espinosa de los Monteros Cuevas', 'alanesp92@hotmail.com', 'centroakumal', 2, 'D7e3Jf4Lds8ALPTT5Bx41jXltCB3jhcMTmpEO1TnlgPdM3HHvCcjClRqc8lfLPWRUC6tsHuNHIplCpU98kAFAi1VgLmaslczgq1', '2016-06-15 18:46:41'),
(2, '2016-06-13', 'Iker', 'Llorens', 'iker.llorens.13@gmail.com', '12345678', 2, '2qvGj8ODHGQkFTXZ8NxPWwHZabSDHpXUnKVBVaz4qZEd89kc490IsVovVqD01ChlFVV3xHOq44cC6lGBR6NwnuB6RMIT31gTRRy', '2016-06-15 18:53:17');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `CatBalq`
--
ALTER TABLE `CatBalq`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `Enfermedad`
--
ALTER TABLE `Enfermedad`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `Especie`
--
ALTER TABLE `Especie`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_Especie_TipCoral1_idx` (`TipCoral_id`);

--
-- Indices de la tabla `Foto`
--
ALTER TABLE `Foto`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_Foto_Post1_idx` (`Post_id`);

--
-- Indices de la tabla `Observador`
--
ALTER TABLE `Observador`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `Perfil`
--
ALTER TABLE `Perfil`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id_UNIQUE` (`id`);

--
-- Indices de la tabla `Post`
--
ALTER TABLE `Post`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_Post_Usuario_idx` (`Usuario_id`),
  ADD KEY `fk_Post_Observador1_idx` (`Observador_id`),
  ADD KEY `fk_Post_TipCoral1_idx` (`TipCoral_id`),
  ADD KEY `fk_Post_Especie1_idx` (`Especie_id`),
  ADD KEY `fk_Post_Sector1_idx` (`Sector_id`),
  ADD KEY `fk_Post_SubSector1_idx` (`SubSector_id`);

--
-- Indices de la tabla `Post_has_CatBalq`
--
ALTER TABLE `Post_has_CatBalq`
  ADD PRIMARY KEY (`Post_id`,`CatBalq_id`),
  ADD KEY `fk_Post_has_CatBalq_CatBalq1_idx` (`CatBalq_id`),
  ADD KEY `fk_Post_has_CatBalq_Post1_idx` (`Post_id`);

--
-- Indices de la tabla `Post_has_Enfermedad`
--
ALTER TABLE `Post_has_Enfermedad`
  ADD PRIMARY KEY (`Post_id`,`Enfermedad_id`),
  ADD KEY `fk_Post_has_Enfermedad_Enfermedad1_idx` (`Enfermedad_id`),
  ADD KEY `fk_Post_has_Enfermedad_Post1_idx` (`Post_id`);

--
-- Indices de la tabla `Sector`
--
ALTER TABLE `Sector`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `SubSector`
--
ALTER TABLE `SubSector`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_SubSector_Sector1_idx` (`Sector_id`);

--
-- Indices de la tabla `TipCoral`
--
ALTER TABLE `TipCoral`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `Usuario`
--
ALTER TABLE `Usuario`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_Usuario_Perfil1_idx` (`Perfil_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `Perfil`
--
ALTER TABLE `Perfil`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT de la tabla `Post`
--
ALTER TABLE `Post`
  MODIFY `id` bigint(8) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT de la tabla `TipCoral`
--
ALTER TABLE `TipCoral`
  MODIFY `id` int(10) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=13;
--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `Especie`
--
ALTER TABLE `Especie`
  ADD CONSTRAINT `fk_Especie_TipCoral1` FOREIGN KEY (`TipCoral_id`) REFERENCES `TipCoral` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `Foto`
--
ALTER TABLE `Foto`
  ADD CONSTRAINT `fk_Foto_Post1` FOREIGN KEY (`Post_id`) REFERENCES `Post` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `Post`
--
ALTER TABLE `Post`
  ADD CONSTRAINT `fk_Post_Especie1` FOREIGN KEY (`Especie_id`) REFERENCES `Especie` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Post_Observador1` FOREIGN KEY (`Observador_id`) REFERENCES `Observador` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Post_Sector1` FOREIGN KEY (`Sector_id`) REFERENCES `Sector` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Post_SubSector1` FOREIGN KEY (`SubSector_id`) REFERENCES `SubSector` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Post_TipCoral1` FOREIGN KEY (`TipCoral_id`) REFERENCES `TipCoral` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Post_Usuario` FOREIGN KEY (`Usuario_id`) REFERENCES `Usuario` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `Post_has_CatBalq`
--
ALTER TABLE `Post_has_CatBalq`
  ADD CONSTRAINT `fk_Post_has_CatBalq_Post1` FOREIGN KEY (`Post_id`) REFERENCES `Post` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Post_has_CatBalq_CatBalq1` FOREIGN KEY (`CatBalq_id`) REFERENCES `CatBalq` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `Post_has_Enfermedad`
--
ALTER TABLE `Post_has_Enfermedad`
  ADD CONSTRAINT `fk_Post_has_Enfermedad_Post1` FOREIGN KEY (`Post_id`) REFERENCES `Post` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Post_has_Enfermedad_Enfermedad1` FOREIGN KEY (`Enfermedad_id`) REFERENCES `Enfermedad` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `SubSector`
--
ALTER TABLE `SubSector`
  ADD CONSTRAINT `fk_SubSector_Sector1` FOREIGN KEY (`Sector_id`) REFERENCES `Sector` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `Usuario`
--
ALTER TABLE `Usuario`
  ADD CONSTRAINT `fk_Usuario_Perfil1` FOREIGN KEY (`Perfil_id`) REFERENCES `Perfil` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
