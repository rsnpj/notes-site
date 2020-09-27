---
title: Object Interaction
lecturer: Steven
---

<Definition name="Abstraction">
The ability to ignore details of parts to focus attention on a higher level of a problem
</Definition>

<Definition name="">
The process of dividing a whole into well-defined parts, which can be built and examined separately, and which interact in well-defined ways
</Definition>

A class can have within it other classes

```java
public class NumberDisplay
{
    private int limit;
    private int value;

}
```

```java
public class ClockDisplay
{
private NumberDisplay hours;
private NumberDisplay minutes;
}
```

The variables in NumberDisplay are primitive types

The variables in ClockDisplay are object types

# Objects creating objects

Formal parameter:

```java
public NumberDisplay(int rollOverLimit);
```

Actual Parameter:

```java
hours = new NumberDisplay(24);
```

# Method calling

```java
public void timeTick()
{
    minutes.increment();
    if(minutes.getValue() == 0) {
        // it just rolled over!
        hours.increment();
    }
    updateDisplay();
}
```

# Internal Methods

```java
/**
* Update the internal string that
* represents the display.
*/
private void updateDisplay()
{
    displayString =
    hours.getDisplayValue() + ":" +
    minutes.getDisplayValue();
}
```

# Method calls

Internal method calls

```java
updateDisplay;
private void updateDisplay()
```

External method calls

```java
minutes.increment()
```
