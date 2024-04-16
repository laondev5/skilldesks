"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Toolbar from "./Toolbar";

const Tiptap = ({ des, onChange, description }) => {
  const handleChange = (newContent) => {
    onChange(newContent);
  };
  const editor = useEditor({
    extensions: [StarterKit.configure()],
    // content: description,
    editorProps: {
      attributes: {
        class:
          "flex flex-col px-4 py-3 justify-start border-r border-l border-b border-gray-700 text-gray-400 item-start w-full gap-3 font-medium text-[16px] pt-4 rounded-b-md outline-none",
      },
    },
    onUpdate: ({ editor }) => {
      handleChange(editor.getHTML());
      console.log(editor.getHTML());
    },
  });

  return (
    <div>
      <Toolbar editor={editor} des={des} />
      <EditorContent editor={editor} style={{ whiteSpace: "pre-line" }} />
    </div>
  );
};

export default Tiptap;
