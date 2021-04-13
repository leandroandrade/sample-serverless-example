'use strict';

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

module.exports.heroes = async (event) => {
    const heroes = [
        {id:1, name: 'Batman'},
        {id:2, name: 'Superman'},
    ]
    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                result: heroes,
            },
            null,
            2
        ),
    };

    // Use this code if you don't use the http event with the LAMBDA-PROXY integration
    // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

module.exports.postHeroes = async (event) => {
    console.log(event.body);

    return {
        statusCode: 201,
        body: JSON.stringify(
            {
                result: "Hero created",
            },
            null,
            2
        ),
    };

    // Use this code if you don't use the http event with the LAMBDA-PROXY integration
    // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

