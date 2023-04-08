-- MariaDB dump 10.19  Distrib 10.4.27-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: e_bazar
-- ------------------------------------------------------
-- Server version	10.4.27-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admin_role`
--

DROP TABLE IF EXISTS `admin_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `admin_role` (
  `Role_id` varchar(2) NOT NULL,
  `Role_name` varchar(20) NOT NULL,
  PRIMARY KEY (`Role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin_role`
--

LOCK TABLES `admin_role` WRITE;
/*!40000 ALTER TABLE `admin_role` DISABLE KEYS */;
INSERT INTO `admin_role` VALUES ('r1','Admin'),('r2','Manager'),('r3','HR'),('r4','Account'),('r5','Clerk');
/*!40000 ALTER TABLE `admin_role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `admin_user_login`
--

DROP TABLE IF EXISTS `admin_user_login`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `admin_user_login` (
  `User_id` varchar(20) NOT NULL,
  `Password` varchar(100) DEFAULT NULL,
  `Registeron` datetime DEFAULT sysdate(),
  `Status` varchar(8) DEFAULT 'Deactive',
  PRIMARY KEY (`User_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin_user_login`
--

LOCK TABLES `admin_user_login` WRITE;
/*!40000 ALTER TABLE `admin_user_login` DISABLE KEYS */;
INSERT INTO `admin_user_login` VALUES ('10','$2b$10$.xjqoLpnqh0drJJtFW6tu.vfDK0do82YEFHWlJ75Lwwwd6qcVDdOC','2023-03-18 18:31:28','Deactive'),('15','123456789','2023-03-20 13:06:40','Deactive');
/*!40000 ALTER TABLE `admin_user_login` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `admin_user_profile`
--

DROP TABLE IF EXISTS `admin_user_profile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `admin_user_profile` (
  `User_id` varchar(20) NOT NULL,
  `User_name` varchar(20) DEFAULT NULL,
  `Email` varchar(50) DEFAULT NULL,
  `Mobile` varchar(10) DEFAULT NULL,
  `Gender` char(1) DEFAULT NULL CHECK (`Gender` in ('M','F')),
  `Address_line1` varchar(20) NOT NULL,
  `Address_landmark` varchar(20) DEFAULT NULL,
  `State` varchar(20) NOT NULL,
  `City` varchar(20) NOT NULL,
  `Pincode` char(6) NOT NULL,
  `Adhar` char(12) DEFAULT NULL,
  `Profile_photo` varchar(50) DEFAULT NULL,
  `Adhar_photo` varchar(50) DEFAULT NULL,
  `DOB` date DEFAULT NULL,
  `DOJ` date DEFAULT NULL,
  PRIMARY KEY (`User_id`),
  UNIQUE KEY `Email` (`Email`),
  UNIQUE KEY `Adhar` (`Adhar`),
  UNIQUE KEY `Mobile` (`Mobile`),
  CONSTRAINT `admin_user_profile_ibfk_1` FOREIGN KEY (`User_id`) REFERENCES `admin_user_login` (`User_id`),
  CONSTRAINT `fkadminUser_id` FOREIGN KEY (`User_id`) REFERENCES `admin_user_login` (`User_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin_user_profile`
--

LOCK TABLES `admin_user_profile` WRITE;
/*!40000 ALTER TABLE `admin_user_profile` DISABLE KEYS */;
/*!40000 ALTER TABLE `admin_user_profile` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role_assign`
--

DROP TABLE IF EXISTS `role_assign`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `role_assign` (
  `User_id` varchar(20) NOT NULL,
  `Password` varchar(100) DEFAULT NULL,
  `Registeron` datetime DEFAULT sysdate(),
  `Status` varchar(8) DEFAULT 'Deactive',
  `Role_id` varchar(2) DEFAULT NULL,
  PRIMARY KEY (`User_id`),
  KEY `Role_id` (`Role_id`),
  CONSTRAINT `role_assign_ibfk_1` FOREIGN KEY (`User_id`) REFERENCES `admin_user_profile` (`User_id`),
  CONSTRAINT `role_assign_ibfk_2` FOREIGN KEY (`Role_id`) REFERENCES `admin_role` (`Role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role_assign`
--

LOCK TABLES `role_assign` WRITE;
/*!40000 ALTER TABLE `role_assign` DISABLE KEYS */;
/*!40000 ALTER TABLE `role_assign` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-08 13:27:12
