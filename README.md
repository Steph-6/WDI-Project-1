# Project 1 - Build a JavaScript Game
***

###Overview
The first project was made in week 2 of the immersive course and was built with HTML, CSS and Javascript/jQuery.  
Forest Floor is a calming and fun game in which the player has to catch falling leaves with their mouse, whilst also avoiding falling bombs.  
The game can be played here: [Forest Floor](https://afternoon-journey-42512.herokuapp.com/)

![image](http://imgur.com/mLDtaRv.png)

***

###Intial Concept - MVP
My intial idea was a game based aroud Guitar Hero, three columns with falling squares where the player had to click the square when it was within certain boundaries. 
***
###Game Play logic
My concept led to a simple MVP:  
1. .animate to make a div fall from the top of the screen.  
2. setInterval to create a sequence of falling divs.  
3. Make three columns put into an array and using Math.Random select a random column to append the falling div.  
4. When the mouse clicks the falling square remove the square and increase the players score.  

I gave each column an id of column1 - column3, then selected a random column with a chooseSquare() function that uses Math.Random to append the div.

```
$('#column' + chooseSquare(1,4)).append($square);
```
The created variable $square would then fall using .animate and be removed once the div had fallen to the bottom of the screen.

```
$square = $('<div/>', {
      'id': 'square',
       css: {'background-image': color}
    });
```
```
$square.animate(
           {top: '+=492px'},
      {duration: timer,
         easing: 'linear',
       complete: function() {
        $(this).remove();
      }
    });
```
In practice it became quite arduous for the player to click the falling div and so I used a 'mouseover' function to remove the square and increase the players score.

####Building upon MVP
Now that I had MVP I started adding additional features. Using an array of images I could again using chooseSquare() select a random image and depending on the image that fell the players score would increment by different amounts.  
I also created a 'play-row', a small rectangle at the bottom of the screen in which the players mouse had to be in order for the square to be removed.  
Intially the player has 

* Using an array of images I could again using chooseSquare() select a random image and depending on the image that fell the players score would increment by different amounts.
* If the falling image was a bomb and the player hit it the score would decrease, and a "BANG" image would replace it. Once the players score was below 0 "GAME OVER".
* Once the score was over a certain number, "LEVEL UP", in each higher level the images would fall faster.
* A combo feature - if the player had hit more than five in a row, a bonus leaf would appear that earns extra points when hit.
* A 'New Game' button that reloaded the page.

***
###Styling
I intially wanted the game to be fast-paced, but after deciding upon the falling squares to be leaves I started to create a calming forest atmosphere. After deciding upon disney like cartoon images for the leaves, it was easy to find a matching background and cartoon bomb.   
I used an instrumental from Coldplay in the background with popping noises when the user hit an image.  
Overall I was really happy with the final design and after feedback from my peers it was great to know the game created the laid back user experience that I wanted Forest Floor to have.
***

###Wins
Reaching MVP early on by writing lots of pseudo code and sticking to the steps in order, meant I had enough time to add the additional level up, and combo features.  
It also made sure the code was intitally clean so was easy to build upon. As well as this it left me with enough time to style the game properly which I think in the end was really vital to making this simple game so enjoyable.
***

###Challenges
Playing around with the setInterval and setTimeout functions became slightly confusing to get my head around. Then the logic behind the mouse only succesfully hitting the div only if it was within the play-row boundaries, as opposed to just anywhere on the page.
***

###Improvements
With more time I would like to add more levels, and maybe alter the styling of the title and score boxes as I think even more minimal could be really nice.   
I would also definetely make it mobile responsive as I think it could be a great game to play whilst on the move.
***
