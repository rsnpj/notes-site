---
title: Basic Computability
---

# m-reducibility

<Definition name="m-reducibility">
{String.raw`
Let A and B be languages over the same alphabet $\Sigma$. A is a many-to-one reducible to B (write $A\leqslant B$) if there is a Turing machine F that terminates on every input $u\in \Sigma^*$, and such that
$$
A\{u\in \Sigma^*|F(u)\in B\}
$$
`}
</Definition>

Informally: A is not harder than B

## Properties of m-reducibility

**Proposition**. Suppose $A\leqslant B$

1.  If B is Turing-decidable, so is A

2.  If B is Turing-recognisable, so is A

3.  If $A\leqslant B$ and $B\leqslant C$, then $A\leqslant C$

\begin{notation}
Denote $A\equiv B$ to mean that $A\leqslant B$ and $B\leqslant A$
\end{notation}

Informally: A and B are equally difficult

# m-completeness

\begin{definition}[m-complete]A language A is m-complete if
\begin{enumerate}
\item A is Turing-recognisable
\item For every Turing-recognisable language B, $B\leqslant A$
\end{enumerate}
\end{definition}

Informally: If A is m-complete then A is as hard as any other
Turing-recognisable language

\begin{corollary}
If A is m-complete and $A\leqslant B$, then B is m-complete
\end{corollary}
\begin{definition}
The Halting language H consists of the words $\langle M \rangle \circ w$ (over some fixed alphabet) such that the Turing machine M terminates on $w$
\end{definition}
\begin{theorem}
H is M complete
\end{theorem}

**Proof**: Generic reduction. Pick any Turing-recognisable language A.
It is recognised by some machine $M_A$. Reduce it to H by mapping any
word $w$ onto the word $\langle M_A \rangle \circ w$. It is obvious that
the reduction is computable and $w\in A$ iff
$\langle M_A \rangle \circ w \in H$

\begin{definition}
$H_0$ is the "diagonal" of H, i.e. the language $\langle M \rangle \circ \langle M \rangle$ such that M terminates on $\langle M \rangle$
\end{definition}
\begin{theorem}
$H_0$ is m-complete
\end{theorem}

**Proof**: Reduction from H. Given a word $\langle M \rangle \circ w$,
create a Turing machine $N_{M,w}$ that simulates M on w (and note that
it ignores the input) - this can be done using a universal Turing
machine. Now, $N_{M,w}$ terminates on any input iff M terminates on w.
In particular $N_{M,w}$ terminates on $\langle N_{M,w}$ iff M terminates
on w

# Oracle Turing Machine and t-reducibility

\begin{definition}[Oracle Turing Machine] $ $\\
\begin{enumerate}
\item An oracle for a language A is a black-box that takes a word w as an input and instantly (and correctly) replies if $w\in A$ (if a Turing machine with that language will accept it)
\item An oracle Turing machine M, denoted by $M^A$ is a Turing machine that has an additional capability of making calls to an oracle for the language A
\end{enumerate}
\end{definition}
\begin{definition}[t-reducible]A language A is t-reducible to a language B if A is decidable by some oracle Turing machine $M^B$
\end{definition}
\begin{theorem}
If $A\leqslant_t B$ and B is Turing-decidable, then A is Turing-decidable
\end{theorem}

# Computable and Partially Computable Functions

\begin{definition}[Domain] The input values of a function for which you get an output
\end{definition}
\begin{definition}[Range] The possible output values for the function
\end{definition}
\begin{definition}[Computable]A total function $f: \Sigma^*\rightarrow \Sigma^*$ is computable if there is a TM $\mathscr{F}$ such that on any input $x\in \Sigma^*$, $\mathscr{F}$ produces $f(x)$ as the output
\end{definition}
\begin{definition}[Partially Computable]A partial function $g:\Sigma^*\rightarrow \Sigma^*$ is partially computable if there is a TM $\mathscr{G}$ such that on any input $x\in \text{dom}(g)$, $\mathscr{G}$ produces $g(x)$ as the output and if $x \notin \text{dom}(g)$, $\mathscr{G}$ doesn't terminate
\end{definition}

