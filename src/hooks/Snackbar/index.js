import Toastify from 'toastify-js'

const useSnackbar = ({ delay, margin, positions }) => {

    const [gravity, position] = positions.split('-');

    const showSnackbar = (message, type = 'success') => Toastify({
        text: message,
        duration: delay,
        gravity,
        position,
        stopOnFocus: true,
        style: {
          fontFamily: 'Majorant-Regular',
          margin,
          background: type === 'success' ? "#0d6759" : "#F21161",
        },
        onClick: function(){}
    }).showToast();

  return showSnackbar;
};

export default useSnackbar;