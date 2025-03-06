-- Popolamento della tabella `Utente`
INSERT INTO `Prenotazioni`.`Utente` (`Email`, `Nome`, `Cognome`, `Password`) VALUES
('mario.rossi@email.com', 'Mario', 'Rossi', 'password123'),
('luigi.verdi@email.com', 'Luigi', 'Verdi', 'securepass'),
('anna.bianchi@email.com', 'Anna', 'Bianchi', 'annapass'),
('giulia.neri@email.com', 'Giulia', 'Neri', 'giuliapass'),
('paolo.marrone@email.com', 'Paolo', 'Marrone', 'paolopass'),
('sara.blu@email.com', 'Sara', 'Blu', 'sarapass');

-- Popolamento della tabella `Tipo`
INSERT INTO `Prenotazioni`.`Tipo` (`Descrizione`) VALUES
('Visita Medica'),
('Riunione Aziendale'),
('Evento Culturale'),
('Consulenza Finanziaria'),
('Seduta di Fisioterapia'),
('Colloquio di Lavoro');

-- Popolamento della tabella `Fascia Oraria`
INSERT INTO `Prenotazioni`.`Fascia Oraria` (`Da`, `A`) VALUES
('08:00:00', '09:00:00'),
('09:00:00', '10:00:00'),
('10:00:00', '11:00:00'),
('11:00:00', '12:00:00'),
('14:00:00', '15:00:00'),
('15:00:00', '16:00:00'),
('16:00:00', '17:00:00'),
('17:00:00', '18:00:00');

-- Popolamento della tabella `Prenotazione`
INSERT INTO `Prenotazioni`.`Prenotazione` (`Data`, `Tipo_idTipo`, `Fascia_Oraria_Da`, `Utente_Email`) VALUES
('2025-03-10', 1, '09:00:00', 'mario.rossi@email.com'),
('2025-03-10', 2, '09:00:00', 'luigi.verdi@email.com'),
('2025-03-11', 3, '10:00:00', 'anna.bianchi@email.com'),
('2025-03-11', 4, '11:00:00', 'giulia.neri@email.com'),
('2025-03-12', 5, '14:00:00', 'paolo.marrone@email.com'),
('2025-03-12', 6, '15:00:00', 'sara.blu@email.com'),
('2025-03-13', 1, '16:00:00', 'mario.rossi@email.com'),
('2025-03-13', 3, '17:00:00', 'anna.bianchi@email.com'),
('2025-03-14', 2, '09:00:00', 'luigi.verdi@email.com'),
('2025-03-14', 5, '09:00:00', 'giulia.neri@email.com'),
('2025-03-15', 6, '10:00:00', 'paolo.marrone@email.com'),
('2025-03-15', 4, '11:00:00', 'sara.blu@email.com'),
('2025-03-16', 3, '14:00:00', 'mario.rossi@email.com'),
('2025-03-16', 2, '15:00:00', 'luigi.verdi@email.com'),
('2025-03-17', 1, '16:00:00', 'anna.bianchi@email.com'),
('2025-03-01', 1, '09:00:00', 'mario.rossi@email.com'),
('2025-03-01', 2, '10:00:00', 'luigi.verdi@email.com'),
('2025-03-01', 3, '11:00:00', 'anna.bianchi@email.com'),
('2025-03-02', 1, '09:00:00', 'luigi.verdi@email.com'),
('2025-03-02', 2, '10:00:00', 'mario.rossi@email.com'),
('2025-03-02', 3, '11:00:00', 'anna.bianchi@email.com'),
('2025-03-03', 1, '09:00:00', 'anna.bianchi@email.com'),
('2025-03-03', 2, '10:00:00', 'luigi.verdi@email.com'),
('2025-03-03', 3, '11:00:00', 'mario.rossi@email.com'),
('2025-03-04', 1, '09:00:00', 'mario.rossi@email.com'),
('2025-03-04', 2, '10:00:00', 'luigi.verdi@email.com'),
('2025-03-04', 3, '11:00:00', 'anna.bianchi@email.com'),
('2025-03-05', 1, '09:00:00', 'luigi.verdi@email.com'),
('2025-03-05', 2, '10:00:00', 'mario.rossi@email.com'),
('2025-03-05', 3, '11:00:00', 'anna.bianchi@email.com'),
('2025-03-06', 1, '09:00:00', 'anna.bianchi@email.com'),
('2025-03-06', 2, '10:00:00', 'luigi.verdi@email.com'),
('2025-03-06', 3, '11:00:00', 'mario.rossi@email.com'),
('2025-03-07', 1, '09:00:00', 'mario.rossi@email.com'),
('2025-03-07', 2, '10:00:00', 'luigi.verdi@email.com'),
('2025-03-07', 3, '11:00:00', 'anna.bianchi@email.com'),
('2025-03-08', 1, '09:00:00', 'luigi.verdi@email.com'),
('2025-03-08', 2, '10:00:00', 'mario.rossi@email.com'),
('2025-03-08', 3, '11:00:00', 'anna.bianchi@email.com'),
('2025-03-09', 1, '09:00:00', 'anna.bianchi@email.com'),
('2025-03-09', 2, '10:00:00', 'luigi.verdi@email.com'),
('2025-03-09', 3, '11:00:00', 'mario.rossi@email.com'),
('2025-03-10', 1, '09:00:00', 'mario.rossi@email.com'),
('2025-03-10', 2, '10:00:00', 'luigi.verdi@email.com'),
('2025-03-10', 3, '11:00:00', 'anna.bianchi@email.com');
