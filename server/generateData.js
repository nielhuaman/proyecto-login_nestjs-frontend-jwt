var faker = require('faker');
var database = { enrollments: []};

for (var i = 1; i<= 50; i++) {
  database.enrollments.push({
    id: i,
    codalumno: faker.random.number(),
    fechahora_registro: faker.time.recent(),
    periodo_academico: faker.random.words(),
  });
}

console.log(JSON.stringify(database));