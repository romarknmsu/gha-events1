import { string } from 'prop-types';

import './HelpBox.css';

function HelpBox({ title, text }) {
  return (
    <article className="help-box-change">
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

// comment I want to skip

HelpBox.propTypes = {
  title: string,
  text: string,
};

export default HelpBox;
