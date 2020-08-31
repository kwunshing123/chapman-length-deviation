# Chapman Length Deviation

The Chapman Length Deviation algorithm implementation 
- Used to determine if the strings are similar in size 
- This apporach should be used **alongside other approaches** eg. Jaro, Jaro-winkler, Levenshtein...

## Install

```bash
npm install -S chapman-length-deviation
```

## Usage

```
import deviation from "chapman-length-deviation";

deviation('Hello', 'Hallo');
// 1

deviation('HELLO', 'Hallo');
// 1

deviation('Hello', 'Hello World');
// 0.45454545454545453


// Return Percentage

deviation('Hello', 'Hallo', {returnPercentage : true});
// 100

deviation('Hello', 'Hello World', {returnPercentage : true});
// 45.45454545454545
```
