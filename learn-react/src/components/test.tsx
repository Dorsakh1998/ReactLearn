import React, { useState } from "react";

type Props = {
  textes: string;
};

export function Text({ textes }: Props) {
  const [text, setText] = useState(textes);

  return (
    <div>
      <p>{text}</p>
      <button onClick={() => setText("You clicked the button!")}>
        Change Text
      </button>
    </div>
  );
}
