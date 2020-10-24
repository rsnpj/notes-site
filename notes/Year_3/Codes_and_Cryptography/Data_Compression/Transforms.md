---
title: Transform coding background
lecturer: Max
---

# Fourier series and Fourier transform

## Fourier series

The representation of periodic functions in terms of a series of sines
and cosines was first used by Fourier[^1].

[^1]: Grattan-Guinness, I., 2005. Joseph Fourier, Théorie analytique de la chaleur (1822). In Landmark Writings in Western Mathematics 1640-1940 (pp. 354-365). Elsevier Science.

Let $f$ be a periodic function of period $T$, i.e.

$$
f(t) = f(t + nT) \quad \forall t \in \R, n \in \Z
$$

Then we can write
$f(t)$ as

$$
f(t) = \sum_{k=-\infty}^\infty c_k e^{i k \omega t}
$$

where $i = \sqrt{-1}$ and $\omega = \frac{2 \pi}{ T }$

Equivalently, we have

$$
f(t) = a_0 + \sum_{k=1}^\infty a_k \cos ( k \omega t ) + \sum_{k=1}^\infty b_k \sin ( k \omega t )
$$

In other words, the periodic functions of period $T$ form a vector
space, and $\{ e^{i n \omega t} \}$ forms a basis orthonormal w.r.t. the inner product

$$
\langle f(t), g(t) \rangle = \frac{1}{T} \int_0^T f(t) g^*(t) \ dt
$$

where $g^*(t)$ denotes the complex conjugate of $g$. The coefficients
can then be obtained as follows:

$$
    c_k = \langle f(t), e^{i k \omega t} \rangle = \frac{1}{T} \int_0^T f(t) e^{-i k \omega t} dt
$$

The intuition behind this representation is as follows.

Suppose we have a periodic signal $f$. Then its $c_k$ Fourier coefficients decompose the
signal into basic fluctuating signals; each $e^{i k \omega t}$
fluctuates at a frequency of $k \omega/(2 \pi)$. As such, these
coefficients give us a measure of the different amounts of fluctuation
in the signal.

## Discrete Fourier transform

We want to handle signals that are not periodic, but instead limited in
time. Suppose we have a signal $f(t)$ that is limited in time (say from
$t=0$ to $t = t_1$). Then we can extend it to a periodic signal by doing

$$
f_P(t) = \sum_{n \in \Z} f(t - nT)
$$

where $T > t_1$. This is the so-called **periodic extension** of $f$.

Moreover, we are dealing with discrete signals: instead of $f(t)$, we
are considering $\{f_0, f_1, \dots, f_{N-1} \}$. We can discretise
Equation the formula give above as follows:

$$
F_k = \sum_{n=0}^{N-1}  f_n e^{-i \frac{2 \pi k n }{N}} \quad k = 0, 1, \dots, N-1
$$

The coefficients $F_k$ are called the discrete Fourier transform
(DFT) of $f$. We can recover the signal from its DFT by

$$
f_n = \frac{1}{N} \sum_{k=0}^{N-1} F_k e^{i \frac{2 \pi k n }{N}} \quad n = 0, 1, \dots, N-1
$$

## Matrix representation of DFT

Let $f = (f_0, f_1, \dots, f_{N-1})$ and let $F = (F_0, \dots, F_{n-1})$
be its DFT. Then we have

$$
F = {\bf A} f
$$

where ${\bf A}$ is an $N \times N$ matrix with coefficients
$a_{i,j} = e^{- i \frac{2\pi}{N} ij}$. For example, with $N = 4$ we
obtain

$$
{\bf A} = \begin{pmatrix}
    1 & 1 & 1 & 1\\
    1 & -i & -1 & i\\
    1 & -1 & 1 & -1\\
    1 & -i & -1 & i
    \end{pmatrix}
$$

## Unitary and orthogonal transforms

The matrix ${\bf A}$ from the DFT is **unitary**: it satisfies

$$
{\bf A}^\dagger = {\bf A}^{-1}
$$

where ${\bf A}^\dagger$ is its
conjugate transpose: $a^\dagger_{i,j} = a_{j,i}^*$. It is easily shown
that the following are equivalent for a matrix ${\bf U}$:

1.  ${\bf U}$ is unitary;

2.  ${\bf U}$ preserves the inner product, i.e.

    $$
    \langle x,y \rangle = \langle {\bf U} x, {\bf U}y \rangle
    $$

3.  ${\bf U}$ preserves the norm, i.e.
    $$
    \| x \|^2 = \sum_{i=0}^{N-1} |x_i|^2 = \langle x,x \rangle = \langle {\bf U} x, {\bf U}x \rangle = \sum_{i=0}^{N-1} |({\bf U}x)_i|^2 = \| {\bf U} x \|^2
    $$

We will not actually use the DFT and instead we will restrict ourselves
to real matrices. A real unitary matrix is called orthogonal.
So an orthogonal matrix is a real matrix ${\bf A}$ such that

$$
{\bf A}^{-1} = {\bf A}^\top
$$

# Two-dimensional transforms

## Two-dimensional data

In general, in one dimension, we could apply any orthogonal transform as
such:

