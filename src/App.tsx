import {useState} from 'react'
import './App.css'

const CHARACTER_LIMIT = 200

function App() {
    const [text, setText] = useState<string>("");
    const characterCount = text.length

    const remainingCharacters = CHARACTER_LIMIT - characterCount

    return (
        <main className="min-h-screen bg-slate-100 px-4 py-12">
            <div className="mx-auto max-w-lg rounded-xl bg-white p-6 shadow-sm">
                <label
                    htmlFor="message"
                    className="mb-2 block text-lg font-semibold text-slate-800"
                >
                    Your message
                </label>

                <textarea
                    className="block min-h-40 w-full resize-y rounded-lg border border-slate-300 px-4 py-3 text-slate-800 placeholder:text-slate-400 focus-visible:border-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                    id="message"
                    placeholder="Start typing..."
                    value={text}
                    onChange={event => setText(event.target.value)}
                />

                <p className="mt-3 text-right text-sm text-slate-500">
                    Characters:{" "}
                    <span className="font-semibold text-slate-800">
                    {characterCount}
                </span>
                </p>
                <p className="mt-3 text-right text-sm text-slate-500">
                    Remaining:{" "}
                    <span className="font-semibold text-slate-800">
                    {remainingCharacters}
                </span>
                </p>
            </div>
        </main>
    )
}

export default App
