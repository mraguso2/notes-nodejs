/**
 * Pipes: connecting two streams by writing to one stream what is being read
 * from another. In Node you pipe from a Readable stream to a Writable stream
 */

const fs = require('fs');
const zlib = require('zlib');

const readable = fs.createReadStream(`${__dirname}/greet.txt`);
const writable = fs.createWriteStream(`${__dirname}/greetcopy.txt`);
const compressed = fs.createWriteStream(`${__dirname}/greet.txt.gz`);

// compresses data
const gzip = zlib.createGzip(); // creates a transform stream (readable and writable)

/**
 * pipe needs a readable source and takes in the destination or the writable stream
 * Will auto setup the event listener to listen for the chunk of data and then the whole fn
 * will return writable
 */
readable.pipe(writable);

// pipe will send readable chunk to writable stream gzip which is also readable
// then pipe every chunk from gzip to compressed stream
readable.pipe(gzip).pipe(compressed); // stream to stream to stream

// Method Chaining: a method returns an object so we can keep calling more methods
