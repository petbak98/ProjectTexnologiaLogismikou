INSERT INTO incident (incident_id,authority,caller_first_name,caller_last_name, caller_national_id, caller_phone, city, coordinator_username, region, status, street, title, importance, notes)
VALUES (1,'patsoi','petros','bakolas','AK123456', '69802314567', 'Halandri','petbak98' , 'Attiki', 'pending', 'Olumpoy 60', 'Pyrkagia', 1, 'mplamplampla'),
	   (2,'patsoi2','petros2','bakolas2','AK1234562', '698023145672', 'Halandri2', 'petbak982', 'Attiki2', 'pending2', 'Olumpoy 602', 'Pyrkagia2', 2, 'mplelmplelmplel');
       
INSERT INTO user(id, active, password, permissions, roles, username)
VALUES(1, 1, 'lol', 'admin', 'patsos', 'petbak98'), 
		(2, 1, 'lel', 'admin2', 'patsos2', 'petbak982');

INSERT INTO report(report_id, content, incident_incident_id, user_id)
values (1, 'trolololo', 1, 1), 
		(2, 'trelelelel', 1, 2);

INSERT INTO incident_users(incident_id, user_id)
values(1,1),(2,2);