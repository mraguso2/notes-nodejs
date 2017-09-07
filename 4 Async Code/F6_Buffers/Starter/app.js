// Buffers hold raw binary data

// Don't need to require buffer module - it's globally available
const buf = new Buffer('Hello', 'utf8'); // utf8 is default encoding_if you leave blank
console.log(buf);
console.log(buf.toString());
console.log(buf.toJSON());
console.log(buf[2]);

buf.write('wo');
console.log(buf.toString()); // "wollo" Overwrite data in buffer because buffer finite size

buf.write('He');
console.log(buf.toString());

