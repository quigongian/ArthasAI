import React, { useEffect, useState } from "react";
import { textConversion } from "./textConversionFetch";

function Reader() {
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    textConversion()
      .then(html => setHtmlContent(html))
      .catch(error => console.error('Error fetching content:', error))
  }, []);

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
}

export default Reader;
