/**
 * libuv is system events
 * most important piece in libuv is the event loop.
 * On every loop, libuv checks the queue for completes from the OS.
 * Once it sees that something is complete, it makes a callback
 * This usually involves js and lets V8 know about completed event
 * Event Driven Non-Blocking I/O in V8 Javascript
 */

 /**
  * Buffer: a temporary holding spot for data being moved from one place to another
  *   Intentially limited in size {Don't want this too big}
  *   Data is usually coming through a stream to the buffer
  *
  * Stream: A sequence of data made available over time.
  *   Pieces of data that eventually combine into a whole
  *
  * When a video is Buffering: gathering enough data for you to watch your video
  */

  /**
   * Binary Data: Data stored in Binary (sets of 1s and 0s)
   *   Each 1 or 0 is called a bit
   * Base power 2
   * 0 1 0 1
   * 2^3 2^2 2^1 2^0
   * 0 + 4 + 0 + 1 = 5
   *
   * We are used to base power of 10
   *
   * Character Sets: a representation of characters as numbers
   *   Each character gets a number. Unicode and ASCII are chara sets
   *
   * Character Encoding: How characters are stored in binary
   *   The numbers (or code points) are converted and stored in binary
   *   Example: UTF-8 would have 8 bits or digits to represent a number
   */