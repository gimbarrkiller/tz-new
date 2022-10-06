export const textCropping = (str: string) => {
  if (str.length > 35) {
    return str.substr(0, 10) + '...' + str.substr(str.length-4, str.length);
  }
  return str;
}