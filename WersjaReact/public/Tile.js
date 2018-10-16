
function fromHtml(html)
{
    var template = document.createElement('template');
    html = html.trim();
    template.innerHTML = html;
    return template.content.firstChild;
}

class Tile
{
	constructor(data)
	{
		this.title = '';
		this.img = 'noimage.jpg';
		this.text = '';
		
		if (data instanceof Object)
		{
			if (data.title instanceof String || typeof data.title === 'string')
			{
				this.title = data.title;
			}
			if (data.img instanceof String || typeof data.img === 'string')
			{
				this.img = data.img;
			}
			if (data.text instanceof String || typeof data.text === 'string')
			{
				this.text = data.text;
			}
		}
	}
}

class TileElement extends CustomizerApi.classes.customElementDef
{
	static init()
	{
		this.innerHTML = '<div class="label"></div><div class="img"><span></span><img></img></div><div class="content"></div>';
		if (this.tile instanceof Tile)
		{
			this.set(this.tile);
		}
	}
	
	set(tile)
	{
		if (tile instanceof Tile)
		{
			this.getElementsByClassName('label')[0].innerHTML = tile.title;
			this.getElementsByTagName('img')[0].src = tile.img;
			this.getElementsByClassName('content')[0].innerHTML = tile.text;
		}
	}
	
	static deinit()
	{
		this.innerHTML = '';
	}
}

class TileList extends CustomizerApi.classes.customElementDef
{
	addTile(tile)
	{
		let t = fromHtml('<li type="tile"></li>');
		t.tile = tile;
		this.appendChild(t);
	}
	
	static init()
	{
		//
	}
	static deinit()
	{
		this.innerHTML = '';
	}
}

CustomizerApi.classes.TileElement = TileElement;
CustomizerApi.instance.registerClass({tagName:'li',tagSubtype:'tile'},TileElement);
CustomizerApi.classes.TileList = TileList;
CustomizerApi.instance.registerClass({tagName:'ul',tagSubtype:'tilelist'},TileList);