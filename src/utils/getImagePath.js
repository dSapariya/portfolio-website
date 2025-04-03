export const getImagePath = (imageName) => {
    const basePath = import.meta.env.BASE_URL || "/";
    return `${basePath}/images/${imageName}`;
  };
  