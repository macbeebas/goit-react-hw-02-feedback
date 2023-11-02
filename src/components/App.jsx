import Feedback from './feedback/feedback'; // feedback.js
import FeedbackOptions from './feedback_options/feedback_options'; // feedback_options.js
import Notification from './notification/notification'; // notification.js
import Section from './section/section'; // section.js
import Statistics from './statistics/statistics'; // statistics.js

export const App = () => {
  return (
    <div className="container">
      <ul className="components-list">
        <li>
          <h1 className="components-feedback">goit-react-hw-02-feedback</h1>
        </li>
        <li className="componenets-item">
          <h2 className="components-subheader">Component "Feedback"</h2>
          <div className="components-item-box">
            <Feedback />
          </div>
        </li>
      </ul>
    </div>
  );
};
