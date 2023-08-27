export const scrollToElement = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    // 👇 Will scroll smoothly to the top of the next section
    return element.scrollIntoView({ behavior: 'smooth' });
  }
};
