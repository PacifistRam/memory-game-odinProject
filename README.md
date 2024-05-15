# Memory Card Game by Odin Project

This project is a part of the curriculum of the React Course under the Full Stack Odin Project. The main goal is to implement the concepts learned so far by utilizing hooks to manage and utilize state while fetching and using data from an external API.

## Features
- Utilizes two hooks: `useEffect` and `useState`.
- Fetches data from an external API using Axios and `useEffect`.
- Implements array shuffling to randomize the order of rendered cards.

## Lessons Learned
1. Making API calls using Axios and `useEffect`, and then destructuring the received data to be added into a `useState` for further manipulation.
2. Implementing a simple array shuffling function in JavaScript to randomize the order of elements.

## Challenges Faced
1. Breaking down the data coming via the PokeAPI; initially, it provides name and URL, and using that URL requires sending another API request, which then needs to be mapped.
2. Maintaining two consecutive states when one state is dependent on the other.

## Future Improvements
1. Enhance styling and add animations.
2. Refactor the code for better organization and readability.
