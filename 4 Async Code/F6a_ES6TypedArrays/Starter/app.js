// **** Now js can deal with binary data

// 1 Byte = 8 bits... 00101100

// buffering storing 8 bytes
const buffer = new ArrayBuffer(8); // 8 bytes = 64 bits
// ^ Buffer from V8 not node

// integer with 32 bits for one number
// can only store 2 numbers
const view = new Int32Array(buffer);

view[0] = 5;
view[1] = 15;
// doesn't have storage for a 3rd number view[2] = 30;
console.log(view);