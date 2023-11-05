export default function Chat({ messages }) {
  return (
    <>
      <div className="mt-12 mb-4">
        <div
          className="chat-box p-4 mt-4 overflow-y-auto"
          style={{ height: "600px" }}
        >
          {messages.map((message, index) => (
            <div
              key={index}
              className={`chat-message my-4 ${
                message.source === "user"
                  ? "flex justify-end"
                  : "flex justify-start"
              }`}
            >
              {message.source !== "user" && (
                <span className="relative mr-3">
                  <img
                    className="h-12 w-12 rounded-full object-cover object-center"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </span>
              )}

              <div className="flex items-end">
                <span
                  className={`px-4 py-2 inline-block ${
                    message.source === "user"
                      ? "text-gray-500"
                      : "text-gray-900"
                  }`}
                >
                  {message.text}
                </span>

                {message.source === "user" && (
                  <span className="relative ml-3">
                    <img
                      className="h-6 w-6 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
