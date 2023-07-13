import { IconButton, Link, ResponsiveValue, Tooltip } from "@chakra-ui/react";

const SocialLinkIcon = ({
  ariaLabel,
  link,
  icon,
  size,
  tooltip,
  props,
}: {
  ariaLabel: string;
  link: string;
  icon: any;
  size: ResponsiveValue<(string & {}) | "sm" | "md" | "lg" | "xs"> | undefined;
  tooltip?: string;
  props?: any;
}) => {
  return (
    <Tooltip label={tooltip} hasArrow>
      <Link href={link} isExternal>
        <IconButton
          aria-label={ariaLabel}
          icon={icon}
          variant="outline"
          colorScheme="blue"
          size={size}
          isRound={true}
          m={2}
          {...props}
        />
      </Link>
    </Tooltip>
  );
};

export default SocialLinkIcon;
