# React Flashcards and Quiz App

Submitted by: **Danny Nguyen**

This web app is a **React-based Flashcard and Quiz application** featuring multiple interactive modes: Quiz mode (multiple-choice questions with feedback), Flashcard mode (flipping cards to reveal answers), and Test mode (manually input answers). The app includes shuffle functionality, a streak counter, animations, theme switching, and responsive design for mobile devices.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Required Features](#required-features)
- [Optional Features](#optional-features)
- [New Features](#new-features)
- [Additional Features](#additional-features)
- [Video Walkthrough](#video-walkthrough)
- [Challenges](#challenges)
- [License](#license)

---

## Project Overview

**Time spent:** 15 hours in total

This project is a fully responsive React web application designed to simulate an interactive flashcard system, where users can engage in different study modes (Quiz, Flashcard, Test) while keeping track of their progress with animations and custom visual feedback.

---

## Required Features

The following **required** functionality has been implemented:

- [x] The title of the card set and some information about it, such as a short description and the total number of cards, are displayed.
- [x] A single card at a time is displayed, showing only one component of the card's information pair.
- [x] A list of card pairs is created.
- [x] Clicking on the card shows the corresponding component of the information pair.
- [x] Clicking the next button displays a random new card.

---

## Optional Features

In addition to the required features, the following **optional** features have been implemented:

- [x] Cards contain images in addition to or in place of text.
- [x] Cards have different visual styles based on their category:
  - Green for a correct answer.
  - Red for an incorrect answer.

---

## New Features

Here are additional features and enhancements implemented in the app:

- **Test Mode**: Users input answers manually. The card only flips upon submitting the correct answer. Incorrect answers show a red card with the message "Incorrect, try again" before flipping back to the question.
- **Quiz Mode Enhancements**: Cards only flip when an answer is selected. Incorrect answers flip the card to a red state and then flip back to the question automatically.
- **Shuffle Functionality**: A shuffle button randomizes the order of the flashcards.
- **Streak Counter**: Tracks the user's current and longest streak of correct answers. The streak resets when an incorrect answer is given.

---

## Additional Features

- [x] **Theme Switcher**: A slider toggles between light and dark modes using emojis (🌞 / 🌜).
- [x] **Animations**: Added smooth animations for flipping cards in all modes (Quiz, Flashcard, and Test).
- [x] **Responsive Design**: The app is fully responsive and works seamlessly on mobile devices.

---

## Video Walkthrough

Here’s a walkthrough demonstrating the required and additional features:

### Loom Walkthrough:
[Watch the walkthrough](https://www.loom.com/embed/ab7e04479c224442a2119d83c06acf97?sid=10da10d9-5995-4515-a02a-88c03b37842e)

### GIF Walkthrough:
![GIF Walkthrough](https://i.imgur.com/SUVFuz3.gif)

---

## Challenges

Some challenges I encountered while working on this project:

- **Managing state across multiple modes**: Transitioning smoothly between Quiz, Flashcard, and Test modes required careful state management.
- **Card flipping animation**: Ensuring that the card flips at the correct time based on user input in different modes was tricky.
- **Implementing the streak counter**: Accurately tracking the user's current and longest streak of correct answers and resetting the counter on incorrect answers.
- **Shuffle Functionality**: Making sure the shuffle function randomized the cards without disrupting the user’s progress or the app's state.

---

## License

    Copyright [2024] [Danny Nguyen]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
****
