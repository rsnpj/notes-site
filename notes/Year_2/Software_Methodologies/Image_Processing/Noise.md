---
title: Image noise
lecturer: Ioannis
---

# Noise in images

No digital image is a perfect representation of the original 2D signal

They are limited in resolution by sampling and contain noise

Noise removal is a major goal of image processing to limit the effects
on image visualisation and analysis

# Where does image noise come from?

Capture:

- Variations in sensor temperature

- Electrical sensor noise

- Sensor non-uniformity

- Dust in the environment

- Vibration

- Lens distortion

- Focus limitations

- Sensor saturation (too much light)

- Under exposure (too little light)

Sampling:

- Limitations in sampling and intensity quantization (aliasing)

Processing:

- Limitations in numerical precision

- Potential integer overflow

- Mathematical approximations

Image compression:

- Lossy image compression techniques remove information from image to
  save space

- JPEG/MPEG are examples of widely used lossy compression formats

- Remove non-perceivable detail aiming at "no noticeable difference"

- Result: "compression artefacts" in the image

# Scene noise

Lighting:

- Sunlight changes

- Varying artificial light sources

- Interior light sources oscillate with power supply frequency

- Objects cast shadows causing false image features

- As objects move shadows change

Occlusion:

- Objects are frequently obscured by other objects: occlusion

- Big problem for recognition systems in image understanding tasks

# Types of theoretical noise models

## Salt and pepper noise (impulse noise)

- Random white or black value pixels into the image

- Follows a binary high-low bi-modal noise distribution

## Gaussian noise (additive noise)

- Small random variation of the image signal around its true value
  following the Gaussian distribution

- This is the most common noise model in image processing

# Image noise removal

## Neighbours of a pixel

A pixel p at coordinates (x,y) has four horizontal and vertical
neighbours whose coordinates are given by

$$
(x+y,y), (x-1,y), (x,y+1), (x,y-1)
$$

It also has four diagonal
neighbours whose coordinates are given by:

$$
(x+1,y+1),(x+1,y-1),(x-1,y+1),(x-1,y-1)
$$

Together they form the
$3\times 3$ local pixel neighbourhood

Local image neighbourhoods define local areas of influence, relevance or
interest

Image filtering and many other operations use $N\times M$
neighbourhoods

In most cases:

- N=M (we treat both directions equally)

- N is odd (simplifies implementation)

# Spatial filtering

We go iteratively through the pixels we want to process (perhaps the
whole image)

for each pixel (i,j):

- Consider a neighbourhood S of (i,j). Usually (i,j) will be at the
  centre of S

- Process the pixel values of S (i.e. apply to them a many to one
  function) to find a new value for pixel (i,j)

Replace the original pixel values with the new ones (called the filter’s
responses)

![image](/img/Year_2/Software_Methodologies/Image_Processing/Noise/neighbourhood.png)

# Filtering

<Definition name="Linear Filtering">
Output pixel is a linear combination of the corresponding input pixel's neighbourhood
</Definition>

<Definition name="Non-linear Filtering">
Output pixel is not linear function of the corresponding input pixel's neighbourhood. In practice, some decision based algorithm is employed
</Definition>

# Mean filter

**Operation**: Replace a given pixel with the mean (unweighed average)
of its $N\times N$ image neighbourhood

$$
I_{o u t p u t}(i, j)=\frac{1}{N^{2}} \sum_{(i, j) \in S} I_{i n p u t}(i, j)
$$

S is the neighbourhood, a rectangular window centred at pixel (i,j)
enclosing $N\times N$ neighbours

**Effect**: Eliminates sudden intensity jumps which could be caused by
some noise processes, i.e. eliminates large deviations from the norm.

## Example

Suppose we have the $3\times 3$ neighbourhood:

$$
\begin{array}{lll}{2} & {2} & {3} \\ {3} & {30} & {2} \\ {1} & {3} & {2}\end{array}
$$

Thee value 30 is relatively large - noise spike

Mean filtering will suppress it:

$$
\begin{array}{lll}{2} & {2} & {3} \\ {3} & {5.3} & {2} \\ {1} & {3} & {2}\end{array}
$$

## Effect on types of noise

**Gaussian noise**: Distributed around the original value - the mean can
easily handle this

**Salt and pepper noise**: Significant deviation from the local
distribution

## Drawbacks

Mean filter is not robust to large noise deviations (statistical
outliers). For example, a single pixel with a very unrepresentative
value.

Mean filter causes edge blurring, that is, removes the high frequency
sharp detail.

# Spatial non-linear filters

For an $N\times N$ image neighbourhood, $N_{xy}$, centred at pixel (x,y)
and index by (s,t) the following simple statistical filters can be
defined to replace each pixel with the min/max/median from the input
neighbourhood

Min:

$$
\min _{(s, t) \in N_{x y}}\left\{I_{i n p u t}(s, t)\right\}
$$

Max:

$$
\max _{(s, t) \in N_{x y}}\left\{I_{\text {input}}(s, t)\right\}
$$

Median:

$$
\operatorname{median}_{(s, t) \in N_{x y}}\left\{I_{i n p u t}(s, t)\right\}
$$

## Other spatial non-linear filters

Alpha tripped mean:

$$
I_{o u t p u t}(x, y)=\frac{1}{N^{2}-2 d} \sum_{(s, t) \in N_{x y}} I_{\text {Input}_r}(s, t)
$$

Here, the dimension of the neighbourhood $N_{xy}$ is $N\times N$. The d
lowest and the d highest intensity levels of the image in $N_{xy}$ are
deleted (set to 0) with $I_{Input_r}(s,t)$ denoting the remaining
(reduced set of) $N^2-d$ pixels in $N_{xy}$

Harmonic mean:

$$
I_{o u t p u t}(x, y)=\frac{N^{2}}{\sum_{(s, t) \in N _{x y}} \frac{1}{I_{i n p u t}(s, t)}}
$$

# Median Filter

**Operation**: Replace a given pixel with the median of its $N\times N$
image neighbourhood

Example: for $3\times 3$

![image](/img/Year_2/Software_Methodologies/Image_Processing/Noise/Median.png)

**Effect**: Eliminates sudden intensity jumps which could be caused by
some noise processes, i.e. large deviations from the norm.

But, it is robust to statistical outliers (unlike the mean filter)

**Example**: Suppose we have the $3\times 3$ neighbourhood:

$$
\begin{array}{lll}{2} & {6} & {3} \\ {14} & {81} & {2} \\ {13} & {4} & {1}\end{array}
$$

The value 81 is relatively large - noise spike (an outlier)

Median filtering will suppress it

$$
\begin{array}{lll}{2} & {6} & {3} \\ {14} & {4} & {2} \\ {13} & {4} & {1}\end{array}
$$

# Conservative smoothing

**Operation**: Compare a pixel value to min and max of the other
($N\times N -1$) neighbourhood pixels:

- Replace by min if $<$ min

- Replace by max if $>$ max

Example: For $N=3$

![image](/img/Year_2/Software_Methodologies/Image_Processing/Noise/Smoothing.png)

**Effect**: Eliminates sudden intensity jumps

Here, 150 is replaced by 127 (max of its 8 neighbours)

A conservative approach to smoothing:

- A pixel value will change only if it is outside the range of its
  neighbours

- By the minimum required amount to just bring it in to range
