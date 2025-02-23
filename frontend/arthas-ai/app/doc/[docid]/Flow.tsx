"use client";
import { ControlsContainer, useCamera } from "@react-sigma/core";
import { SigmaContainer } from "@react-sigma/core";
import { Button } from "@/components/ui/button";
import { LoadGraph } from "./graphs";

export function Flow({ params }: { params: { docid: string } }) {
  return (
    <div>
      <SigmaContainer
        style={{
          height: "1000px",
          width: "100%",
          background: "var(--background-color)",
        }}
      >
        <ControlsContainer position={"top-right"}></ControlsContainer>
        <LoadGraph />
      </SigmaContainer>
    </div>
  );
}
