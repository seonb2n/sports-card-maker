import {useEffect} from "react";

type ImageContainerProps = {
    imgFile?: File[],
    backNumber: number,
    name: string,
    team: string,
    attack: number,
    defense: number,
    physical: number,
    position: string;
}

export const ImageContainer = ({
                                   imgFile,
                                   backNumber,
                                   name,
                                   team,
                                   attack,
                                   defense,
                                   physical,
                                   position
                               }: ImageContainerProps) => {

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        // 마우스 이벤트 처리 로직
        event.currentTarget.style.transform = `perspective(550px) rotateY(${((-1 / 7) * event.clientX) + 75}deg) rotateX(${(-1 / 11) * event.clientY + 30}deg`;
        const overlay = document.getElementsByClassName("overlay")[0] as HTMLElement;
        overlay.style.filter = 'opacity(0.4)';
        overlay.style.backgroundPosition = (event.clientX / 5 + event.clientY / 5) * 15 + 'px';
    };

    const handleMouseLeave = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.currentTarget.style.transform = `perspective(350px) rotateY(0deg) rotateX(0deg)`;
        const overlay = document.getElementsByClassName("overlay")[0] as HTMLElement;
        overlay.style.filter = 'opacity(0.2)';
    }

    const ExampleImageContainer = () => {
        return (
            <div className={"card"}>
                <img
                    src="/assets/img/example.jpg"
                    alt="Description of my image"
                    width={300}
                    height={450}
                />
            </div>
        );
    }

    const GeneratedImageContainer = () => {
        return (
            <div className={"card"}>
                <div>
                    {imgFile && imgFile.map((file, index) => (
                        <img
                            key={index}
                            src={URL.createObjectURL(file)}
                            alt={`Uploaded Image ${index + 1}`}
                            style={{width: '300px', height: '450px', marginBottom: '10px'}}
                        />
                    ))
                    }
                </div>
                <div style={{position: 'absolute', right: 0, }}>
                    {team}
                </div>
            </div>
        )
    }

    return (
        <div>
            <div className="image-container" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}
                 style={{transition: 'all 0.1s'}}>
                <div className="overlay">

                </div>
                {imgFile === undefined ?
                    <ExampleImageContainer/>
                    :
                    <GeneratedImageContainer/>
                }
            </div>
        </div>
    );
}