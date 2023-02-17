export const userAgent =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36";

export const webGLVendor = "Google Inc. (ATI Technologies Inc.";
export const webGLRenderer =
  "ANGLE (ATI Technologies Inc., AMD Radeon R9 M380 OpenGL Engine, OpenGL 4.1 ATI-1.54.3)";

const proxy = await context.newProxy({ server: proxyUrl });

// Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36
// Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36
// Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36
// Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36
// Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36
// Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36

const listOfVendors = [
  "Apple Inc.",
  "Apple",
  "Intel Inc.",
  "ATI Technologies Inc.",
  "Google Inc. (ATI Technologies Inc.)",
  "NVIDIA Corporation",
  "Google Inc. (NVIDIA Corporation)",
  "Google Inc (Apple)",
  "Google Inc. (Intel Inc.)",
];

const appleIncRenderOptions = ["Apple GPU"];
const appleRendererOptions = ["Apple M1 Pro", "Apple M1"];

const intelRendererOptions = [
  "Intel(R) Iris(TM) Plus Graphics 640",
  "Intel(R) HD Graphics 6000",
  "Intel(R) Iris(TM) Plus Graphics 645",
  "Intel(R) Iris(TM) Graphics 6100",
  "Intel(R) Iris(TM) Graphics 540",
  "Intel(R) Iris(TM) Graphics 5100",
  "Intel(R) Iris(TM) Graphics 550",
  "Intel Iris Pro OpenGL Engine",
  "Intel(R) HD Graphics 400",
  "Intel(R) HD Graphics 4000",
  "Intel(R) HD Graphics 5000",
  "Intel(R) HD Graphics 6000",
  "Intel(R) UHD Graphics 617",
];

const amdRendererOptions = [
  "AMD Radeon Pro 5300M OpenGL Engine",
  "AMD Radeon Pro 5500M OpenGL Engine",
  "AMD Radeon Pro 5600M OpenGL Engine",
  "AMD Radeon Pro 5700M OpenGL Engine",
  "AMD Radeon Pro 5800M OpenGL Engine",
];
