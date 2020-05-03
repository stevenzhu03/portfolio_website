import React from "react";

const SkillIcon = (props) => {
    return (
        <div className="skill-label">
            <img
            src={require(`../assets/${props.image}`)}
            height="50px"
            width="50px"
            alt="props.label"
            />
            <span>{props.label}</span>
        </div>
    )
};

export default SkillIcon
