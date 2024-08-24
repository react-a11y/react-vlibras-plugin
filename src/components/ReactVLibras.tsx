import { HTMLAttributes, useEffect } from "react";

type CustomProps = HTMLAttributes<HTMLDivElement> & {
    vw?: boolean;
};

type Props = CustomProps & {
  position?: string;
};

function ReactVLibras(props: Props) {
  useEffect(() => {
  }, []);

  return (
    <div vw className="enabled" {...props}>
        <div vw-access-button className="active"></div>
        <div vw-plugin-wrapper>
            <div className="vw-plugin-top-wrapper"></div>
        </div>
    </div>
  );
}

export default ReactVLibras;