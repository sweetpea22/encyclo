import React from "react";
import { Term } from "../../terms";
import { Typography } from "@chainsafe/common-components";
import { ITheme, makeStyles, createStyles } from "@chainsafe/common-theme";
import clsx from "clsx";

const useStyles = makeStyles(({constants, palette, breakpoints}: ITheme) => {
  return createStyles({
    bold: {
      fontWeight: "bolder",
    },
    singleColText: {
      textAlign: "left",
    },
    bodyText: {
      fontSize: "16px",
      lineHeight: "22px",
    },
    fact: {
      color: palette.additional["gray"][7],
      transition: "all 0.19s ease-in",
      "&:hover": {
        color: palette.common.black.main,
      },
      cursor: "default",
      display: "flex",
      flexDirection: "column",
      maxWidth: "290px",
      margin: "1rem",
      marginRight: constants.generalUnit * 2,
      [breakpoints.down('md')]: {
        margin: "1rem 0 1rem 0",
        justifyContent: "space-evenly",
      }
    },
  })
})

const TermCard: React.FC<Term> = ({ name, def}) => {
  const classes = useStyles();
  return ( 
    <div className={classes.fact}>
      <Typography variant="h4" className={clsx(classes.bold, classes.singleColText)}>
        {name}
      </Typography>
      <Typography variant="body1" className={clsx(classes.bodyText, classes.singleColText)}>
        {def}
      </Typography>
  </div>
  )
}

export default TermCard;