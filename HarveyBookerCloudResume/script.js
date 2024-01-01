// Example JavaScript code in your static site

// Define the API Gateway endpoint URL
const apiEndpoint = 'https://fsdfu8jhkc.execute-api.us-east-1.amazonaws.com/prod';

// Define the data you want to send to your Lambda function
const requestData = {
  CounterID: 'TotalVisitors',
  CounterValue: 10
};

// Make a POST request to the API Gateway endpoint
fetch(apiEndpoint, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(requestData)
})
.then(response => response.json())
.then(data => {
  console.log('Response from Lambda:', data);
})
.catch(error => {
  console.error('Error:', error);
});
