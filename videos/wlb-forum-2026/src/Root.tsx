import { Composition } from "remotion";
import { compositions, WlbVideo } from "./Composition";

export const RemotionRoot: React.FC = () => (
  <>
    <Composition {...compositions("persona")} component={() => <WlbVideo axisId="persona" />} />
    <Composition {...compositions("liderazgo")} component={() => <WlbVideo axisId="liderazgo" />} />
    <Composition {...compositions("impacto")} component={() => <WlbVideo axisId="impacto" />} />
    <Composition {...compositions("futuro")} component={() => <WlbVideo axisId="futuro" />} />
  </>
);
