import { Location } from "../../../types";
import { GlobeIcon } from "../../icons";
import { Theme } from "../../theme";
import { InfoItem } from "./info-item";

type Props = {
  location: Location;
  theme: Theme;
};

export function LocationInfoItem({ location, theme }: Props) {
  const parts = [];
  const { city, countryCode } = location;

  if (city) parts.push(city);
  if (countryCode) parts.push(countryCode);

  const value = parts.join(", ");

  return <InfoItem theme={theme} icon={<GlobeIcon />} value={value} />;
}
