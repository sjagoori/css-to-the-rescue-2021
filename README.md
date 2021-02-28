# CSS to the rescue 
_HvA 2021_

# Description 
This repo contains the kick-off and final assignment of the _CSS to the rescue_ for the minor Web development and design. The repo is updated weekly if not daily with weekly challenges and progression. The notes can be found in this readme file along with other information regarding the class (see old readme content at the bottom).

# Week 1
## Assignment 
For this class, I have chosen to style the menu page using a fitting design, animations, and power it with accessibility features.

## Context and rules
### Context
- Accessibility for visually impaired users
  - Using contrast switches
  - Using font-size switches
  - Using reduced motion
  - Using (automatic) theme switches
 - Print-stylesheet (optional)
  - Using styling techniques to adjust for printing
 ### Rules 
 - Limit to max. 2 colors
   - Using proper colors for WCAG AAA compliance
   - Using proper colors for WCAG AAA compliance
   - Using the (wide) range of shades of each and the combination of both colors
 - Reponsive design
   - Using appropriate units, without media queries
## Inspiration
- !['https://nl.pinterest.com/pin/293648838203722192'](https://i.pinimg.com/564x/b8/21/23/b8212396e2451ff442b651f249481fb7.jpg)
  - great use of 2 colors 
- !['https://nl.pinterest.com/pin/14425661295489471'](https://i.pinimg.com/564x/37/77/b3/3777b35e008a1fb53c43191f276fa4c1.jpg)
  - interesting cards
  - could have great interaction
  - would look nice with parallax scroll
- !['https://nl.pinterest.com/pin/331859066299040038/'](https://i.pinimg.com/564x/b2/8a/45/b28a45e405e6f473a6cfafe748770225.jpg)
  - great layout
  - design allows for more interaction
  - could be made using 2 colors
- !['https://dribbble.com/shots/15132015-Japanese-Restaurant-Hero-Section-Concept/attachments/6867953?mode=media'](https://cdn.dribbble.com/users/6828964/screenshots/15132015/media/88aec147391c5d016637118660a915e8.png)
## Sketches
- ![](./storage/inspiration1.jpg)
  - the parallax/hovering effect on elements containers and their child elements could give a nice depth effect
  - Animating a background color as highlighing effect could be a great attention grab

- ![](./storage/inspiration2.jpg)
  - icons could be animated
  - design works great just 2 colors
  - design works great with mobile 
  - a lot of possebilities for interaction 
## Techniques and challenges 
- Grid (hardest to implement)
- :hover, :focus, animation 
# Week 2 & 3
- [ ]  Laat je voortgang zien ('praatje met plaatjes').
- [ ]  Wat ging er soepel en wat was lastig
- [ ]  Welke experimenten heb je gedaan die die 'mislukt' zijn.
- [ ]  Heb je nieuwe inzichten hoe je de kracht CSS kunt benutten (of juist niet).
- [ ]  Neem wijzigingen aan je 1e plan op.
- [ ]  Waar liggen je (nieuwe) uitdagingen voor komende week.

For this week, I started with experimenting with different approaches for an appropriate design. I started with the first "blocky" grid design. To make this design work, I had to use a grid. 

```css
display: grid;
grid-template-columns: repeat(3, 1fr)
```

I learned that using the `repeat` function would allow me to declare 3 fr values at once! The `fr` unit is short for fraction; an equal amount of width a column is assigned. In the code above, there are 3 columns and all 3 have `1fr` in width. This would give each column 1/3 of the total width. This helped me create a grid design: 

!["grid1.png"](./storage/examples/grid1.png) 

Now,  of course, this method does not work with responsive designs; the number of columns is fixed thus resulting in 3 small columns next to each other on smaller displays rather than below each other. 

!["grid1_error.png"](./storage/examples/grid1_error.png)

Eventually, after following a workshop and googling around, I learned that it is possible to make it responsive without using media queries to adjust the number of columns.

```css
display: grid;
grid-template-columns: repeat(auto-fit, minmax(150px, 3fr));
```

In this example, we use the `minmax()` function to set a minimum required width for each column while giving them the maximum width of `3fr`. This by itself is not complete, it just sets the the `minmax()` and renders the columns without wrapping them into rows. This is where the `auto-fit` comes in, it allows the columns to occupy all the available space (considering the min width) and then wrap it. The key difference between `auto-fill` and `auto-fit` is that the `fit` variant resizes the column width relative to the viewport width while the `fill` variant respects the given width for the grid columns. 

----

Furthermore, I had a look at the pseudo classes. For designing purposes, I had decided to make use of the `<detail>` and `<summary>` HTML-tags where I placed the items and their respective ingredients in. The HTML, after modifying, looked like this: 

```html
<article>
  <details>
    <summary>
      <h3>Dish name</h3>
      <div>Price</div>
    </summary>
    <p>Ingredients</p>
  </details>
</article>
``` 
From there it rendered a cute looking section that would slide open when it is clicked. I decided to experiment even further with this element using the pseudo classes `:hover`, `:focus-within`, `::-webkit-details-marker`, and `:before`. 

!["grid1_detail.png"](./storage/examples/grid1_detail.png)

As seen in the screenshot above, several things have changed. The first change was made with the `:hover` and `:focus-within` pseudo class to help the user seeing which element on the page they're (about to) select. The `:focus-within` pseudo class is expanded with the HTML attribute `tabindex`, so that the menu is completely tab-able! 

Furthermore, the `::-webkit-details-marker` and `:before` pseudo class was used to edit the > icon in the `<detail>`. In order to make it work, you have to first hide the > icon in the detail, then once its not rendered, use the `:before` pseudo class to add content where the > icon is placed. Lastly, now that the > icon is gone, you must find a replacement for it. Using the attribute selector `details[open]` in combination with the `:before` pseudo class to set the content.

```css
/* Hide the > icon */
details>summary::-webkit-details-marker {
  display: none;
}

/* Replacement icon */
details>summary::before {
  content: '👉';
}

/* Replacement icon for open state */
details[open]>summary::before {
  content: '👇';
}
```

Lastly, I did some experimenting with animations and transitions. During this experimenting I learned that there are 2 ways to add a little animation to your design: transitions and animation using key-frames.

Transitions are the easiest to implement; you add a transition to a parent element and give it a speed (.3s for example). Once the state of that element (or its childs) changes, it animates the transition rather than switching instantly, giving it an animated effect.

Animations are a little more complex but by doing so it allows more animating than just transitioning. According to the [MDN page](https://developer.mozilla.org/en-US/docs/Web/CSS/animation) for animation, there are several ways to call an animation but always in the following order: `animation: <key-frame name or animation> <duration> <delay> <iterations>`

I've applied an animation on both the `<detail>` element's icon and on the pricing on each articles. I want to expand the experimenting on the title as well, because if I do chose to go wild with it, it would still look nice (since the title is supposed to catch attention). Here is an example of I implemented an animation:

```css
details[open] summary~* {
  animation: fadeIn .2s linear;
}
details[close] summary~* {
  animation: fadeOut .2s linear;
}

@keyframes fadeOut {
  0% {
    opacity: 0;
    margin-top: 0m
  }

  100% {
    opacity: 1;
    margin-top: -1em
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    margin-top: -1em
  }

  100% {
    opacity: 1;
    margin-top: 0m
  }
}
```

In this piece of CSS I have created key-frames and specified the styling for each relevant percentage (side note: percentages are relative to the given duration). 

In this case, the fadeIn key-frame assumes an opacity of 0 (which is invisible but still existing) and a margin of -1em (which is the height of text). At the end of the ride, at 100%, the opacity finishes at 1 (which is now completely visible), and the margin-top goes to 0, creating a smooth fade-in effect. 

I've also tried to animate the 👉 to 👇 rotation on the detail elements but was unsuccessful. My two approaches were: 
1) Add a rotation key-frame where the icon progressively rotates the hand icon to point downwards using `transform: rotate(90)`. This method was unsuccessful.
```css
@keyframes rotate {
  0% {
    transform: rotate(0deg)
  }

  100% {
    transform: rotate(90deg)
  }
}
```
2) Add a transition on the parent element (that would be the summary in detail element) and add a `transform: rotate(45)` on the `details[open]` attribute selector, where the 👉 changes to 👇. This method was unsuccessful as well.


### **update**
As of writing the 2. method above I managed to get it working. Breaking down the logic probably helped me realize why it wasn't working! Here is how I got it working: previously I had set the `transition` on the `summary` element, while this seems correct it is clearly not. It targets the `summary` while I need to target the `:before` state, where the changes to the icon happens. After adding it to the `:before`, it started to move according to the rotation.

```css
details>summary::-webkit-details-marker {
  display: none;
}

details>summary::before {
  content: '👉';
  transition: .3s;
}

details[open]>summary::before {
  transform: rotate(90deg); 
}

```
-- **add a screen recording here** -- 

Now that I realized why it wasn't working it was easy to apply the animation method as well: 

```css
details>summary::-webkit-details-marker {
  display: none;
}

details>summary::before {
  content: '👉';
}

@keyframes rotate {
  0% {
    transform: rotate(0deg)
  }

  100% {
    transform: rotate(90deg)
  }
}

details[open]>summary::before {
  animation: rotate .3s ease-in-out;
  animation-fill-mode: forwards;  

}

/* for some reason this breaks the styling but hey, I tried */
details:not([open])>summary::before {
  animation: rotate 1s reverse;
  animation-fill-mode: forwards;  
}
```

-- **add a screen recording here** -- 

Conclusion: both methods look fine. However, I do prefer the transition method because it writes in a shorter notation and handles the open and close animation perfectly. On top of that, the details element already knows how to animate the open and close, there no need to manually write the keyframes for that because a simple rotation transformation works just as fine if not better.

Despite the setbacks and the complications, I believe that this blocky design is too easy to make. Starting next week I want to apply the same grid techniques in a new design without making it the main focus of the design. I want to focus on applying color and focusing on the accessability, working with black & white is an easy solution and I want to challenge myself. 

Furthermore I would like to (finally) focus on the accessability, and how to strategize a proper implementation of accessability techniques for visually and/or physically impaired users. 

# Week 4
- [ ]  Bespreek je eindresultaat. ('praatje met plaatjes').
- [ ]  Wat ging er soepel , wat was lastig en waar ben je trots op.
- [ ]  Welke experimenten heb je gedaan die die 'mislukt' zijn.
- [ ]  Heb je nieuwe inzichten hoe je de kracht CSS kunt benutten (of juist niet).
- [ ]  Waar wil je meer mee gaan doen.
---
<details>
  <summary>Old readme</summary>
# CSS to the Rescue @cmda-minor-web 2020 - 2021

Wij vinden het web fascinerend. De laatste jaren is CSS een volwassen en zeer krachtige taal geworden (niet langer een bottleneck - integendeel). Veel van de (nieuwe) **CSS-lekkernijen** worden echter nog niet ten volle benut. Sommige delen van de spec worden onterecht (nog) niet bemind, andere delen zijn zo groot en complex dat we mogelijkheden nog niet hebben doorgrond. Aan jou de  mooie opdracht om de onontgonnen delen van de CSS-wereld in kaart te brengen.

**In dit vierweekse vak ga je experimenteren met (voor jou) nieuwe CSS technieken - om daarna/mee een innovatieve, experimentele én aangename ervaring te creëren - met vanilla CSS en HTML dus (frameworks, preprocessors, libraries en JS zijn niet toegestaan).**

Nb. Het experiment wordt gewaardeerd - zelfs/zeker als het niet (helemaal) lukt. Voel je vrij om verder te gaan dan de CSS-technieken die je al beheerst.

## Dingen om vooraf te doen
- 🔱 **Fork** deze repository
- ✅ [**Enroll** je voor de minor via de courselector](https://icthva.sharepoint.com/sites/courseselector#/CourseSelector/web-design-and-development/2020-2021) (dan kun je je werk straks ook op [DLO](https://dlo.mijnhva.nl/d2l/home/275640) opleveren)
- 🎥 **Camera's aan** tijdens lessen en co (zorg dat je webcam werkt)
- 📒 **Bekijk** het [programma](https://cmda-minor-web.github.io/css-to-the-rescue-2021/files/CSSttR-Kickoff.pdf) (pdf 30MB) en de [kennismakingsoefening](https://cmda-minor-web.github.io/css-to-the-rescue-2021/oefening.html) alvast even

## Opdrachten
Het vak bestaat uit:
- [Een kennismakingsoefening](https://cmda-minor-web.github.io/css-to-the-rescue-2021/oefening.html)
- [De eindopdracht](https://cmda-minor-web.github.io/css-to-the-rescue-2021/index.html)

De [beoordelingscriteria voor de eindopdracht](https://cmda-minor-web.github.io/css-to-the-rescue-2021/beoordelingsformulier.html) op een rijte.

## Programma
Het vak beslaat 4 weken. Bekijk de [kick-off presentatie](https://cmda-minor-web.github.io/css-to-the-rescue-2021/files/CSSttR-Kickoff.pdf) (pdf 30MB). 

In Teams vind je de [Excel met de indeling en planning](https://teams.microsoft.com/l/file/6E37FED4-91C7-4293-A7C4-C0309D24634D?tenantId=0907bb1e-21fc-476f-8843-02d09ceb59a7&fileType=xlsx&objectUrl=https%3A%2F%2Ficthva.sharepoint.com%2Fsites%2FFDMCI_EDU__CMD20_21_Minor_Web_5i7j73jt%2FShared%20Documents%2F03%20-%20CSS%20to%20the%20Rescue%2FCSS%20to%20the%20rescue%20-%20Indeling%20%26%20Planning.xlsx&baseUrl=https%3A%2F%2Ficthva.sharepoint.com%2Fsites%2FFDMCI_EDU__CMD20_21_Minor_Web_5i7j73jt&serviceName=teams&threadId=19:84bbb4a3b90d40a6b434649359689744@thread.tacv2&groupId=5d001f9a-0a4b-4768-92b1-0f1768328ba3). 
Daar schrijf je je ook in voor themasessies en het eindgesprek.

Colleges, lessen en gesprekken vinden plaats [in Teams](https://teams.microsoft.com/l/channel/19%3a84bbb4a3b90d40a6b434649359689744%40thread.tacv2/03%2520-%2520CSS%2520to%2520the%2520Rescue?groupId=5d001f9a-0a4b-4768-92b1-0f1768328ba3&tenantId=0907bb1e-21fc-476f-8843-02d09ceb59a7).

## Docenten
- Vasilis van Gemert
- Thijs Spijker
- Sanne 't Hooft
- Leonie Smits

## Leerdoelen
- Je kunt experimenteren met (voor jou) nieuwe css-technieken - om de mogelijkheden op waarde te schatten en te gebruiken waar gepast.
- Je hebt begrip van de volle kracht en mogelijkheden van CSS. Je laat zien dat CSS meer kan dan allen web pages 'stylen'.
- Je hebt begrip van de interactie-technieken van CSS (en HTML). De UX is aangenaam bruikbaar binnen de gekozen context(en).
- Je hebt begrip hoe progressive enhancement elegant toe te passen. Je laat zien dat je cascade, inheritance en specificity kunt toepassen.

[](https://docs.google.com/spreadsheets/d/1Xv48MSiACNmnM6nXpGGUb8mJDC459uSaxJszO_zLEp8/edit?usp=sharing)

## De Selector First CSS & No JS aanpak
Het **eerste uitgangspunt** is dat je *geen* ID's en classes gebruikt. Niet omdat ze niet nuttig zijn, maar om te oefenen met de [vele CSS selectoren](https://css-tricks.com/almanac/) die je tot je beschikking hebt. ID's mag je alleen gebruiken om de :target selector te triggeren. En als het echt echt echt niet anders kan, heb je permissie om een paar classes toe te voegen.

Een **tweede uitgangspunt** is dat je *geen* JS gebruikt (i.i.g. zo min mogelijk - het vak heet niet voor niets CSS to the Rescue). Wat met CSS en/of HTML kan mag je *niet* met JS realiseren en het is *niet* toegestaan om CSS properties met JS aan te passen. We vinden het daarentegen wel interessant dat je verkent waar JS en CSS elkaar raken/versterken, bijv. het [uitlezen en aanpassen van CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties), of bijv. de [animationstart](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/animationstart_event), [animationcancel](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/animationcancel_event), [animationiteration](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/animationiteration_event) en [animationend](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/animationend_event) events gebruiken.

</details>
