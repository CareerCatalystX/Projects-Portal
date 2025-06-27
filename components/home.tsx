import GetStartedButton from "./animata/button/get-started-button";
import { GradientHeading } from "./ui/gradient-heading";
import { TextGif } from "./ui/text-gif";


export default function Hero() {
    const gifUrl = "/gif.gif"
    //One Platform. Infinite Opportunities.
    const words = [
        ["O", "n", "e"],
        ["P", "l", "a", "t", "f", "o", "r", "m"],
        ["-"],
        ["I", "n", "f", "i", "n", "i", "t", "e"],
        ["O", "p", "p", "o", "r", "t", "u", "n", "i", "t", "i", "e", "s"]
    ];

    return (
        <div className="h-[500px] text-center flex flex-col items-center gap-6 justify-center z-10">
            <div className="flex flex-col justify-center items-center">
                <div className="flex flex-wrap items-center justify-center gap-2 px-4">
                    {words.map((word, wordIndex) => (
                        <div key={wordIndex} className="flex items-center">
                            {word.map((character, charIndex) => (
                                <TextGif
                                    key={`${wordIndex}-${charIndex}`}
                                    gifUrl={gifUrl}
                                    text={character}
                                    size="xxl"
                                />
                            ))}
                        </div>
                    ))}
                </div>
                <p className="text-blue-900 pt-6">Projects. Resumes. Internships. From first exposure to final placement, CareerCatalystX powers your journey.</p>
            </div>
            <GetStartedButton text="Ignite Your Journey" />
        </div>
    )
}