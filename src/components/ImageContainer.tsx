
type ImageContainerProps = {
    imgFile?: File[],
}

export const ImageContainer = ({imgFile}: ImageContainerProps) => {

    const ExampleImageContainer = () => {
        return (
            <div>
                <img
                    src="/assets/img/example.jpg"
                    alt="Description of my image"
                    width={300}
                    height={450}
                />
            </div>
        );
    }

    return (
        <div>
            {imgFile === undefined ?
                <ExampleImageContainer/>
                : (imgFile.map((file, index) => (
                        <img
                            key={index}
                            src={URL.createObjectURL(file)}
                            alt={`Uploaded Image ${index + 1}`}
                            style={{width: '200px', height: 'auto', marginBottom: '10px'}}
                        />
                    ))
                )
            }
        </div>
    );
}