'use client';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import Split from 'react-split';
import toast, { Toaster } from 'react-hot-toast';

const MonacoEditor = dynamic(() => import('@monaco-editor/react'), { ssr: false });

const LANGUAGE_OPTIONS = [
  { label: 'C++', value: 'cpp' },
  { label: 'Java', value: 'java' },
  { label: 'Python', value: 'python' },
];

const DEFAULT_CODE = {
  cpp: `#include <iostream>
using namespace std;
int main() {
    cout << "Hello ghostCoder!";
    return 0;
}`,
  java: `import java.util.*;
public class Main {
    public static void main(String... args) { //You can use ... args instead of [] args
        System.out.println("Hello ghostCoder!");
    }
}`,
  python: `print("Hello ghostCoder!")`,
};

export default function OnlineCompiler() {
  const [language, setLanguage] = useState('cpp');
  const [code, setCode] = useState(DEFAULT_CODE.cpp);
  const [input, setInput] = useState('');
  const [expectedOutput, setExpectedOutput] = useState('');
  const [output, setOutput] = useState('');
  const [running, setRunning] = useState(false);
  const [theme, setTheme] = useState('vs-dark');
  const [isCorrect, setIsCorrect] = useState(null);

  const handleRun = async () => {
    if (!input.trim()) return toast.error('Please provide input.');
    if (!expectedOutput.trim()) return toast.error('Please provide expected output.');

    setRunning(true);
    setOutput('Running...');
    setIsCorrect(null);

    try {
      const res = await fetch('/api/run', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          code,
          language,
          testCases: [{ input, expected: expectedOutput }],
        }),
      });
      const data = await res.json();
      if (data.success && data.results?.[0]) {
        const actual = data.results[0].actual || '';
        setOutput(actual);
        setIsCorrect(actual.trim() === expectedOutput.trim());
      } else {
        setOutput('Error: ' + data.error);
      }
    } catch (err) {
      setOutput('Error running code');
    }
    setRunning(false);
  };

  return (
    <div className="min-h-screen text-white px-4 py-24 font-body">
      <Toaster position="top-right" />
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 text-white font-heading drop-shadow-md tracking-wide">
        Online Compiler
      </h1>

      <div className="max-w-7xl mx-auto h-[600px] rounded-xl border border-white/20 shadow-[0_0_10px_#ffffffff]">
        <Split
            className="flex h-full"
            sizes={[40, 60]}
            minSize={200}
            gutterSize={12}
            direction="horizontal"
            gutter={() => {
                const gutter = document.createElement('div');
                gutter.className =
                'bg-white/10 cursor-col-resize w-4 flex items-center justify-center relative';

                const icon = document.createElement('div');
                icon.innerText = '||'; 
                icon.style.fontSize = '40px';
                icon.style.pointerEvents = 'none';
                icon.style.userSelect = 'none';
                gutter.appendChild(icon);

                return gutter;
            }}
            >

          {/* LEFT: Input + Output Panel */}
          <div className="p-4 flex flex-col gap-5 border-r border-white/10">
            {/* Input Section */}
            <div>
              <label className="text-white font-semibold text-xl">Input</label>
              <textarea
                rows={3}
                className="w-full mt-1 bg-[#1b2b2c] border border-white/20 rounded-md p-2 resize-none text-white"
                value={input}
                placeholder='Enter input here...'
                onChange={(e) => setInput(e.target.value)}
              />
            </div>

            {/* Expected Output */}
            <div>
              <label className="text-white font-heading text-xl font-semibold">Expected Output</label>
              <textarea
                rows={3}
                className="w-full mt-1 bg-[#1b2b2c] border border-white/20 rounded-md p-2 resize-none text-white"
                value={expectedOutput}
                placeholder='Enter expected output here...'
                onChange={(e) => setExpectedOutput(e.target.value)}
              />
            </div>

            {/* Actual Output */}
            <div>
              <label className="text-white font-heading text-xl font-semibold">Actual Output</label>
              <pre className={`w-full mt-1 bg-[#141d1e] border border-white/20 rounded-md p-2 ${isCorrect ? 'text-green-300' : 'text-red-300'} min-h-[80px] whitespace-pre-wrap`}>
                {output}
              </pre>
              {isCorrect !== null && (
                <div className={`mt-2 font-bold ${isCorrect ? 'text-green-400' : 'text-red-400'}`}>
                  {isCorrect ? '✅ Output Matched!' : '❌ Output Incorrect'}
                </div>
              )}
            </div>
          </div>

          {/* RIGHT: Code Editor */}
          <div className="flex flex-col h-full">
            {/* Toolbar */}
            <div className="flex justify-between items-center p-3 rounded-lg border-b border-white/10">
              <span className="text-white font-semibold font-heading">Code Editor</span>
              <div className="flex gap-2">
                <button
                  onClick={() => setTheme(theme === 'vs-dark' ? 'light' : 'vs-dark')}
                  className="text-xs bg-white text-black px-3 py-1 rounded shadow hover:brightness-110"
                >
                  {theme === 'vs-dark' ? '☀ Light' : '🌙 Dark'}
                </button>
                <select
                  value={language}
                  onChange={(e) => {
                    const lang = e.target.value;
                    setLanguage(lang);
                    setCode(DEFAULT_CODE[lang]);
                    setOutput('');
                    setIsCorrect(null);
                  }}
                  className="bg-[#152c2e] text-white px-2 py-1 rounded text-sm"
                >
                  {LANGUAGE_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Monaco Editor */}
            <div className="flex-grow overflow-hidden border border-white/10">
              <MonacoEditor
                language={language}
                value={code}
                onChange={(v) => setCode(v || '')}
                theme={theme}
                
                height="100%"
                options={{
                  fontSize: 14,
                  minimap: { enabled: false },
                  fontFamily: 'Fira Code, monospace',
                  scrollBeyondLastLine: false,
                  wordWrap: 'on',
                  automaticLayout: true,
                }}
              />
            </div>

            {/* Run Button */}
            <div className="py-3 flex justify-center">
              <button
                onClick={handleRun}
                disabled={running}
                className={`px-8 py-2 text-sm rounded-full bg-white text-black font-semibold shadow-lg hover:shadow-[0_0_1px_#fff,inset_0_0_1px_#fff,0_0_5px_#fff,0_0_15px_#fff] transition-all ${
                  running ? 'opacity-60 cursor-not-allowed' : ''
                }`}
              >
                {running ? '⏳ Running...' : '▶ Run Code'}
              </button>
            </div>
          </div>
        </Split>
      </div>
    </div>
  );
}
