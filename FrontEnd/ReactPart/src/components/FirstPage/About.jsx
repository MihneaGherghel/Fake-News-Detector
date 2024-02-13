export default function About(){
    return (
        <div class="relative h-screen mb-10">
            <div class="absolute top-24 left-20 w-7/12 h-5/6 py-32 pl-12 pr-64 bg-myRed rounded-sm">
                <h2 class="text-4xl font-bold mb-5">About us</h2>
                <p class="text-lg">
                    Introducing our groundbreaking website, 
                    fortified by AI technology to combat the 
                    scourge of fake news. Leveraging advanced 
                    algorithms, our platform swiftly identifies 
                    misinformation, ensuring users navigate 
                    a sea of information with confidence. 
                    A user-friendly interface provides instant 
                    credibility scores for news articles, 
                    empowering individuals to distinguish fact 
                    from fiction. Real-time analysis keeps you 
                    abreast of evolving narratives, while 
                    community-driven verification fosters a 
                    collective defense against deception. 
                    Our commitment to privacy ensures a secure 
                    experience. Join us in the fight against misinformation, 
                    where technology and vigilance converge to safeguard the truth 
                    in an era fraught with digital deceit.
                </p>
            </div>
            <div class="absolute bg-[url('./aboutImage.jpg')] bg-cover w-5/12 h-2/3 right-[120px] top-40 rounde-sm"></div>
        </div>
    )
}