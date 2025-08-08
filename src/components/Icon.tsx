import * as iconset from "@assets/icons";
import { SVGProps } from "react";

export type iconKey = keyof typeof iconset;
interface Props extends SVGProps<SVGSVGElement> {
  name: iconKey;
}
const Icon = ({ name, ...props }: Props) => {
  const IconComponent = iconset[name];
  return (
    <div>
      <IconComponent {...props} />
    </div>
  );
};

export default Icon;