**Proposition**. A language (set) $S\subseteq \Sigma^*$ is
Turing-recognisable iff it is:

-   The domain of a partially computable function

-   The range of a computable function

-   The range of a partially computable function

# Parameter Theorem

\begin{theorem}
Let $\mathscr{M}(x,y)$ be a TM that expects a two-part input $x\sqcup y$. There is a TM $\mathscr{SMN} (t,x)$ that on inputs $\langle \mathscr{M}\rangle$ and $x$, produces a (description of a) TM $\langle \mathscr{M}_x \rangle$ such that for every y, $\mathscr{M}_x(y)=\mathscr{M}(x,y)$
\end{theorem}

# Recursion theorem

\begin{theorem}
Let $\mathscr{M}(x,y)$ be a TM that expects a two-part input $x\sqcup y$. There is a TM $\mathscr{R}(y)$ such that for every y, $\mathscr{R}(y)=\mathscr{M}(\langle \mathscr{R} \rangle, y)$  
\end{theorem}

**Proof** $\mathscr{R}$ will consist of several parts (apart from
$\mathscr{M}$, which will be executed last)

1.  A "forward movement" $\mathscr{F}$, which while moving the head to
    the right, skips over all non-blank symbols and over the first blank
    before stopping (allows you to move from anywhere in x to the start
    of y)

2.  A "backward movement" $\mathscr{B}$, which skips over a blank to the
    left, then skips over all non-blank symbols while moving the head to
    the left, stops at the first blank and then moves the head one
    position to the right (move from the start of y to the start of x,
    or the end of y to the start of y)

3.  A "constant" TM $\mathscr{C}_w$, which ignores the input, produces
    $w\sqcup$ onto the tape and moves back the head into the first
    symbol of w\
    $\mathscr{C}_w$ will have $2|w|+1$ states such that for every i from
    1 to $|w|$, state $i$ writes $w_i$ onto the tape, moves the head
    right and leads into state $i+1$; state $|w|+1$ writes the blank
    onto the tapes, moves the head right and leads into state $|w|+2$
    from which it moves the head to the left $|w|-1$ times, leading to
    state $2|w|+1$, which is terminal

4.  A "source" TM $\mathscr{S}(x)$, which keeps the input $x$ and
    produces the description of $\mathscr{S}_x$, after it, i.e. in the
    end, we have $x\sqcup \langle \mathscr{C_x} \rangle$ onto the tape
    and the head is positioned at the first symbol of $x$

5.  A "permutation" TM $\mathscr{P}_\pi (x_1\sqcup..\sqcup x_n)$

$\mathscr{R}$ will then consist of
$\mathscr{F},\mathscr{C}_r,\mathscr{S},\mathscr{B},\mathscr{P}_\pi,\mathscr{\pi}$
where $\pi$ is the permutation
$\left(\begin{array}{ccccccc}{1} & {2} & {3} & {4} & {5} & {6} & {7} \\ {2} & {7} & {3} & {4} & {5} & {6} & {1}\end{array}\right)$
and r is the sequence of the description of the following TMs separated
by blanks:
$\langle\mathscr{F}\rangle \cup\langle\mathscr{S}\rangle \cup\langle\mathscr{B}\rangle \cup\left\langle\mathscr{P}_{\pi}\right\rangle \cup\langle\mathscr{M}\rangle$

1.  $\mathscr{F}$ leaves $y\sqcup$ unchanged and just positions the head
    at the first symbol after the blank

2.  $\mathscr{C}_r$ produces
    $y \cup \langle\mathscr{F}\rangle \cup\langle\mathscr{S}\rangle \cup\langle\mathscr{B}\rangle \cup\left\langle\mathscr{P}_{\pi}\right\rangle \cup\langle\mathscr{M}\rangle$
    and the head points at the first symbol of
    $\langle \mathscr{F} \rangle$

3.  Thus, $\mathscr{S}$ has now
    $\mathscr{F},\mathscr{S},\mathscr{B},\mathscr{P}_\pi,\mathscr{M}$,
    which is r, as an input, so it produces the description of
    $\mathscr{C}_r$ at the end and the head points to the first symbol
    of $\langle \mathscr{F}\rangle$ again

