import React from "react";
import { ITheme, makeStyles, createStyles } from "@chainsafe/common-theme";
import { getSortedTerms } from "../../terms";
import TermCard from "../Modules/Term";

const useStyles = makeStyles(
  ({ constants, palette, breakpoints, typography }: ITheme) => {
    return createStyles({
      container: {
        overflowX: "hidden",
        minHeight: "30vh",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        [breakpoints.down(767)]: {
          alignItems: "flex-start",
        },
      },
      gridContainer: {
        padding: "40px 80px",
        width: "calc(100% - 16px)",
        display: "block",
        maxWidth: "1200px",
      },
      bold: {
        fontWeight: 800,
      },
      reduceLeading: {
        letterSpacing: "-1px",
      },
      white: {
        color: palette.common.white.main,
      },
      titleText: {
        textAlign: "center",
        marginBottom: constants.generalUnit * 4,
        [breakpoints.down("md")]: {
          fontSize: "48px",
          lineHeight: "55px",
          maxWidth: "90%",
          textAlign: "left",
          marginBottom: constants.generalUnit * 2,
        }
      },
      marginTop: {
        marginTop: "1.25rem",
        [breakpoints.down(767)]: {
          marginTop: "1rem",
        },
      },
      contentContainer: {
        width: "100%",
        paddingLeft: constants.generalUnit,
        paddingRight: constants.generalUnit,
        display: "flex",
        flexDirection: "column",
        [breakpoints.down(599)]: {
          marginBottom: "20px",
        }
      },
      factsContainer: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        [breakpoints.down(1279)]: {
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
        },
        [breakpoints.down(650)]: {
          display: "flex",
          flexDirection: "column",
        }
      },
      noUnderline: {
        textDecoration: "none",
      },
    })
  })

const GridSection: React.FC = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const classes = useStyles();
  return (
    <section className={classes.container}>
      <div className={classes.gridContainer}>
        <article className={classes.contentContainer}>
          <div className={classes.factsContainer}>
            {getSortedTerms().map((term, i) => (
              <TermCard key={term.name + i} {...term}/>
            ))}
          </div>
        </article>
      </div >
    </section >
  )
}

export default GridSection;