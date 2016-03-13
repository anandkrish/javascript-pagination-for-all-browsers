var totalPages;
var paginationSpanID;
var labelText;
function showPagination(pages, paginationID,pageLabel){
paginationSpanID=paginationID;
labelText=pageLabel;
var htmlContent=labelText;
totalPages= parseInt(pages);
	if(totalPages >=1){
		if(totalPages<=3){
			for(var count=1;count<=totalPages;count++){
					htmlContent=htmlContent+' '+'<a id="page_'+count+'" class="pageLink" href="#">'+count+'</a>';
			
			}
			$('#'+paginationSpanID).html(htmlContent);

		}
		else{
				for(var count=1;count<=3;count++){
					htmlContent=htmlContent+' '+'<a id="page_'+count+'" class="pageLink" href="#">'+count+'</a>';
	
			}
					htmlContent=htmlContent+' '+'<a id="next" class="pageLink" href="#" onclick="fetchNextPages(this)">...</a>';
					htmlContent=htmlContent+' '+'<a id="page_'+totalPages+'" class="pageLink" href="#">'+totalPages+'</a>'
					
					//$('#'+paginationSpanID).html(htmlContent);
					document.getElementById(paginationSpanID).innerHTML=htmlContent;
		}	
}
}

function fetchNextPages(object){
	
	htmlContent=labelText;
	var startIndex = $('#'+object.id).prev().attr('id');
	//alert(startIndex);
	startIndex = startIndex.substr(startIndex.indexOf('_')+1);
	startIndex=parseInt(startIndex);
	startIndex=startIndex+1;
	//alert(startIndex);
	var endIndex=startIndex+2;
		if(endIndex > totalPages){
			endIndex=totalPages;
		}
	htmlContent=htmlContent+' '+'<a id="prev" class="pageLink" href="#" onclick="fetchPreviousPages(this)">...</a>';
		for(var count=startIndex;count<=endIndex;x=count++){
			htmlContent=htmlContent+' '+'<a id="page_'+count+'" class="pageLink" href="#">'+count+'</a>';
		}
		if(endIndex != totalPages){
				if(endIndex == (totalPages-1)){
				htmlContent=htmlContent+' '+'<a id="page_'+totalPages+'" class="pageLink" href="#">'+totalPages+'</a>'
				}
				else{
				htmlContent=htmlContent+' '+'<a id="next" class="pageLink" href="#" onclick="fetchNextPages(this)">...</a>';
				htmlContent=htmlContent+' '+'<a id="page_'+totalPages+'" class="pageLink" href="#">'+totalPages+'</a>'
				}
		}
		
		
		//$('#'+paginationSpanID).html(htmlContent);
		document.getElementById(paginationSpanID).innerHTML=htmlContent;
}


function fetchPreviousPages(object){

	htmlContent=labelText;
	var startIndex = $('#'+object.id).next().attr('id');
	//alert(startIndex);
	startIndex = startIndex.substr(startIndex.indexOf('_')+1);
	startIndex=parseInt(startIndex);
	
	var endIndex=startIndex-1;
	 startIndex=endIndex-2;
	 
	 if(startIndex >1){
	htmlContent=htmlContent+' '+'<a id="prev" class="pageLink" href="#" onclick="fetchPreviousPages(this)">...</a>';
	}
		if(endIndex > totalPages){
			endIndex=totalPages;
		}
	
	for(var count=startIndex; count<=endIndex; count++){
			htmlContent=htmlContent+' '+'<a id="page_'+count+'" class="pageLink" href="#">'+count+'</a>';
	}
	
	if(endIndex != totalPages){
				if(endIndex == (totalPages-1)){
				htmlContent=htmlContent+' '+'<a id="page_'+totalPages+'" class="pageLink" href="#">'+totalPages+'</a>'
				}
				else{
				htmlContent=htmlContent+' '+'<a id="next" class="pageLink" href="#" onclick="fetchNextPages(this)">...</a>';
				htmlContent=htmlContent+' '+'<a id="page_'+totalPages+'" class="pageLink" href="#">'+totalPages+'</a>'
				}
		}
		
		
	//$('#'+paginationSpanID).html(htmlContent);
	document.getElementById(paginationSpanID).innerHTML=htmlContent;
	
	


}