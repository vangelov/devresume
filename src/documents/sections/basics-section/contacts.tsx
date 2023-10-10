import { InfoItem } from "./info-item";
import {
  GitHubIcon,
  LinkedInIcon,
  LocationIcon,
  MailIcon,
  PhoneIcon,
} from "../../icons";
import { VStack } from "../../stack";
import { Basics, Profile } from "../../../types";
import { Style } from "@react-pdf/types";

export type Props = {
  basics: Basics;
  style: Style;
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

export function Contacts({ basics, style }: Props) {
  const { linkedinProfile, githubProfile } = getProfiles(basics);

  return (
    <VStack style={style} gap={2}>
      {basics.phone && <InfoItem icon={<PhoneIcon />} value={basics.phone} />}
      {basics.email && <InfoItem icon={<MailIcon />} value={basics.email} />}
      {basics.location && basics.location.address && (
        <InfoItem icon={<LocationIcon />} value={basics.location.address} />
      )}
      {githubProfile && githubProfile.url && (
        <InfoItem
          icon={<GitHubIcon />}
          value={githubProfile.url}
          href={githubProfile.url}
        />
      )}
      {linkedinProfile && linkedinProfile.url && (
        <InfoItem
          icon={<LinkedInIcon />}
          value={linkedinProfile.url}
          href={linkedinProfile.url}
        />
      )}
    </VStack>
  );
}
