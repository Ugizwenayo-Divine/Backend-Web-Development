CREATE TABLE familyTable(
id SERIAL PRIMARY KEY,
firstName varchar(30),
lastName varchar(30),
age integer,
sex varchar(15),
address varchar(30));

INSERT INTO familyTable(firstName,lastName,age,sex,address)
VALUES
('ugizwenayo','divine',23,'female','kamembe'),
('kagabo','faustin',24,'male','Gisozi');