exports.handler = async (event, context) => {
  const name = event.queryStringParameters.name || "Buddy";

  console.log(`hello!`);
  console.log(`event: ${JSON.stringify(event)}`);
  console.log(`context: ${JSON.stringify(context)}`);

  return {
    statusCode: 200,
    body: `Hello, ${name}`,
  };
};
