import Swal from "sweetalert2";

export const AppName = "Hydot Mall System";

export const Show = {
  Success: function(value) {
    Swal.fire({
      icon: 'success',
      title: 'Success',
      text: value
    });
  },
  Attention: function(value) {
    Swal.fire({
      icon: 'info',
      title: 'Attention',
      text: value
    });
  },
  showLoading: function(value) {
    Swal.fire({
      title: 'Please wait..',
      backdrop: true,
      allowOutsideClick: false,
      text: value,
      showConfirmButton: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });
  },
  hideLoading: function() {
    Swal.close();
  },
  proceedOrCancel: function(value, callback) {
    Swal.fire({
      icon: 'question',
      title: 'Proceed?',
      text: value,
      showCancelButton: true,
      confirmButtonText: 'Proceed',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        callback(true); // Proceed
      } else {
        callback(false); // Cancel
      }
    });
  }
};
