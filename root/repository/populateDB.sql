-- Popolamento della tabella `Utente`
INSERT INTO `Prenotazioni`.`Utente` (`Email`, `Nome`, `Cognome`, `Password`) VALUES
('mario.rossi@email.com', 'Mario', 'Rossi', 'password123'),
('luigi.verdi@email.com', 'Luigi', 'Verdi', 'securepass'),
('anna.bianchi@email.com', 'Anna', 'Bianchi', 'annapass');

-- Popolamento della tabella `Tipo`
INSERT INTO `Prenotazioni`.`Tipo` (`Descrizione`) VALUES
('Visita Medica'),
('Riunione Aziendale'),
('Evento Culturale');

-- Popolamento della tabella `Fascia Oraria`
INSERT INTO `Prenotazioni`.`Fascia Oraria` (`Da`, `A`) VALUES
('09:00:00', '10:00:00'),
('10:00:00', '11:00:00'),
('11:00:00', '12:00:00');

-- Popolamento della tabella `Prenotazione`
INSERT INTO `Prenotazioni`.`Prenotazione` (`Data`, `Tipo_idTipo`, `Fascia_Oraria_Da`, `Utente_Email`) VALUES
('2025-03-10', 1, '09:00:00', 'mario.rossi@email.com'),
('2025-03-11', 2, '10:00:00', 'luigi.verdi@email.com'),
('2025-03-12', 3, '11:00:00', 'anna.bianchi@email.com');
