import React, { ReactElement } from "react";
import { Button, ButtonProps } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import cn from "classnames";
// styles
import { buttonStyles } from "./styles";

const useStyles = makeStyles(buttonStyles);

interface IButtonComponentProps extends ButtonProps {
  padded?: boolean,
}

function ButtonComponent({ value, disabled, padded, ...rest }: IButtonComponentProps): ReactElement {
  const classes = useStyles();

  return (
    <Button
      variant="contained"
      disabled={disabled}
      classes={{
        root: cn(classes.buttonRoot, {
          [classes.buttonPadded]: padded
        })
      }}
      {...rest}
    >
      {value}
    </Button>
  );
}
export default ButtonComponent;
