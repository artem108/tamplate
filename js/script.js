$(function () {

  var html = $('#info').html();
  var data = {
    title:'Artem Arshaniy',
    about:'Kiev, Ukrainian',
 };

  var content = tmpl(html, data);

  $('body').append(content);
});
