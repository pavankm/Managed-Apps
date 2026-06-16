'use client';

import { useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <main className="container">
      <h1>Managed App — Next.js</h1>
      <p>
        This is a Microsoft Managed App built with <strong>Next.js</strong> (static export).
      </p>
      <p>
        Edit <code>src/app/page.tsx</code> and save to see changes.
      </p>

      <button type="button" onClick={() => setCount((c) => c + 1)}>
        Count is {count}
      </button>

      <section className="links">
        <a href="https://nextjs.org/docs" target="_blank" rel="noreferrer">
          Next.js Docs
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          React Docs
        </a>
      </section>
    </main>
  );
}
