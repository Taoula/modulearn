// export default function Message({ message }) {
//   return (
//     <div
//       className={` flex w-full ${
//         message.role == "system" ? "justify-start" : "justify-end"
//       }`}
//     >
//       <div className="w-[48%] p-2 shadow-md rounded-lg">
//         <p
//           className={` p-3 ${
//             message.role == "system" ? "text-left" : "text-right"
//           }`}
//         >
//           {message.content}
//         </p>
//       </div>
//     </div>
//   );
// }

import React from "react";

const Message = ({ message }) => {
  const isSystem = message.role === "system";

  const containerClass = isSystem ? "justify-start" : "justify-end";
  const textClass = isSystem ? "text-left" : "text-right";

  return (
    <div className={`flex w-full ${containerClass} `}>
      <div className="w-auto max-w-[48%] px-4 py-1 border shadow-md rounded-md mt-8">
        <p className={`p-3 ${textClass}`}>{message.content}</p>
      </div>
    </div>
  );
};

export default Message;
