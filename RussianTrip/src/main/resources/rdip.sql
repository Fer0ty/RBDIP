CREATE TABLE IF NOT EXISTS capitals (
                                        capital_id SERIAL PRIMARY KEY,
                                        capital_name TEXT NOT NULL UNIQUE,
                                        capital_location POINT NOT NULL
);
CREATE TABLE IF NOT EXISTS regions (
                                       region_id SERIAL PRIMARY KEY,
                                       name TEXT NOT NULL UNIQUE,
                                       capital_id INT NOT NULL REFERENCES capitals(capital_id)
    );
INSERT INTO capitals (capital_id,capital_name,capital_location)
VALUES (1,'Maykop',POINT(44.2703285,-139.974208));

INSERT INTO capitals (capital_id,capital_name,capital_location)
VALUES (2,'Gorno-Altaisk',POINT(87.812627,151.075246));

INSERT INTO capitals (capital_id,capital_name,capital_location)
VALUES (3,'Ufa',POINT(-9.3501085,36.293810));

INSERT INTO capitals (capital_id,capital_name,capital_location)
VALUES (4,'Ulan-Ude',POINT(8.835479,36.551006));

INSERT INTO capitals (capital_id,capital_name,capital_location)
VALUES (5,'Makhachkala',POINT(24.057374,136.471136));

INSERT INTO capitals (capital_id,capital_name,capital_location)
VALUES (6,'Donetsk',POINT(32.8156395,81.941877));

INSERT INTO capitals (capital_id,capital_name,capital_location)
VALUES (7,'Magas',POINT(-59.6721215,-154.843616));

INSERT INTO capitals (capital_id,capital_name,capital_location)
VALUES (8,'Nalchik',POINT(-33.734808,23.517057));

INSERT INTO capitals (capital_id,capital_name,capital_location)
VALUES (9,'Elista',POINT(38.2938955,-174.762985));

INSERT INTO capitals (capital_id,capital_name,capital_location)
VALUES (10,'Cherkessk',POINT(9.6912155,61.806120));

INSERT INTO capitals (capital_id,capital_name,capital_location)
VALUES (11,'Petrozavodsk',POINT(-22.413760,129.981257));

INSERT INTO capitals (capital_id,capital_name,capital_location)
VALUES (12,'Syktyvkar',POINT(0.9562065,161.047392));

INSERT INTO capitals (capital_id,capital_name,capital_location)
VALUES (13,'Simferopol',POINT(-2.387924,168.489221));

INSERT INTO capitals (capital_id,capital_name,capital_location)
VALUES (14,'Lugansk',POINT(21.7581305,69.887651));

INSERT INTO capitals (capital_id,capital_name,capital_location)
VALUES (15,'Yoshkar-Ola',POINT(8.454767,150.043869));

INSERT INTO capitals (capital_id,capital_name,capital_location)
VALUES (16,'Saransk',POINT(-75.250742,-89.254915));

INSERT INTO capitals (capital_id,capital_name,capital_location)
VALUES (17,'Yakutsk',POINT(72.0785655,17.495971));

INSERT INTO capitals (capital_id,capital_name,capital_location)
VALUES (18,'Vladikavkaz',POINT(35.251107,125.280330));

INSERT INTO capitals (capital_id,capital_name,capital_location)
VALUES (19,'Kazan',POINT(82.660065,123.966349));

INSERT INTO capitals (capital_id,capital_name,capital_location)
VALUES (20,'Kyzyl',POINT(-66.397697,-74.181978));

INSERT INTO capitals (capital_id,capital_name,capital_location)
VALUES (21,'Izhevsk',POINT(-89.9266095,144.550388));

INSERT INTO capitals (capital_id,capital_name,capital_location)
VALUES (22,'Abakan',POINT(73.3920805,-161.335856));

INSERT INTO capitals (capital_id,capital_name,capital_location)
VALUES (23,'Grozny',POINT(61.1947955,124.432819));

INSERT INTO capitals (capital_id,capital_name,capital_location)
VALUES (24,'Cheboksary',POINT(-41.727265,34.969347));

INSERT INTO capitals (capital_id,capital_name,capital_location)
VALUES (25,'Barnaul',POINT(-37.234558,-97.357580));

INSERT INTO capitals (capital_id,capital_name,capital_location)
VALUES (26,'Chita',POINT(71.5639295,-169.309544));

INSERT INTO capitals (capital_id,capital_name,capital_location)
VALUES (27,'Petropavlovsk-Kamchatsky',POINT(-60.8424215,-176.398898));

