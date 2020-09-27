---
title: Fourier Images in Filtering
lecturer: Ioannis
---

# Image filtering in Fourier space

Enables operations which are relatively complex in the spatial domain to
be computed as simpler and computationally more efficient operations in
Fourier space, such as:

-   Convolution

-   Correlation

-   De-convolution

<Important>
Don't forget, the equation of a circle is
$$
x^2+y^2=r^2
$$
</Important>

## Edge detection

In Fourier space we just turn off all the low-frequency coefficients
within the DFT representation of the image by multiplying them by 0, to
keep the high frequency edges

# High pass filtering

**Operation**: suppress low frequency components from the image

The ideal high pass filter sets frequencies below a certain threshold to
zero

$$
H\left(k_{x}, k_{y}\right)=\left\{\begin{array}{ll}{0,} & {\sqrt{k_{x}^{2}+k_{y}^{2}} \leq K} \\ {1,} & {\sqrt{k_{x}^{2}+k_{y}^{2}}>K}\end{array}\right.
$$

K is the cut-off distance from the Fourier image origin

We multiply the Fourier image F() by $H(k_x,k_y)$ to find the filtered
Fourier image

$$
S(k_x,k_y)=H(k_x,k_y)F(k_x,k_y)
$$

**Uses**: detect edges/ edge enhancement

## Strange effects

We observe also high frequencies where they do not exist in the
corresponding spatial images.

Known as ringing (i.e. processing noise), they are introduced by the
sharp $\{0\rightarrow 1\}$ cut-off of frequencies in the Fourier domain

# Butterworth high pass filter

**Operation**: smooth approximation to the ideal high pass filter to
avoid ringing effects

A continuous radially symmetric filter given by

$$
B\left(k_{x}, k_{y}\right)=\frac{1}{1+\left(\frac{K}{\sqrt{k_{x}^{2}+k_{y}^{2}}}\right)^{2 n}}
$$

where n is a user-defined positive integer called the order of the
filter

As n increases, the filter approaches the ideal filter with cut-off
value K

# Low pass filtering

This time suppressing low frequency components from the image, following
the following equation

$$
H\left(k_{x}, k_{y}\right)=\left\{\begin{array}{ll}{1,} & {\sqrt{k_{x}^{2}+k_{y}^{2}} \leq K} \\ {0,} & {\sqrt{k_{x}^{2}+k_{y}^{2}}>K}\end{array}\right.
$$

**Uses**: Noise removal/image smoothing

## Ringing in ideal low pass filter

Ringing occurs at sharp edges in the image because sharp frequency
cut-offs are poorly approximated in the spatial domain

![image](/img/Year_2/Software_Methodologies/Image_Processing/Filtering/low_pass.webp)

## Gaussian low pass filter

$$
G\left(k_{x}, k_{y}\right)=\exp \left[-\left(k_{x}^{2}+k_{y}^{2}\right) / 2 \sigma^{2}\right]
$$

$\sigma$ is the width of the filter at $1/e$. It controls the bandwidth
of this filter i.e. the range of frequencies allowed through

The Fourier transform of a Gaussian is a Gaussian. Therefore, via
convolution theorem, we have the same effect as spatial linear
filtering.

## Butterworth low pass filter

This is an alternative to the Gaussian

**Operation**: smooth approximation ot the ideal low pass filter to
avoid ringing effects

$$
B\left(k_{x}, k_{y}\right)=\frac{1}{1+\left(\frac{\sqrt{k_{k}^{2}+k_{y}^{2}}}{K}\right)^{2 n}}
$$

where n is a user-define positive integer called the order of the
filter

As n increases, the filter approaches the ideal filter with cut-off
value K

# Band pass filtering

**Operation**: a filter with two frequency thresholds that passes
frequencies in a given range

# Correlation

**Correlation** in image processing is a basic image template matching
technique very similar to convolution.

They key difference is that masks are not necessarily symmetric

Correlation is primarily used to matching, e.g. template matching. The
mask represents a template and the response of the mask relates to how
well that mask matches the image at a given position, i.e. pixel
difference in spatial domain:

$$
I_{output} (i, j)=\sum_{k=-\lfloor N / 2]}^{\lfloor N / 2\rfloor} \sum_{l=-[M / 2]}^{\lfloor M / 2\rfloor}\left\|I_{i n p u t}(i+k, j+l)-m_{k l}\right\|
$$

Applied as per 2D convolution example at each pixel location. Often
squared difference is used

# Fourier space correlation

**Operation**: Find all the regions with certain properties or patterns\

**Process** (in Fourier): Transform image and mask into Fourier space
and multiply them together. Frequencies in mask are amplified, whilst
others attenuated

# Deconvolution

To reverse the effect of a given filter, divide the image by the mask in
Fourier space

It is the inverse of convolution and is used as basis for image
deblurring
