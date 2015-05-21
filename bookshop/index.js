year=["2010","2011","2012","2013","2014","2015","2016"]

 exports.findBookById = function(bookId){
	var result = null;
	for(i in library) {
		if (library[i].bookId==bookId) {
			result=library[i];
			break;
		};
	}
	if (result==null) {
		return 0;
	}
	else{
		return result;
	}
};

exports.findlongestBookInYear = function(year){
	var result=null,found=0;
	for(i in year){
		if(year[i]==year){
			found=i+1;
		}
	}
	for(i in library){
		if(library[i].year==year)
			if(library[i].pages>longestBook){
				longestBook=library[i].pages;
				result=library[i];
			}
	}
	if (result==null && found==0) {
		return 0 ;
	}
	else {
		return result; 
	}
}