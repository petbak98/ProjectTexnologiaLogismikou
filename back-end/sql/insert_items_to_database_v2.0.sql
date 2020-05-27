INSERT INTO controlroom.incident_importance (importance_name) VALUES ('ΠΟΛΥ ΜΕΓΑΛΗΣ ΣΗΜΑΣΙΑΣ');
INSERT INTO controlroom.incident_importance (importance_name) VALUES ('ΜΕΓΑΛΗΣ ΣΗΜΑΣΙΑΣ');
INSERT INTO controlroom.incident_importance (importance_name) VALUES ('ΜΕΤΡΙΑΣ ΣΗΜΑΣΙΑΣ');
INSERT INTO controlroom.incident_importance (importance_name) VALUES ('ΜΙΚΡΗΣ ΣΗΜΑΣΙΑΣ');
INSERT INTO controlroom.incident_importance (importance_name) VALUES ('ΑΣΗΜΑΝΤΟ');

INSERT INTO controlroom.incident_authority (authority_name) VALUES ('ΑΣΤΥΝΟΜΙΑ');
INSERT INTO controlroom.incident_authority (authority_name) VALUES ('ΠΥΡΟΣΒΕΣΤΙΚΗ');
INSERT INTO controlroom.incident_authority (authority_name) VALUES ('ΕΚΑΒ');
INSERT INTO controlroom.incident_authority (authority_name) VALUES ('ΛΗΜΕΝΙΚΟ');

INSERT INTO controlroom.incident_status (status_name) VALUES ('ΑΝΑΜΕΝΟΝΤΑΣ ΟΡΓΑΝΑ');
INSERT INTO controlroom.incident_status (status_name) VALUES ('ΥΠΟ ΕΞΕΛΙΞΗ');
INSERT INTO controlroom.incident_status (status_name) VALUES ('ΕΠΙΛΥΘΗΚΕ - ΠΕΡΙΜΕΝΟΝΤΑΣ REPORTS');
INSERT INTO controlroom.incident_status (status_name) VALUES ('ΠΕΡΙΜΕΝΟΝΤΑΣ ΤΟ CONTROL-CENTER');
INSERT INTO controlroom.incident_status (status_name) VALUES ('ΕΚΛΕΙΣΕ');

INSERT INTO `controlroom`.`user`
(`active`,
`password`,
`permissions`,
`roles`,
`username`,
`latitude`,
`longitude`,
`authority_id`,
`first_name`,
`last_name`
)
VALUES
(1,
12345,
"",
"USER",
"john",
0.0,
0.0,
1,
"giannis",
"mpampinou");

INSERT INTO `controlroom`.`user`
(`active`,
`password`,
`permissions`,
`roles`,
`username`,
`latitude`,
`longitude`,
`authority_id`,
`first_name`,
`last_name`)
VALUES
(1,
12345,
"",
"USER",
"peter",
0.0,
0.0,
2,
"petros",
"karkosis");

INSERT INTO `controlroom`.`incidents`
(`caller_first_name`,
`caller_last_name`,
`caller_national_id`,
`caller_phone`,
`number`,
`user_id`,
`last_updated`,
`notes`,
`region`,
`postal_code`,
`status_id`,
`street`,
`title`,
`importance_id`,
`authority_id`,
`latitude`,
`longitude`)
VALUES
('ΝΙΚΟΣ',
'pap',
'greek',
'2100000000',
'5',
1,
NOW(),
"Simeiosh",
"Attiki",
'15234',
1,
"Sapfous",
'Listeia',
1,
1,
0.0,
0.0);


INSERT INTO `controlroom`.`reports`
(`user_id`,
`incident_id`,
`last_updated`,
`content`)
VALUES
(1,
1,
NOW(),
'Nothing happened');

INSERT INTO controlroom.incident_user (incident_id, user_id) VALUES (1,1);

INSERT INTO `controlroom`.`incidents`
(`caller_first_name`,
`caller_last_name`,
`caller_national_id`,
`caller_phone`,
`number`,
`user_id`,
`last_updated`,
`notes`,
`region`,
`postal_code`,
`status_id`,
`street`,
`title`,
`importance_id`,
`authority_id`,
`latitude`,
`longitude`)
VALUES
('kostas',
'mix',
'greek',
'2100000000',
'6',
1,
NOW(),
"nope note",
"Attiki",
'15234',
2,
"Sapfous",
'FWTIA',
1,
2,
0.0,
0.0);

INSERT INTO `controlroom`.`reports`
(`user_id`,
`incident_id`,
`last_updated`,
`content`)
VALUES
(1,
1,
NOW(),
'Panic everywhere');

INSERT INTO controlroom.incident_user (incident_id, user_id) VALUES (2,1);

INSERT INTO controlroom.incident_statistics (deaths, injuries, incident_incident_id) VALUES (0,16,1);
