export const basePath =
  process.env.NODE_ENV === "production" ? "/gabriel-grossalber-website" : "";

export const asset = (path: string): string => {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalized}`;
};
