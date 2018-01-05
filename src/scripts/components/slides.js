import Component from './component'

const NEXT_OFFSET = 100

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
		const windowHeight = this.$window.height()
		this.windowHeight = windowHeight

		const lastIndex = this.$slides.length - 1

		this.$slides.each(function(index) {
			const $slide = $(this)
			const $slideIn = $slide.children('.slide-in')

			const bordersCount = (index === 0 ? 1 : 0) + (index === lastIndex ? 1 : 0)
			$slide.css({
				height: $slideIn.innerHeight() - (index === lastIndex ? 0 : windowHeight) + (2 - bordersCount) * NEXT_OFFSET,
			})
		})
		console.log('')
	}

	onResize() {
		this.updateSizes()
	}

	onScroll() {
		const { windowHeight } = this

		const lastIndex = this.$slides.length - 1

		this.$slides.each(function(index) {
			const $slide = $(this)
			const rect = this.getBoundingClientRect()

			const top = rect.top
			const bottom = rect.bottom
			//$slide.find('h1').text(top + ' ' + bottom)

			$slide.toggleClass('is-active', top <= 0 && bottom >= (index === lastIndex ? 0 : 1))
			$slide.toggleClass('is-scrolling', top <= (index === 0 ? 0 : -NEXT_OFFSET) && bottom >= (index === lastIndex ? 0 : NEXT_OFFSET))
			$slide.toggleClass('is-aboveViewport', top < (index === 0 ? 0 : -NEXT_OFFSET))
		})
	}
}
