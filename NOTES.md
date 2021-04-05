# NOTES

A few notes regarding the exercise

## Libraries

- I used NextJS instead of CRA just because it has less overhead to implement Tailwind compared to CRA.
- Tailwind was choose because it's fast to develop a POC with it. Given time probably I would go for a CSS-in-JS solution.
- State management was done via Zustand. For simple client state is quite nice and it's my personal go to.
- Animations are done with Framer Motion. It's my preferred choice.

## Other

The app was only tested on the following browsers:

- Firefox (Nightly Version 89.0a1)
- Microsoft Edge (Version 91.0.831,1)
- Firefox iOS

The app wasn't fully developed to be highly responsive but it's to a certain degree.

I tested the `Button.tsx` and the utility function `sort` as was required. Given a bit more time I would liked to add a test for snapshots (which requires some extra jest config) and a test for custom hook as well.

I have added a few of the things I usually like to work with to enhance the productivity:

- ESlint & Prettier to deal with lint and formatting
  - I use `Alloy` as the main ESLint config: [eslint-config-alloy](https://github.com/AlloyTeam/eslint-config-alloy)
- Husky and lint-staged to automate the previous point and some safe checks
- NVM for align all enviroments node versions
