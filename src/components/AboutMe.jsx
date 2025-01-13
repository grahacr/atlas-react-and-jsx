// About Me component
import mypic from "../assets/aboutme.jpg";

export default function AboutMe() {
    return (
        <div className="about-me">
            <img src={mypic}></img>
            <p>Hello! I am Courtney Graham, currently in my 5th trimester at Atlas School, studying for a Full Stack Web Development and Computer Science diploma. So far, I have enjoyed working with Python and Javascript, but I find myself getting excited about all of the adjacent tools and libraries that we get to use alongside these languages. 
                After school, I hope to continue working in the Education sector in some capacity, but this time with an emphasis on the tech side of operations.
                Some of my hobbies include gardening, crocheting, activism, and spending time with my cats and loved ones.
            </p>
        </div>
    )
}