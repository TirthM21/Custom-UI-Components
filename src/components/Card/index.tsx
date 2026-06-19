import React, { cloneElement, FC, Fragment, PropsWithChildren, useMemo, useState } from "react";
import {
  Card as MUICard,
  CardActions as MUICardActions,
  CardContent as MUICardContent,
  CardHeader as MUICardHeader,
  CardMedia as MUICardMedia,
  Collapse as MUICollapse,
  Skeleton as MUISkeleton,
  useTheme,
} from "@mui/material";
import Avatar from "../Avatar";
import IconButton from "../IconButton";
import Typography from "../Typography";
import { ICard } from "../../types/Card";
import { Icons } from "../../types/Icon";

interface CardProps extends PropsWithChildren<ICard> {
  image?: string;
  avatar?: React.ReactNode;
}

const Card: FC<CardProps> = ({
  actions = [],
  children,
  collapsible,
  icon,
  loading = false,
  style,
  subtitle,
  title,
  image,
  avatar,
  unmountCollapsible = false,
}) => {
  const [expanded, setExpanded] = useState(false);
  const theme = useTheme();

  const cardHeader = useMemo(
    () => (
      <MUICardHeader
        avatar={avatar || (icon && <Avatar icon={icon} loading={loading} />)}
        disableTypography
        title={
          <Typography
            bottomSpacing={false}
            display="block"
            loading={loading}
            truncated
            variant="title">
            {title}
          </Typography>
        }
        subheader={
          <Typography bottomSpacing={false} loading={loading} truncated variant="caption">
            {subtitle}
          </Typography>
        }
      />
    ),
    [avatar, icon, loading, subtitle, title]
  );

  return (
    <MUICard
      style={{ margin: theme.spacing(2), width: `calc(100% - ${theme.spacing(4)})`, ...style }}>
      {image && <MUICardMedia component="img" height="140" image={image} />}
      {cardHeader}
      <MUICardContent style={{ padding: `${theme.spacing(1)} ${theme.spacing(2)}` }}>
        {loading ? <MUISkeleton height={theme.spacing(16)} /> : children}
      </MUICardContent>
      {!loading && (
        <Fragment>
          <MUICardActions
            disableSpacing
            style={{
              alignItems: "center",
              display: "flex",
              justifyContent: "space-between",
              padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
            }}>
            {actions.length > 0 && (
              <div style={{ alignItems: "center", display: "flex" }}>
                {actions.map((action, index) => (
                  <div key={`card-action-${index}`} style={{ marginRight: theme.spacing(2) }}>
                    {cloneElement(action)}
                  </div>
                ))}
              </div>
            )}
            {collapsible && (
              <IconButton
                icon={expanded ? Icons.up : Icons.down}
                onClick={() => setExpanded(!expanded)}
              />
            )}
          </MUICardActions>
          {collapsible && (
            <MUICollapse in={expanded} timeout="auto" unmountOnExit={unmountCollapsible}>
              <MUICardContent style={{ padding: `${theme.spacing(1)} ${theme.spacing(2)}` }}>
                {collapsible}
              </MUICardContent>
            </MUICollapse>
          )}
        </Fragment>
      )}
    </MUICard>
  );
};

export default Card;