INSERT INTO capitals (capital_id,capital_name,capital_location)
VALUES (28,'Krasnodar',POINT(-18.8800705,55.188306));

INSERT INTO capitals (capital_id,capital_name,capital_location)
VALUES (29,'Krasnoyarsk',POINT(0.2901085,158.708286));

INSERT INTO capitals (capital_id,capital_name,capital_location)
VALUES (30,'Permian',POINT(-8.5655095,131.758264));

INSERT INTO capitals (capital_id,capital_name,capital_location)
VALUES (31,'Vladivostok',POINT(-44.167401,-121.493392));

INSERT INTO capitals (capital_id,capital_name,capital_location)
VALUES (32,'Stavropol',POINT(85.849147,-115.434213));

INSERT INTO capitals (capital_id,capital_name,capital_location)
VALUES (33,'Khabarovsk',POINT(7.6027815,49.331822));

INSERT INTO capitals (capital_id,capital_name,capital_location)
VALUES (34,'Blagoveshchensk',POINT(59.187293,-112.096439));

INSERT INTO capitals (capital_id,capital_name,capital_location)
VALUES (35,'Arkhangelsk',POINT(-16.180409,-100.895369));

INSERT INTO capitals (capital_id,capital_name,capital_location)
VALUES (36,'Astrakhan',POINT(43.1982765,-23.733676));

INSERT INTO capitals (capital_id,capital_name,capital_location)
VALUES (37,'Belgorod',POINT(48.4806635,-37.098595));

INSERT INTO capitals (capital_id,capital_name,capital_location)
VALUES (38,'Bryansk',POINT(0.9687935,-146.605519));

INSERT INTO capitals (capital_id,capital_name,capital_location)
VALUES (39,'Vladimir',POINT(66.9075875,163.254880));

INSERT INTO capitals (capital_id,capital_name,capital_location)
VALUES (40,'Volgograd',POINT(67.3005845,164.879485));

INSERT INTO capitals (capital_id,capital_name,capital_location)
VALUES (41,'Vologda',POINT(74.702654,-75.536585));

INSERT INTO capitals (capital_id,capital_name,capital_location)
VALUES (42,'Voronezh',POINT(-79.0606385,-44.207004));

INSERT INTO capitals (capital_id,capital_name,capital_location)
VALUES (43,'Zaporozhye',POINT(-2.301167,-98.152088));

INSERT INTO capitals (capital_id,capital_name,capital_location)
VALUES (44,'Ivanovo',POINT(-70.754809,134.411876));

INSERT INTO capitals (capital_id,capital_name,capital_location)
VALUES (45,'Irkutsk',POINT(-66.4122935,51.530993));

INSERT INTO capitals (capital_id,capital_name,capital_location)
VALUES (46,'Kaliningrad',POINT(33.1530025,73.331379));

INSERT INTO capitals (capital_id,capital_name,capital_location)
VALUES (47,'Kaluga',POINT(-32.573333,174.747846));

INSERT INTO capitals (capital_id,capital_name,capital_location)
VALUES (48,'Kemerovo',POINT(-42.0439545,84.090692));

INSERT INTO capitals (capital_id,capital_name,capital_location)
VALUES (49,'Kirov',POINT(32.4439925,-111.469823));

INSERT INTO capitals (capital_id,capital_name,capital_location)
VALUES (50,'Kostroma',POINT(-73.942816,78.483283));

INSERT INTO capitals (capital_id,capital_name,capital_location)
VALUES (51,'Mound',POINT(-25.5965855,49.672732));

INSERT INTO capitals (capital_id,capital_name,capital_location)
VALUES (52,'Kursk',POINT(-71.6565445,-177.714920));

INSERT INTO capitals (capital_id,capital_name,capital_location)
VALUES (53,'Gatchina',POINT(-5.964463,-82.258648));

INSERT INTO capitals (capital_id,capital_name,capital_location)
VALUES (54,'Lipetsk',POINT(68.9798105,-141.174449));

INSERT INTO capitals (capital_id,capital_name,capital_location)
VALUES (55,'Magadan',POINT(-50.4112695,54.571528));

INSERT INTO capitals (capital_id,capital_name,capital_location)
VALUES (56,'Moscow',POINT(-18.974086,-80.580139));

INSERT INTO capitals (capital_id,capital_name,capital_location)
VALUES (57,'Murmansk',POINT(-30.901561,134.114490));

INSERT INTO capitals (capital_id,capital_name,capital_location)
VALUES (58,'Nizhny Novgorod',POINT(34.796299,69.691839));

