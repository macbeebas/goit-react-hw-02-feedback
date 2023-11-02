import css from './section.module.css';
// import PropTypes from 'prop-types';

export default function Section({ sections }) {
  return (
    <div className={css.section}>
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
