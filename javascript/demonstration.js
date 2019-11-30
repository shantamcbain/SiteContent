/*

demonstration.js

Demonstration of touch-friendly drop-down menus

Created by Kate Morley - http://code.iamkate.com/ - and released under the terms
of the CC0 1.0 Universal legal code:

http://creativecommons.org/publicdomain/zero/1.0/legalcode

*/

// create the demonstration
runOnLoad(function(){

  // create the sub-menus
  createSubmenus('dropdownCentred');
  createSubmenus('dropdownVertical');
  createSubmenus('dropdownRightToLeft');

  // initialise the drop-down menus
  Dropdown.initialise();

});

/* Creates sub-menus within the specified node. The parameter is:
 *
 * id - the node ID
 */
function createSubmenus(id){

  // loop over the children of the node
  var node = document.getElementById(id);
  for (var i = 0; i < node.childNodes.length; i ++){

    // check whether this child is a list item
    if (node.childNodes[i].nodeName == 'LI'){

      // generate the submenus
      recursivelyCreateSubmenus(
          node.childNodes[i],
          node.childNodes[i].getElementsByTagName(
              'span')[0].firstChild.nodeValue + ' ',
          3);

    }

  }

}

/* Recursively creates sub-menus. The parameters are:
 *
 * node   - the parent node
 * prefix - the label prefix
 * depth  - the remaining depth
 */
function recursivelyCreateSubmenus(node, prefix, depth){

  // return immediately if we have reached the maximum depth
  if (depth == 0) return;

  // create the sub-menu
  var menu = document.createElement('ul');

  // loop over the sub-menu items
  for (var i = 1; i <= 3; i ++){

    // create the sub-menu item
    var item = document.createElement('li');
    var span = document.createElement('span');
    span.appendChild(document.createTextNode(prefix + i));
    item.appendChild(span);
    menu.appendChild(item);

    // recursivelt create the item's sub-menu
    recursivelyCreateSubmenus(item, prefix + i + '.', depth - 1);

  }

  // add the sub-menu to the page
  node.appendChild(menu);

}
