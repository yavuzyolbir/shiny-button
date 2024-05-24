import { AnchorHTMLAttributes, ButtonHTMLAttributes, FC } from "react";

import Styles from "./Button.module.scss";

type ButtonHtmlProps = {
  href?: undefined;
} & ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonLinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "type" | "href"
>;

export type ButtonProps = {
  href?: string | undefined;
  size?: "large" | "medium" | "small" | "xsmall";
  block?: boolean;
  disabled?: boolean;
  loading?: boolean;
} & (ButtonLinkProps | ButtonHtmlProps);

const Button: FC<ButtonProps> = () => {
  return <button className={Styles.button}>Button</button>;
};

export default Button;
