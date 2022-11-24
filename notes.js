// Results for the tinyArray
// insert 44 μs
// append 113.4 μs

// Results for the smallArray
// insert 60.8 μs
// append 143 μs

// Results for the mediumArray
// insert 196.5 μs
// append 169.9 μs

// Results for the largeArray
// insert 9.8871 ms
// append 751.9 μs

// Results for the extraLargeArray
// insert 1.1939409 s
// append 3.5245 ms

// Read over the results, and write a paragraph that explains the pattern you see. 
// How does each function “scale”? Which of the two functions scales better? How can you tell?

// The longer the array the more time it takes to insert and append. This is the general pattern observed according to the runtimes seen.
// For the append function, push is being used. Push just adds the array to the end. However, for the insert function, unshift is being used. 
// Unshift inserts the array by moving everything else over first. Therefore, this takes longer to achieve. Furthermore, the bigger the array the longer it takes. 
 