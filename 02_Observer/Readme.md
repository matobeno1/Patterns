# Observer pattern

- Push vs. Poll architecture
  - this pattern is about moving from polling to pushing
- Examples:
  - weather app needs to know state of a measuring station
  - RSS
  - Chat room
- Observers vs observable
  - observable - main entity that changes state (also called "subject")
  - observers - entities subscribed to the observable
- all of the dependencies are notified and updated
- one-to-many dependencies