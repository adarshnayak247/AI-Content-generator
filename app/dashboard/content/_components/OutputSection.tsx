import React, { useRef, useEffect } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";

interface Props {
  aiOutput: string | undefined;
}

function OutputSection({ aiOutput }: Props) {
  const editorRef = useRef<any>(null);

  useEffect(() => {
    if (editorRef.current && aiOutput) {
      editorRef.current.getInstance().setMarkdown(aiOutput);
    }
  }, [aiOutput]);

  const handleCopy = () => {
    const content = editorRef.current?.getInstance().getMarkdown();
    navigator.clipboard.writeText(content || "");
  };

  return (
    <div className="bg-white shadow-lg border p-5 rounded-lg">
      <div className="flex justify-between items-center p-5">
        <h2 className="font-medium text-lg">Your Result</h2>
        <Button className="flex gap-2" onClick={handleCopy}>
          <Copy className="w-4 h-4" /> Copy
        </Button>
      </div>
      <Editor
        ref={editorRef}
        initialValue="Your result will appear here"
        initialEditType="wysiwyg"
        height="600px"
        useCommandShortcut={true}
      />
    </div>
  );
}

export default OutputSection;
