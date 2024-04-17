-- bats
-- Ruth Kistler
-- CS 361


-- disable foreign key checks and auto-commit
SET FOREIGN_KEY_CHECKS=0;
SET AUTOCOMMIT = 0;


--
-- replace/create table 'Species'
--

CREATE OR REPLACE TABLE Species (
  idSpecies INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY (idSpecies)
);


--
-- replace/create table 'Persons'
--

CREATE OR REPLACE TABLE Persons (
  idPerson INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY (idPerson)
);


--
-- insert data into 'Species'
--
INSERT INTO Species
  (name)
VALUES
  ('Hypsugo savii'),
  ('Pipistrellus pipistrellus'),
  ('Pipistrellus kuhlii'),
  ('Plecotus macrobullaris'),
  ('Nyctalus noctula'),
  ('Myotis bechsteinii'),
  ('Myotis myotis'),
  ('Myotis mystacinus'),
  ('Myotis crypticus');
