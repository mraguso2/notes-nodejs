/**
 * Protocol: A set of rules 2 sides agree on to use when communicating
 *   Both the client and server are programmed to understand and use that
 *   particular set of rules. It's similar to 2 people from different countries
 *   agreeing on a language to speak in
 *
 * IP: Internet Protocol - identifier how to connected to systems
 * Create a socket to connect Browser and Web Server
 * Information is sent through this socket, HTTP, FTP, SMTP, traveling from comp to comp
 * Need a protocol on how to send that information not ^ just on how it is structured
 * Thats where TCP: Transmission Control Protocol
 *
 * TCP says take that information and however it is structured and split it into small pieces
 * and send those pieces or packets.
 *
 * TCP looks like a stream, same concept
 */

 /**
  * Port: Once a computer received a packet, how it knows what program to send it to
  *   When a program is setup on the operating system to receive packets from a particular
  *   port, it is said that the program is 'listening' to that port
  * Socket address = IP:Port = 78.132.160.4:443 (ex)
  */

/**
 * HTTP: A set of rules (and a format) for data being transferred on the web
 *   Hypertext transfer protocol. It's a format (of various) defining data being
 *   transferred via TCP/IP
 *
 * MIME Type: A standard for specifying the type of data being sent
 *   Multipurpose Internet Mail Extensions: application/json, text/html, image/jpeg
 */

/**
 * API: A set of tools for building a software application
 *   Application Programming Interface. On the web the tools are usually made available
 *   via a set of URLS which accept and send only data via HTTP and TCP/IP
 *
 * Endpoints: One URL in a Web API
 *   Sometimes that endpoint (URL) does multiple things by making choices based on the
 *   HTTP request headers
 */