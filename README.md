# Web Development Project 2 - _React Flashcards and Quiz App_

Submitted by: **Danny Nguyen**

This web app: **A React-based Flashcard and Quiz application with multiple modes: Quiz mode (answering multiple-choice questions with feedback), Flashcard mode (flipping cards to reveal answers), and Test mode (input answers manually). The app includes shuffle functionality, a streak counter, animations, theme switching, and responsive design.**

Time spent: **15** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The title of the card set and some information about it, such as a short description and the total number of cards are displayed**
- [x] **A single card at a time is displayed, only showing one of the components of the information pair**
- [x] **A list of card pairs is created**
- [x] **Clicking on the card shows the corresponding component of the information pair**
- [x] **Clicking the next button displays a random new card**

The following **optional** features are implemented:

- [x] Cards contain images in addition to or in place of text
- [x] Cards have different visual styles, such as color based on their category
  - [x] _Green for correct answer, Red for incorrect answer_

## New Features

- [x] **Test Mode**: Users input their answers manually, and the card only flips upon submitting the correct answer. Incorrect answers show a red card with the message "Incorrect, try again" before flipping back to the question.
- [x] **Quiz Mode Enhancements**: Cards only flip when an answer is selected. Incorrect answers flip the card to a red state and flip back to the question automatically.
- [x] **Shuffle Functionality**: A shuffle button randomizes the order of the flashcards.
- [x] **Streak Counter**: Tracks the user's current and longest streak of correct answers. The streak resets when an incorrect answer is given.

## Additional Features

- [x] **Theme switcher slider that toggles between light and dark modes using emojis (🌞 / 🌜)**
- [x] **Animations added for flipping cards in all modes (Quiz, Flashcard, and Test)**
- [x] **Responsive design for mobile devices**

## Video Walkthrough

Here's a walkthrough of the implemented required and additional features:

### Loom Walkthrough:

<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/ab7e04479c224442a2119d83c06acf97?sid=10da10d9-5995-4515-a02a-88c03b37842e" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

### GIF Walkthrough:

https://i.imgur.com/SUVFuz3.gif

## Notes

### Challenges

- **Managing state for multiple modes**: Implementing smooth transitions between Quiz, Flashcard, and Test modes required careful state management.
- **Card flipping animation**: Ensuring the card flips at the right time based on user input for different modes was a challenge.
- **Implementing streak counter**: Accurately tracking the user's current and longest streak of correct answers while resetting the counter on incorrect answers.
- **Shuffle Functionality**: Ensuring the shuffle function randomized the flashcards without disrupting the app's state and user flow.

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
