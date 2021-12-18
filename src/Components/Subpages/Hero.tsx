import React from "react";
import { createStyles, ITheme, makeStyles } from "@chainsafe/common-theme";
import { Typography } from "@chainsafe/common-components";
import clsx from "clsx";

const useStyles = makeStyles(
  ({ constants, palette, breakpoints, typography }: ITheme) => {
    return createStyles({
      container: {
        minHeight: "30vh",
        [breakpoints.up(1300)]: {
          height: "calc(100% - 180px)",
          paddingTop: "90px",
          paddingBottom: "90px",
          paddingLeft: "80px",
        },
        [breakpoints.up(1980)]: {
          height: "calc(100% - 360px)",
          paddingTop: "180px",
          paddingBottom: "180px",
          minHeight: "30vh",
        },
        [breakpoints.up(2560)]: {
          height: "calc(100% - 300px)",
          paddingTop: "150px",
          paddingBottom: "150px",
          minHeight: "25vh",
          justifyContent: "center",
        },
        [breakpoints.down(1300)]: {
          height: "calc(100% - 180px)",
          paddingTop: "90px",
          paddingBottom: "90px",
        },
        [breakpoints.down(1079)]: {
          height: "calc(100% - 60px)",
          paddingTop: "30px",
          paddingBottom: "30px",
        },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
      contentContainer: {
        [breakpoints.up('md')]:{
          display: "flex",
          justifyContent: "center",
        }
      },
      heroContentContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "2rem",
        alignItems: "flex-start",
        [breakpoints.down('sm')]: {
          padding: "10rem 2rem"
        },
        [breakpoints.up(2560)]: {
          alignItems: "center",
        }
      },
      semibold: {
        fontWeight: 800,
      },
      bold: {
        fontWeight: "bolder",
      },
      reduceLeading: {
        letterSpacing: "-1.25px",
      },
      white: {
        color: palette.common.white.main,
      },
      singleColText: {
        textAlign: "left",
        maxWidth: 600,
        [breakpoints.up(2560)]: {
          textAlign: "center",
        }
      },
      orange: {
        color: palette.primary.main,
      },
      titleText: {
        textAlign: "center",
        maxWidth: "800px",
        color: palette.common.black.main,
        fontSize: "32px",
        lineHeight: "40px",
        [breakpoints.down("md")]: {
          fontSize: "32px",
          lineHeight: "40px",
        },
        [breakpoints.up(2560)]: {
          textAlign: "center",
        }
      },
      buttonGroup: {
        display: "flex",
      },
      noUnderline: {
        textDecoration: "none",
      },
      button: {
        background: "transparent",
        border: `1px solid ${palette.primary.main}`,
        borderRadius: "12px",
        fontSize: "18px",
        lineHeight: "26px",
        padding: constants.generalUnit,
        transition: "all ease-in-out 0.2s",
        "&:hover, &:active, &:focus": {
          border: `1px solid ${palette.common.white.main}`,
          background: "transparent",
        }
      },
    })
  })

const Hero: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
        <div className={classes.heroContentContainer}>
          <Typography variant="h6" className={clsx(classes.bold, classes.reduceLeading, classes.titleText)}>
            A tactical vocabulary for building products and mechanisms.
          </Typography>
        </div>
    </div>
  )
}

export default Hero;