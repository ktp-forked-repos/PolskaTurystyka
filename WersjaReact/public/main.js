$(document).ready(function()
{
	let tiles = [
		new Tile({title:"title 1"}),
		new Tile({title:"title 2"}),
		new Tile({title:"title 3"})
	];
	let list = $('ul[type="tilelist"]')[0];
	let len = tiles.length;
	for (let i=0; i<len; ++i)
	{
		$('ul[type="tilelist"]')[0].addTile(tiles[i]);
	}
});