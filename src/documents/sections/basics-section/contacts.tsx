import { InfoItem } from "./info-item";
import {
  GitHubIcon,
  GlobeIcon,
  LinkedInIcon,
  LocationIcon,
  MailIcon,
  PhoneIcon,
} from "../../icons";
import { VStack } from "../../stack";
import { Basics, Profile } from "../../../types";
import { Style } from "@react-pdf/types";
import { Theme } from "../../theme";

export type Props = {
  basics: Basics;
  style: Style;
  theme: Theme;
};

function getProfiles(basics: Basics) {
  let linkedinProfile: Profile | null = null;
  let githubProfile: Profile | null = null;

  if (basics.profiles) {
    for (const profile of basics.profiles) {
      if (profile.network === "github") githubProfile = profile;
      else if (profile.network === "linkedin") linkedinProfile = profile;
    }
  }

  return { linkedinProfile, githubProfile };
}

export function Contacts({ basics, style, theme }: Props) {
  const { linkedinProfile, githubProfile } = getProfiles(basics);

  return (
    <VStack style={style} gap={2}>
      {basics.phone && (
        <InfoItem theme={theme} icon={<PhoneIcon />} value={basics.phone} />
      )}
      {basics.email && (
        <InfoItem theme={theme} icon={<MailIcon />} value={basics.email} />
      )}
      {basics.url && (
        <InfoItem theme={theme} icon={<GlobeIcon />} value={basics.url} />
      )}
      {basics.location && basics.location.address && (
        <InfoItem
          theme={theme}
          icon={<LocationIcon />}
          value={basics.location.address}
        />
      )}
      {githubProfile && githubProfile.url && (
        <InfoItem
          theme={theme}
          icon={<GitHubIcon />}
          value={githubProfile.url}
          href={githubProfile.url}
        />
      )}
      {linkedinProfile && linkedinProfile.url && (
        <InfoItem
          theme={theme}
          icon={<LinkedInIcon />}
          value={linkedinProfile.url}
          href={linkedinProfile.url}
        />
      )}
    </VStack>
  );
}
