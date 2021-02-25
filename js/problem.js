$(document).ready(function () {
	var inputs = $('.input');
	var paras = $('.description-flex-container').find('p');

	inputs.click(function(){
		var t = $(this),
		ind = t.index(),
		matchedPara = paras.eq(ind);
		
		t.add(matchedPara).addClass('active');
		inputs.not(t).add(paras.not(matchedPara)).removeClass('active');
	});

	var inputs1 = $('.input1');
	var paras1 = $('.description-flex-container-1').find('p');
	inputs1.click(function(){
		var t = $(this),
		ind = t.index(),
		matchedPara = paras1.eq(ind);
		
		t.add(matchedPara).addClass('active');
		inputs1.not(t).add(paras1.not(matchedPara)).removeClass('active');
	});
});