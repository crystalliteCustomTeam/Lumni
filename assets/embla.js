const emblaNode = document.querySelector('#embla')
const options = { dragFree: true, loop: true }
const plugins = [EmblaCarouselAutoplay({ delay: 4000, stopOnInteraction: false, stopOnFocusIn: false })]
const emblaApi = EmblaCarousel(emblaNode, options, plugins)
console.log(emblaApi.slideNodes()) // Access API