4.  $\mathscr{B}$ beings the head at the beginning of $y$ and the
    permutation $\mathscr{P}_\pi$ reshuffles the seven parts into the
    right order

5.  Finally $\mathscr{M}$ is executed on the description of
    $\mathscr{R}$ followed by $y$

**Alternate proof**\
We construct a Turing Machine R in three parts, A, B and T, where T is
given by the statement of the theorem\
\
Let $w$ be the original input to R. Here A is the Turing machine
$P_{BT\# W}$, where \# is a special character to separate the original
input. Now A exists because of the lemma:\
\
"There exists a computable function $q:\Sigma*\rightarrow \Sigma*$ such
that $q(w)=\langle P_w \rangle$, where $P_w$ is a Turing machine that
prints w and halts.\
\
After A runs, the tape contains $\langle BT \rangle \# w$\
\
Next B is a Turing machine that constructs the string $q(x)$ given input
$x$, where $q$ is from the lemma. Then it prints
$\langle q(x), x \rangle$ and halts. When B runs after A, it constructs
the string
$\langle P_{\langle BT \# w \rangle} \rangle=\langle A \rangle$ . It
prints
$\langle \langle A \rangle, \langle BT \rangle \# w \rangle = \langle ABT \# w \rangle = \langle R\# w \rangle$\
\
Finally T runs on its input. which is $\langle R\# w \rangle$ here. This
completes the proof.

# Partially Computable Functions w/o Machines

We consider functions on the set of natural numbers $\mathbb{N}$\
\
Definition. The initial functions are

1.  The successor: $s(x)=x+1$ (returns one more than what you give it)

2.  The zero: $n(x)=0$ (returns 0)

3.  The projections $u_i^n(x_1,x_2,...,x_n)=x_i$ for every
    $n\in \mathbb{N}$, $1\leqslant i \leqslant n$ (takes n numbers,
    returns ith one)

# Primitive Recursive functions

\begin{definition}[Primitive recursive]A function is called \textbf{primitive recursive} if it can be obtained from the initial functions by a finite number of applications of composition and primitive recursion (defined below)
\end{definition}
\begin{definition}
Let $f$ be a function of $k$ variables and let $g_1,g_2,...,g_k$ be functions of n variables. The function $h$ of $n$ variables if obtained from $f$ and $g_1,g_2,...,g_k$ by composition if
$$h(x_1,x_2,...,x_n)=^{def}f(g_1(x_1,x_2,...,x_n), g_2(x_1,x_2,...x_n),... g_k(x_1,x_2,...,x_n))$$
\end{definition}
\begin{definition}
Let $f$ and $g$ be total functions of $n$ and $n+1$ variables, respectively. The function $h$ of $n+1$ variables is obtained from $f$ and $g$ by primitive recursion if
$$h(x_1,x_2,..,x_n,0)=^{def} f(x_1,x_2,...,x_n)$$
$$h(x_1,x_2,...,x_n,t+1)=^{def} g(t,h(x_1,x_2,...,x_n,t),x_1,x_2,...,x_n)$$
\end{definition}
\begin{definition}[Addition]Addition can be defined as follows:
$$a(x,y)=x+y$$
$$a(x,t+1)=s(a(x,t))$$
\end{definition}
\begin{definition}[Multiplication]Multiplication can be defined as follows:
$$m(x,t+1)=a(m(x,t),x)$$
\end{definition}

# Step-counter Function is Primitive Recursive

**Proposition**\
The following functions are primitive recursive: addition, subtraction,
multiplication, integral division, exponentiation, integral logarithm,
nth prime number, ith digit in base b expansion

\begin{definition}[Gödel Number]The Gödel Number of a sequence of numbers $x_1,..,x_n$ defined as $p_1^{x_1}\cdots p_{n-1}^{x-1}p_n^{x_{n}+1}$ where $p_i$ is the ith prime number, is primitive recursive
\end{definition}

A string w over a finite alphabet can be encoded by a single number
$[w]$, and so can a TM $\mathscr{M}$ via
$[\langle \mathscr{M} \rangle]$, which we’ll shorten to $[\mathscr{M}]$\
\
A configuration of a TM $\mathscr{M}$, consisting of a state, a head
position and a tape content can be encoded as a single number $[q,i,w]$
via a primitive recursive function $[q,i,w]=C(q,i,w)$\
\
Moreover, if a configuration $q,i,w$ yields a configuration $q',i',w'$,
the function $Step([q,i,w])=[q',i',w']$ is primitive recursive

\begin{definition}[Step-counter function]$$SC([ \mathscr{M} ], [w],0) = [q_{start},0,w]$$
$$SC([\mathscr{M}], [w], t+1) = Step(SC, ([\mathscr{M}], [w], t))$$
\end{definition}

# Gödel’s Incompleteness

A formula $\varphi$ in a formal system that reason about natural numbers
is a finite sequence of symbols, so can be suitably encoded by a single
number $[\varphi]$\
\
A formula $\Pi$ in the system can also be encoded by a single number
$[\Pi]$. The predicate $Proof([\Pi],[\varphi])$, stating that $\Pi$ is a
proof of $\varphi$ is primitive recursive\
\
We shall assume that the system is consistent i.e. one can’t prove both
$\varphi$ and $\lnot \varphi$ for any formula $\varphi$. Assume now that
every formula in the system, which is true, is also provable. And assume
that the system that can reason about TM’s computations. For every
instance of the co-Halting problem the predicate
$$\exists p Proof(p,[\mathscr{M} \text{does not terminate on} w])$$ is
semi-decidable. Indeed, for a positive instance, the predicate is true
and by our assumption there is a proof encoded by some number p. We find
p by brute force: trying 0,1... etc. But then the co-Halting problem is
semi-decidable and since the Halting Problem is semi-decidable, we get
that the Halting problem is decidable - a contradiction

# Gödel’s self-referential sentence

Let $\varphi(x)$ be a formula with one free variable $x$. Define the
predicate $P(n,[\varphi])$ to mean "$n$ doesn’t encode a proof of
$\varphi([\varphi])$\
\
Now, define the formula $\psi(y)$ to be $\forall x P(x,y)$. It has a
single free variable $y$, so let’s see what $\psi([\psi])$ says:\
\
Every $x$ doesn’t encode a proof of $\psi([\psi])$, i.e. $\psi([\psi])$
is not provable\
\
Is $\psi([\psi])$ false? No, since if it were, what it says is false,
thus it is provable. But everything that is provable must be true - a
contradiction!. Thus, $\psi([\psi])$ is true, so what it says it true
and that means $\psi([\psi])$ is not provable.

# Robinson Arithmetic Q

Q is the weakest sub-system of Arithmetic in which Godel’s
incompleteness holds\
\
It has a constant zero 0 and function symbols S for successor, + for
addition and $\times$ for multiplication. It has no induction. The
axioms are as follows:

1.  $S(x)\neq 0$

2.  $(S(x)=S(y))\rightarrow x = y$

3.  $y = 0 \lor \exists x (S(x) = y)$

4.  $x + 0 = x$

5.  $x + S(y) = S(x + y)$

6.  $x\times 0 = 0$

7.  $x\times S(y)=x\times y+x$

\begin{Exercise}\label{EX10}
\vspace{-\baselineskip}% <-- You don't need this line of code if there's some text here
\Question
What can you say about reducibilities between H and co-H
\begin{enumerate}[label=(\Alph*)]
\item H is m-reducible to co-H
\item co-H is m-reducible to H
\item Neither are true
\item Both are true
\end{enumerate}

    \Question
    What is the sequence encoded by the Gödel Number 600?
    \begin{enumerate}[label=(\Alph*)]
        \item 3,1,1
        \item 2,0,1
        \item 2,3,5
        \item None of them
    \end{enumerate}

\end{Exercise}
\begin{Answer}[ref=EX10] \Question \textbf{C}\\
\\
co-H is not reducible to H as the co-Halting problem is not turing-recognisable and the halting problem is, this violates the property of m-reducibility that if B is Turing-recognisable, so is A.\\
\\
H is not reducible to co-H would imply that co-H is reducible to co-co-H (just H), which can't be true by the same reasoning as above

    \Question
    \textbf{A}\\
    \\
    $2^3\times 3^1\times 5^{1+1}=600$

\end{Answer}
