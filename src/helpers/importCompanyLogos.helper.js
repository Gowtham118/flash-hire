function importAll(r) {
  let images = [];
  r.keys().map((item) => (images[item.replace("./", "")] = r(item)));
  return images;
}

export const companyLogos = importAll(
  require.context("../assets/images/company-logos", false, /\.png$/)
);
