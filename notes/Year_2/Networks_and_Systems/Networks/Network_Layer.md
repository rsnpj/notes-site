---
title: Network Layer
lecturer: Donald
---

# Routing Algorithms

Routing is the process of discovering network paths

-   Decide what to optimize (e.g., fairness vs efficiency)

-   Model the network as a graph of nodes and links

-   Update routes for changes in topology (e.g. failures)

# Optimality Principle

Identify the optimal path from source to destination

<Definition name="Sink Tree">
Optimal routes from all sources to a given destination
</Definition>

Distance metric: the number of hops, or time delay

# Shortest Path Algorithm

Dijkstra’s algorithm computes a sink tree on the graph

-   Each node is labelled with its distance from the source node to the
    best known path

-   Initially no paths are known

-   Each link is assigned a non-negative weight/distance

-   Shortest path is the one with the lowest total weight

Algorithm

-   Start with sink, set distance at other nodes to infinity

-   Labels tentative ($\circ$) or permanent
    (${\color{black}\bullet}\mathllap{\circ}$), initially all tentative

-   Pick the lowest distance non-permanent node, make it permanent

-   Repeat from this node, until all nodes are permanent

# Distance vector routing

There are two dynamic routing algorithms

## Distance vector

-   Each node maintains a table (vector of best known destination)

-   Tables are updated by exchanging information between nodes

-   Tables have 2 entries: **outgoing line** and **estimated distance**
    (\# hops or propagation delay)

Algorithm:

-   Each node knows distance of links to its neighbours

-   Each node advertises a vector of the lowest known distances to all
    neighbours

-   Each node uses received vectors to update its own

-   Repeat periodically

![image](/img/Year_2/Networks_and_Systems/Networks/Network/distance_vector_routing.webp)

### The Count-to-Infinity Problem

Failures can cause DV to "count to infinity" while seeking a path to an
unreachable node

![image](/img/Year_2/Networks_and_Systems/Networks/Network/infinity.webp)

## Link State Routing

Link state is an alternative to distance vector algorithm. There are 5
steps:

1.  Learn the network address of the neighbouring routers by sending
    HELLO packet, record name

2.  Set the distance to each neighbour

3.  Construct a packet telling all other routers what it has just
    learned

4.  Send the packet to neighbours and receive packet from all other
    routers

5.  Compute the shortest path by using Dijkstra’s algorithm

<Definition name="LSP (Link State Packet)">
A list of the node's neighbours and weights of links to reach them
</Definition>

![image](/img/Year_2/Networks_and_Systems/Networks/Network/LSP.webp)

# Hierarchical Routing

Hierarchical routing reduces the work of route computation but may
result in slightly longer paths than flat routing

![image](/img/Year_2/Networks_and_Systems/Networks/Network/Hierarchical.webp)

Useful in the internet, each region would be geographical, makes routing
much faster to compute.

# Flooding

-   A simple method to send a packet to all network nodes

-   Each node floods a new packet received on an incoming link by
    sending it out of the other links

-   Nodes need to keep track of flooded packets to stop the flood

# Broadcasting

Broadcast sends a packet to all nodes:

-   RPF (Reverse Path Forwarding): Arrived packets are checked to see if
    they arrived from a preferred link, which is the link that is
    normally used for sending packets towards the source of the
    broadcast

-   1st hop: I sends packets to F, H J and N. Packets arrive on the same
    link that is used to send to I

-   2nd hop: 8 packets are generated, two by each router. 5 of them
    arrive on the preferred link

![image](/img/Year_2/Networks_and_Systems/Networks/Network/Broadcast.webp)
