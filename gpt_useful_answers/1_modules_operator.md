Sure! Here are a few more useful techniques and patterns that leverage the modulus operator and similar concepts to work with arrays and other structures in JavaScript:

### 1. Circular Array Access
Besides looping endlessly through an array, you can also create functions to access array elements in a circular fashion:

```javascript
function getCircularElement(arr, index) {
    return arr[index % arr.length];
}

const arr = ['a', 'b', 'c', 'd', 'e'];

console.log(getCircularElement(arr, 7)); // Outputs: 'c'
console.log(getCircularElement(arr, 10)); // Outputs: 'a'
```

### 2. Even/Odd Index Check
You can use the modulus operator to check if an index is even or odd, which is useful for various conditional styling or logic:

```javascript
const arr = ['a', 'b', 'c', 'd', 'e'];

for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
        console.log(arr[i] + ' is at an even index');
    } else {
        console.log(arr[i] + ' is at an odd index');
    }
}
```

### 3. Grouping Elements
The modulus operator can help you group elements in an array, for example, creating a matrix or grid from a flat array:

```javascript
const flatArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const rows = 3;
const cols = 3;
const matrix = [];

for (let i = 0; i < rows; i++) {
    matrix[i] = [];
    for (let j = 0; j < cols; j++) {
        matrix[i][j] = flatArray[i * cols + j];
    }
}

console.log(matrix);
```

### 4. Rotating Elements in an Array
Rotating elements can be useful in many scenarios, such as in games or UI carousels:

```javascript
function rotateArray(arr, steps) {
    const n = arr.length;
    const result = new Array(n);
    
    for (let i = 0; i < n; i++) {
        result[(i + steps) % n] = arr[i];
    }

    return result;
}

const arr = ['a', 'b', 'c', 'd', 'e'];
console.log(rotateArray(arr, 2)); // Outputs: ['d', 'e', 'a', 'b', 'c']
```

### 5. Cycling Through Multiple Arrays
If you need to cycle through multiple arrays simultaneously, you can use the modulus operator to manage the indexes of both arrays:

```javascript
const arr1 = [1, 2, 3];
const arr2 = ['a', 'b', 'c', 'd'];

for (let i = 0; i < 10; i++) {
    console.log(arr1[i % arr1.length], arr2[i % arr2.length]);
}
```

This will cycle through both arrays, printing paired elements.

### 6. Creating Patterns or Sequences
The modulus operator can also be used to create cyclic patterns or sequences. For example, alternating a character sequence:

```javascript
const pattern = ['x', 'o'];

for (let i = 0; i < 10; i++) {
    console.log(pattern[i % pattern.length]);
}
```

This will output: x, o, x, o, x, o, x, o, x, o.

### 7. Implementing a Round-Robin Scheduler
Round-robin scheduling is a common algorithm used in CPU scheduling and load balancing:

```javascript
const processes = ['P1', 'P2', 'P3'];
const timeSlices = [1, 2, 3]; // arbitrary time slices for illustration

for (let i = 0; i < 9; i++) {
    console.log(`Process: ${processes[i % processes.length]}, Time Slice: ${timeSlices[i % timeSlices.length]}`);
}
```

This will cycle through the processes and time slices.

### Conclusion
These are just a few techniques demonstrating the power and versatility of the modulus operator and related patterns in managing arrays and cyclic data structures. They are particularly useful in scenarios involving circular buffers, periodic tasks, and creating repetitive patterns or sequences.
