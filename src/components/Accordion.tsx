import React from "react";

type AccordionTitlePropsType = {
  title: string;
};
type AccordionPropsType = {
  titleValue: string;
  collapsed: boolean;
};
function AccordionTitle(props: AccordionTitlePropsType) {
  return <h2>---{props.title}---</h2>;
}
function AccordionBody() {
  return (
    <ul>
      <li>1 post</li>
      <li>2 post</li>
      <li>3 post</li>
    </ul>
  );
}
export default function Accordion(props: AccordionPropsType) {
  return (
    <div>
      <AccordionTitle title={props.titleValue} />
      {!props.collapsed && <AccordionBody />}
    </div>
  );
}

