
CREATE TABLE koala_holla (
	  id SERIAL PRIMARY KEY NOT NULL,
    name character varying(64),
    sex character varying(1),
    age integer,
    ready_for_transfer boolean,
    notes character varying(128)
);

INSERT INTO koala_holla (name, sex, age, ready_for_transfer, notes) VALUES ('Scotty', 'M', 4, TRUE, 'Born in Guatemala');
INSERT INTO koala_holla (name, sex, age, ready_for_transfer, notes) VALUES ('Jean', 'F', 4, TRUE, 'Allergic to log of lava');
INSERT INTO koala_holla (name, sex, age, ready_for_transfer, notes) VALUES ('Ororo', 'F', 4, FALSE, 'Loves listening to Paula(Abdul)');
INSERT INTO koala_holla (name, sex, age, ready_for_transfer, notes) VALUES ('Logan', 'M', 4, FALSE, 'Love the sauna');
INSERT INTO koala_holla (name, sex, age, ready_for_transfer, notes) VALUES ('Chdarlie', 'M', 4, TRUE, 'favorite band is Nirvana');
INSERT INTO koala_holla (name, sex, age, ready_for_transfer, notes) VALUES ('Betsy', 'F', 4, TRUE, 'Has a pet iguana');
