-- --------------------------------------------------------
-- Host:                         actinid.org
-- Versión del servidor:         10.1.48-MariaDB-0+deb9u2 - Debian 9.13
-- SO del servidor:              debian-linux-gnu
-- HeidiSQL Versión:             12.0.0.6468
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Volcando estructura para tabla AppTF.Announcement
CREATE TABLE IF NOT EXISTS `Announcement` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `id_user` bigint(20) DEFAULT NULL,
  `id_partytype` bigint(20) DEFAULT NULL,
  `id_officialparty` bigint(20) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `locationid` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `externalid` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Announcement1_UN` (`externalid`),
  UNIQUE KEY `Announcement2_UN` (`locationid`,`fecha`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla AppTF.Confirmation
CREATE TABLE IF NOT EXISTS `Confirmation` (
  `partyid` bigint(20) DEFAULT NULL,
  `id` bigint(20) NOT NULL,
  `externalid` bigint(20) DEFAULT NULL,
  `confirmada` bit(1) NOT NULL DEFAULT b'0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla AppTF.Extra
CREATE TABLE IF NOT EXISTS `Extra` (
  `participationid` bigint(20) DEFAULT NULL,
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `extratypeid` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla AppTF.ExtraType
CREATE TABLE IF NOT EXISTS `ExtraType` (
  `extraid` bigint(20) DEFAULT NULL,
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) DEFAULT NULL,
  `puntis` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla AppTF.OfficialParty
CREATE TABLE IF NOT EXISTS `OfficialParty` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `locationid` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `ts` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `externalid` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `OfficialParty_UN` (`externalid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla AppTF.Participation
CREATE TABLE IF NOT EXISTS `Participation` (
  `partyid` bigint(20) DEFAULT NULL,
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `externalid` bigint(20) DEFAULT NULL,
  `userid` bigint(20) DEFAULT NULL,
  `extraid` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla AppTF.Party
CREATE TABLE IF NOT EXISTS `Party` (
  `externalid` bigint(20) DEFAULT NULL,
  `announcementid` bigint(20) DEFAULT NULL,
  `partytypeid` bigint(20) DEFAULT NULL,
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla AppTF.PartyType
CREATE TABLE IF NOT EXISTS `PartyType` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `description` varchar(255) DEFAULT NULL,
  `points` int(11) DEFAULT NULL,
  `externalid` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `PartyType_UN` (`externalid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla AppTF.User
CREATE TABLE IF NOT EXISTS `User` (
  `id` bigint(20) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `apellido1` varchar(255) DEFAULT NULL,
  `apellido2` varchar(255) DEFAULT NULL,
  `puntis` int(11) DEFAULT NULL,
  `ranking` int(11) DEFAULT NULL,
  `awards` int(11) DEFAULT NULL,
  `externalid` bigint(20) NOT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `locationid` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  UNIQUE KEY `User_UN` (`externalid`),
  KEY `User_FK` (`id`),
  CONSTRAINT `User_FK` FOREIGN KEY (`id`) REFERENCES `UserCreds` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla AppTF.UserCreds
CREATE TABLE IF NOT EXISTS `UserCreds` (
  `user` varchar(255) NOT NULL,
  `password` varchar(64) NOT NULL,
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `isadmin` tinyint(1) DEFAULT NULL,
  `invites` smallint(6) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para disparador AppTF.UserCreds_after_insert
SET @OLDTMP_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION';
DELIMITER //
CREATE TRIGGER `UserCreds_after_insert` AFTER INSERT ON `UserCreds` FOR EACH ROW BEGIN
	INSERT INTO USER (id) VALUES (NEW.id);
END;//
DELIMITER ;
SET SQL_MODE=@OLDTMP_SQL_MODE;

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
