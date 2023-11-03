import Toastify from 'toastify-js'

const useSnackbar = ({ delay, margin, positions }) => {

    const [gravity, position] = positions.split('-');

    const showSnackbar = (message) => Toastify({
        text: message,
        duration: delay,
        gravity,
        position,
        stopOnFocus: true,
        style: {
          fontFamily: 'Majorant-Regular',
          margin,
          background: "#0d6759",
        },
        onClick: function(){}
    }).showToast();

  return showSnackbar;
};

export default useSnackbar;