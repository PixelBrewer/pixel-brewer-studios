---
title: "Pong-Cpp"
description: "My first foray into making games with a classic."
published: 2026-09-19
---
## Where to begin?

When people start down the journey of programming games, it is common to take a small, classic game and try to re-create it. This is where Pong comes in.

I have had a strong desire for a long time to try my hand at learning how to make games. However, I have always been a bit nervous to begin. For some reason, the complexity and unknowns of making games caused me to hesitate.

Lately, I have been attempting to live out some of the advice I have gained from more experienced developers: "Just start. Just build something." Or, in the wise words of Nike, "Just Do It."

Thus, Pong was the first logical step into this wonderful world of game making. And I must say, I am hooked.

There is just something so special about solving complex problems, seeing the results live, and having the added benefit of being able to enjoy what you make in your leisure time. That is the allure of making games.

## What to make?

Pong is a simple game. It involves two paddles for players that move vertically along the edges of the screen. A ball starts its journey in the middle of the screen and randomly moves to one side or the other. It then travels along a path until it collides with a paddle and rebounds, or passes the edge of the screen and counts as a point.

Seems easy enough. However, there is a lot baked into Pong that makes it great for teaching. For example, how do you make a game loop? How do you program collision detection? How do you keep track of the game's state?

All of these challenges introduce concepts that are foundational to making games.

## Why raylib?

One of the first decisions I had to make was what to use to actually build Pong. I have experimented with engines like Unity and Unreal, but for this project I wanted something smaller that would allow me to focus on the fundamentals of game development.

While researching my options, I came across a library written in C called [raylib](https://www.raylib.com/index.html). What intrigued me about raylib was its simplicity. It provides many of the tools needed to make a game without hiding everything behind a large game engine.

I have also spent some time learning graphics programming with OpenGL, where even getting something onto the screen can involve several layers of complexity. Raylib provides a nice middle ground. It handles much of that lower-level work while still giving me the opportunity to write the game logic myself.

For Pong, that was exactly what I was looking for.

## Challenges

Game programming is notoriously challenging. It involves many complex mathematical topics and makes you think about solving problems in different ways. There are also many different layers that come together to create a game.

When creating Pong, some notable challenges that I ran into were:

- Collision detection
- Object positioning
- Game logic

All of these presented challenges that I had to adapt to and learn from. However, tackling each one made the entire process feel less daunting.

Instead, solving each of these problems inspired and motivated me to tackle more complex issues. What initially felt intimidating started to feel approachable when broken down into smaller problems.

## Showcase

Below you will find a few screenshots from my Pong game running on Linux.

### Game video

<video controls width="100%">
  <source src="/articles/pong/GamePlay.mp4" type="video/mp4">
  It looks like your browser does not support video elements.
</video>

### Game start

![Game start image](/articles/pong/GameStart.png)

### Gameplay

![Gameplay image](/articles/pong/GamePlay.png)

### Game end

![Game end image](/articles/pong/GameEnd.png)

## What's next?

Finishing Pong has only made me more interested in exploring game development. There are still plenty of concepts I want to learn, and the best way for me to learn them is to keep building.

My next project will be another classic: **Snake**.

Snake feels like a natural next step after Pong. It is still small enough to be approachable, but introduces a different set of problems to solve. Instead of bouncing a ball between paddles, I will need to manage a growing snake, movement on a grid, food placement, collision detection, and an increasingly complex game state as the snake gets longer.

Most importantly, I want to continue building games that are small enough to finish while learning something new from each one. Pong was the first step. Now, onto Snake.

