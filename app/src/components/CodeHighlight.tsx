import { useEffect, useState } from "react";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypePrettyCode from "rehype-pretty-code";

export function CodeHighlight({ code }: { code: string }) {
  const [highlightedCode, setHighlightedCode] = useState<string | null>(null);

  useEffect(() => {
    // Function to highlight code asynchronously
    const highlight = async () => {
      const highlighted = await highlightCode(code);
      setHighlightedCode(highlighted);
    };

    highlight();
  }, [code]);

  if (highlightedCode === null) {
    return <div>Loading...</div>; // You can show a loading state here
  }

  return (
    <section
      dangerouslySetInnerHTML={{
        __html: highlightedCode,
      }}
    />
  );
}

async function highlightCode(code: string) {
  const wrappedCode = `\`\`\`jsx\n${code}\n\`\`\``;

  const file = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypePrettyCode, {
      keepBackground: true,
      theme: "aurora-x",
    })
    .use(rehypeStringify)
    .process(wrappedCode);
  return String(file.value);
}
