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
import { Settings, ChevronLeft, ArrowRight, ListCollapse } from "lucide-react";
import { Toaster } from "@/components/ui/toaster";
import ChatInterface from "@/app/components/chatInterface";
import Reader from "./reader";
import MathNode from "./reader";
import katex from "katex";
import "katex/dist/katex.min.css";

const Editor = dynamic(() => import("./notes"), { ssr: false });
const Flow = dynamic(() => import("./graphs"), { ssr: false });

// TODO: on collapse, rotate arrow 180deg

function DocumentEditor({ params }: { params: { doc: string } }) {
  const fetcher = useQuery({
    queryKey: [`/document/${params.doc}/api/test`],
    queryFn: async () => {
      const { data } = await axios.get(`/document/${params.doc}/api/tsest`);
      return data;
    },
  });

  const readerRef = useRef<ImperativePanelHandle>(null);
  const notesRef = useRef<ImperativePanelHandle>(null);
  const chatbotRef = useRef<ImperativePanelHandle>(null);
  const nodegraphRef = useRef<ImperativePanelHandle>(null);

  const handleCollapse = (panelRef: React.RefObject<ImperativePanelHandle>) => {
    collapsePanel(panelRef.current);
  };

  const content =katex.renderToString(
    // its rendering as a string
    `
    \\text{or, we could also appeal to the chain rule of probability:}

    \[p(\\mathbf{x})=\\frac{p(\\mathbf{x},\\mathbf{z})}{p(\\mathbf{z}|\\mathbf{x})} \tag{2}\]
    \\text{This would be the equation:}
    \\text{}
    \[\\mathbb{E}_{q_{\\mathbf{\\phi}}(\\mathbf{z}|\\mathbf{x})}\\left[\\log\\frac{p(\\mathbf{x},\\mathbf{z})}{q_{ \\mathbf{\\phi}}(\\mathbf{z}|\\mathbf{x})}\\right] \tag{3}\]  
      `,
    // \[, \tag, \] <- must be only one \
    { displayMode: true}
  );

  function addBackslashes(str: string) {
    let stringWithBackslashes = str.replace(/\\(?![\[\]\\tag])/g, "\\\\");
    return stringWithBackslashes;
  }

  const MathNode = ({ children }) => (
  <div dangerouslySetInnerHTML={{__html: children}}/>
   );

  return (
    <div className="h-screen w-screen">
      <Toaster />
      <ResizablePanelGroup direction="horizontal" className="h-full">
        <ResizablePanel id="reader" className="w-full" defaultSize={50}>
          <div id="top-reader" className="flex justify-between p-4">
            <Button variant="ghost">
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
          </div>
          <MathNode children={addBackslashes(content)} />
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
              <div className="w-9/10 h-10 flex justify-between items-center space-x-4 p-8">
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
            <div className="w-9/10 h-10 flex justify-between items-center space-x-4 p-8">
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
            <div className="w-full p-2 flex justify-between items-center">
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
              <Flow params={params} />
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}

export default DocumentEditor;
