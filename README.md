### Arium 

Arium is a health promoting app that keeps track of your daily water consumption, furthers universal access to clean water, and provides an engaging user experience. 

## Background and Overview

The benefits of drinking a healthy amount of water on a daily basis are numerous and often underappreciated.  Water is vital to the functioning of almost every system in the human body and without water we would simply perish.   

Arium's primary goal is to promote the healthy consumption of water by not only our users but also by people all across the world. When a user consumes a glass of water and records it in their log, we will donate an equivalent amount of water to a person living in poverty and in need of clean water.

In addition to health promotion and fighting global thirst we also endevour to provide an enjoyable user experience.  Similar to a bonsai or aquarium our app creates a virtual world for our users to care for through their water recording actions.  We hope that the world they are nourishing brings to mind both their own bodies and the people around the world they are helping.


# Functionality & MVP

* Users can track how much water they consume.
* The amount of water users consume will affect the amount of donations towards a clean water charity. 
* Users will have daily goals that they can adjust. Streaks of met daily goals will be tracked.
* Each user has a terrarium, which will have 3 major stages of health, which are affected by a user's water consumption and whether or not they meet their daily goals.

## Bonus Features

* Animation based on user interactions (e.g. mouse hover)
* Daily animation based on your current progress towards your daily goal **(done!)**
* Browsing other users' terrariums **(done!)**
* Custom terrarium decorations available via direct donations


# Technologies & Technical Challenges
## Technologies Used:
### Backend:
1. MongoDB
2. Express.js
3. Mongoose
### Frontend:
1. React
2. Node.js
3. Axios
### Hosting:
1. Heroku

## Technical challenges:
One of the technological challenges we anticipate is keeping track of time. On a daily basis, a user's water consumption will be logged throughout the day and compared against daily goals. Larger timescales could include weekly and monthly goals. The consumption vs. goals comparison will drive the real-time visualization of a user's terrarium. Decisions will need to be made on defining the cutoff time for each time period(daily, weekly, monthly). Related to that is the decision of what data to keep between time periods in order to faithfully yet efficiently represent the history of a user's activities. 

The visualization of a user's terrarium will be another major challenge. Different components will have to be layered to create the illusion of the same terrarium changing over time in response to the user's activities. Each of these components will need to keep track of the health of the terrarium to trigger their appearance or a change in their visual properties. The timing of the Redux rendering in response to state changes will need to be properly managed to ensure a smooth and engaging user experience that is not disrupted by erratic element displacement or flickering. 

# Group Members

Satomi Dean, Michael Dean, Jason Li, Andy Huang
