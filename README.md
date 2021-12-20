# BEAT THE GOALIE

Beat the Goalie is a simple football based game where the aim is to score 10 against the goal keeper before he makes 5 saves.
This an interactive Front-End web application designed using HTML, CSS and JavaScript and intended to inject a little bit of fun in to your day. 
Choose left, middle or right direction and hope the keeper doesnt save your shot. Its a game that can be played by all ages and, as its fully responsive, it can be played on a phone, tablet or computer. 
Play it on the sofa, at the park, on the toilet or even when you're meant to be working. 


![Screens mockup image](https://i.imgur.com/pWgWpzh.png)
## Visit the site at (https://stevemiller7.github.io/Beat-the-goalie/)

## Application Objectives

This game will add a little bit of fun in to your day and is accessible on all devices. Its simple, fun and can be played by all ages. With a winner established in each game it encourages the user back to seek revenge if the goalie bests them.

### New User Benefits

- Good source of innocent fun in a safe environment 
- Can benefit in learning to use computer based games for younger kids
- Fills downtime
- Offers competitive fun against the computer
- Encourages you to think matimatically around percentages, developing the brain

### Returning User Benefits

- Encourges taking time to relax from the stresses of day to day life
- Promotes 'Me time'
- Try to beat previous best winning margin
- Beat your friends best winning margins
- Will keep the kids entertained for a while, giving parents time for a coffee

# Structure of the website 

The site is deigned and styled to be as user friendly as possible. The minimal look is easy to navigate. The 'Win' and 'Lose' images make it easy to recogise that the game has been won and the 'LETS GO AGAIN' button turning green indicates clearly to the user that it is to be pressed to restart the game. 
The overall clarity makes it a good game for all ages and will offer a good user experience. 

## WIREFRAME

![Original site layotu plan](https://i.imgur.com/K06ohh7.png)

Using Adobe Illustrator I created my website plan. I had a good idea of the styling in mind when first imagining the site. Modern, clean lines and aesthetically pleasing were important. As its a game for all ages I thought the cartoon style for the game would be most suitable. 

# Aesthetics

The look of the site was created with the aim of being clean, fun and modern.

I didnt want to make it too fussy and take away the focus from the nice custom made game visuals. 

## Colour Palette

- Grey color: #575756
- Background-color gainsboro
- White

## Fonts

- Heading - Kanit (Google Fonts)
- Body - Varela Round (Google Fonts)

## Images

Paid licensed images were sourced from stock.adobe.com and formatted on Adobe Illustrator. I have used Imgur as a hosting site for the images included in the README. 

## Icons 

Arrows and favicon were sourced from fontawesome.com

# FEATURES

### Header

![Header image with title](https://i.imgur.com/neTj2Yx.png)

The header includes the game title "BEAT THE GOALIE". I chose the font as it is nice and bold. The element is responsive and line spacing has been set to look well spaced when on smaller screens. 

### Game Images

![Game images for all shoot and save options](https://i.imgur.com/GdhpC3M.png)
![Win and Lose images](https://i.imgur.com/iOJ3GH1.png)

The visual aspect of the game is made up of images I custom made on Adobe Illustrator using assets from Adobe Stock.
When specific criteria are met the javascript calls the correct image and its displayed. The scores are then adjusted to suit. 

![Game placeholder image](https://i.imgur.com/gaMVaWu.png)

The main placeholder image for the game was also custom made in Adobe Illustrator. It shows the ball on the ground before a shot is taken. 

### Score Bar

![Game placeholder image](https://i.imgur.com/SB9RMam.png)

The score bar contains the 'Player' and 'Goalie' scores. These scores are incremented upon a goal being scored by the user or a save being made by the goalie. The user must try to score 10 goals before the goalie makes 5 saves. The points targets were decided after testing the game a number of times to establish the difiiculty. Originally it was first to reach 10 but it was too easy to win. There ar 6 winning images for the player to the 3 winning images for the goalie (a ratio of 2 to 1). I found that targets of 10 points for the player and 5 points for the goalie worked really well and balanced the game.

### Buttons

![Game placeholder image](https://i.imgur.com/vUA1Nf3.png)

Choosing a direction to shoot will send the ball towards the goal and will result in a goal or a save being made by the goalie. Ive given them minimal clean styling. The arrows work well with the overall look of the page. 
Added below the shoot buttons is a 'LETS GO AGAIN' button which turns green when a winning score is reached, refreshes the page and resets the score so a new game can commence. 


### Footer

![Game placeholder image](https://i.imgur.com/n3fPBFU.png)

Included in the footer are the instructions on how to play.
- Press a direction arrow to shoot
- Score 10 before the keeper saves 5

## Technologies Used

### HTML 5

- Structure Language

### CSS

- Styling Language

### Google Fonts

- As a font resource

### Font Awesome

- Icons for headings and socials links

### Adobe Stock

- Vector dowloads

### Github

- As a software hosting platform to keep project in a remote location

### Gitpod

- As a development hosting platform

### Adobe Illustrator

- To create wireframe, screens mock up, game images and README images

### Imgur

- Image hosting

### jshint.com

-  Validation of Javascript

### jigsaw.w3.org

- Validation of css

### validator.w3.org

- Validation of html

# Testing

## Functionality testing

I used Chrome developer tools throughout the project for testing and solving problems with responsiveness and style issues.

I refered to jshint.com regularly to solve issues with my javascript code. This worked really well. 
My html and css code was validated on jigsaw.w3.org and validator.w3.org. 

## Compatibility testing

Site was tested across multiple virtual mobile devices and browsers. I checked all supported devices with Chrome developer tools.

I tested on hardware devices such as: iMac, macbook pro, i hpone 8, i phone 11, I pad and Galaxy Z Flip phone and all worked well. 

## User Testing

I offered the game to friends and family throughout the process of construction and worked on various areas of feedback. 

- One was to develop the game scoring system to be fair. Originally it was too easy to win when both tragets were set to 10 as the player had double the chance of winning. The game consits of 6 winning images for the player and 3 for the goalie which is a 2/1 ratio so i reflected the winning score targets to match at 10 goals for the player and 5 saves for the goalie.

- Another addition from the feedback was to add a 'Win' or 'Lose' image when the score target had been met as the game would go on forever. At this point I realised I needed to add the button to restart the game. I then decided that making this button turn green when a winner was declared would draw the users attention to it and encourage them to press it to refresh the game and scores. 

## Issues Found During Development

An issue I noticed on iPhone and iPad was the button styling didnt come across for my 'LETS GO AGAIN' button. After researching the issue via stackoverflow.com I managed to resolve it by adding code to my css file.

The footer 'HOW TO PLAY' text styling had to be adjust to suit smaller screens. This was sorted with a medi query. 

Element spacing on an iPad was adjusted to provide a better layout with media query. 

My original plan was to have the game placholder image be replaced with a solid png image of the goalie and a transparent png image of the ball overlaying it when an arrow button was pressed. However this turned out to be a challenge so i rethought it and decided to use individual images for every possible combination of ball and goalie placments(9). 
