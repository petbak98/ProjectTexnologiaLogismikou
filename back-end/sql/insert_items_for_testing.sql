# -- Users for testing -- #
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
`authority_id`,
`last_new_incident`)
VALUES
(1,
"john@controlroom.test",
"Giannis",
"Katsaros",
0.0,
0.0,
"$2a$10$YHVRGOscVYeMbIjkf5qRg.lYqB43jrIh1baf2SyeI5K3DfL8Mvj4G",
"john",
5,
NOW());

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
`authority_id`,
`last_new_incident`)
VALUES
(2,
"george@controlroom.test",
"George",
"Kalogeropoulos",
0.0,
0.0,
"$2a$10$s6eYUX4r7t80R8I5aYWhOODPIbp8EzRtH/JvttnKgwqVOtsgVOXVa",
"george",
5,
NOW());

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
`authority_id`,
`last_new_incident`)
VALUES
(3,
"petros@controlroom.test",
"Petros",
"Bakolas",
0.0,
0.0,
"$2a$10$Nd3aIiIwdzSMDbDNenKaJu8LdFrNiVQ4s/xnTkoJSm8lH7lS0A67m",
"petros",
1,
NOW());

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
`authority_id`,
`last_new_incident`)
VALUES
(4,
"user@controlroom.test",
"Jack",
"Huffer",
0.0,
0.0,
"$2a$10$DIOnWbT.WcqH8CPRuoYp7uQced5z0Y3cxEeAHoVgBGRZfCQpNJW6K",
"jack",
2,
NOW());

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
`authority_id`,
`last_new_incident`)
VALUES
(5,
"julia@controlroom.test",
"Amelia",
"",
0.0,
0.0,
"$2a$10$QdFAfMU9KO1L6UKsjs3SpO2F.8zVyQ90lzg5Hd6VJfYXIsImstsIu",
"julia",
3,
NOW());

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
`authority_id`,
`last_new_incident`)
VALUES
(6,
"mpampinos@controlroom.test",
"Mpampis",
"Rampinatou",
0.0,
0.0,
"$2a$10$QdFAfMU9KO1L6UKsjs3SpO2F.8zVyQ90lzg5Hd6VJfYXIsImstsIu",
"mpampis",
4,
NOW());

INSERT INTO `controlroom`.`user_roles`
(`user_id`,
`role_id`)
VALUES
(6,
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
`authority_id`,
`last_new_incident`)
VALUES
(7,
"controlroom@controlroom.test",
"ControlRoom",
"",
0.0,
0.0,
"$2a$10$QdFAfMU9KO1L6UKsjs3SpO2F.8zVyQ90lzg5Hd6VJfYXIsImstsIu",
"controlroom",
5,
NOW());

INSERT INTO `controlroom`.`user_roles`
(`user_id`,
`role_id`)
VALUES
(7,
2);

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
`authority_id`,
`last_new_incident`)
VALUES
(8,
"sonia@controlroom.test",
"Sonia",
"Tzouvara",
0.0,
0.0,
"$2a$10$Nd3aIiIwdzSMDbDNenKaJu8LdFrNiVQ4s/xnTkoJSm8lH7lS0A67m",
"sonia",
1,
NOW());

INSERT INTO `controlroom`.`user_roles`
(`user_id`,
`role_id`)
VALUES
(8,
1);


#-----------------------------#
# -- Incidents for Testing -- #
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
`longitude`,
`created_timestamp`)
VALUES
('Νίκος',
'Παπαδόπουλος',
'ΑΚ876523',
'6985647387',
'20',
7,
NOW(),
"Μίση ώρα πριν ξεκίνησε",
"Χαλάνδρι",
'15234',
1,
"Καμάρι",
'Ληστεία σε κατάστημα',
1,
1,
38.023274,
23.823120,
NOW());

INSERT INTO controlroom.incident_user (incident_id, user_id) 
VALUES (1,3);
INSERT INTO controlroom.incident_user (incident_id, user_id) 
VALUES (1,8);


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
`longitude`,
`created_timestamp`)
VALUES
('Κώστας',
'Μιχαλόπουλος',
'ΑΚ765849',
'6875463729',
'4',
7,
NOW(),
"",
"Φιλοθέη",
'15237',
2,
"Βαλαωρίτου",
'Φωτιά σε κολόνα της ΔΕΗ',
1,
2,
38.021582,
23.788294,
NOW());

