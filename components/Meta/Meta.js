import React from "react";

function sentence(text) {
  const result = text.replace(/([A-Z])/g, " $1");
  const finalResult = result.charAt(0).toUpperCase() + result.slice(1);

  return finalResult;
}

const Meta = ({ breed }) => {
  const maxLevel = 5;

  return (
    <div className="flex flex-col">
      {Object.keys(breed).map((key) => {
        const ability = breed[key];
        return (
          <div className="flex flex-row mt-6" key={key}>
            <div className="text-base font-bold w-36">{sentence(key)}:</div>{" "}
            &nbsp;
            <div className="w-7/12 pr-4 pl-4">
              <div className="flex flex-row justify-around p-1">
                {Array(5)
                  .fill()
                  .map((_, item) => {
                    return (
                      <div
                        className={[
                          "rounded-lg p-2",
                          item < ability ? "bg-[#544439]" : "bg-[#E0E0E0]",
                        ].join(" ")}
                      >
                        <div className="w-12"></div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Meta;
