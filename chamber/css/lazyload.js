const image = document.querySelector('img')

const io = new IntersectionObserver (


    (entries,io) => {
        console.log(entries);
        console.log(io);
    }


io.observe(image)