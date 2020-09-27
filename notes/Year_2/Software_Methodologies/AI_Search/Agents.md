---
title: Agents and Knowledge Bases
lecturer: Iain
---

# Knowledge-based agents

<Definition name="Knowledge-based agents">
{`
Knowledge based agents are structured around their knowledge base (KB)
* Collection of logical formulae from some knowledge presentation language
* Used to express assertions representing the agent's knowledge
* Can implement the notion of "state"
`}
</Definition>

Logical agents can:

- Query their knowledge base

- Infer new formulae from the knowledge-base and percepts using some
  inference system

A generic knowledge-based agent program is structured as follows

`KB-Agent(percept)`

```
Tell(KB, Make-percept-formula(percept,t))
action=Ask(KB, Make-action-query(t))
Tell(KB, Make-action-formula(action,t))
t = t +1
```

# Our working example - Wumpus World

We shall work with Wumpus World to illustrate issues regarding the
design of intelligent agents

Wumpus World is a cave system consisting of rooms connected by passages

Lurking somewhere in some room is a Wumpus - a beast that eats anyone
who enters its room - so, the room with the Wumpus should be avoided

The Wumpus can be shot by an agent, but the agent only has one arrow

Some rooms contain bottomless pits which will trap anyone who wanders
into these rooms excepts for the Wumpus which is too big to fall in, so
again these rooms should be avoided

However in one room there is a heap of gold - agent’s greed for gold is
greater than the fear of the Wumpus
