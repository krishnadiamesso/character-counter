import {useState} from 'react'
import './App.css'

const CHARACTER_LIMIT = 200

function App() {
    const [text, setText] = useState<string>("");
    const characterCount = text.length

    const remainingCharacters = CHARACTER_LIMIT - characterCount
    const isOverLimit = remainingCharacters < 0
    const clearIsDisabled = characterCount === 0

    function handleClear() {
        setText("")
    }

    return (
        <main className="min-h-screen bg-slate-100 px-4 py-12 sm:py-20">
            <div className="mx-auto max-w-lg rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <label
                    htmlFor="message"
                    className="block text-xl font-semibold text-slate-900"
                >
                    Your message
                </label>

                <p id="message-hint" className="mt-1 text-sm text-slate-500">
                    Write a message using up to {CHARACTER_LIMIT} characters.
                </p>

                <textarea
                    id="message"
                    placeholder="Start typing..."
                    value={text}
                    onChange={event => setText(event.target.value)}
                    aria-invalid={isOverLimit}
                    aria-describedby={
                        isOverLimit
                            ? "message-hint message-error"
                            : "message-hint"
                    }
                    className={`mt-5 block min-h-48 w-full resize-y rounded-xl border px-4 py-3 text-base leading-relaxed text-slate-800 placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 ${
                        isOverLimit
                            ? "border-red-400 bg-red-50 focus-visible:border-red-500 focus-visible:ring-red-200"
                            : "border-slate-300 bg-white focus-visible:border-blue-500 focus-visible:ring-blue-200"
                    }`}
                />

                <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-sm">
                    <p className="text-slate-500">
                        Characters:{" "}
                        <span className="font-semibold tabular-nums text-slate-800">
                        {characterCount}
                    </span>
                    </p>

                    <p
                        className={`rounded-full px-3 py-1 font-medium ${
                            isOverLimit
                                ? "bg-red-100 text-red-700"
                                : "bg-slate-100 text-slate-600"
                        }`}
                    >
                        Remaining:{" "}
                        <span className="font-semibold tabular-nums">
                        {remainingCharacters}
                    </span>
                    </p>
                </div>

                {isOverLimit && (
                    <p
                        id="message-error"
                        role="alert"
                        className="mt-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700"
                    >
                        Your message exceeds the character limit.
                    </p>
                )}

                <button
                    className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    type="button" onClick={handleClear} disabled={clearIsDisabled}>Clear
                </button>
            </div>
        </main>
    )
}

export default App
