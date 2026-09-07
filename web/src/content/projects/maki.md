---
title: "Maki"
description: "A small CLI tool that bootstraps C++ projects on the command line using CMake, Ninja, and Clang++."
status: "active"
featured: true
repository: "https://github.com/PixelBrewer/Maki"
---

Maki is a small command-line tool I built to make starting a C++ project a little less tedious.

C++ gives you an enormous amount of freedom, but that freedom also means getting from an empty directory to actually writing code can involve connecting quite a few wires. I found myself repeatedly creating the same directory structure, writing the same CMake configuration, configuring Ninja, and setting up the project before I could start experimenting.

Maki grew out of wanting to make that process boring.

## What it does

Running Maki creates a small C++ project with the basic pieces already connected. It sets up the project structure, generates the CMake configuration, and gives me a project that is ready to build with the tools I already use.

The goal isn't to hide CMake or replace the C++ toolchain. I still want to understand and control those pieces. Maki just handles the repetitive setup so I can get to the interesting part sooner.

## Why I built it

A lot of my projects start because I run into some small annoyance and wonder whether I can build something to solve it myself.

Maki was one of those projects.

While getting back into C++, I was creating lots of small projects to experiment with language features, graphics programming, and libraries. Setting up essentially the same project over and over quickly became a good candidate for automation.

It also gave me an excuse to build a command-line tool around a workflow I actually use.

## Distribution

Maki started as a tool for my own machines, but I wanted to go through the process of making it something another developer could actually install.

It's available through Homebrew on macOS, with releases published through GitHub. Packaging and distributing the application ended up becoming just as interesting as writing the CLI itself.

Installation instructions and the latest release are available in the project repository.

## What I've learned

Maki has been a useful project for exploring the parts of software development that happen around the code itself: project generation, build systems, packaging, releases, and developer experience.

It has also reinforced something I increasingly appreciate about developer tools: the best ones often aren't trying to do everything. Sometimes a useful tool just removes a small piece of friction from something you do all the time.
