import React from "react";
import Classes from "./ProjectTitle.module.css";

interface ProjectTitleProps {
  title: string;
}

export const ProjectTitle: React.FC<ProjectTitleProps> = props => {
  return (
    <h1 className={Classes.Title} contentEditable>
      {props.title}
    </h1>
  );
};
