import css from './feedback.module.css';
// import PropTypes from 'prop-types';

export default function Feedback({ feedbacks }) {
  return (
    <div className={css.feedback}>
      <p>{'Treść jakaś sobie tutaj'}</p>
    </div>
  );
}

// propTypes
// Feedback.propTypes = {
//   feedbacks: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       type: PropTypes.string.isRequired,
//       amount: PropTypes.string.isRequired,
//       currency: PropTypes.string.isRequired,
//     })
//   ),
// };
