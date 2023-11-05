export default function Chat({ messages }) {
  return (
    <>
      <div className="mt-12 mb-4">
        {/* <div className="border rounded-md w-full h-96 mb-4"></div>
        <div className="flex gap-4">
          <textarea
            type="text"
            className="resize-none pl-2 w-11/12 block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 disabled:cursor-not-allowed bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200 sm:text-sm sm:leading-6"
            placeholder="Have a question? Ask here..."
          ></textarea>
          <button className="rounded-md bg-green-600 text-white w-1/12 hover:bg-green-700">
            Send
          </button>
        </div> */}
        <div
          className="chat-box p-4 mt-4 overflow-y-auto"
          style={{ height: "600px" }}
        >
          {messages.map((message, index) => (
            <div
              key={index}
              className={`chat-message my-2 ${
                message.source === "user" ? "text-right" : "text-left"
              }`}
            >
              <span
                className={`inline-block ${
                  message.source === "user" ? "text-gray-500" : "text-gray-900"
                } `}
              >
                {message.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
