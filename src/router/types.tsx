import { Location, History } from "../history";
import { LocationDescriptor } from "../history";
export interface ContextValue {
  location?: Location;
  history?: any;
}

export interface RouteComponentProps {
  history?: History;
}

export interface LinkProps {
  to: LocationDescriptor;
}
