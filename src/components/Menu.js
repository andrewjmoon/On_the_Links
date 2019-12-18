import React from "react"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import Button from "@material-ui/core/Button"
import { Link } from "gatsby"
import { Container } from "@material-ui/core"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import Drawer from "@material-ui/core/Drawer"

const drawerWidth = 300

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1.2,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  title2: {
    flexGrow: 0,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    backgroundColor: "black",
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "salmon",
    color: "black",
  },
  drawerHeader: {
    display: "flex",

    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
}))

export default function ButtonAppBar({ siteTitle }) {
  const classes = useStyles()
  const theme = useTheme()
  const [open, setOpen] = React.useState(false)

  function toggleDrawer(booleanValue) {
    setOpen(true)
  }

  function handleDrawerClose() {
    setOpen(false)
  }

  return (
    <Container maxWidth="xl">
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              <Link
                to="/"
                style={{
                  color: `white`,
                  textDecoration: `none`,
                }}
              >
                Home
              </Link>
            </Typography>

            <Typography variant="h3" className={classes.root}>
              <Link
                to="/"
                style={{
                  color: `white`,
                  textDecoration: `none`,
                }}
              >
                On_The_Links
              </Link>
            </Typography>

            <Typography variant="h6" className={classes.title2}>
              <Link
                to="/blog/page/1/"
                style={{
                  color: `white`,
                  textDecoration: `none`,
                }}
              >
                Posts
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          style={{ color: `black` }}
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          onClose={handleDrawerClose}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
          <List>
            <ListItem>
              <Link className="Link" to="/">
                Home
              </Link>
            </ListItem>
            <ListItem>
              <Link className="Link" to="/about">
                About
              </Link>
            </ListItem>
            <ListItem>
              <Link className="Link" to="/resource">
                Resources
              </Link>
            </ListItem>
            <ListItem>
              <Link className="Link" to="/blog/page/1/">
                Posts
              </Link>
            </ListItem>
          </List>
        </Drawer>
      </div>
    </Container>
  )
}
