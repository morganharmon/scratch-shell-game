## The Golden Rule: 

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1) **Make a drawing of your app. Simple "wireframes"** 
  <br> <img src="assets\Shell-game-wireframe.jpg" alt="wireframe" style="width:256px;height:256px;">
2) **Look at the drawing and name the HTML elements you'll need to realize your vision**
-shell 1 div, shell 2 div, shell 3 div
-guess 1 button, guess 2 button, guess 3 button
-wins tally, losses tally, total tally spans

3) **Look at the drawing and imagine using the app. What _state_ do you need to track?** 
-track wins, track losses, total can be derived

4) **For each HTML element ask: Why do I need this? (i.e., "we need div to display the results in")** 
-each shell needs its own div so that one can be picked as the winner
-each guess button needs its own div so it can be determined if it is the winner or not
-the text element for tallys can contain a span for each category

5) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How" (i.e., `resultsEl.textContent = newResults`)**
-give each shell div its own id
-gives each button its own id and an eventlistener for clicks
-use eventlistener script to update wins/losses spans, and calculate new total span

6) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change? Does any DOM update?**
-on click, use Math function to pick a random number from 1-3, and add a "winner" class to the corresponding shell
-show ball under winning shell
-display win/lose message to user
-update wins/losses/total
-reset shells after timeout or on new guess

7) **Think about how to validate each of your features according to a Definition of Done. (Hint: console.log usually helps here.)**
-console.log each div on creation to make sure it pulls the right div
-console.log math function output to make sure it is 1-3 and that buttons are activating it
-verify win/lose message appears
-verify wins/losses/total update correctly
-verify shells reset

8) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

Additional considerations:
- Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
- Consider your data model. 
  - What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need? 
  - What are the key/value pairs? 
  - What arrays might you need? 
  - What needs to live in a persistence layer?
- Is there some state we need to initialize?
- Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)
