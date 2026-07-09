type RateLimitStore = {
  count: number;
  resetTime: number;
};

// In-memory store. In a serverless/Edge environment, this Map resets when the instance spins down.
// For VPS/Dedicated Hosting (like Hostinger VPS Node setup), this stays persistent in Node memory.
const store = new Map<string, RateLimitStore>();

// Cleanup interval to prevent memory leaks by pruning expired IP records every 10 minutes
if (typeof setInterval !== "undefined") {
  setInterval(() => {
    const now = Date.now();
    for (const [ip, record] of store.entries()) {
      if (now > record.resetTime) {
        store.delete(ip);
      }
    }
  }, 10 * 60 * 1000);
}

/**
 * Checks if the request from a specific IP should be rate limited.
 * 
 * @param ip IP address of the client
 * @param limit Max number of requests allowed in the window
 * @param windowMs Time window in milliseconds (e.g. 15 * 60 * 1000 for 15 minutes)
 */
export function rateLimit(ip: string, limit: number, windowMs: number) {
  const now = Date.now();
  const client = store.get(ip);

  if (!client) {
    const resetTime = now + windowMs;
    store.set(ip, {
      count: 1,
      resetTime,
    });
    return {
      success: true,
      count: 1,
      limit,
      resetTime,
    };
  }

  // Window has expired, reset count and timeline
  if (now > client.resetTime) {
    const resetTime = now + windowMs;
    client.count = 1;
    client.resetTime = resetTime;
    return {
      success: true,
      count: 1,
      limit,
      resetTime,
    };
  }

  // Count limit exceeded
  if (client.count >= limit) {
    return {
      success: false,
      count: client.count,
      limit,
      resetTime: client.resetTime,
    };
  }

  // Increment count
  client.count += 1;
  return {
    success: true,
    count: client.count,
    limit,
    resetTime: client.resetTime,
  };
}
