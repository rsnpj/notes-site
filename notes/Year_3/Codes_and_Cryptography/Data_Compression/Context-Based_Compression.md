---
title: Context-based Compression
lecturer: Max
---

# Context

## Context-based compression

Statistical compression (mainly for text, but not only) can be based on
two properties. The first property is the frequency of symbols: the
model assigns probabilities to the symbol according to their frequency
in the document.

The second one is the context. In practice, the context a
symbol consists of the $N$ symbols preceding it (note that we cannot use
symbols succeeding it, as the decoder typically does not know them
yet!). Context-based compression then uses the context of a symbol to
predict it (i.e. to assign it a probability).

For instance, let’s use a context of only one character. The letter h
occurs in typical English text only about 5% of the time. However, if
the current symbol is t, then there is a much higher probability (around
30%) that the next symbol will be h, since the digram th is very common
in English. Note that the prediction is about assigning probabilities,
not trying to figure out the next symbol exactly (which is impossible).

## Static v Adaptive contexts

A static context-based modeller always uses the same probabilities, which
are stored in some large table. Those probabilities are usually obtained
by crawling through many documents (say typical English texts). There
are issues with that approach, notably the fact that this might assign
zero probabilities to some strings.

An adaptive context-based modeller also maintains tables of probabilities
of all the possible digrams (or trigrams, or even longer $n$-grams). But
this time the tables are updated all the time as more data are input,
which adapts the probabilities to the particular data being compressed.
Adaptive context-based compression might be slower, but
typically results in better compression.

## Context length

One may think at first that the larger the number $N$ of symbols in the
context, the better the compression. However, this might not be the
case:

1.  A large $N$ requires to write the first $N$ symbols in plain text,
    which might hurt the overall compression.

2.  If $N$ is too large, then there are simply too many contexts, which
    makes storing, reading off, and writing on the table of
    probabilities infeasible.

3.  A very long context contains information about the nature of old
    data. It is not uncommon to have files where different parts have
    different symbol distributions.

Therefore, in practice relatively small contexts are used in practice
(for text compression, traditional methods use no more than 10
characters).

# PPM

## Basic idea

