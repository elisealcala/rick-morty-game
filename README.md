# Rick and Morty Game

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Fetching Data

This project uses Apollo Client to fetch the data from this [API](https://rickandmortyapi.com/graphql). The Apollo Configuration is on `apollo.config.tsx` at the root of the project.

Also it uses [Graphql Codegen](https://github.com/dotansimha/graphql-code-generator) to generate types from the API Schema. the configuration is on `codegen.ts`, and the output is under the `generated` directory.

This script will run codegen and generate the types.

```bash
npm run codegen
```

With the latest version of Nextjs and the introduction of the `app` directory, now all the components are **Server Components** by default. For the purpose of this implementation I needed to interact with **React Context**, that's why I use the directive `"use client"` in the majority of the components.

## Context

The Global Context I created has four values, these are the ones I will need to reuse in more than one page. 

```javascript
    cards: CharactersParam;
	setCards: Dispatch<CharactersParam>;
	turnsContext: number;
	setTurnsContext: Dispatch<SetStateAction<number>>;
```

`cards`: Are the characters data formatted to show it on the grid game. This is used in the main view and the play view.

`turns`: The number of turns the user played. This is used in the play view and the final view.

## Styles

I have used [Tailwind CSS](https://tailwindcss.com/) for the styling, I'm very familiar with this tool, and I consider it a great option for a small project. Also Nextjs provides a simple way to install it with their CLI.

## Components

I created only three components that I consider essential and global across the app.

## Routing

I'm using the routing structure from Nextjs, that now is under the `app` directory.


## Testing

For testing purposes I'm using [Testing Library](https://testing-library.com/docs/react-testing-library/intro), and I'm testing the principal components.
