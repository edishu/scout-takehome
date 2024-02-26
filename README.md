## Scout take home

### How to test:

1. Install Node.JS version greater than 18.0.0
1. Clone the repository `git clone git@github.com:edishu/scout-takehome.git`
2. Install npm dependenies `npm install`
3. Navigate to the main folder

#### Question 1.
Run: `node src/q1/q1.js`

Logged result:
```ts
[
  { name: 'item1', isExpired: false },
  { name: 'item4', isExpired: false },
  { name: 'item5', isExpired: false },
  { name: 'item2', isExpired: true },
  { name: 'item3', isExpired: true }
]
```

#### Question 2.
Run: `node src/q2/q2.js`

Logged result:
```ts
{
  "animals": {
    "dogs": {
      "poodle": {},
      "labrador": {},
      "hound": {}
    },
    "cats": {
      "tabby": {},
      "siamese": {}
    },
    "birds": {
      "parrot": {
        "grey": {}
      }
    }
  },
  "plants": {
    "trees": {}
  }
}
```


#### Question 4.
Run: `npm run dev`
- Express server will start on port 3005
- Use a client like postman to fire post request:

POST http://localhost:3005/get-first-name
body: {"lastName": "Dasgupta"} 

Response:
```ts
Kausik
```

<img width="676" alt="image" src="https://github.com/edishu/scout-takehome/assets/37514088/917b1cbb-638b-4936-89eb-b8b93cf95c77">

#### Question 5.
1. Navigate to directory q5
2. Open files in the browser:
   - first.html
   - second.html
   - third.html
   - fourth.html
   - fifth.html
