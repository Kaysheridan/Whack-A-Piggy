# Whack a Piggy #

## Deployment Link ##
--- 
- [link](https://kaysheridan.github.io/Whack-A-Piggy/)

## Description ##
---
- The aim of this game is to create a simple but fun interactive adtaptation of Whack a Mole. 
- It will have a count down clock with the aim of whacking as many piggies as possible in the time frame, each piggy hit will increase your score by 5 the game ends once the count down timer hits 0. 
- The game also has a start button and when the game ends has the option to restart the game to play again. 
- This project will include HTML, CSS and Javascript with the main focus being on using JavaScript to make the game interactive. 
- Target audience for this game is for people looking for a light and fun game which tests reflexes on how fast you can correctly click a piggy.

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

## Typeography ##
- The font style I chose is Gloria Hallelujah with a back up of Sans Serif. GH was imported from Google fonts. I choose this style as I felt it kept the game light and fun.

## Imagery ## 
- The images have been take from adobe stock as I have an account with them.
- <img width="365" alt="Screenshot 2022-02-27 at 19 03 23" src="https://user-images.githubusercontent.com/95246821/155896115-66bab030-8384-4159-aba3-f88170f3adb4.png">
- 

## Wire Frame ##
---
- The start page Wire frame of the game https://balsamiq.cloud/s4oxsno/px38y2x
- This is a very basic wire frame for how the game will look https://balsamiq.cloud/s4oxsno/px38y2x/rB19D
- The end game wire frame of the game https://balsamiq.cloud/s4oxsno/px38y2x/r9D16
- screen shots of the game wireframes, the main game wire frame has changed slightly as i have decided to only put the game title on the game start overlay page and have reduced the number of circles to 9.
-  
<img width="595" alt="Screenshot 2022-03-09 at 21 01 22" src="https://user-images.githubusercontent.com/95246821/157535928-458456e2-6fb3-40be-a6a6-565bb8a3c3e1.png">
<img width="683" alt="Screenshot 2022-03-09 at 21 01 59" src="https://user-images.githubusercontent.com/95246821/157535976-ca2416d9-bccc-4eb3-9d15-09f8b383c372.png">
<img width="504" alt="Screenshot 2022-03-09 at 21 01 35" src="https://user-images.githubusercontent.com/95246821/157535991-73d4c43d-e34c-4088-9e21-d6b75cafda0d.png">

## Features developed ##
---
- A timer which allowes the user 90 seconds before the game ends. 
- A random moving image that the user must try click in time to increment their score.
- A score counter which allows the user to see their score. 
- A start game button which begins the game once clicked. 
- A restart game button which starts the game again once clicked.

## Future Features to be implemented ##
- An option for the player to put in a username.
- A leader board which shows the highest score 
- A personal leader board for the user to see their own personal highest score 
- levels which make the piggy move faster and with a bigger amount of circle options.

## Tecnoloigies Used ##
---
- HTML5 
- CSS
- JavaScript 

## Frameworks, libraries and programs used ##
---
- [Google Fonts](https://fonts.google.com/)
- [slack Overflow]()
- [Coolers]()
- [balsamiq]()
- [w3Schools]()
- 


## Testing ##
---
- The W3C Markup Validator and W3C CSS Validator Services are going to be used to validate every page of the project to ensure there are no syntax errors in the project.

- JavaScript will be tested with: 

## Further Testing ##
---

## Development bugs ##
---
- Issue with getting the count down timer to begin once the start game button has been clicked, this issue has now been resovled I was calling the countDownTimer at the wrong time. 
- Another development bug I ran into was when I clicked the restart button to call the startGame() function again it would add a new event listener each time which was multiplying the score wit each restart. To fix this I added the eventEventListeners to their own function and called it on page load as the rest of the elements manipulate the DOM to hide and show containers.

## Deployment ##
---

## Credits ##
---


