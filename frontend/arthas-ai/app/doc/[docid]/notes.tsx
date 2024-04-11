"use client";

import React, { useEffect, useMemo, useState } from "react";

import { BlockNoteView } from "@blocknote/react";
import "@blocknote/core/fonts/inter.css";
import "@blocknote/react/style.css";
import { BlockNoteEditor, PartialBlock } from "@blocknote/core";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useToast } from "@/components/ui/use-toast";
import { createClient } from "@/app/utils/supabase/client";
import { getCurrentDate } from "@/app/utils/databaseUtils";
import { Skeleton } from "@/components/ui/skeleton";
import "./editor.css";
import { useTheme } from "next-themes";

export default function Editor({ params }: { params: { docid: string } }) {
  const [blocks, setBlocks] = useState<PartialBlock[]>([
    {
      id: "268ef9f5-b2eb-4575-ba12-ea99d5d922e2",
      type: "paragraph",
      props: {
        textColor: "default",
        backgroundColor: "default",
        textAlignment: "left",
      },
      content: [],
      children: [],
    },
  ]);

  const [notesTheme, setNotesTheme] = useState<"light" | "dark">("light");

  const supabase = createClient();

  const { toast } = useToast();
  const { theme } = useTheme();

  const fetching = useQuery({
    enabled: true,
    staleTime: Infinity,
    queryKey: [`/doc/${params.docid}/notesAPI/get`],
    queryFn: async () => {
      const res = await supabase
        .from("user_notes")
        .select("*")
        .eq("id", params.docid);

      if (res.error) {
        throw new Error(res.error.message);
      }

      // wait 500ms
      await new Promise((resolve) => setTimeout(resolve, 500));

      return res.data as PartialBlock[];
    },
    select(data) {
      return JSON.parse(data[0].content as string) as PartialBlock[];
    },
  });

  useEffect(() => {
    if (theme == "dark") {
      setNotesTheme("dark");
    } else {
      setNotesTheme("light");
    }
  }, [theme]);

  const update = useMutation({
    mutationKey: [`/document/${params.docid}/editor/api/update`],
    mutationFn: async () => {
      try {
        await supabase
          .from("user_notes")
          .upsert([
            {
              id: params.docid,
              docment_id: params.docid,
              content: JSON.stringify(blocks),
              modified_at: getCurrentDate(),
            },
          ])
          .then((res) => {
            if (res.error) {
              throw new Error(res.error.message);
            }
            toast({
              title: "Saved!",
              description: "Your changes have been saved.",
            });
            return res.data;
          });
      } catch (error) {
        toast({
          title: "Error!",
          description: `Error Message: ${error}. \n Refresh to try again.`,
          variant: "destructive",
        });
      }
    },
  });

  useEffect(() => {
    const handleSave = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "s") {
        e.preventDefault();
        update.mutate();
      }
    };
    window.addEventListener("keydown", handleSave);
    return () => {
      window.removeEventListener("keydown", handleSave);
    };
  }, []);

  const editor = useMemo(() => {
    if (fetching.data) {
      return BlockNoteEditor.create({
        initialContent: fetching.data as PartialBlock[],
      });
    } else {
      return undefined;
    }
  }, [fetching.data]);

  return (
    <>
      {editor ? (
        <BlockNoteView
          editor={editor}
          theme={notesTheme}
          onChange={() => {
            console.log("changed");
            setBlocks(editor.document);
          }}
          data-theming-css-demo
        />
      ) : (
        <div className="w-full h-full space-y-2">
          <div className="h-[10px]" />
          <Skeleton className="w-3/4 h-[40px]" />
          <Skeleton className="w-2/3 h-[24px]" />
          <Skeleton className="w-10/12 h-[24px]" />
          <Skeleton className="w-4/5 h-[24px]" />
          <Skeleton className="w-5/12 h-[24px]" />
          <Skeleton className="w-3/4 h-[24px]" />
        </div>
      )}
    </>
  );
}
