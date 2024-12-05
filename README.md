# ignite-timer
2/7 projects of Ignite React specialization by [@rocketseat-education](https://github.com/rocketseat-education) : A logging timer in projects 

Available at (Vercel): [ignite-timer-jemluz.vercel.app/](https://ignite-timer-jemluz.vercel.app/) 

![Capa](https://user-images.githubusercontent.com/23065460/216072026-c316be0e-382f-44ba-bd88-176c7b2eecba.png)

## Requirements
- Home 
  - Provide a form for creating a new cycle
  - When a new cycle starts, the timer should begin counting down
  - Allow the interruption of an ongoing cycle
  - Reset the form when the timer countdown ends
  - Record data in the history when a cycle is started, interrupted, or completed
- Histórico
  - Display a list of all cycles
  - Categorize cycles by status: Completed, In Progress, Interrupted

## Technologies & Libraries used in this project
- [Vite](https://vitejs.dev/) Frontend env
- [Phosphor](https://phosphoricons.com/) Icons Library
- [date-fns](https://date-fns.org/) Utility library/date formatting
- [React Hook Form](https://react-hook-form.com/) Performant, flexible and extensible forms with easy-to-use validation
- [zod](https://www.npmjs.com/package/zod) Form validation for TypeScript
- [immer](https://immerjs.github.io/immer/) Immutable states changed more easily

## Arquitetura de componentes
![image](https://user-images.githubusercontent.com/23065460/218493118-0808995c-7d73-4a07-ab2d-28cf69dc91f6.png)

## Issues and Discussions

- ### [App structure](https://github.com/jemluz/ignite-timer/issues/1)
  - Styled Components
  - Theme config

- ### [Pages and Routes](https://github.com/jemluz/ignite-timer/issues/3)
  - React Router DOM
  - Route Layout
  - Style Inheritance
  - as const

- ### [Forms](https://github.com/jemluz/ignite-timer/issues/5)
  - Controlled & Uncontrolled
  - React Hook Form
  - Form Validation
  - Typing form with TS

- ### [App Functions](https://github.com/jemluz/ignite-timer/issues/7)
  - UseEffect Hook
  - Dont storage filters into new states
  - Don't mess up with useEffect 🙏
  - 😡 Stop using useEffect to update status for the love of god!
  - And why would I do something stupid?
  - Reducing countdown
  - Changing page title
  - Prop Drilling

- ### [Context API](https://github.com/jemluz/ignite-timer/issues/9)
    - Understanding contexts
    - Context in forms
    - Context between routes
    - History listing

- ### [Reducers](https://github.com/jemluz/ignite-timer/issues/10)
  - Creating cycle reducer
  - TS error translator
  - Saving an object in the reducer