INSERT INTO controlroom.incident_user (incident_id, user_id) 
VALUES (2,4);

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
`longitude`,
`created_timestamp`)
VALUES
('Χάρης',
'Παπαιώαννου',
'AK123456',
'2101234567',
'72',
7,
NOW(),
"",
"Χαιδάρη",
'15238',
1,
"Μάνης",
'Διάρρηξη σε διαμέρισμα',
3,
1,
38.020801,
23.648489,
NOW());

INSERT INTO controlroom.incident_user (incident_id, user_id) 
VALUES (3,3);

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
`longitude`,
`created_timestamp`)
VALUES
('Γιώργος',
'Παττακός',
'AΙ234356',
'2101235467',
'296',
7,
NOW(),
"Sihello 1234",
"Ασπρόπυργος",
'19300',
1,
"Αγίου Γεωργίου",
'Διάσωση',
4,
4,
38.078865,
23.567624,
NOW());

INSERT INTO controlroom.incident_user (incident_id, user_id) 
VALUES (4,6);

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
`longitude`,
`created_timestamp`)
VALUES
('Σοφία',
'Μπεκάτου',
'AΗ345456',
'6951324578',
'28',
7,
NOW(),
"",
"Τρίπολη",
'22100',
1,
"Χατζηχρήστου",
'Μεθυσμένος κάνει φασαρία',
5,
1,
37.511206,
22.376736,
NOW());


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
`longitude`,
`created_timestamp`)
VALUES
('Αγγελική',
'Καρπά',
'ΑΗ789421',
'6987451296',
'27',
7,
NOW(),
"Kalispera sas",
"Κόρινθος",
'20100',
1,
"Κολοκοτρώνη",
'Πυρκαγιά',
2,
2,
37.938556,
22.930802,
NOW());

INSERT INTO controlroom.incident_user (incident_id, user_id) 
VALUES (6,4);

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
`longitude`,
`created_timestamp`)
VALUES
('Ιορδάνης',
'Σούβουλος',
'ΑΚ586319',
'694523695',
'13',
7,
NOW(),
"",
"Σταυρούπολη",
'56430',
1,
"Σπετσών",
'Έμφραγμα',
3,
3,
40.669569,
22.933516,
NOW());

INSERT INTO controlroom.incident_user (incident_id, user_id) 
VALUES (7,5);

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
`longitude`,
`created_timestamp`)
VALUES
('Μαρία',
'Παπαδοπούλου',
'AK457125',
'6998744581',
'2',
7,
NOW(),
"",
'Αλεξανδρούπολη',
'68100',
1,
'Κροβίλων',
'Εξαφάνιση κοντά σε ακτή',
1,
4,
40.852439,
25.875244,
NOW());


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
`longitude`,
`created_timestamp`)
VALUES
('Γιάννης',
'Αναστασίου',
'AK598741',
'695871548',
'',
7,
NOW(),
"",
"Νάξος",
'843000',
1,
"Φιλοτίου",
'Παρενόχληση',
1,
1,
37.101102,
25.377860,
NOW());

INSERT INTO controlroom.incident_user (incident_id, user_id) 
VALUES (9,8);


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
`longitude`,
`created_timestamp`)
VALUES
('Elisabeth',
'Parker',
'OI599856',
'9455225984',
'',
7,
NOW(),
"",
"Σαντορινη",
'84700',
1,
"Θήρα",
'Κατάρρευση κτηρίου',
2,
2,
36.419487,
25.432747,
NOW());



#---------------------------#
# -- Reports for testing -- #
INSERT INTO `controlroom`.`reports`
(`user_id`,
`incident_id`,
`last_updated`,
`content`)
VALUES
(3,
1,
NOW(),
'Nothing happened');

INSERT INTO `controlroom`.`reports`
(`user_id`,
`incident_id`,
`last_updated`,
`content`)
VALUES
(8,
1,
NOW(),
'Τίποτα ιδιαίτερο');

INSERT INTO `controlroom`.`reports`
(`user_id`,
`incident_id`,
`last_updated`,
`content`)
VALUES
(4,
2,
NOW(),
'Panic everywhere');

INSERT INTO controlroom.incident_statistics (deaths, injuries, incident_id) 
VALUES (5,16,2);
