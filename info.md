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

express.Router
- create modular, mountable route handlers.
