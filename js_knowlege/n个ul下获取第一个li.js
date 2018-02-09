$(document).ready(function(){
  $('.descendants>li').children('ul').find('li:nth-child(1)').addClass("tangle");
});

/*
<style>
.tangle{
  color:red;border:2px solid red;
}
</style>
<div class="wrap">div (当前元素)
<ul class="descendants" style="width:500px;border:1px solid orange;"> 
  <li>li (one)
    <div>span (孙)</div>  
    <ul>
       <li>01</li>
       <li>02</li>
       <li>03</li>
       <li>04</li>
    </ul>   
  </li>
  <li>li (two)
   <div>span (孙)</div>  
    <ul>
       <li>01</li>
       <li>02</li>
       <li>03</li>
       <li>04</li>
    </ul>  
  </li> 
  <li>li (three)
    <div>span (孙)</div>  
    <ul>
       <li>01</li>
       <li>02</li>
       <li>03</li>
       <li>04</li>
    </ul>  
  </li> 
</ul>
</div>
*/
