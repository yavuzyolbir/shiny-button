import { AnchorHTMLAttributes, ButtonHTMLAttributes, FC } from "react";

import cn from "classnames";

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
  theme?: "primary" | "warning" | "danger" | "success";
  size?: "large" | "medium" | "small" | "xsmall";
  variant?: "solid" | "gradient" | "outline";
  block?: boolean;
  disabled?: boolean;
  loading?: boolean;
} & (ButtonLinkProps | ButtonHtmlProps);

const Button: FC<ButtonProps> = ({
  href,
  theme = "primary",
  size = "medium",
  variant = "solid",
  block = false,
  className,
  disabled = false,
  loading = false,
  ...props
}) => {
  const classNames = cn(
    Styles.button,
    Styles[theme],
    Styles[variant],
    Styles[size],
    { [Styles.disabled]: disabled },
    { [Styles.loading]: loading },
    {
      [Styles.block]: block,
    },
    className
  );

  const children = (
    <>
      <div className={cn(Styles.loader, { [Styles.loadingShow]: loading })}>
        {loading && (
          <div className={Styles.loaderIcon}>
            <span className={Styles.spinner}></span>
          </div>
        )}
      </div>
      <div className={Styles.inner}>{props.children}</div>
    </>
  );

  if (href !== undefined)
    return (
      <a
        href={href}
        className={classNames}
        tabIndex={disabled ? -1 : 0}
        {...(props as ButtonLinkProps)}
      >
        {children}
      </a>
    );

  return (
    <button
      className={classNames}
      tabIndex={disabled ? -1 : 0}
      {...(props as ButtonHtmlProps)}
    >
      {children}
    </button>
  );
};

export default Button;
