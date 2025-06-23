function extractFile(input) {
  const parts = input.split('\\');
  const fileWithExtension = parts[parts.length - 1];

  const lastDotIndex = fileWithExtension.lastIndexOf('.');
  const fileName = fileWithExtension.substring(0, lastDotIndex);
  const fileExtension = fileWithExtension.substring(lastDotIndex + 1);

  console.log(`File name: ${fileName}`);
  console.log(`File extension: ${fileExtension}`);
}

extractFile('C:\\Internal\\training-internal\\Template.bak.pptx');
