import {test ,expect} from '@playwright/test';



test('API Testing - POST',async({request}) => {
const response = await request.post('https://jsonplaceholder.typicode.com/posts',{
  data: {
    title: 'Heello World',
    userId: 5,
  }
});
expect(response.status()).toBe(201);
const responseBody = await response.json();
expect(responseBody.title).toBe('Heello World');
console.log(responseBody);


});

test('API Testing - PUT', async({request}) => {
const response = await request.put('https://jsonplaceholder.typicode.com/posts/1',{
  data: {
    title: 'Updated Title',
    userId: 5,
  }   
});
expect(response.status()).toBe(200);
});




test('API Testing -GET ', async({request}) => {
const response = await request.get('https://jsonplaceholder.typicode.com/todos/1');
expect(response.status()).toBe(200);
const responseBody = await response.json();
expect(responseBody.length).toBe(200);
expect(responseBody[0].title).toBe("Updated Title");
console.log(responseBody);




});