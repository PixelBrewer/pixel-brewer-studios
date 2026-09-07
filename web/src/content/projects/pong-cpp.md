---
title: "Pong"
description: "A small Pong implementation built while exploring C++ and raylib."
status: "complete"
featured: true
repository: "https://github.com/PixelBrewer/Pong-Cpp"
---

I've wanted to make games for a long time.

Pong is where I finally started.

It's a small implementation of the classic game written in C++ using raylib. I deliberately chose something simple enough that I could focus on learning the fundamentals of game programming instead of immediately disappearing into the complexity of a much larger game.

And, as it turns out, making a ball bounce between two paddles is a lot of fun.

## Why Pong?

I have much bigger ideas for games I'd eventually like to build, particularly strategy games, but jumping directly into one of those would mean learning dozens of systems at the same time.

Pong strips almost all of that away.

There are paddles. There's a ball. Things move. Things collide. Someone scores.

That small scope gave me room to concentrate on the things underneath the game: the game loop, input, movement, collision detection, rendering, and managing state from one frame to the next.

## Building it

I built Pong in C++ with raylib, a library I've really enjoyed working with because it provides enough functionality to get something on the screen without hiding the basic structure of a game.

The project also gave me more practice working with CMake and integrating an external C++ library into a project rather than relying on a full game engine to handle everything for me.

Keeping the technology relatively simple meant that most of my time could stay focused on understanding what the game itself was doing.

## What I learned

One of my favorite things about building Pong was seeing how a handful of relatively simple systems combine into something that suddenly feels like a game.

Reading keyboard input isn't particularly exciting by itself. Neither is moving a rectangle or checking whether two objects intersect.

Put them together inside a game loop, though, and now you're controlling a paddle and trying to keep a ball from flying past you.

That transition from code to something interactive is a big part of why I want to keep exploring game development.

## What's next?

Pong is complete, but it's really the beginning of a much larger journey for me.

I want to continue exploring C++, graphics programming, game architecture, and eventually the kinds of strategy games I've loved playing for years.

There are much more ambitious games I'd like to make someday.

For now, I'm happy that the first one has two paddles and a ball.
