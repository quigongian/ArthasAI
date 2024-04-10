import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
 //@ts-ignore
const _mapProps = (props) => ({
  ...props,
  remarkPlugins: [remarkMath, [remarkGfm, { singleTilde: false }]],
  rehypePlugins: [rehypeKatex],
  components: {  //@ts-ignore
    math: ({ value }) => <BlockMath>{value}</BlockMath>, //@ts-ignore
    inlineMath: ({ value }) => <InlineMath>{value}</InlineMath>, //@ts-ignore
    h1: ({ children }) => <h1 className="text-2xl font-bold">{children}</h1>,
  },
});
 //@ts-ignore
const Markdown = (props) => <ReactMarkdown {..._mapProps(props)} />;

export default Markdown;
