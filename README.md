# Hatch 🥚
 
**The problem isn't that people don't have ideas for their free time.  It's that generic suggestions were never built for *them*.**


<img width="1368" height="801" alt="Hatch" src="https://github.com/user-attachments/assets/6692ad7c-920a-4274-95a2-e2da261c2159" />

 
---
 
## Why This Exists
 
Most "boredom solvers" treat every user identically. They return a random activity with no awareness of your energy, your company, or how much time you actually have. The result is a suggestion that doesn't fit, which you ignore; which means nothing changes, and the afternoon slips away.
 
That mismatch is the real problem. Hatch solves it with three questions.
 
---

 
## What It Does
 
Answer three questions:
 
| Question | Options |
|----------|---------|
| How's your energy? | 😴 Low / 🙂 Medium / ⚡ High |
| Who are you with? | 🧍 Solo / 👥 With others |
| How many free hours? | 1–12 |
 
Hatch returns a structured day blueprint — one, two, or three activity blocks depending on your available time. Not a rigid schedule. Just enough shape to stop the day from disappearing.
 
---

## The Core Insight
 
The original BoredBot project this was built from calls the Bored API like this:
 
```js
fetch("https://www.boredapi.com/api/activity")
```
 
A completely random result every time.  
Hatch calls the same API like this:
 
```js
fetch("https://www.boredapi.com/api/activity?type=relaxation&participants=1")
```
 
Same API. Completely different result quality. The `type` and `participants` parameters exist in the documentation but almost no one uses them. The product improvement here wasn't about writing more complex code — it was about reading the docs and asking: *what does this user actually need right now?*
 
That question drives the whole build.

---
 
## How the Logic Works
 
**Energy → Activity Type**
 
| Energy Level | Morning | Afternoon | Evening |
|--------------|---------|-----------|---------|
| Low | relaxation | education | music |
| Medium | recreational | cooking | music |
| High | social | diy | recreational |
 
**Hours → Number of Blocks**
 
| Free Time | Blueprint |
|-----------|-----------|
| 1 – 3 hrs | Afternoon block only |
| 4 – 6 hrs | Morning + Afternoon |
| 7+ hrs | Full day — all three |
 
**Social context** (`participants=1` or `participants=2`) is passed directly to the API as a query string parameter.
 
---

## Built With
 
- **HTML5** — semantic structure, accessible radio button inputs
- **CSS3** — custom pill-button radio styling, CSS transitions, flexbox layout
- **Vanilla JavaScript** — DOM manipulation, conditional fetch logic, reusable functions
- **[Bored API](https://www.boredapi.com)** — activity data source
- No frameworks. No build tools. No dependencies.
---
 
## What This Project Demonstrates
 
**JavaScript**
- Reading multiple user inputs with `querySelector` (radio buttons + number input)
- Building API URLs dynamically from user-selected values
- Reusable functions to avoid copy-pasting the same `fetch()` three times
- Conditional rendering: showing or hiding elements based on logic (`hours >= 7`)
- Error handling with `.catch()` so the app never silently fails
**CSS**
- Hiding native `<input type="radio">` elements and fully restyling them via their adjacent `<span>`
- Using the `:checked` pseudo-class to reflect selected state without JavaScript
- CSS transitions for smooth interaction feedback
**Product thinking embedded in code**
- The hours input doesn't just store a number — it gates the output
- Three hours of free time shouldn't produce the same result as a full free day
- Small decisions like this are the difference between a demo and a product
---
 
## Roadmap
 
- [ ] **Regenerate per block** — swap one activity without rebuilding the whole day
- [ ] **Persist with `localStorage`** — blueprint survives a page refresh
- [ ] **Commitment timer per block** — the reason people don't follow through is the absence of a soft deadline
- [ ] **Screenshot-friendly export** — the blueprint as a shareable card
---

## Run It Locally
 
No install required.
 
```bash
git clone https://github.com/yourusername/hatch
cd hatch
open index.html
```
 
---
 
*Designed to solve a real problem.*
