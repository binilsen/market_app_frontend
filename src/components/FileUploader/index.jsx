"use client";

import React, { useEffect, useState } from "react";
import Uppy from "@uppy/core";
import "@uppy/core/dist/style.min.css";
import "@uppy/dashboard/dist/style.min.css";

import { Dashboard } from "@uppy/react";
import XHRUpload from "@uppy/xhr-upload";
import { ulid } from "ulid";

const FileUploader = ({ setFileData }) => {
  const uploadID = ulid();
  const [uppy] = useState(() =>
    new Uppy().use(XHRUpload, {
      endpoint: "http://localhost:3000/upload",
      getResponseData: (responseText, response) =>
        setFileData({ imageData: response.response }),
    })
  );

  return <Dashboard uppy={uppy} proudlyDisplayPoweredByUppy={false} />;
};

export default FileUploader;
