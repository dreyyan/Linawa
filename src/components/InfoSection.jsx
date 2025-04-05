import React from 'react';


const InfoSection = ({ selectedOption }) => {
  const content = {
    "File a Petition": {
      title: "Let Your Voice Be Heard!",
      description:
        "Use this section to create or support a petition. Let your concerns reach the candidates — every signature counts in building a better future.",
    },
    "Submit Report": {
      title: "Report Election Misconduct",
      description:
        "In the heat of the elections, misconduct and unethical behavior can happen. Use this section to report issues and view real-time reports in your area.",
    },
  };

  const { title, description } = content[selectedOption] || content.default;

  return (
    <div className="info-section">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default InfoSection;
