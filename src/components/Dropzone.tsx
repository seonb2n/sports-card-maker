import React, {useCallback} from 'react';

interface DropzoneProps {
    onDrop: (files: File[]) => void;
}

const Dropzone: React.FC<DropzoneProps> = ({onDrop}) => {
    const handleDrop = useCallback(
        (e: React.DragEvent<HTMLDivElement>) => {
            e.preventDefault();
            const files = [...e.dataTransfer.files];
            onDrop(files);
        },
        [onDrop]
    );

    const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    }, []);

    const handleClick = () => {
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = '*/*';
        fileInput.multiple = true;
        fileInput.style.display = 'none';

        fileInput.addEventListener('change', (e: Event) => {
            const target = e.target as HTMLInputElement;
            if (target.files) {
                const files = Array.from(target.files);
                onDrop(files);
            }
            fileInput.remove();
        });
        document.body.appendChild(fileInput);
        fileInput.click();
    };

    return (
        <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onClick={handleClick}
            style={{
                width: '100%',
                height: '100px',
                border: '2px dashed #aaa',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgb(213,213,213)',
                cursor: 'pointer',
            }}
        >
            Drop files here
        </div>
    );
};

export default Dropzone;
