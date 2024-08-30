export function get(src, path) {
    const keys = path.split('.');
    let result = src;
    for (const key of keys) {
      if (result == null || !Object.prototype.hasOwnProperty.call(result, key)) {
        return undefined;
      }
      result = result[key];
    }
    
    return result;
  }