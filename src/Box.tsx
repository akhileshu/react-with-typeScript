import { ReactNode } from "react";

// define proptype
type PropType = {
  heading: string;
  count?: number; //optional - may not send from parent component
  children: ReactNode; //for element as prop
};
// in below example if count is optional then default count is 5
function Box({ heading, count = 5, children }: PropType) {
  return (
    <>
      <div>
        {/* using destructured  prop properties */}
        <h3>
          {heading} and {count}
        </h3>
        {children}
      </div>
    </>
  );
}

export default Box;
