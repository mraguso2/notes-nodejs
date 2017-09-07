/**
 * Streams: sequence of pieces of data, data that is broken up into chunks
 * Chunk: A piece of data being sent through a stream
 * Important: Streams are event emitters - have access to EE methods {on, emit, etc}
 */

// Abstract (Base) Class: A type of constructor that you never work directly with, but inherit from
// We create new custom objects which inherit from the abstract base class

// Readable and Writable streams in terms of node

const fs = require('fs');

/**
 * stream will fill a buffer with contents. If contents are less than or equal
 * to buffer size, you will get all contents at once. If the contents are larger
 * than the buffer size you will get pieces of file at a time (the pieces size = size of buffer)
 */

// highWaterMark in options obj gives you ability to change the buffer size
// 1024 bytes in a kilobyte
const readable = fs.createReadStream(`${__dirname}/greet.txt`, { encoding: 'utf8', highWaterMark: 16 * 1024 });

// write to the greetcopy.txt
const writable = fs.createWriteStream(`${__dirname}/greetcopy2.txt`);

// listening for the stream to send data and then writing it to the other stream
// ^ So common there is a better way to do this
readable.on('data', (chunk) => {
  console.log(chunk); // .length gives size
  writable.write(chunk); // will write each chunk to the greetcopy.txt
});