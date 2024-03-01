import {useEffect} from "react";
import {Typography} from "@mui/material";

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

    const getColorForAverage = (average: number) => {
        if (average >= 0 && average < 20) {
            return "#FF0000";
        } else if (average >= 20 && average < 40) {
            return "#FFA500";
        } else if (average >= 40 && average < 60) {
            return "#FFFF00";
        } else if (average >= 60 && average < 80) {
            return "#008000";
        } else {
            return "#0000FF";
        }
    }

    const GeneratedImageContainer = () => {
        const avg = Math.floor((attack + defense + physical) / 3);

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
                <div style={{
                    position: 'absolute',
                    bottom: '80px',
                    display: 'flex',
                    justifyContent: 'center',
                    width: '100%',
                    height: '20px',
                }}>
                    <div style={{
                        width: '90%',
                        backgroundColor: 'white',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderTop: '3px solid black'
                    }}>
                        {team}
                    </div>
                </div>
                <div style={{
                    position: 'absolute',
                    bottom: '30px',
                    color: 'white',
                    width: '100%',
                    height: '50px',
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    <div style={{
                        width: '90%',
                        backgroundColor: 'black',
                        display: 'flex',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <div style={{fontWeight: '900', fontSize: '32px'}}>
                            #{backNumber}
                        </div>
                        <div style={{marginLeft: '15px', fontWeight: '700'}}>
                            {name}
                        </div>
                    </div>
                </div>
                <div style={{
                    position: 'absolute',
                    left: 0,
                    top: '0',
                    backgroundColor: 'black',
                    width: '40px',
                    height: '40px'
                }}>
                    <div style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <div style={{backgroundColor: 'white', padding: '5px', fontWeight: 600}}>
                            {position.toUpperCase()}
                        </div>
                    </div>
                </div>
                <div style={{
                    position: 'absolute',
                    right: 0,
                    top: '0',
                    backgroundColor: getColorForAverage(avg),
                    width: '70px',
                    height: '70px',
                    border: '1px solid black'
                }}>
                    <div style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <div style={{backgroundColor: 'white', padding: '3px', fontWeight: 600, fontSize: '28px'}}>
                            <div>
                                <Typography variant='caption'
                                            sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                    Overall
                                </Typography>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                {avg}
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{
                    position: 'absolute',
                    right: 0,
                    top: '70px',
                    width: '60px',
                    backgroundColor: "black",
                    padding: '3px'
                }}>
                    <div style={{ backgroundColor: '#ce2d4f', color: 'white'}}>
                        <Typography variant='caption'
                                    sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            Attack
                        </Typography>
                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: '500'}}>
                            {attack}
                        </div>
                    </div>
                    <div style={{ backgroundColor: '#6244ff', marginTop: '3px', color: 'white'}}>
                        <Typography variant='caption'
                                    sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>                            Defense
                        </Typography>
                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: '500'}}>
                            {defense}
                        </div>
                    </div>
                    <div style={{ backgroundColor: '#23b5d3', marginTop: '3px', color: 'white'}}>
                        <Typography variant='caption'
                                    sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>                            Physical
                        </Typography>
                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: '500'}}>
                            {physical}
                        </div>
                    </div>
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