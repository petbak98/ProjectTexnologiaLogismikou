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
INSERT INTO controlroom.incident_authority (authority_name) VALUES ('ΚΑΜΙΑ');

INSERT INTO controlroom.incident_status (status_name) VALUES (0);
INSERT INTO controlroom.incident_status (status_name) VALUES (1);

INSERT INTO `controlroom`.`user`
(
`user_id`,
`email`,
`first_name`,
`last_name`,
`latitude`,
`longitude`,
`password`,
`username`,
`authority_id`)
VALUES
(1,
"john@controlroom.test",
"Giannis",
"Katsaros",
0.0,
0.0,
"$2a$10$YHVRGOscVYeMbIjkf5qRg.lYqB43jrIh1baf2SyeI5K3DfL8Mvj4G",
"john",
5);

INSERT INTO `controlroom`.`user_roles`
(`user_id`,
`role_id`)
VALUES
(1,
3);

INSERT INTO `controlroom`.`user`
(
`user_id`,
`email`,
`first_name`,
`last_name`,
`latitude`,
`longitude`,
`password`,
`username`,
`authority_id`)
VALUES
(2,
"george@controlroom.test",
"George",
"Kalogeropoulos",
0.0,
0.0,
"$2a$10$s6eYUX4r7t80R8I5aYWhOODPIbp8EzRtH/JvttnKgwqVOtsgVOXVa",
"george",
5);

INSERT INTO `controlroom`.`user_roles`
(`user_id`,
`role_id`)
VALUES
(2,
3);


INSERT INTO `controlroom`.`user`
(
`user_id`,
`email`,
`first_name`,
`last_name`,
`latitude`,
`longitude`,
`password`,
`username`,
`authority_id`)
VALUES
(3,
"petros@controlroom.test",
"Petros",
"Bakolas",
0.0,
0.0,
"$2a$10$Nd3aIiIwdzSMDbDNenKaJu8LdFrNiVQ4s/xnTkoJSm8lH7lS0A67m",
"petros",
1);

INSERT INTO `controlroom`.`user_roles`
(`user_id`,
`role_id`)
VALUES
(3,
1);

INSERT INTO `controlroom`.`user`
(
`user_id`,
`email`,
`first_name`,
`last_name`,
`latitude`,
`longitude`,
`password`,
`username`,
`authority_id`)
VALUES
(4,
"user@controlroom.test",
"Jack",
"Huffer",
0.0,
0.0,
"$2a$10$DIOnWbT.WcqH8CPRuoYp7uQced5z0Y3cxEeAHoVgBGRZfCQpNJW6K",
"jack",
1);

INSERT INTO `controlroom`.`user_roles`
(`user_id`,
`role_id`)
VALUES
(4,
1);

INSERT INTO `controlroom`.`user`
(
`user_id`,
`email`,
`first_name`,
`last_name`,
`latitude`,
`longitude`,
`password`,
`username`,
`authority_id`)
VALUES
(5,
"julia@controlroom.test",
"Amelia",
"",
0.0,
0.0,
"$2a$10$QdFAfMU9KO1L6UKsjs3SpO2F.8zVyQ90lzg5Hd6VJfYXIsImstsIu",
"julia",
1);

INSERT INTO `controlroom`.`user_roles`
(`user_id`,
`role_id`)
VALUES
(5,
1);

INSERT INTO `controlroom`.`user`
(
`user_id`,
`email`,
`first_name`,
`last_name`,
`latitude`,
`longitude`,
`password`,
`username`,
`authority_id`)
VALUES
(7,
"controlroom@controlroom.test",
"ControlRoom",
"",
0.0,
0.0,
"$2a$10$QdFAfMU9KO1L6UKsjs3SpO2F.8zVyQ90lzg5Hd6VJfYXIsImstsIu",
"controlroom",
1);

INSERT INTO `controlroom`.`user_roles`
(`user_id`,
`role_id`)
VALUES
(7,
2);

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
