import Component from './component'

export default class Slides extends Component {
	constructor(el, data) {
		super(el, data)

		this.onResize = this.onResize.bind(this)
		this.onScroll = this.onScroll.bind(this)

		this.$slides = this.$el.find('.slide')

		this.$window = $(window)

		this.$window.on('resize', this.onResize)
		this.$window.on('scroll', this.onScroll)
		this.updateSizes()
		this.onScroll()
	}

	updateSizes() {
		this.windowHeight = this.$window.height()

		this.$slides.each(function() {
			const $slide = $(this)
			const $slideIn = $slide.children('.slide-in')

			$slide.css({
				minHeight: $slideIn.innerHeight(),
			})
		})
	}

	onResize() {
		this.updateSizes()
	}

	onScroll() {
		const { windowHeight } = this

		this.$slides.each(function() {
			const $slide = $(this)
			const rect = this.getBoundingClientRect()

			$slide.toggleClass('is-active', rect.top <= windowHeight / 2 && rect.bottom > windowHeight / 2)
			$slide.toggleClass('is-scrolling', rect.top <= 0 && rect.bottom > windowHeight)
			$slide.toggleClass('is-aboveViewport', rect.top < 0)
		})
	}
}
