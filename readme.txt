--Readme document for *author(s)*, *email(s)*, *UCI id(s)*--
Kenny Jue, kdjue@uci.edu, 61581615
Jason Bugallon, jbugallo@uci.edu 85806059

1. How many assignment points do you believe you completed (replace the *'s with your numbers)?

10/10
- 1/1 The ability to log overnight sleep
- 1/1 The ability to log sleepiness during the day
- 1/1 The ability to view these two categories of logged data
- 2/2 Either using a native device resource or backing up logged data
- 2/2 Following good principles of mobile design
- 2/2 Creating a compelling app
- 1/1 A readme which explains how these features were implemented and their design rationale

2. How long, in hours, did it take you to complete this assignment?
Around 12 hours throughout the course of working on it bit by bit in the past 2 weeks.


3. What online resources did you consult when completing this assignment? (list specific URLs)
Ionic Picker Tutorial
    https://www.youtube.com/watch?v=bEjw--B8jS0
Ionic Storage Tutorial
    https://www.youtube.com/watch?v=h_IhS8QQjUA
Ionic Docs
    https://ionicframework.com/docs/
    https://ionicacademy.com/ionic-ui-theming/
CSS Docs
    https://www.w3schools.com/css/

4. What classmates or other individuals did you consult as part of this assignment? What did you discuss?
We consulted each other as we were partners.


5. Is there anything special we need to know in order to run your code?
npm install to install all dependencies then ionic lab. Also the styling for iOS is not good as we styled only for Android


--Aim for no more than two sentences for each of the following questions.--


6. Did you design your app with a particular type of user in mind? If so, whom?
Not in particular, but we did design it for ourselves, so the closest would be college students or people in our age range (early 20s)


7. Did you design your app specifically for iOS or Android, or both?
For Android, as iOS styling was inconsistent compared to Android.


8. How can a person log overnight sleep in your app? Why did you choose to support logging overnight sleep in this way?
The way it works is when the user presses the START button it will bring up a modal with a timer and when the user wakes
up and presses the END SLEEP button it will then log the date/time the person pressed the start button and when they pressed the end sleep button.
We chose to support logging it this way because it makes more sense to let the system handle keeping track of time for you
rather than manually inputting the date/time of when you slept and woke up.

9. How can a person log sleepiness during the day in your app? Why did you choose to support logging sleepiness in this way?
To log sleepiness during the day in our app they must navigate to the sleepiness menu then click the button to bring up
a selector that will present them with an option to choose what their sleepiness level (1-7), then they have to press the
confirmation button to successfully log it according to the date/time they pressed the confirmation button. We chose to do it
this way rather than having the user input the date/time along with the sleepiness level because it makes more sense to
log the current time with the sleepiness inputted rather than allowing the user to input some other time that isn't the current
time, this also prevents users from inputting the wrong date/time for sleep and wake date/time as it does not even present the user
these selections as it does it for them.


10. How can a person view the data they logged in your app? Why did you choose to support viewing logged data in this way?
To view the data they logged the user must press "logs" from the menu, the logs page is separated into night and day where the
night view will show the user their overnight sleep logs while the day view will show them their sleepiness during the day logs.
We chose to log it this way because it makes more sense to separate the data into these two categories rather than display
them all at once. Because we did it this way the user will not be able to input the wrong date/time as it will log the current date/time.


11. Which feature choose--using a native device resource, backing up logged data, or both?
We chose backing up logged data


12. If you used a native device resource, what feature did you add? How does this feature change the app's experience for a user?
We didn't use a native device resource


13. If you backed up logged data, where does it back up to?
We used Ionic Data Storage in order to store our data


14. Did you add any "extra" features, such as other data to log, the ability to edit or delete data, or changes to the styling of the app? If so, what did you add? How do these add to the experience of the app?
We added the ability to delete data as it serves as an "Uh-oh" option if the user accidentally logged incorrectly, allowing the user to not worry about it much.
Along with the ability to delete data, when a user clicks the delete button it will prompt/alert them before actually deleting the data which
prevents users from accidentally deleting data that they did not wish to delete. This is a form of error prevention
We changed the color theme of our app to a dark theme rather than a default light theme since we intend for users to log overnight
sleep during the night as a dark theme is easy on the eyes especially at night.
We added toast notifications when a user has successfully logged overnight sleep or logged sleepiness during the day and also for when a
user has deleted a log. These toast notifications are a great way to give the user system feedback in order to inform them whether the
performed action was successful or not.

