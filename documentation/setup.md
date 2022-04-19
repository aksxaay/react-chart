<!-- prettier-ignore -->
this is where I'll explain the process:

### Setup

okay so copy pasting the `package.json` file straight up didn't work,

```
npm ERR! notarget No matching version found for prop-types@>16.0.0.
npm ERR! notarget In most cases you or one of your dependencies are requesting
npm ERR! notarget a package version that doesn't exist.

npm ERR!     /home/axsae/.npm/_logs/2022-02-21T19_19_09_044Z-debug-0.log
```

trying `create-react-app` route and then maybe the default way.

`npx create-react-app react-chart-app` - lol somehow I have it globally installed but it doesn't show up what.

apparently that command is deprecated, hence this is the new one
`npx create-react-app react-chart-app`

wait this causin errors too? somehow there's a global installation ayo wth

got it working finally. yessir let's fucking go.

Also `data.js` is basically useless, completely replaced by `data-color.js`

Have to try and Classify the languages I know.

#### The 4 types of Programming Language that are classified are:

- Procedural Programming Language.
- Functional Programming Language.
- Scripting Programming Language.
- Logic Programming Language.
- Object-Oriented Programming Language.

`/home/axsae/Desktop/to-self-with-love/talents` this has all the things I kinda know about lol.

`reportWebVitals`
[Measuring Performance](https://create-react-app.dev/docs/measuring-performance/)

oh I just noticed there's a `reportWebVitals.js` in the src directory

migrating CRA(Create React App) to Next.js Application - [migration](https://nextjs.org/docs/migrating/from-create-react-app)
is a proper guide that I can use perhaps?

well I'm gonna try out react libraries one by one.

1. Material UI (MUI)
   there's two libraries for CSS-in-JS

- styled components
- emotion
- it is working just had to skip it to the end of the project.




well I'm stuck sitting ducks so fuck me ig.

I need to get back to javascript and how they work.

no matter where I import it I can't get to use the `useScript`


I can't get `react-router-dom` to work at all like bruh, 

learning how to react route from gfg

I added all the things I knew and it still doesn't work.

this is weird routes, because we're still on different routes but nothing much changed for some reason.
the layout still remains the same.

![first bad routes implementation](routes-implementation.png)

I can't get the navbar to work bruh ripp

we need the `exact` keyword


--- 
14th April

I can't figure out how these shits work.

had to commend out the `Link` tag in `main.jsx`

none of the Link shits work at all.

when I change it to `Routes` it somehow works ayo what


nvm somehow it is now working, I just had to shift the `Router (BrowserRouter) back to its original place.`


finally fixed routing.


### 2. React Bootstrapp
- this library does individual imports unlike straight up bootstrap. hence keeping the bundle size low enough.


ooh this is easy enough to mess up goddamn.


this thing's documentation fucking sucks.

`react-bootstrap` is fucking up with `tailwind`.
react bootstrap has its own tailwind like syntax

tailwind is a very integral part of my stack so idk if I want to part ways with it LOL.

the conflict, so commenting this exact line switches between both of them.

[line to comment](../react-chart-app/src/pages/reactBootstrap.jsx#L4)

for tailwind to take back.


implemented a basic UI front end ish LMFAO.


tailwindui is super basic and very limited can't even be using this unless I absolutely can't find anything else.

I will run into factoring issues where I won't be able to factor my code at all LMFAO. but let's try.

so basically the plan is to have an all import syntax as described in these links

[react import components](https://stackoverflow.com/questions/46984955/how-to-import-all-components-in-react)

and 

[es6 importing and exporting](https://stackoverflow.com/questions/34072598/es6-exporting-importing-in-index-file)
 ez clap

 I just noticed that the way tuk ui kit implements the dash board is kinda insane, at-least the tailwind ui code was kinda beautiful.

 it did javascript objects


 I'm going to try and change the font on the first 
 tailwindexperiment page.

 just did font enabling for tailwind, but I have problem determinig weights.

 also fonts don't apply by default everywhere LMFAO.

 i have to change the default font-serif setting.

 default

 base font in tailwind-config [base font // stackoverflow](https://stackoverflow.com/questions/60692794/can-you-change-the-base-font-family-in-tailwind-config)


 I did some more changes but still can't understand how to default change all font to be based on inter.

 okay literallyy unable fuck me.


 fuck it I can't do tailwind config, might as well figure out how the react-markdown works.


### react-markdown.
didn't render for some reason.

yeah so certain things work like bold and italics I wasn't noticing hard enough my bad, but anything else is a no go.


I just had to install ``remark-gfm so that fixed things asap.


now I have to figure out other things.

how to make this properly workable on my portfolio website LOL.


I just have to practice javascript promises and shit.

I don't understand react enough for me to understand how exactly I can pass these variables on to this children attribute

okay finally understood responses and shii