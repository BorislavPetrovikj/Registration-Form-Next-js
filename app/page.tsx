export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold font-sans">
          Testing Geist Sans Font
        </h1>

        <p className="text-xl font-sans">
          This paragraph uses Geist Sans. The quick brown fox jumps over the
          lazy dog.
        </p>

        <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <h2 className="text-2xl font-mono mb-4">Testing Geist Mono Font</h2>

          <code className="font-mono">
            const greeting = &quot;Hello, World!&quot;;
            <br />
            console.log(greeting);
          </code>
        </div>
      </div>
    </main>
  );
}
