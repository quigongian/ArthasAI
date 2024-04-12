"use client";

import React, { useEffect, useRef } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Button } from "@/components/ui/button";
import { ImperativePanelHandle, collapsePanel } from "../utils";
import { useQuery, useMutation } from "@tanstack/react-query";
import axios from "axios";

import dynamic from "next/dynamic";
import { Settings, ChevronLeft, ListCollapse } from "lucide-react";
import { Toaster } from "@/components/ui/toaster";
import ChatInterface from "@/app/doc/[docid]/chatInterface";
import { useSearchParams } from "next/navigation";
import { url } from "inspector";
import MarkdownDisplay from "./markdownDisplay";

const Editor = dynamic(() => import("./notes"), { ssr: false });
const Flow = dynamic(() => import("./graphs"), { ssr: false });

// TODO: on collapse, rotate arrow 180deg

function DocumentEditor({ params }: { params: { docid: string } }) {
  const fetcher = useQuery({
    queryKey: [`/document/${params.docid}/api/test`],
    queryFn: async () => {
      const { data } = await axios.get(`/document/${params.docid}/api/tsest`);
      return data;
    },
  });

  const readerRef = useRef<ImperativePanelHandle>(null);
  const notesRef = useRef<ImperativePanelHandle>(null);
  const chatbotRef = useRef<ImperativePanelHandle>(null);
  const nodegraphRef = useRef<ImperativePanelHandle>(null);

  const urlParams = useSearchParams();

  const handleCollapse = (panelRef: React.RefObject<ImperativePanelHandle>) => {
    collapsePanel(panelRef.current);
  };

  return (
    <div className="h-screen w-screen">
      <Toaster />
      <ResizablePanelGroup direction="horizontal" className="h-full">
        <ResizablePanel id="reader" className="w-full" defaultSize={50}>
          <div id="top-reader" className="flex justify-between p-4">
            <Button variant="ghost" onClick={() => {}}>
              <ChevronLeft />
            </Button>
            <Button
              onClick={() => {
                handleCollapse(readerRef);
              }}
              variant="outline"
            >
              <ListCollapse />
            </Button>
            <div>
            </div>
          </div>
          <MarkdownDisplay/>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel
          id="right-panel"
          className="w-full pl-4"
          collapsible
          defaultSize={50}
          minSize={30}
          maxSize={60}
          ref={readerRef}
        >
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel
              id="notes"
              collapsible
              minSize={20}
              defaultSize={60}
              ref={notesRef}
              className="!overflow-auto"
            >
              <div className="w-9/10 h-10 flex justify-between items-center space-x-4 p-4">
                <div>{"Document Name's Notes"}</div>
                <div className="flex">
                  <Button variant="ghost" onClick={() => {}}>
                    <Settings />
                  </Button>
                </div>
              </div>
              <Editor params={params} />
            </ResizablePanel>
            <ResizableHandle withHandle />
            <div className="w-9/10 h-10 flex justify-between items-center space-x-4 p-2">
              <div>Assistant</div>
              <div>
                <Button
                  variant="ghost"
                  onClick={() => {
                    handleCollapse(chatbotRef);
                  }}
                >
                  {/* <ChevronDown /> */}
                </Button>
              </div>
            </div>
            <ResizablePanel
              id="chatbot"
              className="px-4 pb-2"
              collapsible
              minSize={20}
              defaultSize={20}
              ref={chatbotRef}
            >
              <ChatInterface />
            </ResizablePanel>
            <ResizableHandle withHandle />
            <div className="w-full flex justify-between items-center">
              <div>Relationship Graph</div>
              <div>
                <Button
                  variant="ghost"
                  onClick={() => {
                    handleCollapse(nodegraphRef);
                  }}
                >
                  {/* <ChevronDown /> */}
                </Button>
              </div>
            </div>
            <ResizablePanel
              id="nodegraph"
              collapsible
              minSize={20}
              defaultSize={10}
              ref={nodegraphRef}
            >
              <div className="h-full w-full">
                <Flow params={params} />
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}

export default DocumentEditor;
