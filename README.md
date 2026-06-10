# Hatch 🥚
 
**The problem isn't that people don't have ideas for their free time.  
It's that generic suggestions were never built for *them*.**
 
---
 
## Why This Exists
 
Most "boredom solvers" treat every user identically. They return a random activity with no awareness of your energy, your company, or how much time you actually have. The result is a suggestion that doesn't fit — which you ignore — which means nothing changes, and the afternoon slips away.
 
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
 
