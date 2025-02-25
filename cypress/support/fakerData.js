import { faker } from '@faker-js/faker';

export const testData = {
  username: faker.internet.userName(),
  password: faker.internet.password({ length: 12, memorable: false, mixCase: true, symbols: true }),
  institutionName: faker.company.name(),
  address: faker.location.streetAddress(),
  title: faker.word.noun(),
  name: faker.person.firstName(), // Generates a first name
  qualification: faker.person.jobTitle(), // Generates a random job title
  phone: faker.phone.number(), // Generates a random phone number
  email: faker.internet.email(), // Generates a random email
  title : faker.person.jobType() // Generates a general job type

};
