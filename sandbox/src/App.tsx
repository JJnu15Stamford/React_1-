// src/App.tsx
import React from "react";

const App: React.FC = () => {
  return (
    <div>
      <h1>Welcome to My Simple App</h1>
      <p>This is a basic example of a React app using TypeScript.</p>
    </div>
  );
};

export default App;

import Heading from "./Heading.js";
import Section from "./Section.js";

export default function Page() {
  return (
    <Section>
      <Heading level={1}>Title</Heading>
      <Heading level={2}>Heading</Heading>
      <Heading level={3}>Sub-heading</Heading>
      <Heading level={4}>Sub-sub-heading</Heading>
      <Heading level={5}>Sub-sub-sub-heading</Heading>
      <Heading level={6}>Sub-sub-sub-sub-heading</Heading>
    </Section>
  );
}
