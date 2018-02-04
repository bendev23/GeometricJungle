/** 
 * The Controller class. This class manages keyboard input.
 * 
 * Author(s): Varik Hoang, Peter Bae, Cuong Tran, Logan Stafford
 * TCSS491 - Winter 2018
 */

var KEY_Q = "KeyQ";
var KEY_W = "KeyW";
var KEY_E = "KeyE";
var KEY_R = "KeyR";
var KEY_T = "KeyT";
var KEY_1 = "Digit1";
var KEY_2 = "Digit2";
var KEY_3 = "Digit3";
var KEY_4 = "Digit4";
var KEY_5 = "Digit5";
var KEY_SPACE = 32;
var LEFT = 0;
var RIGHT = 1;

function Controller(game, manager) {
	this.manager = manager;
	this.game = game;
	this.ctx = null;
	this.unitSelected = false;
	this.laneSelected = false;
	
	/**
	 * The mapping key
	 */
    this.keymap = {};

    /**
     * The reference of 
     * the controller class
     */
    var that = this;
	
	this.init = function(ctx) {
		this.ctx = ctx;
		console.log(this.ctx);
	}
    
    /**
     * The method hooks the key
     * pressed with the mapping key
     */
    this.keydown = function(event) {
		if (event.code === KEY_Q ||
			event.code === KEY_W ||
			event.code === KEY_E ||
			event.code === KEY_R ||
			event.code === KEY_T) {
			this.unitSelected = true;
			console.log("unit selected");
		}
		
		if (event.code === KEY_1 ||
			event.code === KEY_2 ||
			event.code === KEY_3 ||
			event.code === KEY_4 ||
			event.code === KEY_5) {
			this.laneSelected = true;
			console.log("lane selected");
		}
		
		if (event.code === KEY_Q) {
			console.log("Q Down");
		} else if (event.code === KEY_W) {
			console.log("W Down");
		} else if (event.code === KEY_E) {
			console.log("E Down");
		} else if (event.code === KEY_R) {
			console.log("R Down");
		} else if (event.code === KEY_T) {
			console.log("T Down");
		}
		
		if (event.code === KEY_1) {
			console.log("1 Down");
		} else if (event.code === KEY_2) {
			console.log("2 Down");
		} else if (event.code === KEY_3) {
			console.log("3 Down");
		} else if (event.code === KEY_4) {
			console.log("4 Down");
		} else if (event.code === KEY_5) {
			console.log("5 Down");
		}
        that.keymap[event.keyCode] = true;
		
        event.preventDefault();
    }
    
    /**
     * The method hooks the key
     * pressed with the mapping key
     */
    this.keyup = function(event) {
        that.keymap[event.keyCode] = false;
        event.preventDefault();
    }
	
    
	this.mouseclick = function(event) {
		var elfArr = [];
		elfArr.push(that.manager.getAsset("./img/elf/1/IDLE.png"));
		elfArr.push(that.manager.getAsset("./img/elf/1/WALK.png"));
		elfArr.push(that.manager.getAsset("./img/elf/1/ATTACK.png"));
		elfArr.push(that.manager.getAsset("./img/elf/1/DIE.png"));
		
		if (event.button === 0 && this.laneSelected) {
			console.log("x: " + event.x + " y: " + event.y);
			if (event.y > 145) {
				if (event.y < 225) {
					game.addEntity(new Elf(game, elfArr, 1, 0));  
				} else if (event.y < 305) {
					game.addEntity(new Elf(game, elfArr, 2, 0));  
				} else if (event.y < 385) {
					game.addEntity(new Elf(game, elfArr, 3, 0));  
				} else if (event.y < 465) {
					game.addEntity(new Elf(game, elfArr, 4, 0));  
				} else if (event.y < 545) {
					game.addEntity(new Elf(game, elfArr, 5, 0));  
				}
			}
			this.laneSelected = false;
		}
		event.preventDefault();
	}
	
    // strictly hook event listener to the methods
	document.addEventListener("keydown", this.keydown, false);
	document.addEventListener("keyup", this.keyup, false);
	
	document.addEventListener("click", this.mouseclick, false);
}