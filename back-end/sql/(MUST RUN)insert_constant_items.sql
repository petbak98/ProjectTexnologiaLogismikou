# -- Stathera pedia -- #
INSERT INTO controlroom.roles(name) VALUES('ROLE_USER');
INSERT INTO controlroom.roles(name) VALUES('ROLE_MODERATOR');
INSERT INTO controlroom.roles(name) VALUES('ROLE_ADMIN');

INSERT INTO controlroom.incident_importance (importance_name) VALUES ('ΚΑΜΙΑ');
INSERT INTO controlroom.incident_importance (importance_name) VALUES ('ΜΙΚΡΗ');
INSERT INTO controlroom.incident_importance (importance_name) VALUES ('ΜΕΤΡΙΑ');
INSERT INTO controlroom.incident_importance (importance_name) VALUES ('ΜΕΓΑΛΗ');
INSERT INTO controlroom.incident_importance (importance_name) VALUES ('ΕΚΤΑΚΤΗ');

INSERT INTO controlroom.incident_authority (authority_name) VALUES ('ΑΣΤΥΝΟΜΙΑ');
INSERT INTO controlroom.incident_authority (authority_name) VALUES ('ΠΥΡΟΣΒΕΣΤΙΚΗ');
INSERT INTO controlroom.incident_authority (authority_name) VALUES ('ΕΚΑΒ');
INSERT INTO controlroom.incident_authority (authority_name) VALUES ('ΛΗΜΕΝΙΚΟ');
INSERT INTO controlroom.incident_authority (authority_name) VALUES ('ΚΕΝΤΡΟ ΕΛΕΓΧΟΥ');

INSERT INTO controlroom.incident_status (status_name) VALUES (0);
INSERT INTO controlroom.incident_status (status_name) VALUES (1);