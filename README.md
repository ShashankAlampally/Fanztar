
This project is a component creation service that allows users to select components from different categories and generates an order based on their selections.

## Tools Used 
- **Node.js** : Javascript runtime environment.
- **Express.js** : Web application frmaework for Node.js.
- **jest** : JavaScript testing framework.

## Setup
1. Clone this repository to your local machine
   ```bash
   git clone https://github.com/ShashankAlampally/Fanztar

2. Navigate to the project directory
   ```bash
   cd Fanzter 

3. Install dependencies using npm
   ```bash
   npm install

## Run the code

1. Start the server
   ```bash
   npm start
2. server will start running at 'http://localhost:8000'


### POST '/create':
   Creates an order based on the selected components

### Request Payload : 
```bash
  {
    "components": ["A", "B","C","D","E"]  
  }
```
### Response :
  1. Success (status code 200):
  ```bash
      {
        "order_id": 1,
        "total": 100,
        "parts": ["Screen", "Camera", "Port", "OS", "Body"]
    }
   ```
  2.Error (status code 400):
  ```bash
    {
        { "message": "No component selected from category Screen" },
        { "message": "Component B from category Screen is selected more than once" }
    }
   ```

## Manual Testing :
  1. Used Postman to send POST requests to '/create' API.
  2. Send a POST request with the appropriate payload.
  3. Check the response : 
      * If the response is successful (status 200), the  response will be details containing of orderid , cost and Parts.
      * If there is an error (status 400), the response will be details containing of error.

## Unit Testing :
  1. Run the unit test:
  ```bash
     npx jest 
  ```
  2. The above command executes the files with 'filename'.test.js and executes the test cases mentioned in the file and gives the results.
