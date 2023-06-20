module.exports = function cors(request, response, next) {
  // const allowedOrigins = [
  //   '*',
  //   'http://localhost:3000',
  // ];

  // const origin = request.get('origin');
  // const isAllowed = allowedOrigins.includes(origin);

  // if (isAllowed) {
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', '*');
  response.setHeader('Access-Control-Allow-Headers', '*');
  response.setHeader('Header-Control-Max-Age', '-1');
  // }

  next();
};
