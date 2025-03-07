-- MySQL Script generated by MySQL Workbench
-- Mon Mar  3 12:49:42 2025
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema Prenotazioni
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema Prenotazioni
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Prenotazioni` DEFAULT CHARACTER SET utf8 ;
USE `Prenotazioni` ;

-- -----------------------------------------------------
-- Table `Prenotazioni`.`Utente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Prenotazioni`.`Utente` (
  `Email` VARCHAR(80) NOT NULL,
  `Nome` VARCHAR(45) NOT NULL,
  `Cognome` VARCHAR(45) NOT NULL,
  `Password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`Email`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Prenotazioni`.`Tipo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Prenotazioni`.`Tipo` (
  `idTipo` INT NOT NULL AUTO_INCREMENT,
  `Descrizione` VARCHAR(80) NOT NULL,
  PRIMARY KEY (`idTipo`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Prenotazioni`.`Fascia Oraria`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Prenotazioni`.`Fascia Oraria` (
  `Da` TIME NOT NULL,
  `A` TIME NOT NULL,
  PRIMARY KEY (`Da`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Prenotazioni`.`Prenotazione`
-- -----------------------------------------------------
-- Creazione della tabella Prenotazione
CREATE TABLE IF NOT EXISTS `Prenotazioni`.`Prenotazione` (
  `Id_Prenotazione` INT AUTO_INCREMENT PRIMARY KEY,
  `Data` DATE NOT NULL,
  `Tipo_idTipo` INT NOT NULL,
  `Fascia_Oraria_Da` TIME NOT NULL,
  `Utente_Email` VARCHAR(80) NOT NULL,
  INDEX `fk_Prenotazione_Tipo1_idx` (`Tipo_idTipo` ASC),
  INDEX `fk_Prenotazione_FasciaOraria1_idx` (`Fascia_Oraria_Da` ASC),
  INDEX `fk_Prenotazione_Utente1_idx` (`Utente_Email` ASC),
  CONSTRAINT `fk_Prenotazione_Tipo1`
    FOREIGN KEY (`Tipo_idTipo`)
    REFERENCES `Prenotazioni`.`Tipo` (`idTipo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Prenotazione_FasciaOraria1`
    FOREIGN KEY (`Fascia_Oraria_Da`)
    REFERENCES `Prenotazioni`.`Fascia Oraria` (`Da`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Prenotazione_Utente1`
    FOREIGN KEY (`Utente_Email`)
    REFERENCES `Prenotazioni`.`Utente` (`Email`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
) ENGINE = InnoDB;

-- Creazione dell'indice FULLTEXT separatamente
ALTER TABLE `Prenotazioni`.`Prenotazione`
ADD FULLTEXT INDEX `ft_Utente_Email` (`Utente_Email`);


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
