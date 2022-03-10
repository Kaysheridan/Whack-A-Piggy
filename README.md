# Whack a Piggy #

## Deployment Link ##
--- 
- [link](https://kaysheridan.github.io/Whack-A-Piggy/)

## Description ##
---
- The aim of this game is to create a simple but fun interactive adaptation of Whack a Mole. 
- It will have a count down clock with the aim of whacking as many piggies as possible in the time frame, each piggy hit will increase your score by 5 the game ends once the count down timer hits 0. 
- The game also has a start button and when the game ends has the option to restart the game to play again. 
- This project will include HTML, CSS and Javascript with the main focus being on using JavaScript to make the game interactive. 
- Target audience for this game is for people looking for a light and fun game which tests reflexes on how fast you can correctly click a piggy.

## Game Screenshots ## 
- <img width="1121" alt="Screenshot 2022-03-10 at 21 02 44" src="https://user-images.githubusercontent.com/95246821/157754264-3620a78a-e4c3-41a6-8cc7-87ab8c4e2c99.png">
- <img width="1218" alt="Screenshot 2022-03-10 at 21 03 06" src="https://user-images.githubusercontent.com/95246821/157754281-50af3e82-34f5-46f3-8aee-daddf0f72866.png">
- <img width="1227" alt="Screenshot 2022-03-10 at 23 02 10" src="https://user-images.githubusercontent.com/95246821/157769697-0fe93ff5-135d-4767-bb84-6b1a3200c0ed.png">

## User Experience ##
---
### As a site owner ####
- I want the game to be easy to use with clear istructions 
- I want the user to enjoy playing the game 
- I want the game to be entertaining
- I want to be able to upgrade the game as my knowledge increases

### As a site user ###
- I want a simple fun game 
- I want to understand the game 
- I want the game to be engaging and interesting

## Design ## 
---
### Colour scheme ###
- The main colours I have picked for the site are #404E5C,(charcole) is used for the text colour.
- #FF86C8(persian pink) is the main game colour used for the background of the start over lay page, the main game page and the end game over lay page.
- and #FFFBFE(snow) which is used for the game buttons.
- I have picked these colours using Coolers and have imported them from this site. 
- These colours work well together and I think they will make the game bright and fun. 

## Typography ##
- The font style I chose is Gloria Hallelujah with a back up of Sans Serif. GH was imported from Google fonts. I choose this style as I felt it kept the game light and fun.

## Imagery ## 
- The images have been take from adobe stock as I have an account with them.
- <img width="365" alt="Screenshot 2022-02-27 at 19 03 23" src="https://user-images.githubusercontent.com/95246821/155896115-66bab030-8384-4159-aba3-f88170f3adb4.png">

## Wire Frame ##
---
- The start page Wire frame of the game https://balsamiq.cloud/s4oxsno/px38y2x
- This is a very basic wire frame for how the game will look https://balsamiq.cloud/s4oxsno/px38y2x/rB19D
- The end game wire frame of the game https://balsamiq.cloud/s4oxsno/px38y2x/r9D16
- screen shots of the game wireframes, the main game wire frame has changed slightly as i have decided to only put the game title on the game start overlay page and have reduced the number of circles to 9. 
- During the game development I realised the game is a tad bit simple to have a 90 second timer so I have decided to reduce the time to 30 seconds. 
-  
<img width="595" alt="Screenshot 2022-03-09 at 21 01 22" src="https://user-images.githubusercontent.com/95246821/157535928-458456e2-6fb3-40be-a6a6-565bb8a3c3e1.png">
<img width="683" alt="Screenshot 2022-03-09 at 21 01 59" src="https://user-images.githubusercontent.com/95246821/157535976-ca2416d9-bccc-4eb3-9d15-09f8b383c372.png">
<img width="504" alt="Screenshot 2022-03-09 at 21 01 35" src="https://user-images.githubusercontent.com/95246821/157535991-73d4c43d-e34c-4088-9e21-d6b75cafda0d.png">

## Features developed ##
---
- A timer which allowes the user 30 seconds before the game ends. 
- A random moving image that the user must try click in time to increment their score.
- A score counter which allows the user to see their score. 
- A start game button which begins the game once clicked. 
- A restart game button which starts the game again once clicked.

## Future Features to be implemented ##
- An option for the player to put in a username.
- A leader board which shows the highest score 
- A personal leader board for the user to see their own personal highest score 
- Levels which make the piggy move faster and with a bigger amount of circle options.
- Audio when the piggy is correctly clicked .
- An image and audio when an incorrect circle is clicked.
- Fix known bug listed below with a cannot click funtion 

## Tecnoloigies Used ##
---
- HTML5 
- CSS
- JavaScript 

## Frameworks, libraries and programs used ##
---
- [Google Fonts](https://fonts.google.com/)
- [Stack Overflow](https://stackoverflow.com/)
- [Coolers](https://coolors.co/)
- [Balsamiq](https://balsamiq.cloud/s4oxsno/projects)
- [w3Schools](https://www.w3schools.com/css/default.asp)
- [Adobe stock](https://stock.adobe.com/)


## Testing ##
---
- The W3C Markup Validator and W3C CSS Validator Services are going to be used to validate every page of the project to ensure there are no syntax errors in the project.
- Images of the validated HTML and CSS 
- JavaScript was tested using jshint  
- A test was also carried out on lighthouse using chrome dev tools screeshot below 
<img width="1143" alt="Screenshot 2022-03-10 at 20 38 01" src="https://user-images.githubusercontent.com/95246821/157750530-cfdf67f7-14ca-45ed-ac2f-224c926117bd.png">
<img width="1414" alt="Screenshot 2022-03-10 at 20 42 48" src="https://user-images.githubusercontent.com/95246821/157751110-7005975c-acab-4143-890c-cba762e099f6.png">
<img width="469" alt="Screenshot 2022-03-10 at 21 21 00" src="https://user-images.githubusercontent.com/95246821/157756774-d0d6e7c5-8429-4acd-a6cb-b628de042e5f.png">

## Further Testing ##
---
- TO NOTE this project is not suited for Firefox and Edge, and may not work correctly on breakpoints not listed below.
- I carried out testing for this project using mainly chrome dev tools to check and see what devices it is responsive on. This project was built for a laptop originally then tablets, mobiles and then larger screens. While writing the js code I used the console.log to continuiously test my JS. I tested the functionality of the game after each function was add in JS to ensure functionality had not changed. 

- Most testing for the resonsive aspect of the game was done using chrome dev tools, a physical iPhone 11, a Samsung s21, Laptop and Ipad. 
- Dev tools was used to test:
- iPhone 5/5 SE
- iPhone 6/7/8
- iPhone 6/7/8 plus 
- iPhone X
- Ipad 
- Ipad pro
- Small laptop (1280 x 802)
- 24 inch screen (1920 x 1080)
- 1440p screen (2560 x 1440)

## Development bugs ##
---
- Issue with getting the count down timer to begin once the start game button has been clicked, this issue has now been resovled I was calling the countDownTimer at the wrong time. 
- Another development bug I ran into was when I clicked the restart button to call the startGame() function again it would add a new event listener each time which was multiplying the score wit each restart. To fix this I added the eventEventListeners to their own function and called it on page load as the rest of the elements manipulate the DOM to hide and show containers.

### Known bugs ###
- A user can double click a piggy to increment their score if they are quick enough, I am aware this bug exists and have tried resolving it by trying to implement a cannot click function but I have not been able to get this to work correctly and I do not have enough time on hand to rectify this bug. 


## Deployment ##
---

## Credits ##
---


