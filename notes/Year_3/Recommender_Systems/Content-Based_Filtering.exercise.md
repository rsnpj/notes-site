<Exercise>
<Question>
For the following dataset, calculate the following models:

-   Simple model/user profile
-   Normalised model
-   TF-IDF weighted model

| ARTICLE | lane | work | Unix | language | table | chess | bell |
| ------- | ---- | ---- | ---- | -------- | ----- | ----- | ---- |
| a1      | 0    | 0    | 0    | 0        | 1     | 1     | 0    |
| a2      | 1    | 1    | 1    | 1        | 0     | 0     | 0    |
| a3      | 0    | 0    | 0    | 0        | 1     | 1     | 0    |
| a4      | 0    | 0    | 1    | 1        | 0     | 0     | 0    |
| a5      | 1    | 0    | 0    | 0        | 0     | 1     | 0    |
| a6      | 1    | 0    | 1    | 1        | 0     | 1     | 0    |
| a7      | 0    | 0    | 0    | 0        | 0     | 0     | 0    |
| a8      | 1    | 1    | 1    | 1        | 0     | 0     | 1    |
| a9      | 0    | 0    | 0    | 0        | 0     | 1     | 0    |
| a10     | 0    | 1    | 0    | 0        | 1     | 1     | 1    |

User evaluations:

-   a4: 1
-   a6: 1
-   a9: -1

</Question>

<Answer>

First we will generate a simple model, starting with the user profile. To generate the score for a given word, you take the sum of the number of occurrences of the word in the text multiplied by the user's score for that text. As an example, for a6, you would multiply 1 (occurrence) by 1(score) to get 1. Doing this for the rest generates the following profile

|        | lane | work | Unix | language | table | chess | bell |
| ------ | ---- | ---- | ---- | -------- | ----- | ----- | ---- |
| User 1 | 1    | 0    | 2    | 2        | 0     | 0     | 0    |

We then want to gather a score for each text. This is obtained by getting the sum of each score in the user profile multiplied by the number of occurrences of that word in the text. So for a2 and lane, you would multiply 1 (occurrence of lane) by 1 (score for lane) to get 1. Doing the rest gets the following model:

| Text | Prediction |
| ---- | ---------- |
| a1   | 0          |
| a2   | 5          |
| a3   | 0          |
| a4   | 4          |
| a5   | 1          |
| a6   | 5          |
| a7   | 0          |
| a8   | 5          |
| a9   | 0          |
| a10  | 0          |

To normalise the model, we need to create a new normalised table, where each occurence is divided by the square root of the number of attributes in the text, that looks like this

|     | lane | work | Unix | language | table | chess | bell |
| --- | ---- | ---- | ---- | -------- | ----- | ----- | ---- |
| a1  | 0.0  | 0.0  | 0.0  | 0.0      | 0.7   | 0.7   | 0.0  |
| a2  | 0.5  | 0.5  | 0.5  | 0.5      | 0.0   | 0.0   | 0.0  |
| a3  | 0.0  | 0.0  | 0.0  | 0.0      | 0.7   | 0.7   | 0.0  |
| a4  | 0.0  | 0.0  | 0.7  | 0.7      | 0.0   | 0.0   | 0.0  |
| a5  | 0.7  | 0.0  | 0.0  | 0.0      | 0.0   | 0.7   | 0.0  |
| a6  | 0.5  | 0.0  | 0.5  | 0.5      | 0.0   | 0.5   | 0.0  |
| a7  | 0.0  | 0.0  | 0.0  | 0.0      | 0.0   | 0.0   | 0.0  |
| a8  | 0.4  | 0.4  | 0.4  | 0.4      | 0.0   | 0.0   | 0.4  |
| a9  | 0.0  | 0.0  | 0.0  | 0.0      | 0.0   | 1.0   | 0.0  |
| a10 | 0.0  | 0.5  | 0.0  | 0.0      | 0.5   | 0.5   | 0.5  |

We can then normalise the user profile by doing the same as before, but with the new table

|        | lane | work | Unix     | language | table | chess | bell |
| ------ | ---- | ---- | -------- | -------- | ----- | ----- | ---- |
| User 1 | 0.5  | 0    | 1.207... | 1.207... | 0     | -0.5  | 0    |

And the model is also generated in the same way as before, but with both the new table and new profile

| Text | Normalised prediction |
| ---- | --------------------: |
| a1   |                 -0.35 |
| a2   |                  1.46 |
| a3   |                 -0.35 |
| a4   |                  1.71 |
| a5   |                  0.00 |
| a6   |                  1.21 |
| a7   |                  0.00 |
| a8   |                  1.30 |
| a9   |                 -0.50 |
| a10  |                 -0.25 |

Finally we want to generate the TF-IDF model, one more set of data needs to be calculated, this one with the total number of occurrences of a word through all the texts

|            | lane | work        | Unix | language | table       | chess        | bell |
| ---------- | ---- | ----------- | ---- | -------- | ----------- | ------------ | ---- |
| DF         | 4    | 3           | 4    | 4        | 3           | 6            | 2    |
| 1/DF = IDF | 0.25 | 0.$\dot{3}$ | 0.25 | 0.25     | 0.$\dot{3}$ | 0.1$\dot{6}$ | 0.5  |

Now for each text we need to take the sum of:

-   1/DF multiplied by
-   Normalised user profile multiplied by
-   Normalised value
    for each of the words. This finally generates:

| Text | TF-IDF |
| ---- | -----: |
| a1   |  -0.06 |
| a2   |   0.36 |
| a3   |  -0.06 |
| a4   |   0.43 |
| a5   |   0.03 |
| a6   |   0.32 |
| a7   |   0.00 |
| a8   |   0.33 |
| a9   |  -0.08 |
| a10  |  -0.04 |

</Answer>

</Exercise>
