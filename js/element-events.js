$(function () {
  $(".ui-controlgroup-controls div").hover(function() {
    $(this).children('label').addClass('ui-btn-hover-c')
  }, function() {
    $(this).children('label').removeClass('ui-btn-hover-c')
  });

  $(".ui-controlgroup-controls .ui-checkbox.vertical").click(function(event) {
    event.preventDefault();
    var input = $(this).find('input');
    if(input.is(':checked')){
      $(this).children('label').removeClass('ui-checkbox-on')
      $(this).find('.ui-btn-inner .ui-icon').addClass('ui-icon-checkbox-off')
      $(this).find('.ui-btn-inner .ui-icon').removeClass('ui-icon-checkbox-on')
      input.prop('checked', false);
    }
    else
    {
      $(this).children('label').addClass('ui-checkbox-on')
      $(this).find('.ui-btn-inner .ui-icon').addClass('ui-icon-checkbox-on')
      $(this).find('.ui-btn-inner .ui-icon').removeClass('ui-icon-checkbox-off')
      input.prop('checked', true);
    }
  });

  $(".ui-controlgroup-controls .ui-checkbox.horizontal").click(function(event) {
    event.preventDefault();
    var input = $(this).find('input');
    if(input.is(':checked')){
      $(this).children('label').removeClass('ui-checkbox-on ui-btn-active')
      $(this).children('label').addClass('ui-checkbox-off')
      $(this).find('.ui-btn-inner .ui-icon').addClass('ui-checkbox-off')
      $(this).find('.ui-btn-inner .ui-icon').removeClass('ui-icon-checkbox-on')
      input.prop('checked', false);
    }
    else
      {
        $(this).children('label').addClass('ui-checkbox-on ui-btn-active ui-btn-up-c')
        $(this).find('.ui-btn-inner .ui-icon').addClass('ui-icon-checkbox-on')
        $(this).find('.ui-btn-inner .ui-icon').removeClass('ui-icon-checkbox-off')
        input.prop('checked', true);
      }
  });

  $(".ui-controlgroup-controls .ui-radio.vertical").click(function(event) {
    event.preventDefault();
    var input = $(this).find('input');
    //reset all the radios in that group
    var groupName = input.attr('name');
    $('input[name="' + groupName +'"]').prop('checked', false);
    $(this).parent().find('label').removeClass('ui-checkbox-on')
    $(this).parent().find('.ui-btn-inner .ui-icon').removeClass('ui-icon-radio-on')
    $(this).parent().find('.ui-btn-inner .ui-icon').addClass('ui-icon-radio-off')
    input.prop('checked', false);
    //end of reseting elements

    $(this).children('label').addClass('ui-checkbox-on')
    $(this).find('.ui-btn-inner .ui-icon').addClass('ui-icon-radio-on')
    $(this).find('.ui-btn-inner .ui-icon').removeClass('ui-icon-radio-off')
    input.prop('checked', true);

  });

  $(".ui-controlgroup-controls .ui-radio.horizontal").click(function(event) {
    event.preventDefault();
    var input = $(this).find('input');
    //reset all the radios in that group
    var groupName = input.attr('name');
    $('input[name="' + groupName +'"]').prop('checked', false);
    $(this).parent().find('label').removeClass('ui-btn-active')
    $(this).parent().find('label').addClass('ui-checkbox-off')
    $(this).parent().find('.ui-btn-inner .ui-icon').removeClass('ui-icon-radio-on')
    $(this).parent().find('.ui-btn-inner .ui-icon').addClass('ui-icon-radio-off')
    input.prop('checked', false);
    //end of reseting elements

    $(this).children('label').addClass('ui-btn-active ui-btn-up-c')
    $(this).find('.ui-btn-inner .ui-icon').addClass('ui-icon-radio-off')
    $(this).find('.ui-btn-inner .ui-icon').removeClass('ui-icon-radio-on')
    input.prop('checked', true);
  });

  $('.ui-select select').on('change', function(){
    var selectedText = $(this).find("option:selected").text();
    $(this).parent().find(".ui-btn-inner .ui-btn-text").text(selectedText);
  })

});

