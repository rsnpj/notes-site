---
title: JPEG
lecturer: Max
---

# Operations before transform coding

## Color space transformation

First, the image should be converted from RGB into a different color
space called $Y'C_BC_R$ (a.k.a. YCbCr). It has three
components $Y'$, $C_B$ and $C_R$: the Y’ component represents the
brightness of a pixel, and the $C_B$ and $C_R$ components
represent the chrominance (split into blue and red
components).

Mathematically, let $R, B, G$ be the red, green and blue signals, which
all take a value between $0$ and $1$. Then

$$
\begin{aligned}
    Y' &= K_R R + K_G G + K_B B,\\
    C_B &= \frac {1}{2} \frac {B-Y'}{1-K_B},\\
    C_R &=\frac {1}{2} \frac {R-Y'}{1-K_R},
\end{aligned}
$$

where $K_R$,$K_G$, and $K_B$ are constants that satisfy $K_R + K_G +K_B = 1$. For
instance,

$$
\begin{aligned}
    K_R &= 0.299\\
    K_G &= 0.587\\
    K_B &=0.114
\end{aligned}
$$

The Y’CBCR color space conversion allows greater compression without a
significant effect on perceptual image quality (or greater perceptual
image quality for the same compression). The compression is more
efficient because the brightness information, which is more important to
the eventual perceptual quality of the image, is confined to a single
channel. This more closely corresponds to the perception of color in the
human visual system.

![YCbCr](/img/Year_3/CaC/Data_Compression/JPEG/YCbCr.webp)

## Downsampling

Humans can see considerably more fine detail in the brightness of an
image (the Y’ component) than in the hue and color saturation of an
image (the Cb and Cr components). As such, the next step is
chroma downsampling, which reduces the spatial resolution of
the Cb and Cr components.

## Block splitting

JPEG splits an image into $8 \times 8$ blocks of pixels and applies
transform coding to each block. We will focus on one channel and see the
data as an $8 \times 8$ matrix of integers ${\bf X}$. We will use a
running example with

$$
{\bf X} = \begin{pmatrix}
    124 & 125 & 122 & 120 & 122 & 119 & 117 & 118\\
    121 & 121 & 120 & 119 & 119 & 120 & 120 & 118\\
    126 & 124 & 123 & 122 & 121 & 121 & 120 & 120\\
    124 & 124 & 125 & 125 & 126 & 125 & 124 & 124\\
    127 & 127 & 128 & 129 & 130 & 128 & 127 & 125\\
    143 & 142 & 143 & 142 & 140 & 139 & 139 & 139\\
    150 & 148 & 152 & 152 & 152 & 152 & 150 & 151\\
    156 & 159 & 158 & 155 & 158 & 158 & 157 & 156\\
    \end{pmatrix}
$$

# Step 1: Transform

## DCT

The discrete cosine transform(DCT) is similar to the DFT, but
only takes the cosines into consideration. More precisely, the transform
matrix is ${\bf C}$, where

$$
c_{i,j} = C_i \sqrt{ \frac{1}{N} } \cos \left( \frac{(2j+1)i \pi}{2 N} \right)
$$

where $C_0 = 1$ and $C_i = 2$ for all $i \in \{1, \dots, N-1\}$. The
basis matrices for the DCT ($N=8$) are given below.

![DCT](/img/Year_3/CaC/Data_Compression/JPEG/DCT-8x8.png)

Technically, JPEG does not apply the DCT to ${\bf X}$ directly. Instead,
it subtracts $128$ to each value (so that for instance, the top left
value is now -4) before applying the DCT. Following our running example,
we obtain

$$
\Theta = \begin{pmatrix}
    39.88 & 6.56 & -2.24 & 1.22 & -0.37 & -1.08 & 0.79 & 1.13 \\
    -102.43 & 4.56 & 2.26 & 1.12 & 0.35 & -0.63 & -1.05 & -0.48\\
    37.77 & 1.31 & 1.77 & 0.25 & -1.50 & -2.21 & -0.10 & 0.23\\
    -5.67 & 2.24 & -1.32 & -0.81 & 1.41 & 0.22 & -0.13 & 0.17\\
    -3.37 & -0.74 & -1.75 & 0.77 & -0.62 & -2.65 & -1.30 & 0.76\\
    5.98 & -0.13 & -0.45 & -0.77 & 1.99 & -0.26 & 1.46 & 0.00\\
    3.97 & 5.52 & 2.39 & -0.55 & -0.051 & -0.84 & -0.52 & -0.13\\
    -3.43 & 0.51 & -1.07 & 0.87 & 0.96 & 0.09 & 0.33 & 0.01
\end{pmatrix}
$$

## DCT over DFT

Why use the DCT instead of the DFT? Let’s use the one-dimensional case
to explain this. The DFT has a major problem: it “presumes” that the
signal $(f_0, \dots, f_{N-1})$ has period $N$, since it uses a basis a
functions that are periodic of period $N$. But there could be a large
discontinuity in our signal: $f_0$ may differ from
$f_{N-1}$. The DFT needs accounts for that discontinuity by adding a
term of high frequency and in turn modifying all the lower frequency
terms: that can ruin everything. On the other hand, the DCT “presumes”
that the signal has period $2N$ by effectively working on a new signal
$(f_0, \dots, f_{N-1}, f_{N-1}, f_{N-2}, \dots, f_0)$. That signal does
not have such discontinuity anymore. See below for an example; note that
there are four main kinds of DCT and that JPEG uses DCT-II.

![image](/img/Year_3/CaC/Data_Compression/JPEG/DCT.webp)

# Step 2: Quantization

## Zigzag scan

The basis matrices of the DCT represent different fluctuations of
frequency increasing with both $i$ and $j$. In particular, the
$\theta_{0,0}$ coefficient is referred to as the DC coefficient
as it corresponds to zero frequency and is proportional to the average
value of $x_{i,j}$. The other coefficients are referred to as the
AC coefficients. The coefficients are sorted according to a
zigzag scan, displayed below.

![image](/img/Year_3/CaC/Data_Compression/JPEG/JPEG_ZigZag.png)

## Quantization

The JPEG algorithm uses so-called “uniform midtread quantization.” The
quantization steps are organized in a quantization table; an example is
given in the following matrix.

$$
{\bf Q} = \begin{pmatrix}
    16 & 11 & 10 & 16 & 24 & 40 & 51 & 61\\
    12 & 12 & 14 & 19 & 26 & 58 & 60 & 55\\
    14 & 13 & 16 & 24 & 40 & 57 & 69 & 56\\
    14 & 17 & 22 & 29 & 51 & 87 & 80 & 62\\
    18 & 22 & 37 & 56 & 68 & 109 & 103 & 77\\
    24 & 35 & 55 & 64 & 81 & 104 & 113 & 92\\
    49 & 64 & 78 & 87 & 103 & 121 & 120 & 101\\
    72 & 92 & 95 & 98 & 112 & 100 & 103 & 99
\end{pmatrix}
$$

These values are actually determined by a quality
coefficient specified by the user.

The quantized value of $\theta_{i,j}$ is

$$
l_{i.j} = \left\lfloor \frac{ \theta_{i,j} }{ Q_{i,j} } \right\rceil
$$

where $\lfloor x \rceil$ denotes the integer nearest to $x$:
$\lfloor x \rceil = \lfloor x + 0.5 \rfloor$.

We can see that the step size increases as we move from the DC
coefficient to higher frequency coefficients. Therefore, more
quantization error will be introduced at higher-frequency levels. This
is because quantization errors in the DC and lower AC coefficients are
more easily detectable by the human visual system than quantization
errors in the higher AC frequencies.

Following our example, we obtain the following quantized coefficients

$$
\begin{pmatrix}
    2 & 1 & 0 & 0 & 0 & 0 & 0 & 0\\
    -9 & 0 & 0 & 0 & 0 & 0 & 0 & 0\\
    3 & 0 & 0 & 0 & 0 & 0 & 0 & 0\\
    0 & 0 & 0 & 0 & 0 & 0 & 0 & 0\\
    0 & 0 & 0 & 0 & 0 & 0 & 0 & 0\\
    0 & 0 & 0 & 0 & 0 & 0 & 0 & 0\\
    0 & 0 & 0 & 0 & 0 & 0 & 0 & 0\\
    0 & 0 & 0 & 0 & 0 & 0 & 0 & 0
\end{pmatrix}
$$

All coefficients with magnitude less than half the corresponding step
size will be set to zero. Because the step sizes at the end of the
zigzag scan are larger, we typically see a
long run of zeroes toward the end of the scan. The entire
run of zeroes at the end of the scan can be code by an end of block
(EOB) code after the last nonzero label.

Reconstruction at the decoder’s end is straightforward: the
reconstructed value $\hat{\theta}_{i,j}$ is given by

$$
\begin{pmatrix}
    32 & 11 & 0 & 0 & 0 & 0 & 0 & 0\\
    -108 & 0 & 0 & 0 & 0 & 0 & 0 & 0\\
    42 & 0 & 0 & 0 & 0 & 0 & 0 & 0\\
    0 & 0 & 0 & 0 & 0 & 0 & 0 & 0\\
    0 & 0 & 0 & 0 & 0 & 0 & 0 & 0\\
    0 & 0 & 0 & 0 & 0 & 0 & 0 & 0\\
    0 & 0 & 0 & 0 & 0 & 0 & 0 & 0\\
    0 & 0 & 0 & 0 & 0 & 0 & 0 & 0
    \end{pmatrix}
$$

The reconstructed data is then

$$
\begin{pmatrix}
    123 & 122 & 122 & 121 & 120 & 120 & 119 & 119\\
    121 & 121 & 121 & 120 & 119 & 118 & 118 & 118\\
    121 & 121 & 120 & 119 & 119 & 118 & 117 & 117\\
    124 & 124 & 123 & 122 & 122 & 121 & 120 & 120\\
    130 & 130 & 129 & 129 & 128 & 128 & 128 & 127\\
    141 & 141 & 140 & 140 & 139 & 138 & 138 & 137\\
    152 & 152 & 151 & 151 & 150 & 149 & 149 & 148\\
    159 & 159 & 158 & 157 & 157 & 156 & 155 & 155
    \end{pmatrix}
$$

# Step 3: Encoding

There are two distinct forms of encoding, one for the DC coefficient and
one for the AC coefficients.

## Encoding the DC coefficient

The DC coefficient is directly related to the average value of the data
in the block. As such, it typically does not change massively from one
block to the next. We then use differential encoding, where
we encode the difference between the current block and the previous one.

Values of the change are grouped in Categories. Intuitively,
the $n$-th category contains all changes that need $n$ bits to be
written. Formally,

1.  for $n=0$, the category $C_0$ is $C_0 = \{0\}$;

2.  then for all $1 \le n \le 15$, the category $C_n$ is defined as
    $$C_n = \{ -(2^n - 1), \dots, -2^{n-1} \} \cup \{ 2^{n-1}, \dots, 2^n - 1 \};$$
    (hence $C_1 = \{-1,1\}$, $C_2 = \{-3, -2, 2, 3\}$, and so on)

3.  finally, for $n=16$, $C_{16} = 2^{15}$.

The category numbers are encoded using \Important{Huffman coding}; we
then use $n$ bits to specify a particular value in category $n$. For
instance, if the difference is $6$, then we would send the Huffman
codeword for category $3$ and then $3$ bits to specify that the value is
$6$.

## Encoding the AC coefficients

The AC coefficients also use the grouping into categories but they are
encoded according to a different Huffman code. The key idea is that we
are likely to encounter long runs of zeros in the zigzag scan (even
before the EOB), so we want to encode a whole run of zeros at a time.
Therefore, we not only encode the category number $C$, but also the
number $Z$ of zero-valued labels since the last nonzero label. The pair
$C/Z$ forms a pointer to a predetermined Huffman code.

For instance, suppose the value is $-2$ (Category $C = 2$) and there
have been $Z = 5$ zero-valued labels prior to this label in the zigzag
scan. Then we would send the Huffman codeword for $2/5$ and then send
$2$ more bits to identify the value $2$.
