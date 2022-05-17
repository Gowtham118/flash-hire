function importAll(r) {
  let images = [];
  r.keys().map((item) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

export const companyLogosMobile = importAll(
  require.context("../assets/images/company-logos-mobile", false, /\.png$/)
);
