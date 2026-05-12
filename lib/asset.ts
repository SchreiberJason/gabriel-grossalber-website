export const basePath = "";

export const asset = (path: string): string => {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalized}`;
};
