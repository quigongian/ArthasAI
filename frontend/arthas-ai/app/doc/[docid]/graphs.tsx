"use client";

import { useEffect } from "react";
import Graph from "graphology";
import "@react-sigma/core/lib/react-sigma.min.css";
import {
  ControlsContainer,
  ZoomControl,
  useLoadGraph,
} from "@react-sigma/core";
import { SigmaContainer } from "@react-sigma/core";

export const LoadGraph = () => {
  const loadGraph = useLoadGraph();

  useEffect(() => {
    const graph = new Graph();
    graph.addNode("first", {
      x: 0,
      y: 0,
      size: 15,
      label: "My first node",
    });

    // generate a random graph
    for (let i = 0; i < 100; i++) {
      // add a node and edges between some of them
      graph.addNode(i.toString(), {
        x: Math.random(),
        y: Math.random(),
        size: Math.random() * 10,
        label: `Node ${i}`,
      });
      if (i > 0) {
        graph.addEdge(i.toString(), (i - 1).toString());
      }
    }
    loadGraph(graph);
  }, [loadGraph]);

  return null;
};

function Flow({ params }: { params: { docid: string } }) {
  return (
    <div>
      <SigmaContainer
        style={{
          height: "1000px",
          width: "100%",
          background: "var(--background-color)",
        }}
      >
        <ControlsContainer
          position={"top-right"}
          style={{
            background: "var(--background-color)",
          }}
        >
          <ZoomControl
            style={{ display: "flex" }}
            className="flex justify-center"
          />
        </ControlsContainer>
        <LoadGraph />
      </SigmaContainer>
    </div>
  );
}

export default Flow;
