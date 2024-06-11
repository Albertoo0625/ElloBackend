# ElloBackend

# Getting started

1. Clone this repository with the command below:

## clone repository
```bash
git clone https://github.com/Albertoo0625/ElloBackend.git
```


### Install Dependencies
```bash
npm install
```

### Run The Server
```bash
npm start
```


2. Making Api Calls(ThunderClient Extension Visual Studio Code)

Create a new POST request to the endpoint:
### url
```bash
http://localhost:4000/graphql
```

### Set Content-Type

In the headers section set the Content-Type to application/json
```bash
'Content-Type' : 'application/json'
```

### Set Body

In the body section set the json object to:
```bash
{
  "query": "query Books { books { author coverPhotoURL readingLevel title } }"
}
```

### Finally send the request and receive a response of all the books