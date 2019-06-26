// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= requir jquery-rails
//= require_tree .

//Entrada na Aplicação
// $(document).ready(function(){
// 	//Pega cada letra digitada no input
//     $('#search').keyup(function(){
//     	//Pega cada letra digitada no input
//         $('form').submit(function(){
//             var dados = $(this).serialize();

//             $.ajax({
//                 url: '/produtos',
//                 method: 'get',
//                 dataType: 'html',
//                 data: dados,
//                 success: function(data){
//                     $('#resultado').empty().html(data);
//                 }
//             });
//             return false;
//         });

//         $('form').trigger('submit');
//     });
// });

$(document).ready(function(){
	$('.destroy').on('click', function(){
		if (confirm("Tem certeza?")) {
		    $.ajax({
	            url: '/produtos/' + this.parentElement.Id,
	            type: 'DELETE',
	            success: function(r){}
	        });
		}
	});
});