INSERT INTO capitals (capital_id,capital_name,capital_location)
VALUES (59,'Velikiy Novgorod',POINT(74.8196425,-23.799205));

INSERT INTO capitals (capital_id,capital_name,capital_location)
VALUES (60,'Novosibirsk',POINT(-84.538188,65.513263));

INSERT INTO capitals (capital_id,capital_name,capital_location)
VALUES (61,'Omsk',POINT(-29.654415,101.171840));

INSERT INTO capitals (capital_id,capital_name,capital_location)
VALUES (62,'Orenburg',POINT(-11.7912255,-50.526351));

INSERT INTO capitals (capital_id,capital_name,capital_location)
VALUES (63,'Eagle',POINT(31.6537875,64.845744));

INSERT INTO capitals (capital_id,capital_name,capital_location)
VALUES (64,'Penza',POINT(-32.054018,-133.356692));

INSERT INTO capitals (capital_id,capital_name,capital_location)
VALUES (65,'Pskov',POINT(-15.658357,-123.521913));

INSERT INTO capitals (capital_id,capital_name,capital_location)
VALUES (66,'Rostov-on-Don',POINT(50.6220305,131.276747));

INSERT INTO capitals (capital_id,capital_name,capital_location)
VALUES (67,'Ryazan',POINT(-6.4625905,-66.273488));

INSERT INTO capitals (capital_id,capital_name,capital_location)
VALUES (68,'Samara',POINT(-70.7257125,77.883800));

INSERT INTO capitals (capital_id,capital_name,capital_location)
VALUES (69,'Saratov',POINT(85.570332,-7.376931));

INSERT INTO capitals (capital_id,capital_name,capital_location)
VALUES (70,'Yuzhno-Sakhalinsk',POINT(-0.018312,57.228312));

INSERT INTO capitals (capital_id,capital_name,capital_location)
VALUES (71,'Ekaterinburg',POINT(-58.540867,-25.742036));

INSERT INTO capitals (capital_id,capital_name,capital_location)
VALUES (72,'Smolensk',POINT(50.997377,14.793561));

INSERT INTO capitals (capital_id,capital_name,capital_location)
VALUES (73,'Tambov',POINT(-21.3736635,-179.348474));

INSERT INTO capitals (capital_id,capital_name,capital_location)
VALUES (74,'Tver',POINT(-80.0156645,-32.179535));

INSERT INTO capitals (capital_id,capital_name,capital_location)
VALUES (75,'Tomsk',POINT(79.1699895,178.830404));

INSERT INTO capitals (capital_id,capital_name,capital_location)
VALUES (76,'Tula',POINT(45.453323,-31.092827));

INSERT INTO capitals (capital_id,capital_name,capital_location)
VALUES (77,'Tyumen',POINT(80.6990655,-96.990322));

INSERT INTO capitals (capital_id,capital_name,capital_location)
VALUES (78,'Ulyanovsk',POINT(60.083137,-69.334939));

INSERT INTO capitals (capital_id,capital_name,capital_location)
VALUES (79,'Kherson',POINT(-63.948931,-15.126323));

INSERT INTO capitals (capital_id,capital_name,capital_location)
VALUES (80,'Chelyabinsk',POINT(49.532982,55.408762));

INSERT INTO capitals (capital_id,capital_name,capital_location)
VALUES (81,'Yaroslavl',POINT(34.494652,-77.718117));

INSERT INTO capitals (capital_id,capital_name,capital_location)
VALUES (82,'c.Moscow',POINT(89.3355315,5.906692));

INSERT INTO capitals (capital_id,capital_name,capital_location)
VALUES (83,'Saint Petersburg',POINT(-25.616362,-66.119457));

INSERT INTO capitals (capital_id,capital_name,capital_location)
VALUES (84,'Sevastopol',POINT(56.147982,-124.182116));

INSERT INTO capitals (capital_id,capital_name,capital_location)
VALUES (85,'Birobidzhan',POINT(30.3152475,-60.437540));

INSERT INTO capitals (capital_id,capital_name,capital_location)
VALUES (86,'Naryan-Mar',POINT(14.3569455,-56.920113));

INSERT INTO capitals (capital_id,capital_name,capital_location)
VALUES (87,'Khanty-Mansiysk',POINT(-22.4099625,-109.460075));

INSERT INTO capitals (capital_id,capital_name,capital_location)
VALUES (88,'Anadyr',POINT(-88.084306,-30.058912));

INSERT INTO capitals (capital_id,capital_name,capital_location)
VALUES (89,'Salekhard',POINT(-87.1918595,33.945380));