Prediction by Partial Matching(PPM) is based on an encoder
that keeps a statistical model of the text. It starts with an order-$N$
context. It searches its data structure for an occurrence of the current
context $C$ followed by the next symbol $S$. If it finds no such
occurrence, if decreases the order of the context to $N-1$ and tries
again (the new context $C'$ is the final $N-1$ characters of $C$). It
keeps shortening the context until it is successful.

The encoder reads the next symbol $S$ from the input stream, looks at
the current order-$N$ context $C$ (the last $N$ symbols read), and based
on the previous input data, computes the probability $P$ that $S$ will
appear following $C$. The encoder then calls an adaptive arithmetic
encoder to encode $S$ with probability $P$. If the probability $P$ is
zero, the PPM encoder tries with a smaller context; it reduces the
context until $P \ne 0$. What if the symbol $S$ has not been seen yet
(and hence, even with order-$0$ context, we still have $P = 0$)? Then
the PPM encoder enters order-$(-1)$ context, where the
probability of $S$ is simply $1/$(size of alphabet).

<Example>

Let us look at the contexts and frequency counts for the following string with $11$ symbols:

$$
xyzzxyxyzzx
$$

| Order 4      |     | Order 3     |     | Order 2    |     | Order 1   |     | Order 0 |     |
| ------------ | --- | ----------- | --- | ---------- | --- | --------- | --- | ------- | --- |
| xyzz $\to$ x | 2   | xyz $\to$ z | 2   | xy $\to$ z | 2   | x $\to$ y | 3   | x       | 4   |
| yzzx $\to$ y | 1   | yzz $\to$ x | 2   | xy $\to$ x | 1   | y $\to$ z | 2   | y       | 3   |
| zzxy $\to$ x | 1   | zzx $\to$ y | 1   | yz $\to$ z | 2   | y $\to$ x | 1   | z       | 4   |
| zxyx $\to$ y | 1   | zxy $\to$ x | 1   | zz $\to$ x | 2   | z $\to$ z | 2   |         |     |
| xyxy $\to$ z | 1   | xyx $\to$ y | 1   | zx $\to$ y | 1   | z $\to$ x | 2   |         |     |
| yxyz $\to$ z | 1   | yxy $\to$ z | 1   | yx $\to$ y | 1   |           |     |         |

</Example>

Now, how does the encoder tell the decoder which order context it is
currently using (and hence what the decoder should be using too)? The
answer is to have a dedicated escape symbol, which we’ll
denote esc, which should be output whenever the context size is
decreased. Since this is a new character, we should also assign a
probability for the escape symbol for every encountered context. There
are various ways (heuristics) of assigning such probabilities. Here, we
will use the so-called Method A, where the escape symbol is assigned a
frequency of 1.

We are now in position to give a more explicit example. Encoding a full
sequence is actually quite tedious to explain so we’ll only encode a few
characters. We use contexts of order at most 2. Let us consider

> this⏘is⏘the⏘tithe

The first few symbols are not very interesting, so let us skip forward.
Let’s assume we have already encoded “this⏘is” and we
wish to encode the next character ⏘.

We assume the word length for arithmetic coding is six bits. For the
sake of simplicity, we have $Low = 0$ and hence $L^* = 000000$ and
$High = 1$ hence $H^* = 111111$. (As we shall see, the low and high
values may vary over time.)

Here is what the table of contexts looks like

| Order 2   |     | Order 1 |     | Order 0 |     |
| --------- | --- | ------- | --- | ------- | --- |
| th → i    | 1   | t → h   | 1   | t       | 1   |
| th → esc  | 1   | t → esc | 1   | h       | 1   |
| hi → s    | 1   | h → i   | 1   | i       | 2   |
| hi → esc  | 1   | h → esc | 1   | s       | 2   |
| is → ␣    | 1   | i → s   | 2   | ␣       | 2   |
| is → esc  | 1   | i → esc | 1   | esc     | 1   |
| s␣ → i    | 1   | ␣ → i   | 1   |
| s␣ → esc  | 1   | ␣ → esc | 1   |
| ␣ i → s   | 1   | s → ␣   | 1   |
| ␣ i → esc | 1   | s → esc | 1   |

The second-order context is “is”. We use characters in the
order of the table: the first row gives the first interval and so on. In
this context, the probability of the space sign “␣” and
the probability of the escape symbol esc are both equal to 1/2, and
$$L(\text{␣}) = 0, H(\text{␣}) = 1/2 = L(esc), H(esc) = 1.$$
The update equations for the new $Low$ and $High$ are

$$
\begin{aligned}
    Low &\gets Low + (High - Low) L(x) = 0,\\
    L^* &\gets 000000,\\
    High & \gets Low + (High - Low) H(x) = 1/2,\\
    H^* &\gets 011111.
    \end{aligned}
$$

Since the first (most significant)
bit of $L^*$ and $H^*$ coincide, we shift that bit out and shift $0$
into $L^*$ and shift $1$ into $H^*$. So we obtain:

1.  Encoded sequence for “␣”: $0$,

2.  Lower bound $L^* = 000000$,

3.  Higher bound $H^* = 111111$.

The next symbol is “t”. The second-order context is
“s␣”. Since “t” has zero frequency in this
context, we need to encode the escape symbol. By a similar argument as
above, we obtain

1.  Encoded escape symbol sequence: $1$,

2.  Lower bound $L^* = 000000$,

3.  Higher bound $H^* = 111111$.

We need to look at the first-order context, which is
“␣”. Again, “t” does not appear with this
context, so we encode another escape symbol. We obtain

1.  Encoded escape symbol sequence: $1$,

2.  Lower bound $L^* = 000000$,

3.  Higher bound $H^* = 111111$.

We need to look at the zero-th order context. This time, “t” has already
appeared, and is assigned the interval $[0, 1/9 )$. We then have

$$
\begin{aligned}
    Low &\gets Low + (High - Low) L(x) = 0,\\
    L^* &\gets 000000,\\
    High & \gets Low + (High - Low) H(x) = 1/9,\\
    H^* &\gets 000111.
\end{aligned}
$$

Since the three leftmost bits are
equal, we shift them out. We finally obtain

1.  Encoded sequence: for “t”: $000$,

2.  Lower bound $L^* = 000000$,

3.  Higher bound $H^* = 111111$.

So, to encode “␣t”, we have transmitted $011000$.

Note that there would be a slight difference in practice: to keep
everything integral, we would use $High = 63$, $Low = 0$ and perform an
update of the form

$$
\begin{aligned}
    Low &\gets Low + \left\lfloor (High - Low + 1) \frac{ 1 }{ 9 }  \right\rfloor  = 0 = 000000\\
    High & \gets High + \left\lfloor (High - Low + 1) \frac{ 1 }{ 9 }  \right\rfloor - 1  = 6 = 000110
\end{aligned}
$$

Then we would have: Higher bound $H^* = 110111$.

## Methods B and C

Two other main ways of assigning frequencies to the escape symbols aim
to make the escape symbol more probable, which typically reduces the
size of the resulting sequence for that symbol. The main idea is that if
a context is followed by many different characters, then you are likely
to encounter yet another character following that same context. For
instance, think of the context “s” in English, which can be followed by
virtually any other letter. Methods B and C give the escape
symbol a count equal to the number of symbols following the context;
Method B then subtracts the count of every other symbol by one, while
Method C does not amend those.
