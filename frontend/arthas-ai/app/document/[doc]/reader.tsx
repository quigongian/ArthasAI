import React, { useEffect, useState } from "react";
import { textConversionFetch } from "./api/test/textConversion/textConversionFetch";


function Reader() {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    textConversionFetch().then((html) => {
      setHtmlContent(html);
    });
  }, []);

  return(
    <div>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  )
}

export default Reader;
