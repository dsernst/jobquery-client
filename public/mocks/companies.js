var companies = [];

for(var i = 1; i < 35; i++){
  var date = faker.Date.recent(5);
  companies.push({
    _id: i,
    name: faker.Company.companyName(),
    briefDescription: faker.Company.catchPhrase(),
    longDescription: faker.Lorem.paragraph(),
    address: faker.Address.streetAddress(),
    city: 'San Francisco',
    state: 'CA',
    country: 'United States',
    geo: [],
    media: [],
    links: [],
    opportunities: [],
    createdAt: date,
    updatedAt: date
  });
}

var company = companies[0];