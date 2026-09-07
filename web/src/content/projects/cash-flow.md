---
title: "CashFlow"
description: "A budgeting app for the modern millennial."
status: "active"
featured: true
repository: "https://github.com/PixelBrewer/CashFlow"
---

CashFlow is a budgeting and forecasting tool I'm building around a question that traditional budgeting apps don't always answer very well:

**How much money will I actually have at different points throughout the month?**

Knowing that I have enough money today isn't necessarily useful if rent is due Monday, I get paid Friday, and several other bills are coming out next week. I wanted something that could take those events and turn them into a simple picture of where my finances are heading.

CashFlow grew out of trying to solve that problem for myself.

## Why I built it

I've used spreadsheets and budgeting tools for years, but I kept coming back to the same kind of mental calculation.

If I have this much money today, get paid on these dates, and have these expenses coming up, what will my balance look like next Tuesday? What about at the end of the month?

A spreadsheet can answer those questions, but maintaining one manually gets tedious. CashFlow is my attempt to turn that workflow into software.

Rather than only recording where money has already gone, I want CashFlow to help answer what happens next.

## How it works

At its core, CashFlow takes an opening balance, income, expenses, and dates and builds a forecast of how the balance changes over time.

The project currently includes tools for importing budget information from Excel, generating forecasts from the command line, and exposing the underlying forecasting functionality through an API.

I'm intentionally building it in pieces so that the forecasting model can evolve independently from whatever interface eventually sits on top of it.

## What I'm exploring

CashFlow has become an interesting place for me to think about software architecture because the problem starts simple and gets complicated surprisingly quickly.

Dates matter. Recurring transactions matter. Pay schedules matter. An expense that happens before payday means something very different from one that happens afterward.

Working through those cases has made the project less about simply adding and subtracting numbers and more about modeling how money moves through time.

## Where it's going

CashFlow is still an active project, and I'm letting my own use of it influence where it goes next.

I'd eventually like it to become a simple application that makes short-term financial forecasting easy to understand without requiring someone to maintain a complicated spreadsheet.

For now, I'm continuing to improve the forecasting engine, experiment with the interface, and learn from using it myself.
