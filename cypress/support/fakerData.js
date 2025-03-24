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


export function generateRandomDate() {
  const date = faker.date.past(); // Generate random past date
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
  const year = String(date.getFullYear()).slice(-2);
  return `${day}-${month}-${year}`;
}