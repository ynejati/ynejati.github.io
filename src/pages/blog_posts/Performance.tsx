export const Performance: string = `
# Performance

JavaScript performance optimization and audit

TL;DR

Accessing and traversing DOM can be very slow…
Use JavaScript web development tools, like Chrome’s Devtools, to collect, analyze, and scrub any bottlenecks in your code.
Make use of web works for any long running JavaScript tasks that don’t require DOM access.
Reduce your number of dependencies and use native functions where possible
Reduce scope chaining
Eliminate any unnecessary variables
Write effeccient loops
Use polling and dynamic loading…?

Keep your css simple
Keep layout calculations and repainting to a minimm

Style changes can be expensive because they have to recalculate layout and force a repaint

The rule of thumb is to keep animations less than 60 fps

Use async and defer


Let’s take a moment to discuss the most common ways to improve and monitor JavaScript performance.  If you’re looking to improve the performance of an existing application, then the best place to start would be in the performance panel of either Firefox or Chrome developer tools.  Although the UI may be a bit different, both suites offer comparable performance statistics.  Here is a side by side comparison for the curious:

Due to the similarities, I’ll be sticking with Chrome’s devtools for the remainder of this post.  

The purpose of using the performance panel is to perform an audit of the application and help us discover any bottlenecks that might exist.  Depending on the weight of the bottleneck, could potentially have harmful effects on how a user experience your web application.  So the key here is to find any obvious flaws in the performance of the application that may drastically improve performnace and in effect the user experience.  

`;