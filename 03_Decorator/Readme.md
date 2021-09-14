# Decorator pattern

- runtime behavior change
- wrapping object which retruns value - this value is modified in a desired way
- we can use multiple "wrappers" - multiple decorators
- the decorator has a return type of the main object that's being modified 
  - the reason is that we want to be able to use multiple decorators
- we're using composition instead of inheritance to share behaviour
   - we don't have to extend functionality by subclassing 

> The decorator pattern attaches additional responsibilities to an object dynamically.

Object `A` has behavior `a`. By using decorator `B`, object `A` will do `b` in runtime.
