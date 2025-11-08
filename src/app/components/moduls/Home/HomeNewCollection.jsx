import HomeSlider from "./HomeSlider";

async function getData() {
    const res = await fetch('https://69065d93ee3d0d14c135a19b.mockapi.io/products')
    const data = await res.json()
    return data
}

export default async function HomeNewCollection() {
    const productsData = await getData()
    
    return (
        <section className="w-full h-screen p-10 ">
            <h2 className="text-left text-3xl text-[#9292a8] underline underline-offset-[15px] mt-4 mb-16">FEATURED FRAMES</h2>
            <HomeSlider data={productsData} />
        </section>
    )
}