import Image from "next/image";
import React from "react";

const Empty = () => {
  return (
    <div className="flex flex-col items-center justify-center w-[100%] py-[6rem]">
      <div>
        <Image
          src="/empty.svg"
          alt="empty"
          width={100}
          height={100}
          className="w-[20rem]"
        />
      </div>
    </div>
  );
};

export default Empty;
