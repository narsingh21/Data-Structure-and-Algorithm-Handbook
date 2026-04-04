---------------------SORTING---------------------------------------------------------------------


Bubble sort: Repeatedly compare adjacent elements and swap them if they’re in the wrong order—big elements “bubble up” to the end.

Selection Sort: In selection sort, we repeatedly find the smallest element from the unsorted portion of the array and swap it with the first unsorted element.
                 ( place the smallest element at top of unsorted array).

Insertion Sort: 

Quick Sort:  We have to pick a pivot in array. Move the first element less then elements to left side of array and greater element to the pivot to right side.
              Then repeat the process to left and right side arrays.
                https://visualgo.net/en/sorting
             sudo code:- loop the array if pivot is greater then the current element increase the index of pivot and swap the element.

Redis Sort: It sorts the elements digit by digit, starting either from the least significant digit (LSD) or the most significant digit (MSD).

⏱️ Time Complexity
Case	Complexity
Best	O(nk)
Average	O(nk)
Worst	O(nk)

Where:

n = number of elements

k = number of digits in the largest number

 It’s faster than comparison-based sorts (like QuickSort) when k is small compared to log(n).

 Limitations

Works only for integers (or fixed-length strings).

Uses extra space for buckets.

Not ideal for negative numbers (you need adjustment for negatives).