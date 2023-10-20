export function downloadFile(fileName: string, blob: Blob) {
  const a: HTMLAnchorElement = document.createElement("a");
  a.style.display = "none";
  document.body.appendChild(a);

  const url = window.URL.createObjectURL(blob);
  a.href = url;
  a.download = fileName;
  a.click();
  a.remove();
  window.URL.revokeObjectURL(url);
}