INSERT INTO regions (region_id,name,capital_id)
VALUES (1,'Adygea',1);

INSERT INTO regions (region_id,name,capital_id)
VALUES (2,'Altai Republic',2);

INSERT INTO regions (region_id,name,capital_id)
VALUES (3,'Bashkortostan',3);

INSERT INTO regions (region_id,name,capital_id)
VALUES (4,'Buryatia',4);

INSERT INTO regions (region_id,name,capital_id)
VALUES (5,'Dagestan',5);

INSERT INTO regions (region_id,name,capital_id)
VALUES (6,'DPR',6);

INSERT INTO regions (region_id,name,capital_id)
VALUES (7,'Ingushetia',7);

INSERT INTO regions (region_id,name,capital_id)
VALUES (8,'Kabardino-Balkaria',8);

INSERT INTO regions (region_id,name,capital_id)
VALUES (9,'Kalmykia',9);

INSERT INTO regions (region_id,name,capital_id)
VALUES (10,'Karachay-Cherkessia',10);

INSERT INTO regions (region_id,name,capital_id)
VALUES (11,'Karelia',11);

INSERT INTO regions (region_id,name,capital_id)
VALUES (12,'Komi Republic',12);

INSERT INTO regions (region_id,name,capital_id)
VALUES (13,'Republic of Crimea',13);

INSERT INTO regions (region_id,name,capital_id)
VALUES (14,'LPR',14);

INSERT INTO regions (region_id,name,capital_id)
VALUES (15,'Mari El',15);

INSERT INTO regions (region_id,name,capital_id)
VALUES (16,'Mordovia',16);

INSERT INTO regions (region_id,name,capital_id)
VALUES (17,'Yakutia',17);

INSERT INTO regions (region_id,name,capital_id)
VALUES (18,'North Ossetia',18);

INSERT INTO regions (region_id,name,capital_id)
VALUES (19,'Tatarstan',19);

INSERT INTO regions (region_id,name,capital_id)
VALUES (20,'Tyva',20);

INSERT INTO regions (region_id,name,capital_id)
VALUES (21,'Udmurtia',21);

INSERT INTO regions (region_id,name,capital_id)
VALUES (22,'Khakassia',22);

INSERT INTO regions (region_id,name,capital_id)
VALUES (23,'Chechnya',23);

INSERT INTO regions (region_id,name,capital_id)
VALUES (24,'Chuvashia',24);

INSERT INTO regions (region_id,name,capital_id)
VALUES (25,'Altai region',25);

INSERT INTO regions (region_id,name,capital_id)
VALUES (26,'Transbaikal region',26);

INSERT INTO regions (region_id,name,capital_id)
VALUES (27,'Kamchatka Krai',27);

INSERT INTO regions (region_id,name,capital_id)
VALUES (28,'Krasnodar region',28);

INSERT INTO regions (region_id,name,capital_id)
VALUES (29,'Krasnoyarsk region',29);

INSERT INTO regions (region_id,name,capital_id)
VALUES (30,'Perm region',30);

INSERT INTO regions (region_id,name,capital_id)
VALUES (31,'Primorsky Krai',31);

INSERT INTO regions (region_id,name,capital_id)
VALUES (32,'Stavropol region',32);

INSERT INTO regions (region_id,name,capital_id)
VALUES (33,'Khabarovsk region',33);

INSERT INTO regions (region_id,name,capital_id)
VALUES (34,'Amur region',34);

INSERT INTO regions (region_id,name,capital_id)
VALUES (35,'Arhangelsk region',35);

INSERT INTO regions (region_id,name,capital_id)
VALUES (36,'Astrakhan region',36);

INSERT INTO regions (region_id,name,capital_id)
VALUES (37,'Belgorod region',37);

INSERT INTO regions (region_id,name,capital_id)
VALUES (38,'Bryansk region',38);

INSERT INTO regions (region_id,name,capital_id)
VALUES (39,'Vladimir region',39);

INSERT INTO regions (region_id,name,capital_id)
VALUES (40,'Volgograd region',40);

INSERT INTO regions (region_id,name,capital_id)
VALUES (41,'Vologda Region',41);

INSERT INTO regions (region_id,name,capital_id)
VALUES (42,'Voronezh region',42);

INSERT INTO regions (region_id,name,capital_id)
VALUES (43,'Zaporozhye region',43);

INSERT INTO regions (region_id,name,capital_id)
VALUES (44,'Ivanovo region',44);

INSERT INTO regions (region_id,name,capital_id)
VALUES (45,'Irkutsk region',45);

