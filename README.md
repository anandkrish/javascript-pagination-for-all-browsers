# javascript-pagination-for-all-browsers
A Javascript library that renders page numbers for a given set of inputs. Compatible with IE 5 and above.

The main advantage of the library is that the we need not fetch the entire set of data on load. There are several jQuery plugins available which renders the pagination on front end but requires the complete data to be fetched in a single hit and more importantly it is very difficult to find a library for this purpose which works in IE 5 and above. This may also cause performance issues in data intensive applications. I faced these constraints and hence ended up with this.

This library is written in pure javascript. On click of every page number link in the front end, we can pass the page number to the server via a post call, fetch the required set of data and render it again. Number of rows to displayed has to be specifed in business logic.

---------------------------How to use -----------------------

#### Mehtod to be called 

showPagination(totalNumberOfPages, spanID, label);

######Parameters

totalNumberOfPages :  Total number of Pages (Should be calculated for complete data).    
spanID             :  The CSS style ID of the span where the page numbers are to be rendered.  
label              :  Label to be shown before the page numbers like "Showing Pages".(Should be empty string if no label is required).  

If you using jQuery call this method in the ready function. 

```html
<script>
$(document).ready(function(){	

showPagination(30,'pagination','Showing :');
});
</script>

In case jQuery is not used. Please call the above function on body onload.



