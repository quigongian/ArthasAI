import React, { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { CloudCog } from "lucide-react";

export function Reader() {
  const [htmlContent, setHtmlContent] = useState("");



  const readerData = useQuery({
    queryKey: ["readerData"],
    queryFn: async () => {
      const response = await axios.get(
        "/document/hello/api/test/textConversion"
      );
      return response.data;
    },
    select(data) {
      console.log(data);
    },
  });

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
}

export default Reader;
