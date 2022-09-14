import React from "react";
import Link from "next/link";

export default function Button(props) {
  return (
    <Link href={props.href}>
      <a className="button">{props.children}</a>
    </Link>
  );
}
