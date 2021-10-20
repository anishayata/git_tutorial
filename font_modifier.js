function font_select()
{
   var selector = document.getElementById('font');
   var family = selector.options[selector.selectedIndex].value;
   var color = document.getElementById('clr');
   var colorfam = color.options[color.selectedIndex].value;
   var size = document.getElementById('size');
   var fsize = size.options[size.selectedIndex].value;
   var txt = document.myform.ip.value;
   document.getElementById('res').value = txt;
   var n = document.getElementById('res')
   n.style.fontFamily = family
   n.style.color = colorfam;
   n.style.fontSize = fsize;
   document.body.style.backgroundColor="purple";

}