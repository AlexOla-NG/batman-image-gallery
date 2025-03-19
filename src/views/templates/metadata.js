// src/views/templates/metadata.js

function metadataTemplate(imageMetadata, requestTime) {
  if (!imageMetadata) {
    return {
      error: "No metadata available",
      requestTime: requestTime,
    };
  }

  // Extract only the required information
  return {
    fileName: imageMetadata.name,
    contentType: imageMetadata.contentType,
    fileSize: imageMetadata.size,
    timeCreated: imageMetadata.timeCreated,
    studentId: "S2444701",
    requestTime: requestTime,
  };
}

module.exports = metadataTemplate;