$$
\theta = {\bf A}x, \quad x = {\bf A}^\top \theta
$$

We will use transforms for two-dimensional data (small blocks of pixels). How are we
going to apply a one-dimensional transform to two-dimensional data? The
answer is actually easy: we apply the transform column-wise and
row-wise.

## Matrix form

More succinctly, let ${\bf X}$ be an $N \times N$ matrix with entries
$\{x_{i,j} : i,j = 0, \dots, N-1\}$. We then perform

$$
\Theta = {\bf A} {\bf X} {\bf A}^\top
$$

($\Theta$ is another $N \times N$ matrix.) Multiplying on the left by ${\bf A}$ performs the
transform column-wise, while multiplying on the right by ${\bf A}^\top$
performs the transform row-wise. By associativity,

$$
\Theta = ({\bf A} {\bf X}) {\bf A}^\top = {\bf A} ( {\bf X} {\bf A}^\top )
$$

and hence the order does not matter!

Note that the inverse is straightforward:

$$
{\bf X} = {\bf A}^\top \Theta {\bf A}
$$

## Basis matrices

Let ${\bf X}$ be an $N \times N$ matrix. For all
$i,j \in \{0, \dots, N-1\}$, let ${\bf E}_{i,j}$ be the matrix with a
single $1$ in position $(i,j)$ and $0$ everywhere else. Then those
matrices form a basis for the vector space of all $N \times N$ matrices,
and we have the decomposition

$$
{\bf X} = \sum_{i=0}^{N-1} \sum_{j=0}^{N-1} x_{i,j} {\bf E}_{i,j}
$$

Any two-dimensional orthogonal transform also yields a similar
decomposition. We still denote $\Theta = {\bf A} {\bf X} {\bf A}^\top$,
and we denote the entries of $\Theta$ as $\theta_{i,j}$. We then have

$$
\begin{aligned}
    {\bf X} &= {\bf A}^\top \Theta {\bf A}\\
            &= {\bf A}^\top \left( \sum_{i,j} \theta_{i,j} {\bf E}_{i,j} \right) {\bf A}\\
            &= \sum_{i,j} \theta_{i,j} {\bf A}_{i,j}
\end{aligned}
$$

where the matrices ${\bf A}_{i,j} := {\bf A}^\top {\bf E}_{i,j} {\bf A}$
are the \Define{basis matrices} of the transform. More concretely,
denote the $k$-th row of ${\bf A}$ as $a_k$, then

$$
    {\bf A}_{i,j} = a_i^\top a_j
$$

For instance, let

$$
{\bf A} =  \frac{1}{ \sqrt{2} }
    \begin{pmatrix}
    1 & 1\\
    1 & -1
    \end{pmatrix}
$$

Then the four basis matrices are given by

$$
\begin{aligned}
    {\bf A}_{0,0} &= \frac{1}{2}
    \begin{pmatrix}
    1 & 1\\
    1 & 1
    \end{pmatrix} &
    \qquad & &
    {\bf A}_{0,1} &= \frac{1}{2}
    \begin{pmatrix}
    1 & -1\\
    1 & -1
    \end{pmatrix} \\
    {\bf A}_{1,0} &= \frac{1}{2}
    \begin{pmatrix}
    1 & 1\\
    -1 & -1
    \end{pmatrix} &
    \qquad & &
    {\bf A}_{1,1} &= \frac{1}{2}
    \begin{pmatrix}
    1 & -1\\
    -1 & 1
    \end{pmatrix}
\end{aligned}
$$

# Modus operandi of transform coding

## Norm and energy

The square of the norm of a vector can be viewed as its
energy. Orthogonal transforms preserve the energy (as they
are unitary matrices). The efficacy of a transform depends on how much
energy compaction is provided by the transform. Intuitively, the
transform helps to accumulate the energy on a few symbols; those symbols
should be kept, while the other ones can be discarded at little loss.

One measure of the energy compaction offered by a transform is the
transform coding gain, defined as follows (for simplicity, we
define it for one-dimensional data). Let $\sigma_i^2$ be the variance of
the transformed coefficient $\theta_i$ for $i=0, \dots, N-1$, then the
transform coding gain is the ration of the arithmetic mean of variances
over their geometric mean:

$$
    G_{\mathrm{TC}} := \frac{ \frac{1}{N} \sum_{i=0}^{N-1} \sigma_i^2 }{ \left(\sum_{i=0}^{N-1} \sigma_i^2 \right)^{\frac{1}{N}} }.
$$

## Three steps of transform coding

Transform coding consists of three steps.

**Step 1: Transform**
First, the data is split into blocks of size $N$. Each block is
mapped into a transform sequence using a reversible transform
(usually orthogonal).

**Step 2: Quantization**

Secondly, the transformed sequence is quantized. The quantization
strategy depends on three main factors:

1.  the desired average bit rate

2.  the statistics of the various elements of the transformed
    sequence

3.  the effect of distortion in the transformed coefficients on the
    reconstructed sequence.

Quantization is an important problem with some nice maths behind it,
but we will skip the details here.

**Step 3: Encoding**

Thirdly, the quantized value is encoded using some binary encoding
technique, e.g. Huffman or arithmetic coding.
