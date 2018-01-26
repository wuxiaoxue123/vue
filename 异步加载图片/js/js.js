class loadImg {
	constructor (opt) {
		this.opt = opt.data
		this.touchEvent()
	}
	load (flag) {
		this.opt.map((item, index, arr) => {
			if (flag > index) return
			this.asyncLoad(item).then( img => {
				document.body.appendChild(img)
			})
		})
	}
	asyncLoad (url) {
		return new Promise((res, rej) => {
			let img = new Image()
			img.onload = function () {
				res(img)
			}
			img.src = 'img/' + url
		})
	}
	touchEvent () {
		let start, move, end, flag = 0
		document.addEventListener('touchstart', e=> {
				start = {
					x: e.touches[0].clientX,
					y: e.touches[0].clientY
				}
		})
		document.addEventListener('touchmove', e=> {
				move = {
					x: e.touches[0].clientX,
					y: e.touches[0].clientY
				}
		})
		document.addEventListener('touchend', e=> {
				end = {
					x: move.x-start.x,
					y: move.y-start.y
				}
				let top = document.body.clientHeight
				let step = Math.abs(end.x-start.x)
				console.log(step)
				if (step > top/2) {
					flag +=2
					this.load(flag)
				} else if(step < top/2) {
					flag++
					console.log(flag)
					this.load(flag)
				}
		})
	}
}
let arr = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img_2.jpg', 'img_3.jpg']
new loadImg({
	data: arr
})