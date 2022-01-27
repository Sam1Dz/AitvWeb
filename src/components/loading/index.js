import React, { Fragment } from "react";

// IMPORT : IMAGES
import AITVLogo from "../../assets/images/logo-long-loading.png";

export default function Loading() {
  return (
    <Fragment>
      <img src={AITVLogo} className="logo-loading-render" alt="logo-long" />
    </Fragment>
  );
}
