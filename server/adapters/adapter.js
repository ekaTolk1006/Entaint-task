const getFullImageUrl = (baseUrl, imagePath) => {
  if (imagePath && imagePath.startsWith("http")) {
    return imagePath;
  }

  return `${baseUrl}${imagePath}`;
};

module.exports = { getFullImageUrl };
