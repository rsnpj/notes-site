---
title: Histograms and Histogram based image enhancement
lecturer: Ioannis
---

# What is a histogram?

<Definition name="Histogram Function">
A function defined over all possible intensity levels. For each intensity level, its value is equal to the number of pixels with that intensity
</Definition>

# Constructing a histogram

Simply count occurrences of each intensity value

Constructing a histogram:

```
initialise all histogram array entries to 0
for each pixel I(i,j) within the image I
    histogram(I(i,j)) = histogram(I(i,j)) +1
end
```

# Contrast stretch/normalisation

**Operation**: Stretches the pixel range over a larger dynamic range

**Approach**: use four intensity values

1.  upper pixel quantisation limit

2.  lower pixel quantisation limit

3.  maximum pixel value present

4.  minimum pixel value present

$$
I_{output}(i,j)=(I_{input}(i,j)-c)\Bigg(\dfrac{a-b}{c-d}\Bigg)+a
$$

Potential problem - outliers in the image

- Possible that $c\sim a$ and $d\sim b$ (or even $c=a$ and $d=b$)

- Result: contrast stretch has no effect on the image

## Solutions

Use a robust against outliers method to select c and d, instead of the
min and max values in the image

**Method 1**

- Select c and d at fixed percentile points of the histogram
  distribution

- If any of new intensity values are below b or above a, map them to b
  and a respectively

**Method 2**

- Find the most frequent image value (histogram peak)

- Select a cut-off as a percentage of the peak

- Scan down from peak in either direction until last values above
  cut-off are reached and select these as c and d

- If any of new intensity values below b or above a, map them to b and
  a respectively

Method 2 is marginally weaker for complex, multi-peak histograms

# Histogram modelling

<Definition name="Histogram modelling">
Modify an image so that its histogram conforms to a given shape
</Definition>

<Definition name="Histogram Equalisation">
Histogram modelling via an intensity transformation function aiming at producing an output image with uniform histogram distribution
</Definition>

# Cumulative histogram function

Let the dynamic range of a grayscale image be

$$
i=1,2,...,L
$$

For a
histogram function $h(i)$ we construct the cumulative histogram function
$C(i)$

$$
C(i)=\sum_{j=1}^{i}h(j)
$$

That is, the values of $C(i)$ record the sum of the occurrence of each grey level up to and including i

$C(i)$ is a monotonically increasing function

# Histogram equalisation

In an ideally equalised image, all intensity values would appear the
same number of times, i.e. N/L each, where N is the number of pixels in
the image

The cumulative function would then be

$$
C_{ideallyEqualised}(i)=(N/L)i
$$

Histogram equalisation corresponds to the intensity transform

$$
t(i)=(L/N)C_{input}(i)
$$

Which computes the cumulative histogram at
intensity i, and maps i to the intensity of the ideally equalised image
for that value of the cumulative histogram

A schematic example of how histogram equalisation works:

- Let L = 100 (dynamic range of 100 levels)

- Let $C(50) = 0.8\cdot N$ (80% of the N pixels have value 50 or
  lower)

- $t(50)=(L/N)\cdot 0.8\cdot N = 100 \cdot 0.8 = 80$

- 50 is mapped 80 and this, 80% of the pixel of the equalised image
  have value 80 or lower

# Implementation

Technical issues requiring attention in practice:

- a dynamic range with L levels usually consists of the values
  $i=0,1,..,L-1$

- L/N might not be an integer, thus some of the values of t() might
  not be integers

As a solution we can instead use the formula

$$
t(i)=\lfloor ((L-1)/N)\cdot C_{input}(i) \rfloor
$$

# Limitations

As a fully automated technique (no parameters) the effect of histogram
equalisation is highly input dependant

In some image the global contrast can be over-exposed or under-exposed

## Solution

Use the histogram from (a well balanced) sub-part of original image as
the input histogram of the equalisation algorithm

# Localised histogram equalisation

Split the image into a set of discrete, non-overlapping neighbourhoods
of size $N\times N$

Histogram equalisation of each neighbourhood in isolation (tiling)

# Adaptive histogram equalisation

Perform histogram equalisation at each pixel (rather than neighbourhood)
using overlapping local $N\times N$ neighbourhoods

Adaptive histogram equalisation is slower than localised histogram
equalisation

Tiling artefacts can be avoided but choice of neighbourhood size N
crucial

# Localised/adaptive equalisation

In terms of the aesthetics of the output, performance is poor because a
global transform (of the entire dynamic range) is computed and applied
locally
