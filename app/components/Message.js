export default function Message({ message }) {
  return (
    <div
      className={` flex w-full ${
        message.role == "system" ? "justify-start" : "justify-end"
      }`}
    >
      <div className="w-[48%] p-2 shadow-md rounded-lg">
        <p
          className={` p-3 ${
            message.role == "system" ? "text-left" : "text-right"
          }`}
        >
          {message.content}
        </p>
      </div>
    </div>
  );
}
