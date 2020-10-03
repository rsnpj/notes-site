---
title: Performance Measurement
lecturer: Lei
---

# Precision and Recall

How well did we capture the + group for the given threshold

![Precision and Recall](/img/Year_2/Software_Methodologies/Machine_Learning/Performance_Measures/P+R.webp)

![Precision and Recall fig 2](/img/Year_2/Software_Methodologies/Machine_Learning/Performance_Measures/P+R1.webp)

Precision:

$$
\dfrac{tp}{tp+fp}>1$$ Recall (Sensitivity)
$$

![Precision and Recall fig 2](/img/Year_2/Software_Methodologies/Machine_Learning/Performance_Measures/P+R2.webp)

## ROC Curve

Recall (sensitivity)

$$
\dfrac{tp}{tp+fn}$$ Specificity
$$

![ROC Curve](/img/Year_2/Software_Methodologies/Machine_Learning/Performance_Measures/ROC.webp)

![ROC Curve fig2 ](/img/Year_2/Software_Methodologies/Machine_Learning/Performance_Measures/ROC1.webp)

# Gains and Lift

Sensitivity (recall)

$$
Se=\dfrac{tp}{tp+fn}
$$

Support (% pop)

![Gains and Lift](/img/Year_2/Software_Methodologies/Machine_Learning/Performance_Measures/G+L.webp)

Base rate

$$
Br=\dfrac{tp+fn}{n}
$$

Gains

$$
\{Su,Se\}
$$

Lift

$$
\{Su,\dfrac{Se}{Su}\}
$$

ROC

$$
\{\dfrac{Su-Br\cdot Se}{1-Br},Se\}
$$
