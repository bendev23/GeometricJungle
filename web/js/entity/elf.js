function Elf(game, spritesheet) 
{
	// the sprite coordinate must be modified
	this.animation = new Animation(spritesheet, 118, 128, 4, 0.25, 4, true, 1);
	this.x = 100;
	this.y = 100;
	this.speed = 0;
	this.ctx = game.ctx;
	Entity.call(this, game, 100, 100);
}

Elf.prototype = new Entity();
Elf.prototype.constructor = Elf;

Elf.prototype.update = function() 
{
	this.x += this.game.clockTick * this.speed;
	Entity.prototype.update.call(this);
}

Elf.prototype.draw = function() 
{
	this.animation.drawFrame(this.game.clockTick, this.ctx, this.x, this.y);
    Entity.prototype.draw.call(this);
}