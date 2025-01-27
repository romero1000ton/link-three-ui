# Libraries Architecture

Link C4 basic: https://drive.google.com/file/d/1TPw_Z7mDZeWoTKk1pioEdFk0o7wJWDKp/view?usp=sharing 

This project has the next library

I use clean architecture and layered architecture see my UML image added in root project

- @link-three-services/link-three-api
- @link-three-services/link-three-core
- @link-three-services/link-three-view
- @link-three-services/link-three


you can run watchers

-gulp watch-link-three-api:angular
-gulp watch-link-three-view:angular
-gulp watch-link-three-core:angular
-gulp watch-link-three:angular

This way I have separated the logic from the view and it is also open to other integrations thanks to smart and dumb components.

# SCSS

A basic scss structure was created using defined mixins and themes as well as colours and variations.
review (common-styles)

As you can see in my diagram I am using Backend as service (Bass) to simulate a BE and not using storages, with that I can log in and register users as many times as I need.

current user created to login:

email: admin@yopmail.com
password: sesame

# Login Logout

As you can see in my diagram I am using Backend as service (Bass) to simulate a BE and not using storages, with that I can log in and register users as many times as I need.

current user created to login:

email: admin@yopmail.com
password: sesame


I still need to configure the guards but with the Sesion Service it will be easy to do it.

#What is missing

I have a robust and extensible framework and only require the following to complete the functional requirements.

- Activate Guards (I have the guards but I need to use the session service to control them.)
- state management (I already have everything configured but I need to create a simple state that may not even require effects).

