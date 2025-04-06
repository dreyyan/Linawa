import React from 'react'
import styles from './PolicyCard.module.css'

const PolicyCard = ({policy, onSummarize, summary, loading}) =>{
    return(
        <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse-${policy.key}`}
          aria-expanded="false"
          aria-controls={`collapse-${policy.key}`}
        >
          {policy.title}
        </button>
      </h2>
      <div
        id={`collapse-${policy.key}`}
        className="accordion-collapse collapse"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          {/* Split long text into multiple paragraphs */}
          {policy.text.split('\n\n').map((para, index) => (
            <p key={index} className="policy-text">{para}</p>
          ))}

          {policy.showSummarize && (
            <>
              {loading ? (
                <button className="btn btn-primary mt-2" disabled>Summarizing...</button>
              ) : (
                <button className="btn btn-primary mt-2" onClick={() => onSummarize(policy.key, policy.text)}>
                  Summarize
                </button>
              )}
              {summary && (
                <p className="summary-text"><span className='summary-title'>Summary:</span> {summary}</p>
              )}
            </>
          )}
        </div>
      </div>
    </div>
    );
};

export default PolicyCard;