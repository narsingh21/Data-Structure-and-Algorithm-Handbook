Redis Sort: It sorts the elements digit by digit, starting either from the least significant digit (LSD) or the most significant digit (MSD).

⏱️ Time Complexity
Case	Complexity
Best	O(nk)
Average	O(nk)
Worst	O(nk)

Where:

n = number of elements

k = number of digits in the largest number

✅ It’s faster than comparison-based sorts (like QuickSort) when k is small compared to log(n).

⚠️ Limitations

Works only for integers (or fixed-length strings).

Uses extra space for buckets.

Not ideal for negative numbers (you need adjustment for negatives).