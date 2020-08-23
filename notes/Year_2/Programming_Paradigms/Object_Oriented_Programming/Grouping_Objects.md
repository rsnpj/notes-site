---
title: Grouping Objects
---

# Class Libraries

- These are collections of useful classes

- We don’t have to write everything from scratch

- Java calls its libraries packages

- Grouping objects is a recurring requirement

# Collections

We specify

- The type of collection: ArrayList

- The type of objects it will contain `<String>`{.java}

## Features

- Increases capacity as necessary

- Keeps a private count (size() accessor)

- Keeps the objects in order

- Details of how all this is done are hidden

## Using a collection

```java
public class Notebook
{
    private ArrayList<String> notes;
    ...

    public void storeNote(String note)
    {
        notes.add(note);
    }

    public int numberOfNotes()
    {
        return notes.size();
    }
}
```

## Retrieving an object

```java
public void showNote(int noteNumber)
{
    if(noteNumber < 0) {
        // This is not a valid note number.
    }
    else if(noteNumber < numberOfNotes()) {
        System.out.println(notes.get(noteNumber));
    }
    else {
        // This is not a valid note number.
    }
}
```

## Generic Classes

- Collections are known as parameterized or generic types

- ArrayList implements list functionality

- The type of parameter says what we want a list of

# For-each loop

```java
/**
* List all notes in the notebook.
*/
public void listNotes()
{
    for(String note : notes) {
        System.out.println(note);
    }
}
```

# While loop

```java
/**
* List all notes in the notebook.
*/
public void listNotes()
{
    int index = 0;
    while(index < notes.size()) {
        System.out.println(notes.get(index));
        index++;
    }
}
```

# Equality vs Identity

```java
// tests identity
if(input == "bye") {
    ...
}
// tests equality
if(input.equals("bye")) {
    ...
}
```

Identity tests if a variable holds the same instance as another
variable

Equality tests if two distinct objects can be used interchangeably

# Iterators

```java
Iterator<ElementType> it = myCollection.iterator();
while(it.hasNext()) {
    call it.next() //to get the next object
    //do something with that object
}
```

## Index vs Iterator

For each loop

- Use if we want to process every element

While loop

- Use if we might want to stop part way through

- Use for repetition that doesn’t involve a collection

Iterator object

- Use if we might want to stop part way through

- Often used with collections where indexed access if not very
  efficient, or impossible

# Arrays

```java
public class LogAnalyzer
{
    private int[] hourCounts; // array variable declaration
    private LogfileReader reader;

    public LogAnalyzer()
    {
        hourCounts = new int[24]; // array object creation
        reader = new LogfileReader();
    }

}
```

## Array length

To get the length of an array use

```java
private int[] numbers = { 3, 15, 4, 5 };
int n = numbers.length;
```

Note here that length is not a method

# For loop

- The for loop is often used to iterate a fixed number of times

- Often used with a variable that changes a fixed amount on each
  iteration

```java
for(int hour = 0; hour < hourCounts.length; hour++) {
    System.out.println(hour + ": " + hourCounts[hour]);
}
```
