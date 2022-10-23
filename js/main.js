//tab
$('.tab-pane').on('click',function(){
    var currTab = $(this).index();
  
    $('.tab-pane ').removeClass('active-tab');
    $(this).addClass('active-tab');
  
    $('.tab-text').removeClass(' active-tab');
    $('.tab-text').eq(currTab).addClass(' active-tab');
})