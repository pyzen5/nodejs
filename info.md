Initializing node application: $ npm init
Basic Routing:  app.METHOD(PATH, HANDLER)
- can have multiple handlers

Router
- Route Methods: post, get, put, delete, all
    - all: used to load middleware functions at a path for all HTTP request methods.
    - next: to pass control to next handler
- Route Paths: strings, string patterns, or regular expressions.
    - c?: c is optional
    - a+b: start with a end with b
    - a*b: need to check
    - a(bc)?d: multi-letter optional
    - /a/: regex matching
- Router Parameters
    - /user/:userId         {userdId: ''}
    - /flight/:from-:to     {from:'', to: ''}
    - /:from.:to            {from:'', to: ''}
- Router Handlers
    - can have muliple handlers, acting as middleware
    - next() / next('route') 
    - array of handlers

Serving static files
- function signature: express.static(root, [options])
- serve the static folder: app.use(express.static('public'))
- virtual path:   app.use('/static', express.static('public'))


express.Router
- create modular, mountable route handlers.

# Middleware
Middleware functions are functions that have access to the request object (req), the response object (res), and the next function in the application’s request-response cycle.
- Execute any code.
- Make changes to the request and the response objects.
- End the request-response cycle.
- Call the next middleware in the stack.

