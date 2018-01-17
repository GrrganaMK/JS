function Ball(nx, ny, nxdir, nydir, nradius, ncol) {
		this.x = nx;
		this.y = ny;
		this.xdir = nxdir;
		this.ydir = nydir;
		this.radius = nradius;
	//	this.colour = '#'+Math.floor(Math.random()*16777215);
		this.colour = ncol;
	}

	Ball.prototype.draw = function(context) {
		context.beginPath();
		context.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
		context.fillStyle = this.colour;
		context.fill();
	}

	Ball.prototype.move = function() {
		this.x = this.x + this.xdir;
		this.y = this.y + this.ydir;	
	}

	Ball.prototype.bounce = function(canvas) {
		if (this.x > canvas.width) {
			this.xdir = this.xdir * -1;
		}

		if (this.x < 0) {
			this.xdir = this.xdir * -1;
		}

		if(this.y > canvas.height) {
			this.ydir = this.ydir * -1;
		}

		if (this.y < 0) {
			this.ydir = this.ydir * -1;
		}

	}