INSERT INTO regions (region_id,name,capital_id)
VALUES (46,'Kaliningrad region',46);

INSERT INTO regions (region_id,name,capital_id)
VALUES (47,'Kaluga region',47);

INSERT INTO regions (region_id,name,capital_id)
VALUES (48,'Kemerovo region',48);

INSERT INTO regions (region_id,name,capital_id)
VALUES (49,'Kirov region',49);

INSERT INTO regions (region_id,name,capital_id)
VALUES (50,'Kostroma region',50);

INSERT INTO regions (region_id,name,capital_id)
VALUES (51,'Kurgan region',51);

INSERT INTO regions (region_id,name,capital_id)
VALUES (52,'Kursk region',52);

INSERT INTO regions (region_id,name,capital_id)
VALUES (53,'Leningrad region',53);

INSERT INTO regions (region_id,name,capital_id)
VALUES (54,'Lipetsk region',54);

INSERT INTO regions (region_id,name,capital_id)
VALUES (55,'Magadan Region',55);

INSERT INTO regions (region_id,name,capital_id)
VALUES (56,'Moscow region',56);

INSERT INTO regions (region_id,name,capital_id)
VALUES (57,'Murmansk region',57);

INSERT INTO regions (region_id,name,capital_id)
VALUES (58,'Nizhny Novgorod Region',58);

INSERT INTO regions (region_id,name,capital_id)
VALUES (59,'Novgorod region',59);

INSERT INTO regions (region_id,name,capital_id)
VALUES (60,'Novosibirsk region',60);

INSERT INTO regions (region_id,name,capital_id)
VALUES (61,'Omsk region',61);

INSERT INTO regions (region_id,name,capital_id)
VALUES (62,'Orenburg region',62);

INSERT INTO regions (region_id,name,capital_id)
VALUES (63,'Oryol Region',63);

INSERT INTO regions (region_id,name,capital_id)
VALUES (64,'Penza region',64);

INSERT INTO regions (region_id,name,capital_id)
VALUES (65,'Pskov region',65);

INSERT INTO regions (region_id,name,capital_id)
VALUES (66,'Rostov region',66);

INSERT INTO regions (region_id,name,capital_id)
VALUES (67,'Ryazan Oblast',67);

INSERT INTO regions (region_id,name,capital_id)
VALUES (68,'Samara Region',68);

INSERT INTO regions (region_id,name,capital_id)
VALUES (69,'Saratov region',69);

INSERT INTO regions (region_id,name,capital_id)
VALUES (70,'Sakhalin region',70);

INSERT INTO regions (region_id,name,capital_id)
VALUES (71,'Sverdlovsk region',71);

INSERT INTO regions (region_id,name,capital_id)
VALUES (72,'Smolensk region',72);

INSERT INTO regions (region_id,name,capital_id)
VALUES (73,'Tambov Region',73);

INSERT INTO regions (region_id,name,capital_id)
VALUES (74,'Tver region',74);

INSERT INTO regions (region_id,name,capital_id)
VALUES (75,'Tomsk region',75);

INSERT INTO regions (region_id,name,capital_id)
VALUES (76,'Tula region',76);

INSERT INTO regions (region_id,name,capital_id)
VALUES (77,'Tyumen region',77);

INSERT INTO regions (region_id,name,capital_id)
VALUES (78,'Ulyanovsk region',78);

INSERT INTO regions (region_id,name,capital_id)
VALUES (79,'Kherson region',79);

INSERT INTO regions (region_id,name,capital_id)
VALUES (80,'Chelyabinsk region',80);

INSERT INTO regions (region_id,name,capital_id)
VALUES (81,'Yaroslavl region',81);

INSERT INTO regions (region_id,name,capital_id)
VALUES (82,'Moscow',82);

INSERT INTO regions (region_id,name,capital_id)
VALUES (83,'Saint Petersburg',83);

INSERT INTO regions (region_id,name,capital_id)
VALUES (84,'Sevastopol',84);

INSERT INTO regions (region_id,name,capital_id)
VALUES (85,'Jewish Autonomous Region',85);

INSERT INTO regions (region_id,name,capital_id)
VALUES (86,'Nenets Autonomous Okrug',86);

INSERT INTO regions (region_id,name,capital_id)
VALUES (87,'Khanty-Mansiysk Autonomous Okrug - Ugra',87);

INSERT INTO regions (region_id,name,capital_id)
VALUES (88,'Chukotka Autonomous Okrug',88);

INSERT INTO regions (region_id,name,capital_id)
VALUES (89,'Yamalo-Nenets Autonomous Okrug',89);

