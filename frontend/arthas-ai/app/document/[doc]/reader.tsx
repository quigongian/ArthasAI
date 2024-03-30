import React, { useEffect, useState } from "react";
import { GET } from "./api/test/textConversion/route";

function Reader() {
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    const fetchContent = async () => {
       try{
        const htmlContent = await GET();
        setHtmlContent(htmlContent)
       } catch (error){
         console.error('Failed to fetch content:',error)
       }
    };

    fetchContent();
  })

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
}

export default Reader;
