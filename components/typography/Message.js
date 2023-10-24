import React from "react";

const Error = ({ message }) => {
  return (
    <div className="absolute w-screen">
      <div className="flex min-h-screen flex-col items-center justify-around">
        <div className="bg-gray-200 shadow-md text-red-500 w-fit h-fit p-4 rounded-full">
          {message}
        </div>
      </div>
    </div>
  );
};
const Success = ({ message }) => {
  return (
    <div className="absolute w-screen">
    <div className="flex min-h-screen flex-col items-center justify-around">
      <div className="bg-gray-200 shadow-md text-green-500 w-fit h-fit p-4 rounded-full">
        {message}
      </div>
    </div>
  </div>
  );
};

const Message = ({ messageType, messageContent }) => {
  return messageType === "error" ? (
    <Error message={messageContent} />
  ) : (
    <Success message={messageContent} />
  );
};

export default Message;
