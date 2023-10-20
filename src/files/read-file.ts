export function readFile(file: File) {
  return new Promise<string>((resolve, reject) => {
    const fileReader = new FileReader();

    fileReader.onload = () => {
      const { result } = fileReader;
      resolve(result as string);
    };

    fileReader.onerror = () => {
      const { error } = fileReader;
      fileReader.abort();
      reject(error);
    };

    fileReader.readAsText(file);
  });
}
