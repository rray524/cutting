//magnificPopup Light box
$(document).ready(function() {
  //Form float label
  $('.form-control').on('focus blur', function (e) {
    $(this).parents('.form-group').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
  }).trigger('blur');



});
