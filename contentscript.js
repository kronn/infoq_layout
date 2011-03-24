/* functions */
function changeClass(name, css) {
  setStyle(document.getElementsByClassName(name)[0], css)
}
function changeId(name, css) {
  setStyle(document.getElementById(name), css)
}
function setStyle(elm, css) {
  var newStyle = css || 'display:none;'
  elm.setAttribute('style', newStyle);
}


/* layout changes */
changeId('sidebar')
changeId('rightbar')
changeId('columns_container', 'padding-right:0px;')
changeId('header')

changeClass('vendor-content-box')
changeClass('info')
changeClass('tags2')
changeClass('addthis_toolbox addthis_default_style')


// /* alter the video/slides display */
// window.setHorizontalView();
// Tracker.doTrackPresentationDisplayChange('horizontal');
